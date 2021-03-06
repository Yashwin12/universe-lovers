import React, { Component } from "react";

import MarsInsightDashboard from "./MarsInsightDashboard";
import MarsDailyWeatherReport from "./MarsDailyWeatherReport";

import NASAApiCall from "../utilities/NASAApiCall";
import * as myConstClass from "../utilities/Constants";
import { getValuesFromObject, roundInteger, dateFormatter, getCookie, setCookie } from "../utilities/CommonUtilities";

class Mars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formatedNASAAPIResponse: [],
      currentSolIndexNumber: null
    };
    this.moreInfoButtonClick  = this.moreInfoButtonClick.bind(this);
  }

  componentDidMount() {
    if( getCookie(myConstClass.MARS_DATA_COOKIE_NAME) === "" ){
      // User's first time on the site.

      var response = NASAApiCall(
        myConstClass.MARS_INSIGHT_BASE_URI,
        myConstClass.MARS_INSIGHT_URI_PARAMS
      );
      response.then((response) => {
        // Everything under validity_checks key is for debugging by (NASA's) API providers; these data will not be of interest to typical Mars Weather Data API consumers.
        delete response.data.validity_checks;
        let formattedData = this.formatData(response.data);

        this.setState({
          formatedNASAAPIResponse: formattedData,
          currentSolIndexNumber: formattedData.length - 1
        });
        
        setCookie( myConstClass.MARS_DATA_COOKIE_NAME, JSON.stringify(formattedData), 0.04); // Stores it for 1 hour. 1/24 ~ 0.04
      });      
    }
    else {
      // Data is already present in a cookie.
      let valuesFromCookie = JSON.parse( getCookie(myConstClass.MARS_DATA_COOKIE_NAME) );

      this.setState({
        formatedNASAAPIResponse: valuesFromCookie,
        currentSolIndexNumber: valuesFromCookie.length - 1
      });
    }   
  }

  formatData(data) {
    let finalArray = [];

    data.sol_keys.forEach((element) => {
      var solDay = data[element];

      let wind = {
        maxWindSpeed: roundInteger(getValuesFromObject(solDay, "HWS.mx")),
        minWindSpeed: roundInteger(getValuesFromObject(solDay, "HWS.mn")),
        avgWindSpeed: roundInteger(getValuesFromObject(solDay, "HWS.av")),
        windDirectionInDegrees: roundInteger(
          getValuesFromObject(solDay, "WD.most_common.compass_degrees")
        ),
        windDirection: getValuesFromObject(
          solDay,
          "WD.most_common.compass_point"
        ),
        // windSpeedUnit: "m/s" // m/s is default. Other option is km/h.
      };

      let pressure = {
        maxPressure: roundInteger(getValuesFromObject(solDay, "PRE.mx")),
        minPressure: roundInteger(getValuesFromObject(solDay, "PRE.mn")),
        avgPressure: roundInteger(getValuesFromObject(solDay, "PRE.av")),
        // pressureUnit:"Pa" // Pa is default. Other option is mmHg
      };

      let temperature = {
        highTemp: roundInteger(getValuesFromObject(solDay, "AT.mx")),
        lowTemp: roundInteger(getValuesFromObject(solDay, "AT.mn")),
        avgTemp: roundInteger(getValuesFromObject(solDay, "AT.av")),
        // temperatureUnit = "C" // Default in degree celcius. Other option is Farenheit.
      };

      finalArray.push({
        wind,
        pressure,
        temperature,
        solDay: element,
        date: !!getValuesFromObject(solDay, "First_UTC")
          ? dateFormatter( new Date(getValuesFromObject(solDay, "First_UTC")) )
          : null,
      });
    });
    // console.log(finalArray);
    return finalArray;
  }


  moreInfoButtonClick(event) {
    const buttonClickedId = event.target.id;
    let currentSolIndexNumber = buttonClickedId.split('-');
    this.setState( { currentSolIndexNumber: currentSolIndexNumber[1] } );
  }

  render() {
    return (
      <div>                     
        <MarsInsightDashboard mostRecentSol = { this.state.formatedNASAAPIResponse[this.state.currentSolIndexNumber] } />
        
        <MarsDailyWeatherReport sols = {this.state.formatedNASAAPIResponse} onClick={ this.moreInfoButtonClick}/>        
      </div>
    );
  }
}

export default Mars;
