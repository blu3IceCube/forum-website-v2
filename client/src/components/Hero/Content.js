import React from "react";
import Main from "./Main";

export default function Content() {
    return (
        <div className="container mt-12 mb-12 w-9/12 ml-auto mr-auto flex font-mono">  
            {/* <div className=""> */}
                <main className="w-3/5 h-full flex flex-col">
                    <Main/>
                    <Main/>
                    <Main/>
                </main>
                <section className="w-2/5 h-full flex-1 flex-col">
                    <h1>Side Content</h1>
                </section>
            {/* </div> */}
        </div>
    )
}

/*min-h-screen */