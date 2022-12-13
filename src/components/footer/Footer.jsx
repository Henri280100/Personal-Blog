import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="icon facebook">
          <a href="https://facebook.com">
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
          </a>
        </div>
        <div className="icon instagram">
          <a href="https://instagram.com">
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </a>
        </div>
        <div className="icon linkedin">
          <a href="https://linkedin.com">
            <span>
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </a>
        </div>
        <div className="icon twitter">
          <a href="https://twitter.com">
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
          </a>
        </div>
        <div className="icon github">
          <a href="https://github.com/Henri280100">
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
}
