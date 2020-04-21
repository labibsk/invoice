import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#C11E29'
    },
    success:{
      main:'#388e3c',
      hover: '#4caf50'
    }
  },
  typography:{
    fontFamily:'Montserrat'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
