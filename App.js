import React from "react";
import Menu from "./Menu";
import Start from "./start";
import "./App.css";
import Order from "./Order";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Start} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/order" component={Order} />
    </Router>

  );
};

export default App;
