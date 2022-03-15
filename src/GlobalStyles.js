import { createGlobalStyle } from 'styled-components';
// import Bitter from '@fontsource/bitter';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    /* font-family: 'Bitter'; */


    max-width:1440px;
    margin: 0 auto;
  }


`;

export default GlobalStyle;
