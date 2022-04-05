import styled from "styled-components";

export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.secondary.main};
  border: ${(props) => props.theme.border};
  border-radius: 6px;
  width: 18%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }

  font-family: ${(props) => props.theme.fonts.main.family};
  padding: 12px;
  gap: 12px;
`;
export const Row = styled.div<{ isDay?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props) =>
    props.isDay
      ? props.theme.fonts.main.size
      : props.theme.fonts.secondary.size};
  align-items: center;
  gap: 5px;
`;
