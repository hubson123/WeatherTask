import { useState } from "react";
import { useDispatch } from "react-redux";
import { setForecast } from "../../reducers/themeReducer";
import { DailyForecast, Forecast } from "../../types";
import { API_KEY } from "../../utils/constants";
import useUpdateEffect from "../../utils/fetchData";
import { Row } from "../DayTile/styles";
import { Spinner } from "../Spinner";
import WeatherTile from "../WeatherTile";
import { CustomOption, CustomSelect, H3 } from "./styles";

const cities = [
  "London",
  "Paris",
  "Warsaw",
  "New York",
  "Portland",
  "Los Angeles",
  "Bejing",
  "Sydney",
  "Madrit",
];

export default function HomeScreen() {
  const [data, setData] = useState<Forecast | null>(null);
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 51.5073,
    longitude: -0.118092,
  });
  const [name, setName] = useState("London");
  const [loading, setLoading] = useState(false);
  const [mean, setMean] = useState(0);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const dispatch = useDispatch();
  const [modeValue, setMode] = useState(0);

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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords?.latitude}&lon=${coords?.longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
    ).then((res) =>
      res.json().then((data: Forecast) => {
        setData(data);
        dispatch(setForecast(data?.daily[0])); //simple example for redux toolkit
        tempFunction(data?.daily.slice(0, 5));
      })
    );
    Promise.all([coordinates, weather]).then(() => {
      setLoading(false);
    });
  }

  const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setName(event.target.value);
  };

  const options = cities.map((option: string, index: number) => (
    <CustomOption value={option} key={index}>
      {option}
    </CustomOption>
  ));

  const mode = (arr: number[]) => {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i].toFixed(0);

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  };

  const tempFunction = (array: DailyForecast[] | undefined) => {
    if (array !== undefined) {
      let tempArray: number[] = [];
      let minAnaMaxArray: number[] = [];
      for (let i = 0; i < array.length; i++) {
        tempArray.push(array[i].temp.day);
        minAnaMaxArray.push(array[i].temp.day);
        minAnaMaxArray.push(array[i].temp.morn);
        minAnaMaxArray.push(array[i].temp.eve);
        minAnaMaxArray.push(array[i].temp.night);
      }
      console.log("dtaa: ", tempArray);
      const sum = tempArray.reduce((a, b) => a + b, 0);
      setMean(sum / tempArray.length);
      setMode(mode(tempArray));
      setMin(Math.min.apply(null, minAnaMaxArray));
      setMax(Math.max.apply(null, minAnaMaxArray));
    }
  };

  useUpdateEffect(() => {
    setLoading(true);
    getData(name);
  }, [name]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            <H3>You can change city: </H3>
            <CustomSelect value={name} onChange={onChangeEvent}>
              {options}
            </CustomSelect>
          </Row>
          <Row>
            <H3>
              Max: {max}°C Min: {min}°C Mean: {mean.toFixed(2)}°C Mode:{" "}
              {modeValue}°C
            </H3>
          </Row>
          <WeatherTile data={data}></WeatherTile>
        </>
      )}
    </>
  );
}
