import React, { Component } from "react";
import propTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    updateTodo: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
    todos: propTypes.array.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteItem } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item
              {...item}
              key={item.id}
              updateTodo={updateTodo}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    );
  }
}
