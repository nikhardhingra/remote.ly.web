import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
// import Customers from "./components/Customer/customers";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Customers /> */}
          <BrowserRouter>
            <Switch>
              <PublicRoute component={Home} path="/" exact />
              <PublicRoute component={Login} path="/login" exact />
              <PublicRoute component={Register} path="/register" exact />
              <PrivateRoute component={Dashboard} path="/dashboard" exact />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
