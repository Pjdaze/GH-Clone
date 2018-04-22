import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import ScrollToTopRoute from "./History";

import Home from "./components/Home";
import Overview from "./components/Wappers/Overview";
import Repository from "./components/Wappers/Repository";
import Stars from "./components/Wappers/Stars";
import Followers from "./components/Wappers/Followers";
import Following from "./components/Wappers/Following";

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" component={Home} />
    <ScrollToTopRoute path="/Home" component={Home} />
    <ScrollToTopRoute path="/Overview" exact component={Home} />
    <ScrollToTopRoute path="/Repository" component={Repository} />
    <ScrollToTopRoute path="/Stars" component={Stars} />
    <ScrollToTopRoute path="/Followers" component={Followers} />
    <ScrollToTopRoute path="/Following" component={Following} />
  </Switch>
);

export default Routes;
