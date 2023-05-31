import React, { useState } from "react";
import axios from "axios"
import { useNavigate, useLoaderData } from "react-router-dom"
import Main from "./Main";
import Side from "../side/Side";
import { getCommunity, getHome } from "../../api/community";

export function communityLoader() {
    return getCommunity()
}

export default function Content() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const loaderData = useLoaderData()

    React.useEffect(() => {
        async function authHome() {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:8080/home', { withCredentials: true })
            } catch (err) {
                navigate('/login')
                console.log('Error', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        authHome()
    }, [])
    

    if (error) {
        console.log('errorData', error)
        return <h1 className="text-center text-3xl mt-32">Loading...</h1>
    }

    return (
        <>
            {loading || error ?
                <h1 className="text-center text-3xl mt-32">Loading...</h1>
                :
                <div className="container mt-12 mb-12 w-9/12 ml-auto mr-auto flex font-mono">
                    <main className="w-3/5 h-full">
                        <Main props={ loaderData }/>
                    </main>
                    <section className="w-2/5 h-full flex flex-col">
                        <Side props={ loaderData }/>
                    </section>
                </div>
            }
        </>
    )
}