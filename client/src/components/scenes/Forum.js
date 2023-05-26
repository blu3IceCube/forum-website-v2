import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forum() {
    const [forum, setforum] = useState({
        forumName: "",
        forumInfo: ""
    })

    const handleChange = (e) => {
        setforum(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const { forumName, forumInfo } = forum
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/community', { forumName, forumInfo }, { withCredentials: true })
            if (response) {
                console.log('Community created')
                window.alert('Community created')
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
            window.alert('Error while processing')
        }
    }

    return (
        <div className="flex justify-center items-center absolute inset-x-0 inset-y-0 h-screen max-w-screen-sm mx-auto text-neutral-950">
            <div className="container text-center bg-stone-200 h-64 rounded-md px-4 py-1.5 font-mono">
                <h1 className="text-2xl font-semibold pb-4">Create your Community Page</h1>
                <form className="flex flex-col gap-x-2 gap-y-3 justify-center flex-wrap" method="POST" onSubmit={handleSubmit} autoComplete="off">
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="text"
                        placeholder="What is your Community called?"
                        name="forumName"
                        onChange={handleChange}
                        value={forum.forumName}
                        id="username"
                    />
                    <textarea
                        className="p-1.5 rounded-md focus:outline-none w-full"
                        placeholder="Describe your community."
                        name="forumInfo"
                        onChange={handleChange}
                        value={forum.forumInfo}
                        rows='2'
                    />
                    <button className="bg-cyan-500 p-2 mt-6 hover:scale-105 drop-shadow-lg shadow-2xl w-20 self-center" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}