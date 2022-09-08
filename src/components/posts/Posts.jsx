import React from "react";
import Post from "../post/Post";
import "./posts.css";
import Bobber from "../../assets/Bobber.jpg";

export default function Posts() {
  return (
    <div className="posts">
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
      <Post img={Bobber}/>
    </div>
  );
}
