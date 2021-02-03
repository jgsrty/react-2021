import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">react router demo</div>
        <div className="content">
          <div className="nav">
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
          </div>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    );
  }
}
