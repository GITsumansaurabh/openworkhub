import React, { useState } from "react";
import "./App.css";
import Home1 from "./pages/Home1";
import Signup from "./features/auth/components/Signup";
import Signin from "./features/auth/components/Signin";
import Details from "./pages/Details";
import NavBar from "./features/navbar/Navbar";
import Footer from "./pages/Footer";
import Tasks from "./pages/Tasks";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/details" element={<Details />} />
          <Route path="/tasker" element={<Tasks />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
