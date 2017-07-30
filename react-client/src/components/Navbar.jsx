import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
  button: {
    color: 'grey',
  }
};


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.fixed-top').addClass('opaque');
      } else {
        $('.fixed-top').removeClass('opaque');
      }
    });
  }

  render() {
    return (
       <div className="Navigation">
        <nav className="navbar navbar-toggleable-md navbar-dark fixed-top transition">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand navbar-hero" style={{color: 'grey'}} href="/">SAFE CALIFORNIA</a>
                <div className="collapse navbar-collapse" id="navbarNav1">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" style={{color: 'grey'}} href="/reset">Home <span className="sr-only">(current)</span></a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
