import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Compose() {
    const [userPost, setUserPost] = useState({
        forumName: "",
        title: "",
        content: ""
    })

    const [data, setData] = useState([])
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/c')
        .then(response => setData(response.data))
        .catch((err) => console.log(err))
    }, [])

    const handleChange = (e) => {
        console.log('e.target.name', e.target.name)
        setSelectedValue(e.target.value)
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
                    <select className="p-1.5 rounded-md focus:outline-none w-80" name="forumName" value={selectedValue} onChange={handleChange}>
                        <option value="">--Select a community--</option>
                        {data.map((item) => {
                            return <option name="forumName" key={item._id} value={item.forumName}>{item.forumName}</option>
                        })}
                    </select>
                    <input
                        className="p-1.5 rounded-md focus:outline-none w-full"
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        value={userPost.title}
                    />
                    <textarea
                        className="p-1.5 rounded-md focus:outline-none w-full resize-none"
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