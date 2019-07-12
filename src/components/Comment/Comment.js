import React, { Component } from "react";

import "./Comment.css";

import kuramon from "../../assets/images/Kuramon.png";

class Comment extends Component {
  render() {
    return (
      <div className="post-comments">
        <img src={kuramon} alt="Profile Avatar" width="28px" height="28px" />
        <div className="comment-content">
          <p>
            <span>Kuramon </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            molestias perferendis alias odit, doloribus dolorum repellat
            dignissimos dolor ipsam voluptatum repellendus et magnam, cupiditate
            id fugit dolorem explicabo quisquam odio.
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;
