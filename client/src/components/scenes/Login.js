import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../App";

export default function Login() {
    const [loggedIn, setLoggedIn] = useContext(AuthContext)

    const [loginData, setLoginData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setLoginData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const { username, password } = loginData
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        axios.post('http://localhost:8080/login', {
            username, password
        }, { withCredentials: true, credentials: 'include' }).then((response) => {
            window.alert('Login Successful')
            setLoggedIn(true)
            navigate('/home')
        }).catch((err) => {
            window.alert('Login Failed')
            console.log('Login failed error', err)
        })

    }

    return (
        <div className="flex justify-center items-center absolute inset-x-0 inset-y-0 h-screen max-w-screen-sm mx-auto text-neutral-950">
            <div className="container text-center bg-stone-200 h-64 rounded-md px-4 py-1.5 font-mono">
                <h1 className="text-2xl font-semibold pb-4">Log In</h1>
                <form className="flex gap-x-2 gap-y-3 justify-center flex-wrap" method="POST" onSubmit={handleLogin} autoComplete="off">
                    <label className="basis-full" htmlFor="username">Username: &nbsp;
                        <input
                            className="p-1.5 rounded-md focus:outline-none w-80"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                            value={loginData.username}
                            id="username"
                        />
                    </label>
                    <label className="basis-full" htmlFor="password">Password: &nbsp;
                        <input
                            className="p-1.5 rounded-md focus:outline-none w-80"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={loginData.password}
                            id="password"
                        />
                    </label>
                    <button className="bg-cyan-500 p-2 mt-6 hover:scale-105 drop-shadow-lg shadow-2xl" type="submit">Log In</button>
                </form>
                <p className="mt-4 inline-block text-sm text-slate-500">Don't have an account?</p> &nbsp;
                <Link to='/signup' className="underline text-cyan-500">Signup</Link>
            </div>
        </div>
    )
}