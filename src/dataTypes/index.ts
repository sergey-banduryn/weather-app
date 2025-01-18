import { WeatherState } from "@enums";
import { IForecastItemResponse } from "./responses";

export * from "./responses";

export interface IStore {
  searchedCities: string[];
  addSearchedCity: (city: string) => void;
  favoriteCities: string[];
  toggleFavorite: (city: string) => void;
}

export interface IFormattedWeatherData {
  name: string;
  humidity: string;
  temp: string;
  speed: string;
  state: WeatherState;
}

export interface IFormattedForecastData {
  humidity: number;
  temp: string;
  speed: string;
}

export interface IForecastDays {
  d_txt: string;
  hours: IForecastItemResponse[];
}
