
import "bootstrap/dist/css/bootstrap.min.css";

import Box from "./components/Box";

import React from "react";
import './App.css';
import './styles/global.css';



const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;



class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-primary">Hello !</h1>
        <div className="row">
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        
          <Box icon="local_drink" color="#3A85FF" unit= "L" value= {1.5}/>
          <Box icon=" directions_walk" color="black" unit= "steps" value= {3000}/>
          <Box icon="favorite" color="red" unit="bpm" value= {120}/>
          <Box icon="wb_sunny" color="yellow" unit="°C" value= {-10}/>

        </div>
      </div> 
    );
  }
}

export default App;


