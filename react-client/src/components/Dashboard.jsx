import React from 'react';
import ReactDOM from 'react-dom';
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
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');

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

      <div className="dashboard-bg">
        <Navbar />
        {/* Location Name */}

        <div className="container">

            <div className="cards">
                  {/* Air Card */}
                  <div className="card-deck">
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369711/air_duuqdf.svg" width="200px" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Air</h4>
                        <p className="card-text">
                          <Air /></p>
                      </div>

                      <FacebookShareButton
                        url="http://safecalifornia.herokuapp.com"
                        title="Join Github"
                        className="Demo__some-network__share-button">
                        <FacebookIcon
                          size={32}
                          round />
                      </FacebookShareButton>
                    </div>

                    {/* Water Card */}
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369805/water_ypu3ev.svg" width="200px" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Water</h4>
                        <p className="card-text">
                          <Water /></p>
                      </div>
                    </div>

                    {/* Waste Card */}
                    <div className="card" style={style.cards}>
                      <img className="card-img-top mx-auto d-block" src="https://res.cloudinary.com/jescobedo/image/upload/v1501369896/waste_tjfsv3.svg" width="200px"alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">Waste</h4>
                        <p className="card-text">
                        <Waste /></p>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default Dashboard;
