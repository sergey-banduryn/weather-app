import type {
  IForecastDays,
  IForecastItemResponse,
  IFormattedForecastData,
  IFormattedWeatherData,
  IWeatherResponse,
} from '@types';

function formatForecastData(
  data: IForecastItemResponse,
): IFormattedForecastData {
  let temp;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + String(temp) + '°' : String(temp) + '°';
  const humidity = data.main.humidity;
  const speed = data.wind.speed.toFixed(1);
  const state = data.weather[0].main;
  const deg = data.wind.deg;

  return { deg, humidity, speed, state, temp };
}

function formatTemp(temp: number): string {
  const tempNum = Math.round(temp);
  const tempStr =
    tempNum > 0 ? '+' + String(tempNum) + '°' : String(tempNum) + '°';
  return tempStr;
}

function formatWeatherData(data: IWeatherResponse): IFormattedWeatherData {
  const name = data.name;
  let temp;
  temp = Math.round(data.main.temp);
  temp = temp > 0 ? '+' + String(temp) + '°' : String(temp) + '°';
  const humidity = String(data.main.humidity) + '%';
  const speed = data.wind.speed.toFixed(1);
  const deg = data.wind.deg;
  const state = data.weather[0].main;

  return { deg, humidity, name, speed, state, temp };
}

function getCurrentTimeStr(): string {
  return new Date(Date.now()).toTimeString().slice(0, 5);
}

function getForecastDays(data: IForecastItemResponse[]): IForecastDays[] {
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

function getMaxTempForDay(hours: IForecastItemResponse[]): number {
  if (hours.length === 0) return 0;

  return hours
    .map((hour) => Math.round(hour.main.temp))
    .reduce((acc, val) => Math.max(acc, val));
}

function getMinTempForDay(hours: IForecastItemResponse[]): number {
  if (hours.length === 0) return 0;

  return hours
    .map((hour) => Math.round(hour.main.temp))
    .reduce((acc, val) => Math.min(acc, val));
}

function getMonthName(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { month: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

function getWeekdayName(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(Date.parse(dateString)),
  );
}

export {
  formatForecastData,
  formatTemp,
  formatWeatherData,
  getCurrentTimeStr,
  getForecastDays,
  getMaxTempForDay,
  getMinTempForDay,
  getMonthName,
  getWeekdayName,
};
