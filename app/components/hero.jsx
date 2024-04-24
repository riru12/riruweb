import React from "react";
import "../assets/css/hero.css";

const Hero = () => {
    return(
        <div id="hero" className="flex flex-col items-center mt-36 mx-0 px-4 md:mx-[20vw]">
            <div className="unfancy">Hey! My name is</div>
            <div className="flex justify-center items-center h-52 w-full fancy">
                <div className="font-bold">
                    Brill Julian
                </div>
            </div>
        </div>
    )
}

export default Hero