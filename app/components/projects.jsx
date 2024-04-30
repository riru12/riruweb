import React from "react";
import FolderOutline from "../assets/icons/FolderOutline.jsx"
import ExterLink from "../assets/icons/ExterLink.jsx"
import GitLink from "../assets/icons/GitLink.jsx";
import projects from "../assets/content/projects.json"

const Projects = () => {
    return(
        <section id="projects" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 2xl:mx-40">
                <div className="font-bold text-3xl">
                    <span className="font-mono text-2xl text-neutral-300">03.</span>Projects
                </div>
                <div className="grid auto-rows-fr gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <div key={project.id} className="group">
                            <div className="flex flex-col bg-neutral-900 h-full rounded p-6 gap-10 justify-between sm:group-hover:translate-y-[-10px] transition-transform">
                                <div className="flex flex-row justify-between">
                                    <FolderOutline strokeColor="#bcedc5" />
                                    <div className="flex gap-3">
                                        {project.gitlink && <a href={project.gitlink}><GitLink fillColor="#d4d4d4" /></a>}
                                        {project.exterlink && <a href={project.exterlink}><ExterLink strokeColor="#d4d4d4" /></a>}
                                    </div>
                                </div>
                                <div>
                                    <div id="projectName" className="font-bold text-neutral-300 group-hover:text-[#bcedc5] transition-colors">{project.name}</div>
                                    <div className="flex flex-col gap-4">
                                        <div id="projectDesc" className="text-neutral-400">{project.description}</div>
                                        <div id="projectTech" className="font-mono text-neutral-500 text-sm">{project.technologies.join(' ')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects