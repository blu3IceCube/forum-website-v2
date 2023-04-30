import React from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [signupData, setSignupData] = React.useState({
        fname: "",
        lname: "",
        email: "",
        sid: "",
        bday: "",
        username: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (e) => {
        setSignupData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const { fname, lname, email, sid, bday, username, password, cpassword } = signupData
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/signup', {
            fname, lname, email, sid, bday, username, password, cpassword
        }).then((response) => {
            window.alert('Successfully registered')

            navigate('/login')
        }).catch((err) => {
            window.alert('Signup Failed.')
        })

    }

    return (
        <div className="flex justify-center items-center absolute inset-x-0 inset-y-0 h-screen max-w-screen-md mx-auto text-neutral-950">
            <div className="container text-center bg-stone-200 h-auto rounded-md px-4 pt-1.5 pb-4 font-mono">
                <h1 className="text-2xl font-semibold pb-4">Sign Up</h1>
                <form className="flex gap-x-2 gap-y-3 justify-center flex-wrap" onSubmit={handleSignup} method="POST" autoComplete="off">
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="text"
                        placeholder="First name"
                        name="fname"
                        onChange={handleChange}
                        value={signupData.fname}
                    />
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="text"
                        placeholder="Last name"
                        name="lname"
                        onChange={handleChange}
                        value={signupData.lname}
                    />
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={signupData.email}
                    />
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="text"
                        placeholder="Student ID"
                        name="sid"
                        onChange={handleChange}
                        value={signupData.sid}
                    />
                    <label className="basis-full" htmlFor="bday"> Birthday: &nbsp;
                        <input
                            className=""
                            type="date"
                            name="bday"
                            onChange={handleChange}
                            value={signupData.bday}
                            id="bday"
                        />
                    </label>
                    <label className="basis-full" htmlFor="username"> Choose a unique Username: &nbsp;
                        <input
                            className="p-1.5 rounded-md focus:outline-none w-80"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                            value={signupData.username}
                            id="username"
                        />
                    </label>
                    <label className="basis-full" htmlFor="password"> Enter a password: &nbsp;
                        <input
                            className="p-1.5 rounded-md focus:outline-none w-80"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={signupData.password}
                            id="password"
                        />
                    </label>
                    <label className="basis-full" htmlFor="cpassword"> Confirm your password: &nbsp;
                        <input
                            className="p-1.5 rounded-md focus:outline-none w-80"
                            type="password"
                            placeholder="Confirm Password"
                            name="cpassword"
                            onChange={handleChange}
                            value={signupData.cpassword}
                            id="cpassword"
                        />
                    </label>
                    <button className="bg-cyan-500 p-2 mt-6 hover:scale-105 drop-shadow-lg shadow-2xl" type="submit">Sign Up</button>
                </form>
                <p className="mt-4 inline-block text-sm text-slate-500">Already have an account?</p> &nbsp;
                <Link to='/login' className="underline text-cyan-500">Login</Link>
            </div>
        </div>
    )
}