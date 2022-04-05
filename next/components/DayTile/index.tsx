import { useEffect, useState } from "react";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import { DailyForecast } from "../../types";

import { Row, Tile } from "./styles";

interface Props {
  item: DailyForecast;
}

export default function DayTile({ item }: Props) {
  const [day, setDay] = useState("");
  useEffect(() => {
    const a = new Date(item.dt * 1000);
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    setDay(days[a.getDay()]);
  }, []);

  return (
    <Tile>
      <Row isDay>{day}</Row>
      <Row>Morning: {item.temp.morn}°C</Row>
      <Row>Day: {item.temp.day}°C</Row>
      <Row>Night: {item.temp.night}°C</Row>
      <Row>Humidity: {item.humidity}%</Row>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <Row>
        <ArrowUpOutlined style={{ color: "green" }} /> {item.temp.max}°C
        <ArrowDownOutlined style={{ color: "red" }} /> {item.temp.min}°C
      </Row>
    </Tile>
  );
}
