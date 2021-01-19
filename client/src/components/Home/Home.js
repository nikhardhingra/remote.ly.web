import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Remote.ly</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
