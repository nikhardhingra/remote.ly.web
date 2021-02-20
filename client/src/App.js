import React, { useEffect } from "react";
import { Provider } from "react-redux";
// import Customers from "./components/Customer/customers";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import GettingStarted from "./components/GettingStarted/GettingStarted";
import WhatIsHaptics from "./components/GettingStarted/WhatIsHaptics";
import ProblemSpace from "./components/GettingStarted/ProblemSpace";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import store from "./store";
import { loadUser } from "./store/actions/authActions";
import HaplyDevKit from "./components/GettingStarted/HaplyDevKit";
import ConfigureProcessing from "./components/GettingStarted/ConfigureProcessing";
import Connect from "./components/Connect/Connect";
import OtherUserProfile from "./components/Profile/OtherUserProfile";
import FAQ from "./components/FAQ/FAQ";
import Remotely from "./components/FAQ/Remotely";
import AboutHaptics from "./components/FAQ/AboutHaptics";

export default function App() {
  useEffect(() => {
    if (localStorage.getItem("remotelytoken")) {
      store.dispatch(loadUser());
    }
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
            <PrivateRoute component={FAQ} path="/faq" exact />
            <PrivateRoute component={Remotely} path="/faq/remote.ly" exact />
            <PrivateRoute
              component={AboutHaptics}
              path="/faq/about-haptics"
              exact
            />
            <PrivateRoute component={Profile} path="/profile" exact />
            <PrivateRoute component={Connect} path="/connect" exact />
            <PrivateRoute
              component={GettingStarted}
              path="/getting-started"
              exact
            />
            <PrivateRoute
              component={WhatIsHaptics}
              path="/getting-started/what-is-haptics"
              exact
            />
            <PrivateRoute
              component={ProblemSpace}
              path="/getting-started/problem-space"
              exact
            />
            <PrivateRoute
              component={HaplyDevKit}
              path="/getting-started/haply-development-kit"
              exact
            />
            <PrivateRoute
              component={ConfigureProcessing}
              path="/getting-started/configure-processing"
              exact
            />
            <PrivateRoute
              component={OtherUserProfile}
              path="/user/profile/:user_id"
              exact
            />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
