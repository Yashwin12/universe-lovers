import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import NightSky from "./components/NightSky";
import Mars from "./components/Mars";
import ISSDetector from "./components/ISSDetector";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* TODO_YASH: Host below server */}
          <Route path = "/night-sky" render = { (routeProps) => ( <NightSky {...routeProps} dataPath= "http://localhost:5000/kmlFile"/> ) } /> 
          <Route path="/iss" component={ISSDetector}/>
          <Route path = "/mars" component = {Mars}  />       
        </Switch>        
      </Router>                
    </div>
  );
}

export default hot(App);
