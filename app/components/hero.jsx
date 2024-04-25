import React from "react";
import "../assets/css/hero.css";

const Hero = () => {
    return(
        <div id="hero" className="flex flex-col items-center mt-36 mx-0 px-4 md:mx-[20vw]">
            <div className="unfancy">Hey! My name is</div>
            <div className="flex justify-center items-center h-52 w-full font-bold fancy name">
                <div className="font-bold enhance">
                    <span className="letter shrink">B</span>
                    <span className="special grow">r</span>
                    <span className="special grow">i</span>
                    <span className="letter shrink">l</span>
                    <span className="letter shrink">l</span>
                    <span>&nbsp;</span>
                    <span className="letter shrink">J</span>
                    <span className="special text-[0px] grow">r</span>
                    <span className="special grow">u</span>
                    <span className="letter shrink">l</span>
                    <span className="letter shrink">i</span>
                    <span className="letter shrink">a</span>
                    <span className="letter shrink">n</span>
                </div>
            </div>
        </div>
    )
}

export default Hero