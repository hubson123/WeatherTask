import { type } from "os";

export interface DailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: Temperature;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temperature;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}

export interface CurrentForecast
  extends Omit<DailyForecast, "temp" | "feels_like"> {
  feels_like: number;
  temp: number;
}
export interface Forecast {
  current: DailyForecast;
  daily: DailyForecast[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
export interface Temperature {
  day: number;
  eve: number;
  max?: number;
  min?: number;
  morn: number;
  night: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
