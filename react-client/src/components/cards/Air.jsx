import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

class Air extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pm25_PCT = this.props.location.pm_2point5_percentile

    let chart = c3.generate({
      bindto: '#chart',
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
         ['days', (100-pm25_PCT).toFixed(2)]
        ]
      });
    }, 1000);
  }


  render() {
    return (
      <div>
      <div id="chart"></div>
      </div>
    )
  }
}


const mapStateToProps = ({ location }) => {
  return {
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(Air);

