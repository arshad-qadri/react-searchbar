import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import Slider from "./Slider";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/slider" component={Slider} />
    </Switch>
  );
}

export default App;
