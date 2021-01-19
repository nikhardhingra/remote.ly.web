import React, { Component } from "react";
import Logout from "../Logout/Logout";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard Page</h3>
        <Logout />
      </div>
    );
  }
}
