import React, { Component } from "react";

import MarsWeatherReportGraph from "./MarsWeatherReportGraph";
import MarsInsightDashboard from "./MarsInsightDashboard";
import MarsDailyWeatherReport from "./MarsDailyWeatherReport";

import NASAApiCall from "../utilities/NASAApiCall";
import * as myConstClass from "../utilities/Constants";
import { getValuesFromObject } from "../utilities/BasicFuncs";

class Mars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formatedNASAAPIResponse: [],
    };
  }

  componentDidMount() {
    // TODO_YASH: Check if data is present in the session_cookie or not.
    var response = NASAApiCall(
      myConstClass.MARS_INSIGHT_BASE_URI,
      myConstClass.MARS_INSIGHT_URI_PARAMS
    );
    response.then((response) => {
      // Everything under validity_checks key is for debugging by (NASA's) API providers; these data will not be of interest to typical Mars Weather Data API consumers.
      delete response.data.validity_checks;
      this.setState({
        formatedNASAAPIResponse: this.formatData(response.data),
      });
      console.log(this.state.formatedNASAAPIResponse);
    });
  }

  formatData(data) {
    let finalArray = [];

    data.sol_keys.forEach((element) => {
      var solDay = data[element];

      let wind = {
        maxWindSpeed: getValuesFromObject(solDay, "HWS.mx"),
        minWindSpeed: getValuesFromObject(solDay, "HWS.mn"),
        avgWindSpeed: getValuesFromObject(solDay, "HWS.av"),
        windDirectionInDegrees: getValuesFromObject(
          solDay,
          "WD.most_common.compass_degrees"
        ),
        windDirection: getValuesFromObject(
          solDay,
          "WD.most_common.compass_point"
        ),
        // windSpeedUnit: "m/s" // m/s is default. Other option is km/h.
      };

      let pressure = {
        maxPressure: getValuesFromObject(solDay, "PRE.mx"),
        minPressure: getValuesFromObject(solDay, "PRE.mn"),
        avgPressure: getValuesFromObject(solDay, "PRE.av"),
        // pressureUnit:"Pa" // Pa is default. Other option is mmHg
      };

      let temperature = {
        highTemp: getValuesFromObject(solDay, "AT.mx"),
        lowTemp: getValuesFromObject(solDay, "AT.mn"),
        avgTemp: getValuesFromObject(solDay, "AT.av"),
        // temperatureUnit = "C" // Default in degree celcius. Other option is Farenheit.
      };

      finalArray.push({
        wind,
        pressure,
        temperature,
        solDay: element,
        date: !!getValuesFromObject(solDay, "First_UTC") ? new Date( getValuesFromObject(solDay, "First_UTC")).toISOString().slice(0,10): null // Date would be in yyyy-mm-dd
      });
    });
    // console.log(finalArray);
    return finalArray;
  }

  render() {
    return (
      <div className = "divMars col-8 container justify-content-center">                     
        <MarsInsightDashboard mostRecentSol = { this.state.formatedNASAAPIResponse[this.state.formatedNASAAPIResponse.length - 1] } />
        
        <MarsDailyWeatherReport sols = {this.state.formatedNASAAPIResponse}/>
        {/* <MarsWeatherReportGraph /> */}
      </div>
    );
  }
}

export default Mars;
