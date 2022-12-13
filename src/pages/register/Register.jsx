import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="register"
    >
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your username"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your password"
        />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </motion.div>
  );
}
