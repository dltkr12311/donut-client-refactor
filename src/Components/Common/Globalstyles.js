import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../../lib/styles/fonts.css';
const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    margin-top: 3rem;
    background: #ffecda;
  }
  body, input, button{
    font-family: 'RIDIBatang', sans-serif;
  }
`;
export default GlobalStyles;
