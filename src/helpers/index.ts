import {
  IForecastDays,
  IForecastItemResponse,
  IFormattedForecastData,
  IFormattedWeatherData,
  IWeatherResponse,
} from '@dataTypes';

export function formatWeatherData(
  data: IWeatherResponse,
): IFormattedWeatherData {
  const name = data.name;
  let temp;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + String(temp) + '°' : String(temp) + '°';
  const humidity = String(data.main.humidity) + '%';
  const speed = data.wind.speed.toFixed(1);
  const deg = data.wind.deg;
  const state = data.weather[0].main;

  return { name, humidity, temp, speed, deg, state };
}

export function getForecastDays(
  data: IForecastItemResponse[],
): IForecastDays[] {
  const hours = data.map((hour) => {
    return {
      d_txt: hour.dt_txt.slice(0, 10),
      ...hour,
    };
  });

  const set = new Set(hours.map((hour) => hour.d_txt));

  const days = [...set].map((d_txt) => {
    return {
      d_txt,
      hours: hours.filter((hour) => {
        return hour.d_txt === d_txt;
      }),
    };
  });

  return days;
}

export function formatForecastData(
  data: IForecastItemResponse,
): IFormattedForecastData {
  let temp;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + String(temp) + '°' : String(temp) + '°';
  const humidity = data.main.humidity;
  const speed = data.wind.speed.toFixed(1);
  const state = data.weather[0].main;

  return { humidity, temp, speed, state };
}

export function getCurrentTimeStr(): string {
  return new Date(Date.now()).toTimeString().slice(0, 5);
}

export function formatTemp(temp: number): string {
  const tempNum = Math.round(temp);
  const tempStr =
    tempNum > 0 ? '+' + String(tempNum) + '°' : String(tempNum) + '°';
  return tempStr;
}

export function getWeekdayName(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

export function getMonthName(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { month: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

export function getMinTempForDay(hours: IForecastItemResponse[]): number {
  if (hours.length === 0) return 0;

  return (
    hours
      .map((hour) => Math.round(hour.main.temp))
      // eslint-disable-next-line sonarjs/reduce-initial-value
      .reduce((acc, val) => Math.min(acc, val))
  );
}

export function getMaxTempForDay(hours: IForecastItemResponse[]): number {
  if (hours.length === 0) return 0;

  return (
    hours
      .map((hour) => Math.round(hour.main.temp))
      // eslint-disable-next-line sonarjs/reduce-initial-value
      .reduce((acc, val) => Math.max(acc, val))
  );
}
