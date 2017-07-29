import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="display-1">CalEnviro</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Address"/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}



export default Landing;
