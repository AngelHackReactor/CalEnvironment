import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Air from './cards/Air.jsx';
import Water from './cards/Water.jsx';
import Waste from './cards/Waste.jsx';
import Navbar from './Navbar.jsx';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const style = {
  cards: {

  }
}


class Dashboard extends React.Component {

  render() {

    const title = 'GitHub';
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
              <h1>San Francisco, CA</h1>
            </div>

            <div className="cards">
                  {/* Air Card */}
                  <div className="card-deck">
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369711/air_duuqdf.svg" width="200px" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title text-center">Air</h4>
                        <p className="card-text">
                          <Air /></p>
                      </div>
                    </div>

                    {/* Water Card */}
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369805/water_ypu3ev.svg" width="200px" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title text-center">Water</h4>
                        <p className="card-text">
                          <Water /></p>
                      </div>
                    </div>

                    {/* Waste Card */}
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369896/waste_tjfsv3.svg" width="200px"alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title text-center">Waste</h4>
                        <p className="card-text">
                        <Waste /></p>
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
