import React, { useEffect, useState } from "react"

export default function Card({items, post}) {
    // const [likes, setLikes] = useState(0)
    // const [dislikes, setDislikes] = useState(0)
    // const [comment, setComment] = useState(0)

    // const handleLike = (e) => {
    //     setLikes(prevState => prevState + 1)
    // }

    // const handleDislike = (e) => {
    //     setDislikes(prevState => prevState + 1)
    // }

    // const handleComment = (e) => {
    //     setComment(prevState => prevState + 1)
    // }

    return (
        <div className="bg-stone-200 text-neutral-950 rounded-md">
            <h1 key={items.forumName} className="bg-neutral-900 text-slate-50 px-4 py-1 text-lg">{items.forumName}</h1>
            <div key={items._id} className="px-4 py-1.5">
                <span key={post.userName} className="text-slate-500 italic"><a className="hover:underline" href="/">{post.userName}</a></span>
                <h1 key={post.title} className="text-xl font-semibold pt-1">{post.title}</h1>
                <p key={post.content} className="text-lg py-1.5 border-b border-neutral-500">{post.content}</p>
            </div >
        </div>
    )
}