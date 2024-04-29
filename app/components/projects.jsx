import React from "react";
import FolderOutline from "../assets/icons/FolderOutline.jsx"
import ExterLink from "../assets/icons/ExterLink.jsx"

const Projects = () => {
    return(
        <section id="projects" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 2xl:mx-40">
                <div className="font-bold text-3xl">
                    <span className="font-mono text-2xl text-neutral-300">03.</span>Projects
                </div>
                <div className="grid auto-rows-fr gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div id="projectTab" className="flex flex-col bg-neutral-900 rounded p-6 gap-10">
                        <div className="flex flex-row justify-between">
                            <FolderOutline strokeColor="#d4d4d4"/>
                            <ExterLink strokeColor="#d4d4d4"/>
                        </div>
                        <div>
                            <div className="font-bold text-neutral-300">Project 1</div>
                            <div className="text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-neutral-900 rounded p-6 gap-10">2</div>
                    <div className="flex flex-col bg-neutral-900 rounded p-6 gap-10">3</div>
                </div>
            </div>
        </section>
    )
}

export default Projects