import React, { Component, Fragment } from "react";

import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Home from "./layout/Home";
import PropertyDetails from "../components/property/PropertyDetails";
import UnitProfile from "../components/unit/UnitProfile";
import TransactionProfile from "../components/transaction/TransactionProfile";
import TenantProfile from "../components/tenant/TenantProfile";
import AgreementProfile from "../components/agreement/AgreementProfile";
import UserProfile from "./auth/UserProfile";

import PropertyDashBoard from "./property/PropertyDashBoard";
import NavBar from "./layout/NavBar";
import Alerts from "./layout/Alerts";
import Register from "./auth/Register";
import Login from "./auth/LogIn";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import "./App.css";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <NavBar />
              <Switch>
                <PrivateRoute exact path="/" component={PropertyDashBoard} />
                <PrivateRoute
                  exact
                  path="/property/:id"
                  component={PropertyDetails}
                />
                <PrivateRoute exact path="/unit/:id" component={UnitProfile} />
                <PrivateRoute
                  exact
                  path="/transaction/:id"
                  component={TransactionProfile}
                />
                <PrivateRoute
                  exact
                  path="/tenant/:id"
                  component={TenantProfile}
                />
                <PrivateRoute
                  exact
                  path="/agreement/:id"
                  component={AgreementProfile}
                />
                <PrivateRoute exact path="/profile" component={UserProfile} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
