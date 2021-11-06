import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
    font-family: "consolas";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: 'green',
    secondary: 'red',
  },
  media: {
    tablet: "(max-width: 768px) and (min-width: 425px)",
    phone: "(max-width: 425px)",
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);