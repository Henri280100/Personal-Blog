import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import AboutBackground from "../../assets/background.jpg";
import ME from "../../assets/ME.jpg";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <div className="aboutWrapper">
        <img src={AboutBackground} alt="" className="aboutImg" />
        <h1 className="aboutTitle">ABOUT ME</h1>
        <img src={ME} alt="" className="aboutMeImg" />
        <p className="aboutDesc">
          Hello everyone, my name is Pham Ngoc Dang Khoa, you can call me Henri
          and I'm a full-stack developer, a blogger.
        </p>
      </div>
    </motion.div>
  );
}
