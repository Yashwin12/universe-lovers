import React, { Component } from "react";
import MarsWeatherReportGraph from "./MarsWeatherReportGraph";

class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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