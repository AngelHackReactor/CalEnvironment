import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

class Waste extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  this.props.getData();    
  
  let chart = c3.generate({
    bindto: '#waste',
    data: {
      columns: [
        ['local', 30, 200, 100, 400, 150, 25],
        ['average', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    },
    size: {
      height: 200
    },
    axis: {
      y: {
        show: false
      }
    }
  });

  setTimeout(function () {
    chart.transform('local', 'average');
  }, 1000);

  setTimeout(function () {
    chart.transform('local', 'average');
  }, 2000);

  setTimeout(function () {
    chart.transform('bar');
  }, 3000);

  setTimeout(function () {
    chart.transform('area');
  }, 4000);
  }



  render() {
    return (
      <div>
       <div id="waste">{console.log('HELLOO INSIDE WASTE CARd',this.props.data)}</div>
      </div>
    )
  }
}


const mapStateToProps = ({ data }) => {
  return {
    data: data.data
  }
}

export default connect(mapStateToProps, { getData })(Waste);
