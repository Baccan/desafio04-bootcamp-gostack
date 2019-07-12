import React, { Component } from "react";

import "./PostList.css";

import PostItem from "../PostItem/PostItem";

class PostList extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="post-list">
          <PostItem />
        </div>
      </div>
    );
  }
}

export default PostList;
