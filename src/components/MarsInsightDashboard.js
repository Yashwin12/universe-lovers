import React, { Component } from "react";
// import background from "/images/background.svg";

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
        <h1> Latest weather at Elysium Plantitia</h1>

        <div class="date">
          <h2>
            Sol 
            <span>{mostRecentSol.solDay}</span>
          </h2>
          <p>{mostRecentSol.date}</p>
        </div>

        <div class="temp">
          <h2 class="section-title">Temperature</h2>
          <p class="reading">
            High:
            <span>{mostRecentSol.temperature.highTemp}</span>°<span>C</span>
          </p>
          <p class="reading">
            Low:
            <span>{mostRecentSol.temperature.lowTemp}</span>°<span>C</span>
          </p>
        </div>

        <div class="temp">
          <h2 class="section-title">Pressure</h2>
          <p class="reading">
            High:
            <span>{mostRecentSol.pressure.maxPressure}</span> <span>Pa</span>
          </p>
          <p class="reading">
            Low:
            <span>{mostRecentSol.pressure.minPressure}</span> <span>Pa</span>
          </p>
        </div>

        <div class="temp">
          <h2 class="section-title">Wind</h2>
          <p class="reading">
            High:
            <span>{mostRecentSol.wind.maxWindSpeed}</span> <span>m/s</span>
          </p>
          <p class="reading">
            Low:
            <span>{mostRecentSol.wind.minWindSpeed}</span> <span>m/s</span>
          </p>
        </div>
                
      </div>
    );
  }
}

export default MarsInsightDashboard;
