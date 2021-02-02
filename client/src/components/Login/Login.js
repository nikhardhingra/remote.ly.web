import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";
import Navbar from "../Navbar";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for a register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg,
        });
      } else {
        this.setState({
          msg: null,
        });
      }
    }

    if (isAuthenticated) this.props.history.push("/dashboard");
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    this.props.login(user);
  };

  render() {
    return (
      <>
        <Link to="/">
          <i className="fas fa-home absolute top-5 left-5 text-xl" />
        </Link>
        <div
          className="h-screen flex justify-center items-center"
          style={{ backgroundColor: "#F5F5FB" }}
        >
          <div className="loginCard m-6 bg-white p-12 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-6">Login</h3>
            {this.props.error.msg.msg ? (
              <p style={{ color: "red" }}>{this.props.error.msg.msg}</p>
            ) : null}
            <form onSubmit={this.onSubmit}>
              <div class="relative flex w-full flex-wrap items-stretch mb-6">
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i class="far fa-envelope"></i>
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  style={{ backgroundColor: "#EFF0F6" }}
                  onChange={this.onChange}
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                />
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-6">
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i class="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={{ backgroundColor: "#EFF0F6" }}
                  onChange={this.onChange}
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                />
              </div>
              <button
                style={{ backgroundColor: "#0026CA" }}
                className="w-full py-4 text-white text-sm rounded-2xl"
                type="submit"
              >
                Login
              </button>
            </form>
            <Link to="/register" className="text-xs text-blue-800">
              Don't have an account, yet?
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
