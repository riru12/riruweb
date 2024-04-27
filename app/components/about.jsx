"use client";
import { React, useState} from "react";
import "../assets/css/slider.css";

const About = () => {
    const [selectedTab, setSelectedTab] = useState("professional");

    const content ={
        professional: {
            button: "1",
            date: "January 2002 - Present",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        education: {
            button: "2",
            date:"January 2022 - December 2023",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        personal: {
            button: "3",
            date:"December 2023 - January 2024",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    };

    return(
        <section id="about" className="py-6 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 xl:mx-24 2xl:mx-52">
                <div className="font-bold text-3xl">
                    About
                </div>
                <input id="personal" name="slider" className="hidden" type="radio" defaultChecked></input>
                <input id="education" name="slider" className="hidden" type="radio"></input>
                <input id="professional" name="slider" className="hidden" type="radio"></input>
                <div className="flex gap-10 flex-col md:flex-row">
                    <div className="relative h-min">
                            <nav className="flex flex-row md:flex-col">
                                <div className="w-[33.3%] md:w-full"><label htmlFor="personal" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">personal</label></div>
                                <div className="w-[33.3%] md:w-full"><label htmlFor="education" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">education</label></div>
                                <div className="w-[33.3%] md:w-full"><label htmlFor="professional" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">professional</label></div>
                            </nav>
                            <div id="slider" className="slider"></div>
                            <div className="sliderBack"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col gap-4">
                                <div>
                                    <div className="font-bold text-xl">Details</div>
                                    <div className="font-mono text-sm text-neutral-400">January 2002 - Present</div>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About