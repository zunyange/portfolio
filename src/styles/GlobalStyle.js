import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Cafe24 from '../fonts/Cafe24Ssurround.ttf';
import FontBend from '../fonts/Cafe24Oneprettynight.ttf';
import FontBase from '../fonts/Belanosima-Regular.ttf';
import FontLight from '../fonts/IBMPlexSansKR-ExtraLight.ttf';

const GlobalStyle = createGlobalStyle`
${reset}  
  body{
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    position: relative;
    width: 100%;
    height: 100%;
    font-family: FontBase;
    word-break: keep-all;
    margin: 0 auto;
  }

@font-face {
  font-family: 'FontBend';
  src: url(${FontBend})
} 

@font-face {
  font-family: 'fontCafe';
  src: url(${Cafe24})
} 

@font-face {
  font-family: 'fontBase';
  src: url(${FontBase})
} 

@font-face {
  font-family: 'FontLight';
  src: url(${FontLight})
} 
  
`;

export default GlobalStyle;
