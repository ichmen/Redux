import { getWeather } from '../gateway';

export const GET_WEATHER_DATA = 'WEATHER/GET_WEATHER_DATA';
export function weatherDataLoaded(weatherData) {
  return {
    type: GET_WEATHER_DATA,
    payload: { weatherData },
  };
}

export function getWeatherData() {
  return function (dispatch) {
    getWeather().then(data => dispatch(weatherDataLoaded(data)));
  };
}
