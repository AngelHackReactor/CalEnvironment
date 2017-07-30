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

        {/* Full page bg with mask */}
        <div className="view hm-stylish-strong">
          <div className="full-pg-img">
            <div className="mask">
              <h1 className="hero display-4 text-center">SAFE CALIFORNIA</h1>
              <p className="slogan text-center">Search your neighborhood.</p>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Check your home..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.handleSearch.bind(this)} type="button">Go!</button>
                      </span>
                    </div>
                  </div>                                    
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}



export default Landing;
