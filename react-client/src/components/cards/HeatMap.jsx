/// app.js
import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer} from 'deck.gl';
import { connect } from 'react-redux';
import { getData } from '../../actions';

// Set your mapbox access token here
// Viewport settings that is shared between mapbox and deck.gl
const viewport = {
   zoom: 5,
   pitch: 60,
   bearing: 20
}

const colorScale = r => [r * 255, 140, 200 * (1 - r)];
// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

class HeatMap extends React.Component {

  componentWillMount() {
    console.log('here',this.props);
  }

  render() {

    return (
      <MapGL {...viewport}
        longitude= {this.props.lon}
        latitude= {this.props.lat}
        minWidth={300}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={"pk.eyJ1IjoiamVmZmMxMiIsImEiOiJjajVxc2Q5bzcwbjRnMzNzZDZ5dTVwemh5In0.VLNgP3mIY1ufVRmjPz7-eA"}
        perspectiveEnabled={true}>
        <DeckGL {...viewport} layers={[
          new LineLayer({id: 'line-layer', data})
        ]} />
      </MapGL>
    );
  }
}
const mapStateToProps = ({ location }) => {
  return {
    location: location.location,
    lat: location.location.lat,
    lon: location.location.lon
  }
}

export default connect(mapStateToProps, { getData })(HeatMap);
