import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

class Water extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let drinkingWater_PCT = this.props.location.drinking_water_percentile 

    let chart = c3.generate({
      bindto: '#water',
      data: {
        columns: [
            ['days', 0]
        ],
        type: 'bar',
        labels: true
        },
        size: {
          height: 100
        },
        axis: {
          rotated: true,
          x: {
              show: false
          },
          y: {
              show: false,
              max: 100
          }
        },
        legend: {
          hide: true
        },
        tooltip: {
          show: false
        },
        bar: {
          width: 50
        }
    });

    setTimeout(function () {
    chart.load({
       columns: [
           ['days', (100-drinkingWater_PCT).toFixed(2)]
       ]
    });
    }, 1000);
  }
  render() {
    return (
      <div>
      <div id="water"></div>
      </div>
    )
  }
}

const mapStateToProps = ({ location }) => {
  return {
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(Water);