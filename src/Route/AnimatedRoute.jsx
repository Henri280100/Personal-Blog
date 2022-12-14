import React from "react";
import Home from "../pages/home/Home";
import Single from "../pages/single/Single";
import Write from "../pages/write/Write";
import Setting from "../pages/settings/Setting";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/about/About";

export default function AnimatedRoute() {
  const user = true;
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/about" element={user ? <About /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </AnimatePresence>
  );
}
