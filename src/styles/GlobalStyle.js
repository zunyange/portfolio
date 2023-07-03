import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Cafe24 from '../fonts/Cafe24Ssurround.ttf';
import FontBend from '../fonts/Cafe24Oneprettynight.ttf';
import FontEng from '../fonts/Belanosima-Regular.ttf';
import FontLight from '../fonts/IBMPlexSansKR-ExtraLight.ttf';
import FontBase from '../fonts/IBMPlexSansKR-Light.ttf';

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
  font-family: 'fontBend';
  src: url(${FontBend})
} 

@font-face {
  font-family: 'fontCafe';
  src: url(${Cafe24})
} 

@font-face {
  font-family: 'fontEng';
  src: url(${FontEng})
} 

@font-face {
  font-family: 'fontLight';
  src: url(${FontLight})
} 
  
@font-face {
  font-family: 'fontBase';
  src: url(${FontBase})
} 
`;

export default GlobalStyle;
