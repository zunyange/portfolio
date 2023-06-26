import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Cafe24 from '../fonts/Cafe24Ssurround.ttf';
import CafeBold from '../fonts/Cafe24Oneprettynight.ttf';
import FontBase from '../fonts/Belanosima-Regular.ttf';

const GlobalStyle = createGlobalStyle`
${reset}  
  body{
    font-family: FontBase;
    word-break: keep-all;
    height: 100%;
    margin: 0;
  }

@font-face {
  font-family: 'CafeBold';
  src: url(${CafeBold})
} 

@font-face {
  font-family: 'fontCafe';
  src: url(${Cafe24})
} 

@font-face {
  font-family: 'fontBase';
  src: url(${FontBase})
} 
  
`;

export default GlobalStyle;
