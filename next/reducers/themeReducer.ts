import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "forecast",
  initialState: {
    clouds: 0,
    dew_point: 0,
    dt: 0,
    feels_like: {
      day: 0,
      eve: 0,
      morn: 0,
      night: 0,
    },
    humidity: 0,
    pressure: 0,
    sunrise: 0,
    sunset: 0,
    temp: {
      day: 0,
      eve: 0,
      max: 0,
      min: 0,
      morn: 0,
      night: 0,
    },
    uvi: 0,
    visibility: 0,
    weather: {
      description: "",
      icon: "",
      id: 0,
      main: "",
    },
    wind_deg: 0,
    wind_gust: 0,
    wind_speed: 0,
  },
  reducers: {
    setForecast: (state, action) => {
      (state.clouds = action.payload.clouds),
        (state.dew_point = action.payload.dew_point),
        (state.dt = action.payload.dt),
        (state.feels_like = action.payload.feels_like),
        (state.humidity = action.payload.humidity),
        (state.pressure = action.payload.pressure),
        (state.sunrise = action.payload.sunrise),
        (state.sunset = action.payload.sunset),
        (state.temp = action.payload.temp),
        (state.uvi = action.payload.uvi),
        (state.visibility = action.payload.visibility),
        (state.weather = action.payload.weather),
        (state.wind_deg = action.payload.wind_deg),
        (state.wind_gust = action.payload.wind_gust),
        (state.wind_speed = action.payload.wind_speed);
    },
  },
});

export const { setForecast } = slice.actions;
export const selectForecast = (state) => state.forecast;
export default slice.reducer;
