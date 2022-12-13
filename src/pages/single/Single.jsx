import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import { motion } from "framer-motion";
export default function Single() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="single"
    >
      <SinglePost />
      <Sidebar />
    </motion.div>
  );
}
