import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontStyles from './fonts/fonts';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: NoirPro, serif;
  color: #fff;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <FontStyles/>
    <App />
  </>
);