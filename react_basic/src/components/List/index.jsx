import React, { Component } from "react";

export default class List extends Component {
  render() {
    let { users } = this.props;
    return (
      <div className="list">
        {users.map((item) => {
          return (
            <div className="item">
              <a rel="noreferrer" href={item.html_url} target="_blank">
                <img src={item.avatar_url} alt="" />
              </a>
              <div>{item.login}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
