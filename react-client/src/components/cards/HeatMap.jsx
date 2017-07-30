import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

import MapGL from 'react-map-gl';




class HeatMap extends React.Component {

  render() {
    return (
      <div>
        <MapGL
          width={400}
          height={400}
          latitude={37.7577}
          longitude={-122.4376}
          zoom={8}
          />
      </div>
    )
  }

}



const mapStateToProps = ({ data, location }) => {
  return {
    data: data.data,
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(HeatMap);
