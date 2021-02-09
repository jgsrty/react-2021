import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.createPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h5>上方总数为：{this.props.count}</h5>
        <input ref={(val) => (this.nameNode = val)} type="text" />
        &nbsp;
        <input ref={(val) => (this.ageNode = val)} type="text" />
        &nbsp;
        <button onClick={this.addPerson}>add person</button>
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name}-{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, count: state.count }),
  { createPerson }
)(Person);
