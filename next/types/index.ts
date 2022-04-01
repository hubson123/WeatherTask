export interface DailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
}

export interface Forecast {
  current: DailyForecast;
  daily: DailyForecast[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
