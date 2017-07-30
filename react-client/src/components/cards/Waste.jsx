import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

class Waste extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let hazWaste_PCT = this.props.location.hazardous_waste_percentile

  let chart = c3.generate({
    bindto: '#waste',
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
             ['days', (100-hazWaste_PCT).toFixed(2)]
         ]
     });
   }, 1000);
  }



  render() {
    return (
      <div>
       <div id="waste"></div>
      </div>
    )
  }
}

const mapStateToProps = ({ location }) => {
  return {
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(Waste);
