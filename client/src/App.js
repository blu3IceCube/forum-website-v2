import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/scenes/Welcome";
import Signup from "./components/scenes/Signup";
import Content from "./components/Hero/Content";
import Login from "./components/scenes/Login"
import Error from "./components/scenes/Error";

export default function App() {
  return (
    <div className="text-slate-50 min-h-screen bg-neutral-950">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Content/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  ) 
}