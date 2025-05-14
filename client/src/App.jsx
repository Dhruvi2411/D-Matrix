import React from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="text-center scroll-smooth bg-[#030f1a] text-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
