import { WeatherState } from '@enums';

export const cardBackgroundPath = '/weather-card-background/';

export const cardBackgroundStatus = {
  [WeatherState.Atmosphere]: 'atmosphere.webp',
  [WeatherState.Clear]: 'shine.jpg',
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Drizzle]: 'drizzle.gif',
  [WeatherState.Rain]: 'rain.gif',
  [WeatherState.Snow]: 'snow.gif',
  [WeatherState.Thunderstorm]: 'thunderstorm.gif',
};
