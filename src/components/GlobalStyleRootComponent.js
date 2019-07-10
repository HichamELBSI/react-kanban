import { createGlobalStyle } from "styled-components";

// This will add a global style to the app
const GlobalStyleRootComponent = createGlobalStyle`
  body {
    color:  ${props => props.theme.color};
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.backgroundColor};
    padding: ${props => props.theme.padding};
    box-sizing: border-box;
  }
`;

export default GlobalStyleRootComponent;
