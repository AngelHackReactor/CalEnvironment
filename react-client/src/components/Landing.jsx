import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);


  }

  handleSearch() {
    window.location = '/dashboard'
  }
  render() {
    return (
      <div>
        <div className="container">

            <div className="row h-50">
              <div className="col-sm-12 text-center my-auto">
                <h1 className="hero display-4">SAFE CALIFORNIA</h1>
                <p className="slogan">Search your neighborhood.</p>
              </div>
              <div className="col-sm-6 offset-sm-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Address"/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" onClick={this.handleSearch.bind(this)} type="button">Go!</button>
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
