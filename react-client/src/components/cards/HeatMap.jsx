/// app.js
import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer} from 'deck.gl';
import { connect } from 'react-redux';
import { getData } from '../../actions';

// Set your mapbox access token here
// Viewport settings that is shared between mapbox and deck.gl
const viewport = {
   zoom: 12,
   pitch: 60,
   bearing: 20
}

class HeatMap extends React.Component {

  componentWillMount() {
    console.log('here',this.props);
  }

  render() {

    return (
      <MapGL {...viewport}
        longitude= {this.props.lon}
        latitude= {this.props.lat}
        Width={500}
        height={400}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={"pk.eyJ1IjoiamVmZmMxMiIsImEiOiJjajVxc2Q5bzcwbjRnMzNzZDZ5dTVwemh5In0.VLNgP3mIY1ufVRmjPz7-eA"}
        perspectiveEnabled={true}>
      </MapGL>
    );
  }
}
const mapStateToProps = ({ location }) => {
  return {
    location: location.location,
    lat: location.lat,
    lon: location.lon
  }
}

export default connect(mapStateToProps, { getData })(HeatMap);
