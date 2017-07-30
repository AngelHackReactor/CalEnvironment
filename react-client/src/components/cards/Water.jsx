import React from 'react';


class Water extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
           ['days', 100-30]
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


export default Water;
