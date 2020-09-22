import React, { Component } from "react";

class MarsDailyWeatherReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeBox( sols ){

    let returnArray = []
    sols.forEach( ( sol ) => {
        returnArray.push(
            <div className="col-auto solBox">
                
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
    return returnArray;
  }

  render() {
    let { sols } = this.props;
    
    if ( sols === null || sols === undefined )
        return null;
    
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