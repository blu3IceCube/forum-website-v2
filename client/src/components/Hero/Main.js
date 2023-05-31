import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import logo1 from "../../images/chemistry.jpg"
import Card from "./Card";
import { getCommunity } from "../../api/community";

export default function Main() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState([])
    
    const typeFilter = searchParams.get("filter")

    const displayFilter = typeFilter ? data.filter(char => char.forumName.split(" ").join("_").toLowerCase() === typeFilter) : data

    useEffect(() => {
        async function fetchPosts() {
            const data = await getCommunity()
            setData(data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="relative container w-full block mb-8 flex flex-col">
            {displayFilter.map((items) => {
                if (items.posts.length != 0) {
                    return (
                        items.posts.map((post) => {
                            return (
                                <div className="mb-8">
                                    <div className="inline-block absolute -left-20">
                                        <img className="w-14 h-16 rounded" src={logo1} alt="Community Profile" />
                                    </div>
                                    <div className="inline-block">
                                        <Card items={items} post={post} />
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            })}

        </div>
    )
}
