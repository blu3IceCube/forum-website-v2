import React, { createContext, useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Welcome from "./components/scenes/Welcome";
import Signup from "./components/scenes/Signup";
import Content, { communityLoader as contentLoader, homeLoader as homeData } from "./components/Hero/Content";
import Login from "./components/scenes/Login"
import Error from "./components/scenes/Error";
import Logout from "./components/scenes/Logout";
import Compose from "./components/scenes/Compose";
import Forum from "./components/scenes/Forum";
import axios from "axios";
import Layout from "./components/Layout";
import Main, { loader as mainLoader } from "./components/Hero/Main";

export const AuthContext = createContext()

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Welcome />} />
    <Route path="/home"
      element={<Content />}
      loader={contentLoader}
      errorElement={<Error />} />
    {/* <Route index element={<Main />} loader={mainLoader}/>
    </Route> */}
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/compose" element={<Compose />} />
    <Route path="/c" element={<Forum />} />
    <Route path="*" element={<Error />} />
  </Route>
))

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
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  )
}