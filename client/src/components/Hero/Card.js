import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://localhost:8080/c')
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    }, [])

    return (
        <div className="bg-stone-200 text-neutral-950 rounded-md">
            {data.map(({ forumName, posts }, index) => {
                if (posts.length != 0) {
                    return (
                        <>
                            <h1 key={forumName} className="bg-neutral-900 text-slate-50 px-4 py-1 text-lg">{forumName}</h1>
                            <div key={index} className="px-4 py-1.5">
                                <span key={posts.userName} className="text-slate-500 italic"><a className="hover:underline" href="/">{posts.map(({ userName }, index) => userName)}</a></span>
                                <h1 key={posts.title} className="text-xl font-semibold pt-1">{posts.map(({ title }, index) => title)}</h1>
                                <p key={posts.content} className="text-lg py-1.5 border-b border-neutral-500">{posts.map(({ content }, index) => content)}</p>
                            </div >
                        </>
                    )
                }
            })}
            <div className="px-4 flex gap-x-10 py-1.5 text-cyan-500">
                <a className="hover:underline" href="/">
                    <i className="fa-sharp fa-solid fa-heart mr-1.5"></i>
                    Like
                </a>
                <a className="hover:underline" href="/">
                    <i className="fa-sharp fa-solid fa-heart-crack mr-1.5"></i>
                    Dislike
                </a>
                <a className="hover:underline" href="/">
                    <i className="fa-solid fa-message mr-1.5"></i>
                    Comment
                </a>
            </div>
        </div>
    )
}