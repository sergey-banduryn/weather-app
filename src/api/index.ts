import {
  IForecastResponse,
  IGeocodingToCityResponse,
  IWeatherResponse,
} from '@dataTypes/responses';

const APPID = '91ec443af67ff628c4ca8788c43afa94';
const baseURL = 'http://api.openweathermap.org';

export async function fetchWeather(city: string): Promise<IWeatherResponse> {
  const url = `${baseURL}/data/2.5/weather?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function fetchForecast(city: string): Promise<IForecastResponse> {
  const url = `${baseURL}/data/2.5/forecast?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function fetchGeocodingToCity(
  coords: GeolocationCoordinates,
): Promise<IGeocodingToCityResponse[]> {
  const { latitude, longitude } = coords;
  const url = `${baseURL}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=${5}&appid=${APPID}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
