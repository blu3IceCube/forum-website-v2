import React from "react";
import { useSearchParams, useLoaderData } from "react-router-dom";
import logo1 from "../../images/chemistry.jpg"
import Card from "./Card";
import { getCommunity } from "../../api/community";

export default function Main({props}) {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("filter") 

    const displayFilter = typeFilter ? props.data.filter(char => char.forumName.split(" ").join("_").toLowerCase() === typeFilter) : props.data

    return (
        <div className="relative container w-full block mb-8 flex flex-col">
            {displayFilter ? displayFilter.map((items) => {
                if (items.posts.length != 0) {
                    return (
                        items.posts.map((post) => {
                            return (
                                <div key={post._id} className="mb-8">
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
            }): <h1></h1>}

        </div>
    )
}
