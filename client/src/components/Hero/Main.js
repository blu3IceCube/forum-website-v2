import React from "react";
import logo1 from "../../images/chemistry.jpg"
import Card from "./Card";

export default function Main() {
    return (
        <div className="relative container w-full block mb-8">
            <div className="inline-block absolute -left-20">
                <img className="w-14 h-16 rounded" src={logo1} alt="Community Profile"/>
            </div>
            <div className="inline-block">
                <Card/>
            </div>
        </div>
    )
}