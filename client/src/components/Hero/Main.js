import axios from "axios";
import React, { useState, useEffect } from "react";
import logo1 from "../../images/chemistry.jpg"
import Card from "./Card";

export default function Main() {
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
        <div className="relative container w-full block mb-8 flex flex-col">
            {data.map((items) => {
                if (items.posts.length != 0) {
                    return (
                        <div className="mb-8">
                            <div className="inline-block absolute -left-20">
                                <img className="w-14 h-16 rounded" src={logo1} alt="Community Profile" />
                            </div>
                            <div className="inline-block">
                                <Card props={items} />
                            </div>
                        </div>
                    )
                }
            })}

        </div>
    )
}

{/* <div className="relative container w-full block mb-8">
    <div className="inline-block absolute -left-20">
        <img className="w-14 h-16 rounded" src={logo1} alt="Community Profile" />
    </div>
    <div className="inline-block">
        <Card />
    </div>
</div>  */}