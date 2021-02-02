import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  searchWord = () => {
    let {
      keyWordEle: { value: keyWord },
    } = this;
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (res) => {
        this.props.getUsers(res.data.items);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  render() {
    return (
      <section>
        <h3>Search GitHub Users</h3>
        <div>
          <input ref={(e) => (this.keyWordEle = e)} type="text" /> &nbsp;
          <button onClick={this.searchWord}>Search</button>
        </div>
      </section>
    );
  }
}
