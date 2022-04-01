import { Forecast } from "../../types";
import { Container } from "./styles";

interface Props {
  data: Forecast;
}

export default function WeatherTile({ data }: Props) {
  return <Container>{data.lon}</Container>;
}
