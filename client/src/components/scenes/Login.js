import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
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
    console.log(loginData);

    const { username, password } = loginData
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        console.log(username, password)

        axios.post('http://localhost:8080/login', {
            username, password
        }).then((respone) => {
            window.alert('Login Successful')
            navigate('/home')
        }).catch((err) => {
            window.alert('Login Failed')
            console.log(err)
        })
    }

    return (
        <div className="flex justify-center items-center absolute inset-x-0 inset-y-0 h-screen max-w-screen-sm mx-auto text-neutral-950">
            <div className="container text-center bg-stone-200 h-64 rounded-md px-4 py-1.5 font-mono">
                <h1 className="text-2xl font-semibold pb-4">Log In</h1>
                <form className="flex gap-x-2 gap-y-3 justify-center flex-wrap" method="Post" onSubmit={handleLogin} autoComplete="off">
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