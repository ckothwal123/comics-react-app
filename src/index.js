import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main,{DenseAppBar} from './Main'

const theme = createMuiTheme({
  
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ec407a',
      },
    },
  });


ReactDOM.render(
  <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <DenseAppBar/>
      <Main/>
    </BrowserRouter>
  </MuiThemeProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
