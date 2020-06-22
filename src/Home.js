import React from 'react'
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container"
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import hnb from './hnb.png';
import gar from './gar.png';


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
    img: {
        border: "2px",
        borderColor: "#fff", 
        borderRadius: "8px",
        padding: "5px",
        width: "100%",
        height:"100%",
        
      },
}));


function Home(){
    const classes = useStyles();

    return(

    <Container maxWidth="lg">
        <div className={classes.root}>
        <GridList spacing={20} cellHeight={350} cols={2} justifyContent="center">
            <GridListTile component={Link} to="/awkward-yeti">
                <img className={classes.img} src={hnb} alt="Awkward Yeti"/>
            </GridListTile>
            <GridListTile component={Link} to="/garfield">
                <img className={classes.img} src={gar} alt="Garfield"/>
                <Link to="/garfield">Garfield</Link>
            </GridListTile>
        </GridList>
        </div>
    </Container>
  )};
export {Home};