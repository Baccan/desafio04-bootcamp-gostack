import React from "react";

import "./Comment.css";

function Comment({ id, author, content }) {
  return (
    <div key={id} className="post-comments">
      <img
        src={author.avatar}
        alt="Profile Avatar"
        width="28px"
        height="28px"
      />
      <div className="comment-content">
        <p>
          <span>{author.name} </span>
          {content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
