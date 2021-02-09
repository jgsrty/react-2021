import React, { Component } from "react";
import SetStateDemo from "./components/1._setState";
import LazyLoadDemo from "./components/2._lazyLoad";

export default class App extends Component {
  render() {
    return (
      <div>
        <SetStateDemo />
        <hr />
        <LazyLoadDemo />
      </div>
    );
  }
}
