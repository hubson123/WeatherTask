import { useEffect, useState } from "react";
import { API_KEY } from "../../utils/constants";
import getData from "../../utils/fetchData";
import fetchData from "../../utils/fetchData";
import { H2 } from "./styles";

export default function HomeScreen() {
  const [data, setData] = useState({});
  const [name, setName] = useState("London");
  async function getData(name: string) {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${name}&cnt=5&appid=${API_KEY}`
    ).then((res) => res.json().then((data) => data));
    console.log(weather);
    setData(weather);
    return weather;
  }
  useEffect(() => {
    getData(name);
  }, [name]);

  return (
    <>
      <H2>Weather App</H2>
    </>
  );
}
