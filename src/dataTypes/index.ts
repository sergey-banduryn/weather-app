import { WeatherState } from '@enums';

import { IForecastItemResponse } from './responses';

export * from './responses';
export * from './styles';

export interface IForecastDays {
  d_txt: string;
  hours: IForecastItemResponse[];
}

export interface IFormattedForecastData {
  deg: number;
  humidity: number;
  speed: string;
  state: WeatherState;
  temp: string;
}

export interface IFormattedWeatherData {
  deg: number;
  humidity: string;
  name: string;
  speed: string;
  state: WeatherState;
  temp: string;
}

export interface IStore {
  addSearchedCity: (city: string) => void;
  favoriteCities: string[];
  searchedCities: string[];
  toggleFavorite: (city: string) => void;
}
