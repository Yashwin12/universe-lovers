import React, { Component } from "react";
import MarsWeatherReportGraph from "./MarsWeatherReportGraph";

import NASAApiCall from "../utilities/NASAApiCall";
import * as myConstClass from '../utilities/Constants';

class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {    
        var response = NASAApiCall( myConstClass.MARS_INSIGHT_BASE_URI, myConstClass.MARS_INSIGHT_URI_PARAMS );
        response.then( (response) => { console.log( response); });    
    }

    render() {
        return (
            <div>
              {/* TODO_PRANAV: Make Dashboard component over here  */}
              {/* TODO_PRANAV: Make table component over here  */}
              <MarsWeatherReportGraph />
            </div>
        );
    }
}

export default Mars;