import React, { Component } from "react";

export default class SetStateDemo extends Component {
  state = { count: 0 };
  add = () => {
    // let { count } = this.state;
    // this.setState({ count: count + 1 });
    this.setState((state, props) => {
      console.log(props);
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h4>current sum: {this.state.count}</h4>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}
