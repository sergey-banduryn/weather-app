import { WeatherState } from '@enums';

export const skyStatePath = '/weather-state-icons/';

export const skyImagesByState = {
  [WeatherState.Atmosphere]: 'atmosphere.png',
  [WeatherState.Clear]: 'clear.png',
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Drizzle]: 'drizzle.png',
  [WeatherState.Rain]: 'rain.png',
  [WeatherState.Snow]: 'snow.png',
  [WeatherState.Thunderstorm]: 'thunderstorm.png',
};
