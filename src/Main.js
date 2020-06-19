import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Api from './Api'
import Garfield from './Garfield'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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

function Main(props){

    return(
    <Router>
        <ul>
            <li><Link to="/awkward-yeti">Awkward Yeti</Link></li>
            <li><Link to="/garfield">Garfield</Link></li>
        </ul>
        <Switch>
            <Route path="/awkward-yeti">
                <Api url="https://comics-scraper-app.herokuapp.com/comics/heart-and-brain/"/>
            </Route>
            <Route path="/garfield">
                <Garfield url="https://comics-scraper-app.herokuapp.com/comics/garfield/"/>
            </Route>
        </Switch>
    </Router>
        
    )

}

export default Main;