import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { register } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";

class Register extends Component {
  state = {
    name: "",
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
      if (error.id === "REGISTER_FAIL") {
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

    const { name, email, password } = this.state;

    const user = {
      name,
      email,
      password,
    };

    this.props.register(user);
  };

  render() {
    return (
      <>
        <h3>Register Page</h3>
        {this.props.error.msg.msg ? (
          <p style={{ color: "red" }}>{this.props.error.msg.msg}</p>
        ) : null}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.onChange}
          />

          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to="/login">Login</Link>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
