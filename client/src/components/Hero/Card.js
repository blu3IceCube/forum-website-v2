import React from "react";

export default function Card() {

    return (
        <div className="bg-stone-200 text-neutral-950 rounded-md">
            <h1 className="bg-neutral-900 text-slate-50 px-4 py-1 text-lg">Community Name</h1>
            <div className="px-4 py-1.5">
                <span className="text-slate-500 italic"><a className="hover:underline" href="/">Username</a></span>
                <p className="text-lg py-1.5 border-b border-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
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