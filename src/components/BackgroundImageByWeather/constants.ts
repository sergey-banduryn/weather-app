import { WeatherState } from '@enums';

const cardBackgroundPath = '/weather-card-background/';

const cardBackgroundStatus = {
  [WeatherState.Atmosphere]: 'atmosphere.webp',
  [WeatherState.Clear]: 'shine.jpg',
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Drizzle]: 'drizzle.gif',
  [WeatherState.Rain]: 'rain.gif',
  [WeatherState.Snow]: 'snow.gif',
  [WeatherState.Thunderstorm]: 'thunderstorm.gif',
};

export { cardBackgroundPath, cardBackgroundStatus };
