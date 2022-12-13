import React from "react";
import "./topbar.css";
import ME from "../../assets/ME.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = true;
  const admin = true;

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://facebook.com">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com">
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </a>
        <a href="https://linkedin.com">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Henri280100">
          <i className="topIcon fa-brands fa-square-github"></i>
        </a>
        <a href="https://instagram.com">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          {admin && (
            <li className="topListItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
          )}
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting" className="link">
            <img src={ME} alt="" className="topImg" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className="searchBox">
          <button className="btnSearch">
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            className="inputSearch"
            placeholder="Searching..."
          />
        </div>
      </div>
    </div>
  );
}
