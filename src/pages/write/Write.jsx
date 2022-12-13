import React from "react";
import "./write.css";
import CoverImg from "../../assets/header-img.jpg";
import { motion } from "framer-motion";
import TextEditor from "../../components/texteditor/TextEditor";

export default function Write({ props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="write"
    >
      <img className="writeImg" src={CoverImg} alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text`"
            id="Title"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
      <div className="editor">
        <TextEditor />
      </div>
    </motion.div>
  );
}
