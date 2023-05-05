import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Navbar() {
    const { state, dispatch } = useContext(AuthContext)

    const AuthRender = () => {
        if (state) {
            return (
                <>
                    <NavLink
                        to='/compose'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>
                        <i className="fa-solid fa-pen"></i>
                    </NavLink>
                    <NavLink
                        to='/logout'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>Logout
                    </NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink
                        to='/login'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>Login
                    </NavLink>
                    <NavLink
                        to='/signup'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>Signup
                    </NavLink>
                </>
            )
        }
    }

    const activeStyle = 'text-slate-50 hover:text-slate-50'
    const navStyle = 'hover:text-slate-50'

    return (
        <div className="container bg-neutral-900 min-w-full px-4 pt-1 pb-2 flex items-center shadow-sm shadow-neutral-700 sticky top-0 z-50">
            <NavLink to='/' className="text-3xl font-bold inline-block">postIt</NavLink>
            <div className="inline-block mx-10">
                <input className="px-4 py-0.5 rounded-md text-lg w-96 bg-neutral-700 focus:outline-none focus:bg-neutral-600 placeholder-neutral-500 font-mono" type="search" placeholder="Search" />
            </div>
            <div className="flex justify-end flex-1 text-slate-500 font-mono">
                <div className="flex basis-7/12 justify-between">
                    <NavLink
                        to='/home'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <NavLink
                        to='/messages'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>
                        <i className="fa-solid fa-envelope"></i>
                    </NavLink>
                    <NavLink
                        to='/user'
                        className={({ isActive }) => isActive ? activeStyle : navStyle}>
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                    <AuthRender />
                </div>
            </div>
        </div>
    )
}