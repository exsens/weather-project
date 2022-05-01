import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCityByLocation, loadCityByName, selectCities } from '../../features/cities/cities-slice';

import Container from '../container/container';
import AppendPanel from '../append-panel/append-panel';
import CitiesList from '../../features/cities/cities-list';

const App = () => {
  const dispatch = useDispatch();
  const geo = navigator.geolocation;
  const citiesTotal = useSelector(selectCities.selectTotal);

  useEffect(() => {
    geo.getCurrentPosition(
      position => {
        dispatch(loadCityByLocation(position.coords));
      },
      error => (citiesTotal === 0 ||error.PERMISSION_DENIED) ? dispatch(loadCityByName('Moscow')) : console.error(error)
    )
  }, [ ])

  return (
    <>
      <Container>
        <AppendPanel />
        <CitiesList />
      </Container>
    </>
  )
}

export default App