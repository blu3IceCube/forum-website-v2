import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCommunity } from "../../api/community";

export default function Side() {
    const [forumData, setForumData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            try {
                const data = await getCommunity()
                setForumData(data)     
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchPosts()
    }, [])

    if (loading) {
        return <h1 className="text-center text-3xl mt-32">Loading...</h1>
    }

    return (
        <>
            <div className="w-4/6 mx-auto bg-neutral-900 text-slate-500 rounded-md">
                <h1 className="bg-neutral-400 text-neutral-950 px-4 py-2 rounded-t-md">Explore Communities</h1>
                <div className="h-80 p-3 overflow-hidden border rounded-b-sm">
                    <div className="overflow-y-auto h-full">
                        <ul className="h-full">
                            {forumData.map((forum) => {
                                const filter = forum.forumName.split(" ").join("_").toLowerCase()
                                return <li key={forum._id} className="p-3 border-b border-neutral-500 hover:underline hover:text-slate-50"><Link to={`?filter=${filter}`}>{forum.forumName}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="text-center hover:underline hover:text-slate-50 p-2"><Link to={`.`}>Clear filters</Link></div>
            </div>
            <Link className="w-4/6 mx-auto text-center mt-12 bg-cyan-500 py-1 hover:scale-105 drop-shadow-lg shadow-2xl" to='/c'>Create a Community</Link>
        </>

    )
}