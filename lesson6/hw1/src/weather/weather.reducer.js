import { GET_WEATHER_DATA } from './weather.actions';

const defaultState = { weather: null };

export default function weatherReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return { ...state, weather: action.payload.weatherData };

    default:
      return state;
  }
}
