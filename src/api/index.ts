import type {
  IForecastResponse,
  IGeocodingToCityResponse,
  IWeatherResponse,
} from '@types';

const APPID = '91ec443af67ff628c4ca8788c43afa94';
const baseURL = 'https://api.openweathermap.org';

async function fetchForecast(city: string): Promise<IForecastResponse> {
  const url = `${baseURL}/data/2.5/forecast?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json() as Promise<IForecastResponse>;
}

async function fetchGeocodingToCity(
  coords: GeolocationCoordinates,
): Promise<IGeocodingToCityResponse[]> {
  const { latitude, longitude } = coords;
  const limit = 5;
  const url = `${baseURL}/geo/1.0/reverse?lat=${String(latitude)}&lon=${String(longitude)}&limit=${String(limit)}&appid=${APPID}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json() as Promise<IGeocodingToCityResponse[]>;
}

async function fetchWeather(city: string): Promise<IWeatherResponse> {
  const url = `${baseURL}/data/2.5/weather?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json() as Promise<IWeatherResponse>;
}

export { fetchForecast, fetchGeocodingToCity, fetchWeather };
