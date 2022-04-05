import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "../reducers/themeReducer";

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});
