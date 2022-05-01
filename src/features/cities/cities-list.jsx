import React from 'react';
import { useCities } from './use-cities';

import { List } from '../../components/list/list';
import CityItem from '../../components/city-item/city-item';

const CitiesList = () => {
  const [citiesList, status, onDeleted] = useCities();

  if (status === "rejected") {
    return (
      <span>Город не найден</span>
    )
  }

  return (
    <List>
      {citiesList.map(city => {
        const { id, name, main, weather, wind } = city;
        return (
          <CityItem
            key={id}
            name={name}
            temp={Math.round(main.temp)}
            feelsTemp={Math.round(main.feels_like)}
            pressure={main.pressure}
            humidity={main.humidity}
            description={weather[0].description}
            speed={wind.speed}
            status={status}
            onDeleted={() => onDeleted(id)}
          />
        )
      })}
    </List>
  )
}

export default CitiesList;