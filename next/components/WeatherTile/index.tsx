import { memo } from "react";
import { Forecast } from "../../types";
import { Container } from "./styles";

interface Props {
  data: Forecast;
}

function WeatherTile({ data }: Props) {
  console.log("dane; ", data);
  return <Container>{data.lon}</Container>;
}
export default memo(WeatherTile);
