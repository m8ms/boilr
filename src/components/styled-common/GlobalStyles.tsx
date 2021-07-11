import { createGlobalStyle, css } from "styled-components";
import { Theme } from "theme/types";
import normalize from "styled-normalize";

const FONT_PATH = process.env.NEXT_PUBLIC_BASE_PATH + "/fonts/";

const fontFace = (
  name: string,
  filename: string,
  weight: number | string = "normal",
  style = "normal"
) => css`
  @font-face {
    font-family: "${name}";
    src: local("${name}"), url("${FONT_PATH}${filename}.woff2") format("woff2"),
      url("${FONT_PATH}${filename}.woff") format("woff");
    font-style: ${style};
    font-weight: ${weight};
    font-display: fallback;
  }
`;

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  ${fontFace("Nunito", "Nunito-Regular")}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Nunito, Roboto, -apple-system, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    background-color: ${({ theme: { color } }) => color.background};
    color: ${({ theme: { color } }) => color.onPrimary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }

`;

export default GlobalStyles;
