import React from 'react';

import Card from '../card/card';

import './city-item.scss';

const CityItem = ({
  name,
  temp,
  feelsTemp,
  humidity,
  description,
  speed,
  pressure,
  onDeleted,
}) => {
  return (
    <Card>
      <div className="city-item">
        <h2>{name}</h2>
        <span>{`Температура ${temp}°C`}</span>
        <span>{`По ощущению ${feelsTemp}°C`}</span>
        <span>{`${description}`}</span>
        <span>{`Скорость ветра ${speed} м.с`}</span>
        <span>{`Давление ${pressure}мм рт. ст.`}</span>
        <span>{`Влажность ${humidity}%`}</span>
        <button type='button' onClick={() => onDeleted()}>Удалить</button>
      </div>
    </Card>
  )
};

export default CityItem