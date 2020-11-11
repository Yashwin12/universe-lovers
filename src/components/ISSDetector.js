import React from "react";
import { Cartesian3, Math as CesiumMath } from "cesium";
import { Viewer, Entity, CameraFlyTo, Camera, CzmlDataSource, } from "resium";
import axios from 'axios';

export default class ISSDetector extends React.Component {

    constructor(props) {
        super(props)
          this.state = {
              lat: "28.644800", // Delhi
              long: "77.216721",
              image: "https://isstracker.spaceflight.esa.int/imgs/iss.png",
              temp: "hi"
          }
    }

    componentDidMount() {

        this.state = setInterval(() => axios.get("http://api.open-notify.org/iss-now.json").then(res=> {this.setState({long: res.data.iss_position.longitude}); this.setState({lat: res.data.iss_position.latitude}); }), 5000); // Every five second ISS location will be updated.
        this.state = setInterval(()=> axios.get("http://localhost:3002/temp1").then(res=>console.log(res.data)), 3000) // Every 30 seconds the path of the ISS will be updated.
    }

    render(){
        let image = "https://isstracker.spaceflight.esa.int/imgs/iss.png" // iss image URL
        if (this.props == null) return;
        return (
            <Viewer full>
                
                <Entity position={Cartesian3.fromDegrees(parseFloat(this.state.long), parseFloat(this.state.lat), 100)} billboard = {{image, height: 60, width: 60}} />

                <Camera
                    view={{
                        destination: Cartesian3.fromDegrees(parseFloat(this.state.long), parseFloat(this.state.lat), 15000000),
                        // orientation: { pitch: CesiumMath.toRadians(-60) }
                    }}
                />

                <CameraFlyTo destination = {Cartesian3.fromDegrees(parseFloat(this.state.long), parseFloat(this.state.lat), 15000000)}/>

                <CzmlDataSource data={"http://localhost:3002/loadCZML"} />
            </Viewer>
        )
    }
}