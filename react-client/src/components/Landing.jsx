import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { setLocation } from '../actions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Landing extends React.Component {

  onSubmit(input) {
    console.log('address', input.address);
    this.props.setLocation(input.address);
    this.props.history.push('/dashboard')
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
              <p className="slogan text-center">Search your neighborhood.</p>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3">
                    <form className="input-group">
                      <Field name="address" component={TextField} type="text" className="form-control" placeholder="Address"/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={handleSubmit(this.onSubmit.bind(this))}>Go</button>
                      </span>
                    </form>
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


const mapStateToProps = ({ location }) => {
  return {
    location: location
  };
};

export default reduxForm({
  form: 'setAddress'
})(connect(mapStateToProps, { setLocation })(Landing));
