export interface DailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number | Temperature;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number | Temperature;
  uvi: number;
  visibility: number;
  weather: [];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
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
