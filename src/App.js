import logo from './logo.svg';
import './App.css';
import Food from './Food.js';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'





function App() {
    
    return (

    <div className="App">
      <div className="Cards">
        <Food text="Hamburger" />
        <Food text="Hamburger" />
        <Food text="Hamburger" />
      </div>
      <div className="itemAdder"></div>

     
      
     
  
    </div>
  );
}

export default App;
