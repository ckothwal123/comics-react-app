import React from 'react';
import {
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
import {Home} from './Home'
import { makeStyles } from '@material-ui/core/styles';


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
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    body:{
        // backgroundColor: "#dcdfe3",
    }
}));


function DenseAppBar(){
    const classes = useStyles();

    return (<div className={classes.root}>
                <AppBar position="static" maxWidth="lg">
                    <Toolbar maxWidth="lg">
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            Comics-Scraper
                        </Typography>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            );
}


function Main() {

    const classes = useStyles();

    return (
        
      <div className={classes.body}>
        <Switch>
            <Route path="/awkward-yeti">
                <AwkwardYeti url="https://comics-scraper-app.herokuapp.com/comics/heart-and-brain/"/>
            </Route>
            <Route path="/garfield">
                <Garfield url="https://comics-scraper-app.herokuapp.com/comics/garfield/"/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    );
  }

export default Main;
export {DenseAppBar};