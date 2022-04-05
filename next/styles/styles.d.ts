import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
interface IFont {
  weight?: string;
  size: string;
  family: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    border: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      background: IPalette;
    };
    fonts: {
      main: IFont;
      secondary: IFont;
      mobile: IFont;
    };
  }
}
