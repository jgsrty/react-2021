import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    console.log(personObj);
  };
  render() {
    return (
      <div>
        <input ref={(val) => (this.nameNode = val)} type="text" />
        &nbsp;
        <input ref={(val) => (this.ageNode = val)} type="text" />
        &nbsp;
        <button onClick={this.addPerson}>add person</button>
        <ul>
          <li>name:xx,age:12</li>
          <li>name:xx,age:12</li>
          <li>name:xx,age:12</li>
          <li>name:xx,age:12</li>
        </ul>
      </div>
    );
  }
}
