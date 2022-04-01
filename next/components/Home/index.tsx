import { useEffect, useState } from "react";
import { Forecast } from "../../types";
import { API_KEY } from "../../utils/constants";
import getData from "../../utils/fetchData";
import fetchData from "../../utils/fetchData";
import WeatherTile from "../WeatherTile";
import { H2 } from "./styles";

export default function HomeScreen() {
  const [data, setData] = useState<Forecast>({});
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 51.5073,
    longitude: -0.118092,
  });
  const [name, setName] = useState("London");

  async function getData(name: string) {
    const coordinates = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`
    ).then((res) =>
      res
        .json()
        .then((data) =>
          setCoords({ latitude: data[0].lat, longitude: data[0].lon })
        )
    );
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords?.latitude}&lon=${coords?.longitude}&exclude=hourly,minutely&appid=${API_KEY}`
    ).then((res) => res.json().then((data: Forecast) => setData(data)));
    Promise.all([coordinates, weather]);
  }

  useEffect(() => {
    getData(name);
  }, [name]);

  return (
    <>
      <H2>Weather App</H2>
      <WeatherTile data={data}></WeatherTile>
    </>
  );
}
