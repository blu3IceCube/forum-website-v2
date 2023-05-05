import React, { useEffect, useContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Logout() {
    const [loggedIn, setLoggedIn] = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8080/logout', { withCredentials: true })
            .then((res) => {
                if (res.status !== 200) {
                    const error = new Error(res.error)
                    throw error
                }
                setLoggedIn(false)
                navigate('/login', { replace: true })
            }).catch((err) => {
                console.log(err);
            })
    })

    return (
        <div className="flex items-center justify-center h-screen absolute inset-x-0 inset-y-0">
            <h1>LOGGED OUT!</h1>
        </div>
    )
}