import React from "react";
import { Viewer, Entity, PointGraphics, EntityDescription, KmlDataSource } from "resium";
import { hot } from "react-hot-loader/root";
import { Cartesian3 } from "cesium";
  
function App() {
  return (
    <Viewer full>
      {/* <Entity
        description="test"
        name="tokyo"
        point={{ pixelSize: 10 }}
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
      >
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity> */}              
      <KmlDataSource data={"http://localhost:5000/kmlFile"} />      
      
      {/* <KmlDataSource data={"../data/artificialSkyBrightness.kml"} />   */}
    </Viewer>
  );
}

export default hot(App);