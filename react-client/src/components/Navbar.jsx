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
      if ($(this).scrollTop() > 20) {
        $('.fixed-top').addClass('opaque');
      } else {
        $('.fixed-top').removeClass('opaque');
      }
    });
  }

  render() {
    return (
       <div className="Navigation">
        <nav className="navbar navbar-toggleable-md navbar-light fixed-top transition">
            <div className="container">
                <a className="navbar-brand navbar-hero" href="/">SAFE CALIFORNIA</a>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
