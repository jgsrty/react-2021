import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      {
        id: "001",
        name: "eat",
        done: true,
      },
      {
        id: "002",
        name: "sleep",
        done: false,
      },
    ],
  };
  addTodoItem = (data) => {
    let { todos } = this.state;
    let newTodos = [data, ...todos];
    this.setState({ todos: newTodos });
  };
  updateTodo = (data) => {
    let { id, done } = data;
    let { todos } = this.state;
    let newData = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newData });
  };
  deleteItem = (id) => {
    let { todos } = this.state;
    let deledTodo = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: deledTodo });
  };
  selectAll = (flag) => {
    let { todos } = this.state;
    let newTodos = todos.map((item) => {
      return { ...item, done: flag };
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };
  clearAllDoned = () => {
    let { todos } = this.state;
    let allDoned = todos.filter((item) => {
      return item.done === false;
    });
    this.setState({ todos: allDoned });
  };
  render() {
    let { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodoItem={this.addTodoItem} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteItem={this.deleteItem}
          />
          <Footer
            todos={todos}
            selectAll={this.selectAll}
            clearAllDoned={this.clearAllDoned}
          />
        </div>
      </div>
    );
  }
}
