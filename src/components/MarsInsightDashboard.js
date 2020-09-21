import React, { Component } from "react";
// import background from "/images/background.svg";

import temperature from "../components/images/temperature.svg"
import wind from "../components/images/wind.svg"
import pressure from "../components/images/pressure.svg"


class MarsInsightDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { mostRecentSol } = this.props;
    
    if ( mostRecentSol === null || mostRecentSol === undefined )
        return null;
        

    // TODO_YASH: Convery all values to an integer
    // TODO_YASH: Convert Date more readable format. 
    // TODO_YASH: Make the font-size READABLE for all screen resolutions
    return (
      <div className = "divMars col-8 container justify-content-center">
        <div className = "mars-mainTitle"> Latest weather at Elysium Plantitia</div>
        <br/>
        <div className = "container">
          
           <div className="row">          
            <div className = "col gridItem">
              <h2>
                Sol
                <span> {mostRecentSol.solDay}</span>
              </h2>
              <p className="text-value" >{mostRecentSol.date}</p>
            </div>

            <div className = "col gridItem">
              <span className="label"> Temperature (avg):</span>
              <span className="text-value"> {mostRecentSol.temperature.avgTemp}°C</span>
                            
              <br/>
              <span className="label"> Wind Speed (avg):</span>
              <span className="text-value"> {mostRecentSol.wind.avgWindSpeed} m/s</span>
                            
              <br/>
              <span className="label"> Wind Direction (most common):</span>
              <span className="text-value"> {mostRecentSol.wind.windDirection}</span>

              <br/>
              <span className="label"> Atmosperic pressure (avg):</span>
              <span className="text-value"> {mostRecentSol.pressure.avgPressure} Pa</span>

            </div>
          </div>
        </div>

        <hr className = "hr-divider"/>
        
        <div className = "container">
          <div className="row">
            <div className = "col gridItem">
              <img src={temperature} className = "image"/>
              <br/>
              
              <span className="label"> High: </span>
              <span className="text-value">{mostRecentSol.temperature.highTemp}°C</span>
              <br/>

              <span className="label"> Low: </span>
              <span className="text-value">{mostRecentSol.temperature.lowTemp}°C</span>
            </div>

            <div className = "col gridItem">
              <img src={pressure} className = "image"/>
              <br/>
              
              <span className="label"> High: </span>
              <span className="text-value">{mostRecentSol.pressure.maxPressure} Pa</span>
              <br/>

              <span className="label"> Low: </span>
              <span className="text-value">{mostRecentSol.pressure.minPressure} Pa</span> 
            </div>

            <div className = "col gridItem">
              <img src={wind} className = "image"/>
              <br/>
              
              <span className="label"> High: </span>
              <span className="text-value">{mostRecentSol.wind.maxWindSpeed} m/s</span> 
              <br/>

              <span className="label"> Low: </span>
              <span className="text-value">{mostRecentSol.wind.minWindSpeed} m/s</span>
            </div>
          </div>
                
        </div>
        
        <hr className = "hr-divider"/>

        <div style = {{marginLeft: "5%", marginRight: "5%"}} >
          <span className = "label">Note:</span>
          <span className = "text-value">InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.</span>
        </div>     
      </div>
    );
    
  }
}

export default MarsInsightDashboard;
