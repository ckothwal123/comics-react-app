import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{DenseAppBar} from './Api';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <DenseAppBar/>
  </React.StrictMode>,
  document.getElementById('nav')

)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
