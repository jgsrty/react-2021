import React, { Component } from "react";
import store from "../../redux/store";
import {
  incrementAction,
  decrementAction,
  asyncIncrementAction,
} from "../../redux/count_actions";

export default class Count extends Component {
  const = { car: "Benz C63" };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    let { value } = this.selectNum;
    store.dispatch(incrementAction(parseInt(value)));
  };
  decrement = () => {
    let { value } = this.selectNum;
    store.dispatch(decrementAction(parseInt(value)));
  };
  addWhenOdd = () => {
    let { value } = this.selectNum;
    let count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(incrementAction(parseInt(value)));
    }
  };
  addWhenSync = () => {
    let { value } = this.selectNum;
    store.dispatch(asyncIncrementAction(parseInt(value), 500));
  };
  render() {
    return (
      <div>
        <h3>当前求和：{store.getState()}</h3>
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
