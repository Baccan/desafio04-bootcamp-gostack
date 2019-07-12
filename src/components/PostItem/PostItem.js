import React, { Component } from "react";

import "./PostItem.css";

import Comment from "../Comment/Comment";

function ContentFile({ content }) {
  const { contentFile, contentHeader } = content;

  if (contentFile) {
    return <img src={contentFile} alt={contentHeader} />;
  }

  return null;
}

function PostItem({ id, author, date, content, comments }) {
  return (
    <>
      <div key={id} className="post-profile">
        <img
          src={author.avatar}
          alt="Profile Avatar"
          width="32px"
          height="32px"
        />
        <div className="author">
          <p>{author.name}</p>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content.contentHeader}</p>
        <ContentFile content={content} />
      </div>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  );
}

export default PostItem;
