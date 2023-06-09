import React from "react";

export default function Error() {
    return (
        <div className="font-mono text-center absolute inset-y-0 inset-x-0 h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold mb-12">Oops!</h1>
            <p className="text-2xl my-8">Sorry, an unexpected error has occurred.</p>
            <p className="text-slate-500 italic">Page Not Found</p>
        </div>
    )
}