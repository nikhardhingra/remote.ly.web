import React, { useEffect } from "react";
import { Provider } from "react-redux";
// import Customers from "./components/Customer/customers";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import store from "./store";
import { loadUser } from "./store/actions/authActions";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
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
            <PrivateRoute component={Profile} path="/profile" exact />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
