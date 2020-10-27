import React, { Component } from "react";
import {
  Viewer,
  Entity,
  PointGraphics,
  EntityDescription,
  KmlDataSource,
} from "resium";
import { Cartesian3 } from "cesium";

class NightSky extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props == null) return;

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
        <KmlDataSource data={this.props.dataPath} />

        {/* <KmlDataSource data={"../data/artificialSkyBrightness.kml"} />   */}
      </Viewer>
    );
  }
}

export default NightSky;
