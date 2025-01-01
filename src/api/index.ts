import { IForecastResponse, IWeatherResponse } from "@dataTypes/responses";

const APPID = "91ec443af67ff628c4ca8788c43afa94";
const baseURL = "http://api.openweathermap.org/data/2.5";

export async function fetchWeather(city: string): Promise<IWeatherResponse> {
  const url = `${baseURL}/weather?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function fetchForecast(city: string): Promise<IForecastResponse> {
  const url = `${baseURL}/forecast?q=${city}&APPID=${APPID}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
