import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  selectAll = (e) => {
    this.props.selectAll(e.target.checked);
  };
  clearAllDoned = () => {
    this.props.clearAllDoned();
  };
  render() {
    let { todos } = this.props;
    let total = todos.length;
    let doned = todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={total === doned && total !== 0 ? true : false}
            onChange={this.selectAll}
          />
        </label>
        <span>
          <span>已完成{doned}</span> / 全部{total}
        </span>
        <button onClick={this.clearAllDoned} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
