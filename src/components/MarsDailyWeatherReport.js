import React, { Component } from "react";

class MarsDailyWeatherReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeBox( sols ){

    // TODO_YASH: Make it responsive
    
    // sols = [ {
    //     "wind": {
    //       "maxWindSpeed": 15.915,
    //       "minWindSpeed": 0.226,
    //       "avgWindSpeed": 5.037,
    //       "windDirectionInDegrees": 292.5,
    //       "windDirection": "WNW"
    //     },
    //     "pressure": {
    //       "maxPressure": 791.2285,
    //       "minPressure": 741.9242,
    //       "avgPressure": 773.271
    //     },
    //     "temperature": {
    //       "highTemp": -7.378,
    //       "lowTemp": -94.833,
    //       "avgTemp": -68.531
    //     },
    //     "solDay": "640",
    //     "date": "2020-09-13"
    //   },];
    let returnArray = []
    sols.forEach( ( sol ) => {
        returnArray.push(
            <div className="col solBox">
                
                <span className="label"> Sol <span> {sol.solDay}</span></span>
                <p className="text-value" >{sol.date}</p>

                <hr className = "hr-divider"/>

                <span className="label"> High: </span>
                <span className="text-value">{sol.temperature.highTemp}°C</span>
                <br/>

                <span className="label"> Low: </span>
                <span className="text-value">{sol.temperature.lowTemp}°C</span>
            </div>                               
        );                        
    });
    console.log(returnArray);
    return returnArray;
  }

  render() {
    let { sols } = this.props;
    
    if ( sols === null || sols === undefined )
        return null;
    
    // console.log(sols);        
    return (
      <div>
        
        {
            sols && sols.length != null && sols.length > 0? 
            (                
            <h4 className = "mars-box-section-title">
                Previous <span> {sols.length} </span> Days
            </h4>
            ) :
            (
            <h4 className="mars-box-section-title">No Sol data available</h4>
            ) 
        }

        <div className="row solBoxContainer">
            {this.makeBox(sols)}       
        </div>            
        
      </div>
    );
  }
}

export default MarsDailyWeatherReport;