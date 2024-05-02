import React from "react";
import FolderOutline from "../assets/icons/FolderOutline.jsx"
import ExterLink from "../assets/icons/ExterLink.jsx"
import GithubIcon from "../assets/icons/GithubIcon.jsx";
import FigmaIcon from "../assets/icons/FigmaIcon.jsx";
import DocumentIcon from "../assets/icons/DocumentIcon.jsx";
import projects from "../assets/content/projects.json"

const Projects = () => {
    return(
        <section id="projects" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 2xl:mx-40">
                <div className="font-bold text-3xl">
                    <span className="font-mono text-2xl text-neutral-300">03.</span>Projects
                </div>
                <div className="grid auto-rows-fr gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <div key={project.id} className="group cursor-default">
                            <div className="flex flex-col bg-neutral-900 h-full rounded p-6 gap-10 justify-between sm:group-hover:translate-y-[-10px] transition-transform">
                                <div className="flex flex-row justify-between">
                                    <FolderOutline strokeColor="#bcedc5" />
                                    <div className="flex gap-3 h-min">
                                        {project.doclink && 
                                            <div className="relative group/git h-min">
                                                <a href={project.doclink} target="_blank"><DocumentIcon strokeColor="#d4d4d4" /></a>
                                                <div className="absolute whitespace-nowrap text-xs bg-neutral-800 px-3 py-2 rounded-xl font-mono transition-all left-[50%] translate-x-[-50%] top-0 translate-y-[-110%] hidden group-hover/git:block">Documentation</div>
                                            </div>
                                        }
                                        {project.figmalink && 
                                            <div className="relative group/git h-min">
                                                <a href={project.figmalink} target="_blank"><FigmaIcon strokeColor="#d4d4d4"/></a>
                                                <div className="absolute whitespace-nowrap text-xs bg-neutral-800 px-3 py-2 rounded-xl font-mono transition-all left-[50%] translate-x-[-50%] top-0 translate-y-[-110%] hidden group-hover/git:block">Figma</div>
                                            </div>
                                        }
                                        {project.gitlink && 
                                            <div className="relative group/git h-min">
                                                <a href={project.gitlink} target="_blank"><GithubIcon fillColor="#d4d4d4" /></a>
                                                <div className="absolute whitespace-nowrap text-xs bg-neutral-800 px-3 py-2 rounded-xl font-mono transition-all left-[50%] translate-x-[-50%] top-0 translate-y-[-110%] hidden group-hover/git:block">Git Repo</div>
                                            </div>
                                        }
                                        {project.exterlink && 
                                            <div className="relative group/live h-min">
                                                <a href={project.exterlink} target="_blank"><ExterLink strokeColor="#d4d4d4" /></a>
                                                <div className="absolute whitespace-nowrap text-xs bg-neutral-800 px-3 py-2 rounded-xl font-mono transition-all left-[50%] translate-x-[-50%] top-0 translate-y-[-110%] hidden group-hover/live:block">Live Link</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div id="projectName" className="font-bold text-neutral-300 group-hover:text-[#bcedc5] transition-colors">{project.name}</div>
                                    <div className="flex flex-col gap-4">
                                        <div id="projectDesc" className="text-neutral-400">{project.description}</div>
                                        <div id="projectTech" className="font-mono text-neutral-500 text-xs">{project.technologies.join(' ')}</div>
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