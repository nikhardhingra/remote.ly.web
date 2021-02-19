import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";
import PropTypes from "prop-types";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func,
    isAuthenticated: PropTypes.bool,
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={this.logout}
          className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
          style={{ backgroundColor: "#7A7CFF" }}
        >
          Logout
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
