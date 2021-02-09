import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import Home from "./home";
// import About from "./about";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));

export default class LazyLoadDemo extends Component {
  render() {
    return (
      <div>
        <span>LazyLoadDemo</span>
        <div>
          <NavLink to="/about">Home</NavLink>
          <br />
          <NavLink to="/home">About</NavLink>
        </div>
        <div>
          <Suspense fallback={<h2>loading...</h2>}>
            <Route path="/about" component={Home}>
              Home
            </Route>
            <Route path="/home" component={About}>
              About
            </Route>
          </Suspense>
        </div>
      </div>
    );
  }
}
