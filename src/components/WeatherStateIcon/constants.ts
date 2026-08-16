import { WeatherState } from '@enums';

const skyStatePath = `${import.meta.env.BASE_URL}weather-state-icons/`;

const skyImagesByState = {
  [WeatherState.Atmosphere]: 'atmosphere.png',
  [WeatherState.Clear]: 'clear.png',
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Drizzle]: 'drizzle.png',
  [WeatherState.Rain]: 'rain.png',
  [WeatherState.Snow]: 'snow.png',
  [WeatherState.Thunderstorm]: 'thunderstorm.png',
};

export { skyImagesByState, skyStatePath };
