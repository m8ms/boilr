import colors from "./light/light-colors";

export type ColorMap = Record<keyof typeof colors, string>;

export interface Theme {
  color: ColorMap;
}
