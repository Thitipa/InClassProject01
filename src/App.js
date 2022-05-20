import * as React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Switch ,Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import TipLogin from "./components/TipLogin";

function App() {
  return (
    <div className="App">
      <TipLogin/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/login"/> 
        </Switch>
    </div>
  );
}

export default App;
