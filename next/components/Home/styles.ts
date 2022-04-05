import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.palette.background.contrastText};
  font-family: ${(props) => props.theme.fonts.main.family};
  font-weight: ${(props) => props.theme.fonts.main.weight};
`;
export const H3 = styled.h2`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fonts.main.weight};
  color: ${(props) => props.theme.palette.background.contrastText};
  font-family: ${(props) => props.theme.fonts.main.family};
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.palette.background.main};
  font-size: ${(props) => props.theme.fonts.main.size};
`;

export const CustomSelect = styled.select`
  padding: 8px;
  font-size: ${(props) => props.theme.fonts.secondary.size};
  border-radius: 10px;
  border: ${(props) => props.theme.border};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.main.family};
`;

export const CustomOption = styled.option`
  padding: 8px;
  font-size: ${(props) => props.theme.fonts.secondary.size};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.main.family};
`;

export const Button = styled.button`
  padding: 6px;
  border: ${(props) => props.theme.border};
  font-size: ${(props) => props.theme.fonts.secondary.size};
  height: 60px;
  border-radius: 50%;
  font-family: ${(props) => props.theme.fonts.main.family};
  cursor: pointer;
`;
