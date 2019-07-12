import React, { Component } from "react";

import "./PostList.css";

import PostItem from "../PostItem/PostItem";

import keramon from "../../assets/images/keramon.jpg";
import kuramon from "../../assets/images/Kuramon.png";
import baccan from "../../assets/images/gustavo baccan.jpg";
import stealy from "../../assets/images/stealy.jpg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Keramon",
          avatar: keramon
        },
        date: "12 Jul 2019",
        content: {
          contentHeader: `Estou procurando meu programador, não interfira!`,
          contentFile: ""
        },
        comments: [
          {
            id: 2,
            author: {
              name: "Kuramon",
              avatar: kuramon
            },
            content: "Alguém viu ele por ai?"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gustavo Baccan Gomes",
          avatar: baccan
        },
        date: "12 Jul 2019",
        content: {
          contentHeader: `Vejam! o Stealy!`,
          contentFile: stealy
        },
        comments: [
          {
            id: 1,
            author: {
              name: "Kuramon",
              avatar: kuramon
            },
            content: "Dolorum repellat dignissimos dolor ipsam voluptatum "
          },
          {
            id: 2,
            author: {
              name: "Kuramon",
              avatar: kuramon
            },
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae molestias perferendis alias odit, doloribus dolorum repellat."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Keramon",
          avatar: keramon
        },
        date: "12 Jul 2019",
        content: {
          contentHeader: `Estou procurando meu programador, não interfira!`,
          contentFile: ""
        },
        comments: [
          {
            id: 2,
            author: {
              name: "Kuramon",
              avatar: kuramon
            },
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae molestias perferendis alias odit, doloribus dolorum repellat dignissimos dolor ipsam voluptatum repellendus et magnam, cupiditate id fugit dolorem explicabo quisquam odio."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => (
          <div key={post.id} className="container">
            <div className="post-list">
              <PostItem {...post} />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default PostList;
