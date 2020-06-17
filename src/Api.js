import React, { useState, useEffect } from 'react';
//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Container from "@material-ui/core/Container"
import './Api.css';
import Paper from '@material-ui/core/Paper';


//Material UI theme
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        padding: "25px",
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.default,
        primary: "blue",
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

    img: {
        border: "2px",
        borderColor: "#fff", 
        borderRadius: "8px",
        padding: "5px",
        width: "100%",
        height:"100%",
        
      },

    menuButton: {
        marginRight: theme.spacing(2),
      },
    
    buttons:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              margin: theme.spacing(2),
            },
            paddingBottom:"10px",
        }
    
  }));

function DenseAppBar(){
    

    return (
          <AppBar position="static">
            <Toolbar variant="dense" maxWidth="md">
              <Typography variant="h6" color="inherit">
                Comics-Scraper
              </Typography>
            </Toolbar>
          </AppBar>
      );
}


function Api(props){

        const classes = useStyles();
        const [url,setUrl] = useState("https://comics-scraper-app.herokuapp.com/comics/heart-and-brain/");
        const [data,setData] = useState([]);

        useEffect(() =>{
            const fetchData = async () => {
                const result = await axios(url);
                setData(result.data);
            };
            fetchData();
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
        }, [url]);

        const res = data["results"] && data["results"].map((tile, idx) =>(
                <GridListTile key={tile.comic_link}>
                <img className={classes.img} src={tile.comic_link} alt={tile.comic_title}/>
                </GridListTile>
                ))

        return (<Container maxWidth="lg">
                  <div className={classes.root}>
                    <GridList spacing={20} cellHeight={350} cols={2} justifyContent="center">{res}</GridList>
                  </div>
                  <div className={classes.buttons}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => setUrl(data.previous)} padding="5px">Prev</Button>
                    <Button onClick={() => setUrl(data.next)} padding="5px">Next</Button>
                    </ButtonGroup>
                  </div>
                </Container>)

}

export default Api;
export {DenseAppBar};