import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import ProfilePicture from "../../assets/ME.jpg";
import { motion } from "framer-motion";

export default function Setting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="settings"
    >
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={ProfilePicture} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <input type="text" placeholder="Username" required />

          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </motion.div>
  );
}
