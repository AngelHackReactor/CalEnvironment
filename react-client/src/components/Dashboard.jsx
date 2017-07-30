import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Air from './cards/Air.jsx';
import Water from './cards/Water.jsx';
import Waste from './cards/Waste.jsx';
import Navbar from './Navbar.jsx';
import HeatMap from './cards/HeatMap.jsx';
import {ShareButtons, generateShareIcon} from 'react-share';
import Loader from 'halogen/GridLoader';


const {TwitterShareButton} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');

const style = {
  cards: {
  }
}

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mapped:false
    }
  }

  componentDidMount() {
    let context = this;
    setTimeout(() => {
      context.setState({
        mapped:true
      })
    },4300)
  }

  render() {
    if (this.props.location) {

      let pm25 = this.props.location.pm_2point5
      let dieselPM = this.props.location.diesel_pm
      let drinkingWater = this.props.location.drinking_water
      let groundwater = this.props.location.groundwater_threat
      let hazWaste = this.props.location.hazardous_waste
      let solWaste = this.props.location.solid_waste

      let pm25_PCT = this.props.location.pm_2point5_percentile
      let dieselPM_PCT = this.props.location.diesel_pm_percentile
      let drinkingWater_PCT = this.props.location.drinking_water_percentile
      let groundwater_PCT = this.props.location.groundwater_threat_percentile
      let hazWaste_PCT = this.props.location.hazardous_waste_percentile
      let solWaste_PCT = this.props.location.solid_waste_percentile

      return (
        <div className="dashboard-margin">
          <Navbar />

          <div className="container">

              <div className="jumbotron city-name">
                <h1>{this.props.location.city}, {this.props.location.county} County</h1>
                <h3>Census Tract ID: {this.props.location.census_tract_id}</h3>
              </div>

              {/* Air Card */}
              <div className="cards text-center">

                <div className="card-deck">
                  <div className="card card-air" style={style.cards}>
                    <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501393341/air_jcqxns.svg" width="200px" alt="Card image cap"/>
                      <h4 className="card-title text-center"></h4>
                  </div>
                  <div className="card card-air text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                    <p className="card-text"> Particulate Matter (PM2.5) </p>
                    <div className="card-block">
                      <Air />
                    </div>
                    <p className="card-text">Your tract is better than {(100-pm25_PCT).toFixed(2)}% of the state</p>                    
                  </div>

                    <div className="card card-air text-center" style={style.cards}>
                      <h4 className="card-title"></h4>
                        <div className="card-block">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Your Tract</p>
                              <h1>{pm25}</h1>
                            </div>
                            <div className="col-md-6">
                              <p>State Median</p>
                              <h1>10.06</h1>
                            </div>
                          </div>
                       </div>
                      <p>Annual mean Particulate Matter (PM2.5) concentrations</p>
                      </div>
                </div>
              </div>
              <br/>

              {/* Water Card */}
              <div className="cards text-center">

                <div className="card-deck">
                  <div className="card card-water" style={style.cards}>
                    <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501393344/water_tnf1h1.svg" width="200px" alt="Card image cap"/>
                      <h4 className="card-title text-center"></h4>
                  </div>

                  <div className="card card-water text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                    <p className="card-text"> Drinking Water </p>
                    <div className="card-block">
                      <Water />
                    </div>
                    <p className="card-text">Your tract is better than {(100-drinkingWater_PCT).toFixed(2)}% of the state</p>
                  </div>

                    <div className="card card-water text-center" style={style.cards}>
                      <h4 className="card-title"></h4>
                        <div className="card-block">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Your Tract</p>
                              <h1>{drinkingWater}</h1>
                            </div>
                            <div className="col-md-6">
                              <p>State Median</p>
                              <h1>342.78</h1>
                            </div>
                          </div>
                        </div>
                        <p>Drinking water contaminant index for selected contaminants</p>
                     </div>
                </div>
              </div>
              <br/>

              {/* Waste Card */}
              <div className="cards text-center">

                <div className="card-deck">
                  <div className="card card-waste" style={style.cards}>
                    <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501393348/waste_evxmx6.svg" width="200px"alt="Card image cap"/>
                      <h4 className="card-title text-center"></h4>
                  </div>

                  <div className="card card-waste text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                    <p className="card-text"> Hazardous Waste </p>
                    <div className="card-block">
                      <Waste />
                    </div>
                    <p className="card-text">Your tract is better than {(100-hazWaste_PCT).toFixed(2)}% of the state</p>
                  </div>

                    <div className="card card-waste text-center" style={style.cards}>
                      <h4 className="card-title"></h4>
                        <div className="card-block">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Your Tract</p>
                              <h1>{hazWaste}</h1>
                            </div>
                            <div className="col-md-6">
                              <p>State Median</p>
                              <h1>0.06</h1>
                            </div>
                          </div>

                        </div>
                        <p>Sum of weighted haz-waste facilities within distances to populated blocks</p>                          
                    </div>
                </div>
              </div>


            {/* Map Card */}
            <div className="container map">
              {this.state.mapped ? <HeatMap /> : null}
            </div>

            {/* twitter share */}
            <TwitterShareButton
              url={'google.com'}
              title={this.props.location.city+` has an AVERAGE health score according to CalEnvironment.com`}
              className="share-button">
             <TwitterIcon size={45} round />
            </TwitterShareButton>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=r9.info@epa.gov" target="_blank"> <img className = "gmail-button" src="./ic_launcher.png"/> </a>

          </div>
        </div>
      )
    } else {
      return (
        <div className="loading">
          <Loader color="#424957" size="20px"/>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ location }) => {
  return {
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(Dashboard);
