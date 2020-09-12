import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import NightSky from "./components/NightSky";
import Mars from "./components/Mars";

import NASAApiCall from "./utilities/NASAApiCall";
import * as myConstClass from './utilities/Constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {    
    var response = NASAApiCall( myConstClass.MARS_INSIGHT_BASE_URI, myConstClass.MARS_INSIGHT_URI_PARAMS );
    response.then( (response) => { console.log( response); });    
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/night-sky"
              render={(routeProps) => (
                <NightSky
                  {...routeProps}
                  dataPath="http://localhost:5000/kmlFile"
                />
              )}
            />
            <Route path="/mars" component={Mars} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(App);
