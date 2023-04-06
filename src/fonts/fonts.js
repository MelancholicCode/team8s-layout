import { createGlobalStyle } from "styled-components";
import NoirProLight from "./NoirPro-Light.ttf";
import NoirProRegular from "./NoirPro-Regular.ttf";
import NoirProMedium from "./NoirPro-Medium.ttf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'NoirPro';
  src: url(${NoirProLight}) format('truetype');
  font-style: normal;
  font-weight: 300;
}
@font-face {
  font-family: 'NoirPro';
  src: url(${NoirProRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: 'NoirPro';
  src: url(${NoirProMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
}
`

export default FontStyles;