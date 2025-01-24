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
  let name, humidity, temp, speed, deg, state;
  name = data.name;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + temp + '°' : temp + '°';
  humidity = data.main.humidity + '%';
  speed = data.wind.speed.toFixed(1);
  deg = data.wind.deg;
  state = data.weather[0].main;

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

  const days = Array.from(set).map((d_txt) => {
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
  let humidity, temp, speed, state;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + temp + '°' : temp + '°';
  humidity = data.main.humidity;
  speed = data.wind.speed.toFixed(1);
  state = data.weather[0].main;

  return { humidity, temp, speed, state };
}

export function getCurrentTimeStr(): string {
  return new Date(Date.now()).toTimeString().slice(0, 5);
}

export function formatTemp(temp: number): string {
  let tempNum = Math.round(temp);
  let tempStr = tempNum > 0 ? '+' + tempNum + '°' : tempNum + '°';
  return tempStr;
}

export function getWeekdayName(dateString: string): string {
  let options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

export function getMonthName(dateString: string): string {
  let options: Intl.DateTimeFormatOptions = { month: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

export function getMinTempForDay(hours: IForecastItemResponse[]): number {
  return hours
    .map((hour) => Math.round(hour.main.temp))
    .reduce((acc, val) => Math.min(acc, val));
}

export function getMaxTempForDay(hours: IForecastItemResponse[]): number {
  return hours
    .map((hour) => Math.round(hour.main.temp))
    .reduce((acc, val) => Math.max(acc, val));
}
