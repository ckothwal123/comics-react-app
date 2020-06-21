import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AwkwardYeti from './AwkwardYeti'
import Garfield from './Garfield'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import {Home} from './Home'

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


const useStyles = makeStyles((theme) => ({
root: {
    '& > svg': {
    margin: theme.spacing(2),
    },
},
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

function DenseAppBar(){

return (
        <AppBar position="static" maxWidth="lg">
            <Toolbar variant="dense" maxWidth="lg">
            <Typography variant="h6" color="inherit">
                Comics-Scraper
            </Typography>
            </Toolbar>
        </AppBar>
        );
}

// function Main(props){

//     return(
//     <div>
//     <Router>
//         <ul>
//             <li><Link to="/awkward-yeti">Awkward Yeti</Link></li>
//             <li><Link to="/garfield">Garfield</Link></li>
//         </ul>
        
//         <Switch>
//             {/* <Route path="/">
//                 <Home/ >
//             </Route> */}
//             <Route path="/awkward-yeti">
//                 <AwkwardYeti url="https://comics-scraper-app.herokuapp.com/comics/heart-and-brain/"/>
//             </Route>
//             <Route path="/garfield">
//                 <Garfield url="https://comics-scraper-app.herokuapp.com/comics/garfield/"/>
//             </Route>
//         </Switch>
//     </Router>
//     </div>    
//     )

// }

function Main() {
    return (
      <div>
        <Switch>
          {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
            <Route path="/awkward-yeti">
                <AwkwardYeti url="https://comics-scraper-app.herokuapp.com/comics/heart-and-brain/"/>
            </Route>
  
          {/* Note how these two routes are ordered. The more specific
              path="/contact/:id" comes before path="/contact" so that
              route will render when viewing an individual contact */}
            <Route path="/garfield">
                <Garfield url="https://comics-scraper-app.herokuapp.com/comics/garfield/"/>
            </Route>

  
          {/* If none of the previous routes render anything,
              this route acts as a fallback.
  
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }

export default Main;
export {DenseAppBar};