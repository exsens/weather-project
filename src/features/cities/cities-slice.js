import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

export const loadCityByName = createAsyncThunk(
  '@@cities/load-city-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCity(name));
  }
);

export const loadCityByLocation = createAsyncThunk(
  '@@cities/load-city-by-location',
  (location, { extra: { client, api } }) => {
    return client.get(api.searchByLocation(location))
  }
);

const citiesAdapter = createEntityAdapter({
  selectId: (city) => city.id,
});

const citiesSlice = createSlice({
  name: '@@cities',
  initialState: citiesAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  reducers: {
    removeCity: (state, action) => {
      citiesAdapter.removeOne(state, action.payload)
    },
    clearAll: (state) => {
      citiesAdapter.removeAll(state)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCityByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCityByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCityByName.fulfilled, (state, action) => {
        state.status = 'received';
        state.error = null;
        citiesAdapter.addOne(state, action.payload.data);
      })
      .addCase(loadCityByLocation.fulfilled, (state, action) => {
        state.status = 'received';
        state.error = null;
        citiesAdapter.setOne(state, action.payload.data);
      })
  }

});

export const citiesReducer = citiesSlice.reducer;
export const { removeCity, clearAll} = citiesSlice.actions;
export const selectCities = citiesAdapter.getSelectors(state => state.cities);
