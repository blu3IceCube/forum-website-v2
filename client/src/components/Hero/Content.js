import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Main from "./Main";
import Side from "../side/Side";

export default function Content() {
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    React.useEffect(() => {
        async function authHome() {
            try {
                const response = await axios.get('http://localhost:8080/home', { withCredentials: true })
                if(!response.status === 200) {
                    const error = new Error(response.error)
                    throw error
                }
                setLoading(prevState => !prevState)
            } catch (error) {
                navigate('/login')
                console.log('Error', error)
            }
        }
        authHome()
    }, [])

    return (
        <>
            {loading ?
                <h1 className="text-center text-3xl mt-32">Loading...</h1>
                :
                <div className="container mt-12 mb-12 w-9/12 ml-auto mr-auto flex font-mono">
                    <main className="w-3/5 h-full">
                        <Main />
                    </main>
                    <section className="w-2/5 h-full flex flex-col">
                        <Side />
                    </section>
                </div>
            }
        </>
    )
}