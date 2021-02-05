import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  asyncIncrementAction,
} from "../../redux/actions/count";

class Count extends Component {
  const = { car: "Benz C63" };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    let { value } = this.selectNum;
    this.props.incrementAction(parseInt(value));
  };
  decrement = () => {
    let { value } = this.selectNum;
    this.props.decrementAction(parseInt(value));
  };
  addWhenOdd = () => {
    let { value } = this.selectNum;
    if (this.props.count % 2 !== 0) {
      this.props.incrementAction(parseInt(value));
    }
  };
  addWhenSync = () => {
    let { value } = this.selectNum;
    this.props.asyncIncrementAction(parseInt(value), 500);
  };
  render() {
    return (
      <div>
        <h3>当前求和：{this.props.count}</h3>
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

export default connect(
  (data) => ({ count: data.count }),
  {
    incrementAction,
    decrementAction,
    asyncIncrementAction,
  }
  // (dispatch) => ({
  //   jia: (number) => dispatch(incrementAction(number)),
  //   jian: (number) => dispatch(decrementAction(number)),
  //   jianAsync: (number, time) => dispatch(asyncIncrementAction(number, time)),
  // })
)(Count);
