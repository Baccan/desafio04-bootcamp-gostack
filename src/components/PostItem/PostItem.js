import React, { Component } from "react";

import "./PostItem.css";

import keramon from "../../assets/images/keramon.jpg";
import kuramon from "../../assets/images/Kuramon.png";

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
        <div className="post-comments">
          <img src={kuramon} alt="Profile Avatar" width="28px" height="28px" />
          <div className="comment-content">
            <p>
              <span>Kuramon </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              molestias perferendis alias odit, doloribus dolorum repellat
              dignissimos dolor ipsam voluptatum repellendus et magnam,
              cupiditate id fugit dolorem explicabo quisquam odio.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default PostItem;
