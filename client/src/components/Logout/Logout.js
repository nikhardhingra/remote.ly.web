import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";
import PropTypes from "prop-types";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    return (
      <Fragment>
        <a onClick={this.props.logout} href="#">
          Logout
        </a>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
