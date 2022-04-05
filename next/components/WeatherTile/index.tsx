import { memo, useEffect, useState } from "react";

import { Forecast } from "../../types";

import DayTile from "../DayTile";
import { Row } from "../DayTile/styles";
import { Spinner } from "../Spinner";

import { Container } from "./styles";

interface Props {
  data: Forecast | null;
}

function WeatherTile({ data }: Props) {
  const tiles = data?.daily
    .map((item, index) => {
      return <DayTile key={index} item={item} />;
    })
    .slice(0, 5);

  return <Container>{tiles}</Container>;
}
export default memo(WeatherTile);
