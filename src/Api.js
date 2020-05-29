import React, { Component } from 'react';
//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blue from "@material-ui/core/colors/blue"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

//Material UI theme
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: "25px",
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        
    },
    gridList: {
      width: "100%",
      height: "100%",
      cellHeight: 'auto',
      justifyContent:"center",
      alignItems:"center",
      spacing: 8,
      
    },
    rootButton: {
        flexGrow: 1,
      },

    menuButton: {
        marginRight: theme.spacing(2),
      },
  }));

function DenseAppBar(){
    const bc = blue[700];

    return (
          <AppBar position="static" backgroundColor={bc}>
            <Toolbar variant="dense" backgroundColor={bc}>
              <Typography variant="h6" color="inherit">
                Comics
              </Typography>
            </Toolbar>
          </AppBar>
      );
}

function ThemeBody(props){

    const classes = useStyles();
    return (<div className={classes.root}><GridList cellHeight={250} className={classes.gridList} cols={2}>
                                        {props.value}</GridList><Button variant="contained" color="primary">Primary</Button></div>)
}

class Api extends Component{


    state = {
        data : [],
        url : "http://127.0.0.1:8000/comics/heart-and-brain/"
    }

    UNSAFE_componentWillMount(){

        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data : data
            })
        })
    }


    render(){
        const result = this.state.data;
        const res = result["results"] && result["results"].map((tile, idx) =>(
                <GridListTile key={tile.comic_link} cols={1} rows={1}>
                <img src={tile.comic_link} alt={tile.comic_title} height={230} width={100} />
                </GridListTile>
                ))

        return ([<ThemeBody value={res} />])
        }
}

export default Api;
export {DenseAppBar};