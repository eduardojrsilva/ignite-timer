import { createGlobalStyle } from "styled-components";
import { theme } from "./themes/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${theme["green-500"]};
  }

  body {
    background: ${theme["gray-900"]};
    color: ${theme["gray-300"]};
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`