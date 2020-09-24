import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    margin-top: 3rem;
    background: #f9f7f7;
  }
`;

export default GlobalStyles;
