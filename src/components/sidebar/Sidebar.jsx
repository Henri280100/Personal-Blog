import React from "react";
import "./sidebar.css";
import AboutMe from "../../assets/About_me.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={AboutMe} alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://facebook.com">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
