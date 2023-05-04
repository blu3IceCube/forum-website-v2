import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Compose() {
    const [userPost, setUserPost] = useState({
        forumName: "",
        title: "",
        content: ""
    })

    const handleChange = (e) => {
        setUserPost(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const { forumName, title, content } = userPost
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/compose', {
                forumName, title, content
            }, { withCredentials: true })

            if (response) {
                console.log(response.status)
                window.alert('Post created.')
                navigate('/home')
            }
        } catch (error) {
            window.alert('Failed to create post.')
        }
    }
    return (
        <div className="flex justify-center items-center absolute inset-x-0 inset-y-0 h-screen max-w-screen-sm mx-auto text-neutral-950">
            <div className="container text-center bg-stone-200 max-h-full rounded-md px-4 pt-1.5 pb-3 font-mono">
                <h1 className="text-2xl font-semibold pb-4">Compose</h1>
                <form className="flex flex-col gap-x-2 gap-y-3 justify-center flex-wrap" method="POST" onSubmit={handleSubmit} autoComplete="off">
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-80"
                        type="text"
                        placeholder="Community Name"
                        name="forumName"
                        onChange={handleChange}
                        value={userPost.forumName}
                    />
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-full"
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        value={userPost.title}
                    />
                    <textarea
                        className="p-1.5 rounded-md focus:outline-none w-full"
                        placeholder="Content"
                        name="content"
                        onChange={handleChange}
                        value={userPost.content}
                        rows='4'
                    />
                    <button className="bg-cyan-500 p-2 mt-6 hover:scale-105 drop-shadow-lg shadow-2xl w-20 self-center" type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}