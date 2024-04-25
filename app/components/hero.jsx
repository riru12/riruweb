import React from "react";
import "../assets/css/hero.css";

const Hero = () => {
    return(
        <div id="hero" className="flex flex-col items-center mt-36 mx-0 px-4 md:mx-[20vw]">
            <div className="unfancy font-mono text-neutral-400">hello! i'm</div>
            <div className="flex justify-center items-center h-40 w-full font-bold fancy name">
                <div className="font-bold enhance flex gradient-text">
                    <span className="letter">B</span>
                    <span className="special">r</span>
                    <span className="special">i</span>
                    <span className="letter">l</span>
                    <span className="letter">l</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">J</span>
                    <span className="special text-[0px]">r</span>
                    <span className="special">u</span>
                    <span className="letter">l</span>
                    <span className="letter">i</span>
                    <span className="letter">a</span>
                    <span className="letter">n</span>
                </div>
            </div>
            <div className="unfancy font-mono text-neutral-400">developer, digital artist, and pc enthusiast</div>
        </div>
    )
}

export default Hero