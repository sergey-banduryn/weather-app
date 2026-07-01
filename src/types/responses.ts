import { WeatherState } from '@enums';

export interface IForecastItemResponse {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: IMain;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}

export interface IForecastResponse {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: IForecastItemResponse[];
  message: number;
}

export interface IGeocodingToCityResponse {
  country: string;
  lat: number;
  local_names: Record<string, string>;
  lon: number;
  name: string;
  state: string;
}

export interface IWeatherResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: {
    country: string;
    id: number;
    message?: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}

interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: WeatherState;
}

interface IWind {
  deg: number;
  gust?: number;
  speed: number;
}
