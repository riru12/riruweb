import React from "react";
import "../assets/css/hero.css";
import GithubIcon from "../assets/icons/GithubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Hero = () => {
    return(
        <section id="hero" className="flex flex-col justify-center items-center h-screen px-4 mx-0 md:mx-[20vw]">
            <div className="flex justify-center text-center unfancy font-mono text-neutral-400 py-2">hello! i'm</div>
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
            <div className="flex justify-center text-center unfancy font-mono text-neutral-400 py-6">
                <div className="relative group cursor-pointer">
                    <a href="https://github.com/riru12" target="_blank">
                        <span className="group-hover:text-white">developer</span>
                        <div className="absolute left-[50%] transition-all translate-x-[-50%] top-[-50%] translate-y-[50%] opacity-0 group-hover:translate-y-[-75%] group-hover:opacity-100">
                            <GithubIcon fillColor="#ffffff" />
                        </div>
                    </a>
                </div>,&nbsp;
                <div className="relative group cursor-pointer">
                    <a href="https://twitter.com/artofriru" target="_blank">
                        <span className="group-hover:text-[#1da1f2]">digital artist</span>
                        <div className="absolute left-[50%] transition-all translate-x-[-50%] top-[-50%] translate-y-[50%] opacity-0 group-hover:translate-y-[-75%] group-hover:opacity-100">
                            <TwitterIcon />
                        </div>
                    </a>
                </div>, 
                and 
                pc enthusiast
            </div>
        </section>
    )
}

export default Hero