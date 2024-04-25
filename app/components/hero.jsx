import React from "react";
import "../assets/css/hero.css";

const Hero = () => {
    return(
        <div id="hero" className="flex flex-col justify-center items-center h-screen px-4 mx-0 md:mx-[20vw]">
            <div className="unfancy font-mono text-neutral-400 py-2">hello! i'm</div>
            <div className="flex justify-center items-center h-40 w-full font-bold fancy name">
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
            <div className="unfancy font-mono text-neutral-400 py-6">developer, digital artist, and pc enthusiast</div>
        </div>
    )
}

export default Hero