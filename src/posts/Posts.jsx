import React from "react";
import "./posts.css";
import Bobber from "../assets/Bobber.jpg"

export default function Posts() {
  return (
    <div className="posts">
      <img src={Bobber} alt="Bobber" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">asdasdsadasdasdasdasdasdasd</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
