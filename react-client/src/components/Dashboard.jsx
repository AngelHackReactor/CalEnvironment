import React from 'react';
import ReactDOM from 'react-dom';
import Air from './cards/Air.jsx';
import Water from './cards/Water.jsx';
import Waste from './cards/Waste.jsx';


const style = {
  cards: {

  }
}


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">

        <div className="card-deck">
          <div className="card" style={style.cards}>
            <img className="card-img-top" src="//placehold.it/800x400" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Air</h4>
              <p className="card-text"></p>
            </div>
          </div>

          <div className="card" style={style.cards}>
            <img className="card-img-top" src="//placehold.it/800x400" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Water</h4>
              <p className="card-text"></p>
            </div>
          </div>

          <div className="card" style={style.cards}>
            <img className="card-img-top" src="//placehold.it/800x400" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Waste</h4>
              <p className="card-text"></p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


export default Dashboard;
