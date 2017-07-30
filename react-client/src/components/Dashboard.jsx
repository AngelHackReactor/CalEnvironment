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

const {TwitterShareButton} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');

const style = {
  cards: {
  }
}

class Dashboard extends React.Component {

  render() {

    return (

      <div className="dashboard-bg">
        <Navbar />

        <div className="container">

          {/* Location Name
          <div className="row city-name">
            <div className="row">
              <div className="col-sm-12">
                <h1>San Fransico, CA</h1>
              </div>
            </div>
          </div>*/}
            <div className="jumbotron city-name">
              <h1>{this.props.location}</h1>
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
                  <p class="card-text">blah blah blah blah. </p>
                  <div className="card-block">
                    <Air />
                  </div>
                </div>

                  <div className="card card-air text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                      <div className="card-block">
                        <div className="row">
                          <div className="col-md-6">
                            <p>State Medium</p>
                            <h1> 46% </h1>
                          </div>
                          <div className="col-md-6">
                            <p>Census Tract</p>
                            <h1> 80% </h1>
                          </div>
                        </div>
                     </div>
                   </div>
              </div>
            </div>
            <br/>

            {/* Air Card */}
            <div className="cards text-center">

              <div className="card-deck">
                <div className="card card-water" style={style.cards}>
                  <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501393344/water_tnf1h1.svg" width="200px" alt="Card image cap"/>
                    <h4 className="card-title text-center"></h4>
                </div>

                <div className="card card-water text-center" style={style.cards}>
                  <h4 className="card-title"></h4>
                  <p class="card-text">blah blah blah blah. </p>
                  <div className="card-block">
                    <Water />
                  </div>
                </div>

                  <div className="card card-water text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                      <div className="card-block">
                        <div className="row">
                          <div className="col-md-6">
                            <p>State Medium</p>
                            <h1> 46% </h1>
                          </div>
                          <div className="col-md-6">
                            <p>Census Tract</p>
                            <h1> 80% </h1>
                          </div>
                        </div>
                     </div>
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
                  <p class="card-text">blah blah blah blah. </p>
                  <div className="card-block">
                    <Waste />
                  </div>
                </div>

                  <div className="card card-waste text-center" style={style.cards}>
                    <h4 className="card-title"></h4>
                      <div className="card-block">
                        <div className="row">
                          <div className="col-md-6">
                            <p>State Medium</p>
                            <h1> 46% </h1>
                          </div>
                          <div className="col-md-6">
                            <p>Census Tract</p>
                            <h1> 80% </h1>
                          </div>
                        </div>
                     </div>
                   </div>
              </div>
            </div>
          </div>



            {/* twitter share */}
            <TwitterShareButton
              url={'bestfitsearch.info'}
              title={`San Francisco, CA has an AVERAGE health score according to CalEnvironment.com`}
              className="share-button">
             <TwitterIcon size={50} round />
           </TwitterShareButton>
        </div>
    )
  }
}

const mapStateToProps = ({ location }) => {
  return {
    location: location.location
  }
}

export default connect(mapStateToProps, { getData })(Dashboard);
