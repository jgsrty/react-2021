import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  increment = () => {
    let { value } = this.selectNum;
    let { count } = this.state;
    this.setState({ count: count + parseInt(value) });
  };
  decrement = () => {
    let { value } = this.selectNum;
    let { count } = this.state;
    this.setState({ count: count - parseInt(value) });
  };
  addWhenOdd = () => {
    let { value } = this.selectNum;
    let { count } = this.state;
    console.log(count % 2);
    if (count % 2 !== 0) {
      this.setState({ count: count + parseInt(value) });
    }
  };
  addWhenSync = () => {
    let { value } = this.selectNum;
    let { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + parseInt(value) });
    }, 500);
  };
  render() {
    return (
      <div>
        <h3>当前求和：{this.state.count}</h3>
        <select ref={(e) => (this.selectNum = e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>add</button>&nbsp;
        <button onClick={this.decrement}>reduce</button>&nbsp;
        <button onClick={this.addWhenOdd}>when odd</button>&nbsp;
        <button onClick={this.addWhenSync}>async</button>
      </div>
    );
  }
}
