import React from 'react';


class Water extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let chart = c3.generate({
      bindto: '#water',
      type:'line',
      data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
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
      chart.load({
        columns: [
          ['data1', 230, 190, 300, 500, 300, 400]
        ]
      });
    }, 1000);

    setTimeout(function () {
      chart.load({
        columns: [
          ['data3', 130, 150, 200, 300, 200, 100]
        ]
      });
    }, 1500);

    setTimeout(function () {
      chart.unload({
        ids: 'data1'
      });
    }, 2000);

    
  }
  render() {
    return (
      <div>
      <div id="water"></div>
      </div>
    )
  }
}


export default Water;
