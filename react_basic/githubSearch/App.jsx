import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component {
  state = { users: [] };
  getUsers = (users) => {
    this.setState({ users });
  };
  render() {
    return (
      <div>
        <Search getUsers={this.getUsers} />
        <List users={this.state.users} />
      </div>
    );
  }
}
