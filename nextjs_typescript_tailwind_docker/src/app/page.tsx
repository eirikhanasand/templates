import en from "./text/en.json";
import React from 'react';

// Main component of the program, holds the main page and the user can navigate
// to different pages from here
export default function Home(): JSX.Element {

    return (
        <main className="grid place-items-center h-[100vh] w-[100vw]">
            <div className="grid grid-cols-4 w-full">
                <div className="bg-[#191919] h-[92vh] overflow-auto mx-4 p-10 rounded-xl">
                <h1 className="text-4xl font-bold">{en.left.title}</h1>
                    <h1>Content</h1>
                </div>
                <div className="bg-[#191919] ml-4 mr-4 pl-10 pr-10 pb-10 pt-5 h-[92vh] col-span-2 overflow-auto rounded-xl grid place-items-center">
                    <h1>Content</h1>
                </div>
                <div className="bg-[#191919] mx-4 p-10 h-[92vh] overflow-auto rounded-xl">
                    <h1 className="text-4xl font-bold">{en.right.title}</h1>
                    <h1>Content</h1>
                </div>
            </div>
        </main>
    );
}
