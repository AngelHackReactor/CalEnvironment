import React from 'react';


class Waste extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
             ['days', 100-15]
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


export default Waste;
