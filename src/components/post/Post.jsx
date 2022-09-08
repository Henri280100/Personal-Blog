import React from 'react'
import './post.css'

export default function Post({ img }) {
  return (
    <div className="post">
      <img src={img} alt="Bobber" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">asdasdsadasdasdasdasdasdasd</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        asdasdasd1111111111sadasdasdasdasdasdasdasdasd
        asdasdasd1111111111sadasdasdasdasdasd
        asdasdasd1111111111sadasdasdasdasdasdasdasdasd
        asdasdasd1111111111sadasdasdasdasdasd
        asdasdasd1111111111sadasdasdasdasdasdasdasdasd
        asdasdasd1111111111sadasdasdasdasdasd
      </p>
    </div>
  );
}
