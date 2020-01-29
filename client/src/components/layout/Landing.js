import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBarOut from "../NavBarOut/NavBarOut";
import "./Landing.css";
import 'bulma/css/bulma.css';
// import logo from '../../images/BeerHikerLogo2.jpg';
import image from '../../images/beerSamples.jpg';


class Landing extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  

  render() {

    return (
      <div className="container">
        <NavBarOut
        />
        <br />
        <div className="start">
          <div className="columns">
            <div className="column is-three-fifths">
              <p>Log In or Register For an Account</p>
            </div>
            <div className="column is-one-fifths">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Register
                </Link>
            </div>
            <div className="column is-one-fifths">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Log In
                </Link>
            </div>
          </div>
          
        </div>
        <br />
        <div className="landingBackground">
          <img src={image} className="landingBackground" alt='beer' />
     
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default (connect)(mapStateToProps)(Landing);
