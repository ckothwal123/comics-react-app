import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Container from "@material-ui/core/Container"


const Home = () => (
    <div>
      Home Component
      <ul>
        <li>
            <Link to="/awkward-yeti">Awkward Yeti</Link>
        </li>
        <li>
            <Link to="/garfield">Garfield</Link>
         </li>
      </ul>
    </div>
  );

export {Home};