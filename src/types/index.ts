import type { WeatherState } from '@enums';

import type { IForecastItemResponse } from './responses';

interface IForecastDays {
  d_txt: string;
  hours: IForecastItemResponse[];
}

interface IFormattedForecastData {
  deg: number;
  humidity: number;
  speed: string;
  state: WeatherState;
  temp: string;
}

interface IFormattedWeatherData {
  deg: number;
  humidity: string;
  name: string;
  speed: string;
  state: WeatherState;
  temp: string;
}

export type {
  IForecastItemResponse,
  IForecastResponse,
  IGeocodingToCityResponse,
  IWeatherResponse,
} from './responses';
export type { ComponentStyles } from './styles';
export type { IForecastDays, IFormattedForecastData, IFormattedWeatherData };
