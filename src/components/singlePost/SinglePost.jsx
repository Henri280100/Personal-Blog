import React from "react";
import "./singlePost.css";
import Motorcycle from "../../assets/Bobber.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Motorcycle} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Asdasdasdqweqweasd
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Henri</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
          Loreasdasdsadasdsadasdsadsadasdasdsadasdsad
          asdasdasdasdasdasdsadsadsadsadasdsaddsdasdsa
        </p>
      </div>
    </div>
  );
}
