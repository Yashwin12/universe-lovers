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
        
    console.log(mostRecentSol);

    return (
      <div>
        <div className = "mars-mainTitle"> Latest weather at Elysium Plantitia</div>
        <br/>
        <div className = "gridContainer">
          <div className = "gridItem" style = {{marginTop: "5%"}}>
            <h2>
              Sol
              <span> {mostRecentSol.solDay}</span>
            </h2>
            <p style = {{ fontSize: "1.1vw" }} >{mostRecentSol.date}</p>
          </div>

          {/* <span className = "verticalDivider" /> */}

          <div className = "gridItem">
            <span className="label"> Temperature (avg):</span>
            <span style = {{ fontSize: "1.1vw" }}> {mostRecentSol.temperature.avgTemp}</span>°<span> C</span>
                          
            <br/>
            <span className="label"> Wind Speed (avg):</span>
            <span style = {{ fontSize: "1.1vw" }}> {mostRecentSol.wind.avgWindSpeed}</span><span> m/s</span>
                          
            <br/>
            <span className="label"> Wind Direction (most common):</span>
            <span style = {{ fontSize: "1.1vw" }}> {mostRecentSol.wind.windDirection}</span>

            <br/>
            <span className="label"> Atmosperic pressure (avg):</span>
            <span style = {{ fontSize: "1.1vw" }}> {mostRecentSol.pressure.avgPressure}</span><span> Pa</span>

          </div>

        </div>

        <hr style = {{border: "0.5px solid gray", marginLeft: "5%", marginRight: "5%"}}/>
        
        <div className = "gridContainer">
        
           <div className = "gridItem">
            <img src={temperature} className = "image"/>
            <br/>
            
            <span className="label"> High: </span>
            <span>{mostRecentSol.temperature.highTemp}</span>°<span>C</span>
            <br/>

            <span className="label"> Low: </span>
            <span>{mostRecentSol.temperature.lowTemp}</span>°<span>C</span>

          </div>

           <div className = "gridItem">
            <img src={pressure} className = "image"/>
            <br/>
            
            <span className="label"> High: </span>
            <span>{mostRecentSol.pressure.maxPressure}</span> <span>Pa</span>
            <br/>

            <span className="label"> Low: </span>
            <span>{mostRecentSol.pressure.minPressure}</span> <span>Pa</span>
          </div>

           <div className = "gridItem">
           <img src={wind} className = "image"/>
           <br/>
            
            <span className="label"> High: </span>
            <span>{mostRecentSol.wind.maxWindSpeed}</span> <span>m/s</span>
            <br/>

            <span className="label"> Low: </span>
            <span>{mostRecentSol.wind.minWindSpeed}</span> <span>m/s</span>

          </div>
        
        </div>
        
        <hr style = {{border: "0.5px solid gray", marginLeft: "5%", marginRight: "5%"}}/>

        <div style = {{marginLeft: "5%", marginRight: "5%"}} >
          <span className = "label">Note:</span>
          <span>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.</span>
        </div>     
      </div>
    );
    
  }
}

export default MarsInsightDashboard;
