import React from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';

function Weather({ weather, getWeatherData }) {
  console.log(getWeatherData);
  if (!weather) {
    getWeatherData();
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weather.map(({ name, temperature, id }) => {
          return (
            <li key={id} className="city">
              <span className="city__name">{name}</span>
              <span className="city__temperature">{`${temperature} F`}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
const mapState = state => {
  return { weather: state.weather };
};

const mapProps = {
  getWeatherData: weatherActions.getWeatherData,
};
export default connect(mapState, mapProps)(Weather);
