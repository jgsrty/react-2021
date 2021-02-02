import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudents = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (res) => {
        console.log("suc",res);
      },
      (err) => console.log(err)
    );
  };
  getCars = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (res) => {
        console.log("suc",res);
      },
      (err) => console.log(err)
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudents}>get students</button>
        <button onClick={this.getCars}>get cars</button>
      </div>
    );
  }
}
