import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { hasGeo, setLocation, setCoords, saveCoords } from '../actions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const styles = {
  textField: {
    color: '#FFF',
    fontWeight: 300
  },
  button: {
    marginLeft: '5px',
    marginRight: '10px'
  }
};

const validAddress = value => {
  if (!(value && /^\d+\s[A-z0-9\s]+\s[A-z]+,\s[A-z]+/.test(value))) {
    return 'Please enter a street address followed by a comma and the city';
  } else {
    return undefined;
  }
};

class Landing extends React.Component {
  componentDidMount() {
    if (window.navigator.geolocation) {
      this.props.hasGeo();
    }
  }

  onSubmit(input) {
    this.props.setLocation(input.address);
    this.props.history.push('/dashboard');
  }

  submitCoords() {
    window.navigator.geolocation.getCurrentPosition((position, err) => {
      if (err) console.log('Geolocation error:', err);
      this.props.setCoords(position.coords.latitude, position.coords.longitude);
      this.props.saveCoords(position.coords.latitude, position.coords.longitude);
    });
    this.props.history.push('/dashboard');
  }

  useGPS(props) {
    return props.geoloc ?
    <span className="input-group-btn">
      <button
        className="btn btn-default"
        type="button"
        onClick={props.submitCoords}
      >Use GPS</button>
    </span> :
    null;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        {/* Full page bg with mask */}
        <div className="view hm-stylish-strong">
          <div className="full-pg-img">
            <div className="mask">
              <h1 className="hero display-4 text-center">SAFE CALIFORNIA</h1>
              <p className="slogan text-center">Knowledge is power. Explore your neighborhood.</p>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3">
                    <form className="input-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                      <Field
                        name="address"
                        component={TextField}
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        validate={validAddress}
                        inputStyle={styles.textField}
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-default"
                          type="submit"
                          style={styles.button}
                        >
                          Go
                        </button>
                      </span>
                      <this.useGPS
                        geoloc={this.props.geoloc}
                        submitCoords={this.submitCoords.bind(this)}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="container">
          <h2 className="text-center custom-font">ABOUT</h2>
          <br/>
          <br/>
          <div className="text-center secondary-text custom-font">
            <p>Safe California seeks to empower citizens and make Environmental Health Screening information easily accessible.
            We believe that all Californians deserve to be informed on the state of the environment around their homes, schools, 
            and workplaces in an easy and highly accessible manner.</p>
            <p>All of our data is from <a target="_blank" href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-version-20">CalEnviroScreen Version 2.0</a></p>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <span className="custom-font font-thinner">SAFE CALIFORNIA 2017</span>
          </div>
        </footer>

      </div>
    )
  }
}


const mapStateToProps = ({ location }) => {
  return {
    geoloc: location.geoloc,
    location: location.location,
  };
};

export default reduxForm({
  form: 'setAddress'
})(connect(mapStateToProps, { hasGeo, setLocation, setCoords, saveCoords })(Landing));
