import React from "react";
import logo from "../../images/postit-logo.png"

export default function Welcome() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full min-h-screen">
                <img className="opacity-5 mx-auto w-6/12 mt-20" src={logo} alt="Post It Logo"/>
            </div>
            <div className="max-w-screen-md mx-auto my-16 text-center font-mono">
                <h1 className="font-semibold text-5xl">Welcome to PostIt.</h1>
                <p className="text-lg my-4">Hello! We are glad to have you here. First, let us introduce ourselves. <br /> PostIt is a forum website which aims to facilitate and provide it's users with the ability to come together and create their own little communities in which they can disscuss topics freely and share knowledge and information within the community. <br /><br /> So do stay and look around, maybe you'll come across something that might interst you.</p>
            </div>        
        </>

    )
}