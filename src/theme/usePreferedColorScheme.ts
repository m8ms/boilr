import { useEffect, useState } from "react";
import { themeDark, themeLight } from "./index";
import { Theme } from "./types";

const colorSchemeQuery = process.browser
  ? window.matchMedia("(prefers-color-scheme: dark)")
  : undefined;

const getColorScheme = (e: MediaQueryList): Theme => {
  if (e.matches) {
    // return theme.themeLight;
    return themeDark;
  }
  return themeLight;
};

const initialTheme = colorSchemeQuery
  ? getColorScheme(colorSchemeQuery)
  : themeLight;

const usePreferedColorScheme = (): Theme => {
  const [theme, setTheme] = useState(initialTheme);
  const listener = (e: any) => setTheme(getColorScheme(e)); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    if (colorSchemeQuery) {
      colorSchemeQuery.addEventListener("change", listener);
      return () => {
        colorSchemeQuery.removeEventListener("change", listener);
      };
    }
  }, [colorSchemeQuery]);

  return theme;
};

export default usePreferedColorScheme;
