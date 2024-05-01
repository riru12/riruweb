import React from "react";
import "../assets/css/hero.css";
import GithubIcon from "../assets/icons/GithubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Hero = () => {
    return(
        <section id="hero" className="flex flex-col justify-center items-center h-screen px-4 mx-0 md:mx-[20vw]">
            <div className="flex justify-center text-center unfancy font-mono text-neutral-400 py-2">
                <div className="relative group cursor-default">
                    <div className="px-1 transition-opacity opacity-0 group-hover:opacity-100">
                        👋
                    </div>
                    <div className="absolute px-1 right-0 transition-transform top-[-50%] translate-y-[50%] group-hover:translate-x-[-38%]    ">
                        hello!
                    </div>
                </div>
                <div className="cursor-default">
                    &nbsp;i'm
                </div>
            </div>
            <div className="flex justify-center items-center h-40 w-full font-bold fancy name scale-75 md:scale-100">
                <div className="font-bold enhance gradient-text">
                    <span className="letter">b</span>
                    <span className="special">r</span>
                    <span className="special">i</span>
                    <span className="letter">l</span>
                    <span className="letter">l</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">j</span>
                    <span className="special text-[0px]">r</span>
                    <span className="special">u</span>
                    <span className="letter">l</span>
                    <span className="letter">i</span>
                    <span className="letter">a</span>
                    <span className="letter">n</span>
                    <span className="special text-[0px]">!</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center text-center unfancy font-mono text-neutral-400 cursor-default py-6">
                <div className="relative group">
                    <span className="whitespace-nowrap">developer</span>
                    <div className="absolute transition-all left-[50%] translate-x-[-50%] top-[-50%] translate-y-[50%] opacity-0 group-hover:translate-y-[-50%] group-hover:opacity-100">
                        <a href="https://github.com/riru12" target="_blank"><div className="flex gap-1 text-white"><GithubIcon fillColor="#ffffff" /> riru12</div></a>
                    </div>
                </div>
                ,&nbsp;
                <div className="relative group">
                    <span className="whitespace-nowrap">digital artist</span>
                    <div className="absolute transition-all left-[50%] translate-x-[-50%] top-[-50%] translate-y-[50%] opacity-0 group-hover:translate-y-[-50%] group-hover:opacity-100">
                        <a href="https://twitter.com/artofriru" target="_blank"><div className="flex gap-1 text-[#1da1f2]"><TwitterIcon /> @artofriru</div></a>
                    </div>
                </div>
                ,&nbsp;
                <div className="whitespace-nowrap">and pc enthusiast</div>
            </div>
        </section>
    )
}

export default Hero