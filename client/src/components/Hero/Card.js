import React from "react"

export default function Card({props}) {

    return (
        <div className="bg-stone-200 text-neutral-950 rounded-md">
            <h1 key={props.forumName} className="bg-neutral-900 text-slate-50 px-4 py-1 text-lg">{props.forumName}</h1>
            <div key={props._id} className="px-4 py-1.5">
                <span key={props.posts.userName} className="text-slate-500 italic"><a className="hover:underline" href="/">{props.posts.map(({ userName }, index) => userName)}</a></span>
                <h1 key={props.posts.title} className="text-xl font-semibold pt-1">{props.posts.map(({ title }, index) => title)}</h1>
                <p key={props.posts.content} className="text-lg py-1.5 border-b border-neutral-500">{props.posts.map(({ content }, index) => content)}</p>
            </div >
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