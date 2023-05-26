import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Welcome from "./components/scenes/Welcome";
import Signup from "./components/scenes/Signup";
import Content from "./components/Hero/Content";
import Login from "./components/scenes/Login"
import Error from "./components/scenes/Error";
import Logout from "./components/scenes/Logout";
import Compose from "./components/scenes/Compose";
import Forum from "./components/scenes/Forum";
import axios from "axios";
import Layout from "./components/Layout";

export const AuthContext = createContext()

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8080/home', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true)
        }
      })
  }, [])

  return (
    <div className="text-slate-50 min-h-screen bg-neutral-950">
      <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Content />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/c" element={<Forum />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}