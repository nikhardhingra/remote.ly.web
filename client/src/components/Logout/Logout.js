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
        <a
          onClick={this.props.logout}
          className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
          style={{ backgroundColor: "#7A7CFF" }}
          href="#"
        >
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
