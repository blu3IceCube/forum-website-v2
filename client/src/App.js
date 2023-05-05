import React, { createContext, useEffect, useReducer } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/scenes/Welcome";
import Signup from "./components/scenes/Signup";
import Content from "./components/Hero/Content";
import Login from "./components/scenes/Login"
import Error from "./components/scenes/Error";
import Logout from "./components/scenes/Logout";
import { initialState, authReducer } from "./reducer/useReducer";
import Compose from "./components/scenes/Compose";
import Forum from "./components/scenes/Forum";

export const AuthContext = createContext()

export default function App() {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // useEffect(() => {

  // })

  return (
    <div className="text-slate-50 min-h-screen bg-neutral-950">
      <AuthContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/compose" element={<Compose/>}/>
          <Route path="/c" element={<Forum/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}