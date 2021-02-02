import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { activeMouse: false };
  handleHover = (flag) => {
    return () => {
      this.setState({ activeMouse: flag });
    };
  };
  changeCheck = (id) => {
    return (e) => {
      this.props.updateTodo({ id, done: e.target.checked });
    };
  };
  deleteItem = (id) => {
    return () => {
      if (window.confirm("确认删除？")) {
        this.props.deleteItem(id);
      }
    };
  };
  render() {
    let { id, name, done } = this.props;
    let { activeMouse } = this.state;
    return (
      <li
        style={{ background: activeMouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.changeCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={this.deleteItem(id)}
          className="btn btn-danger"
          style={{ display: activeMouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
