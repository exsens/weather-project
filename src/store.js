import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import * as api from './api/config'
import { citiesReducer } from './features/cities/cities-slice';

const rootReducer = combineReducers({
  cities: citiesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ]
    },
    thunk: {
      extraArgument: {
        client: axios,
        api,
      }
    }
  }),
});

export const persistor = persistStore(store);