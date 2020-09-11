import React from "react";
import { hot } from "react-hot-loader/root";
import NightSky from "./components/NightSky";
  
function App() {
  return (
    <div>
      <NightSky dataPath= "http://localhost:5000/kmlFile"/>
    </div>
  );
}

export default hot(App);