import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Side() {
    const [forumData, setForumData] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://localhost:8080/c')
                setForumData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
            <div className="w-4/6 mx-auto bg-neutral-900 text-slate-500 rounded-md">
                <h1 className="bg-neutral-400 text-neutral-950 px-4 py-2 rounded-t-md">Explore Communities</h1>
                <div className="h-80 p-3 overflow-hidden border rounded-b-sm">
                    <div className="overflow-y-auto h-full">
                        <ul className="h-full">
                            {forumData.map((forum) => (
                                <li key={forum._id} className="p-3 border-b border-neutral-500 hover:underline hover:text-slate-50"><span>{forum.forumName}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Link className="w-4/6 mx-auto text-center mt-12 bg-cyan-500 py-1 hover:scale-105 drop-shadow-lg shadow-2xl" to='/c'>Create a Community</Link>
        </>

    )
}