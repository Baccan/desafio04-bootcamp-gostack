import React, { Component } from "react";

import "./PostItem.css";

import Comment from "../Comment/Comment";

import keramon from "../../assets/images/keramon.jpg";

class PostItem extends Component {
  render() {
    return (
      <>
        <div className="post-profile">
          <img src={keramon} alt="Profile Avatar" width="32px" height="32px" />
          <div className="author">
            <p>Keramon</p>
            <span>12 Jul 2019</span>
          </div>
        </div>
        <div className="post-content">
          <p>Estou procurando meu programador, não interfira!</p>
        </div>
        <Comment />
      </>
    );
  }
}

export default PostItem;
