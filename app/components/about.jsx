"use client";
import { React, useState} from "react";

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
        <section id="about" className="flex flex-col py-6 gap-10 mx-[10vw] lg:mx-[20vw]">
            <div className="font-bold text-3xl">
                About
            </div>
            <div className="flex flex-row gap-10 w-full">
                <div className="flex flex-col min-w-32">
                    <button className={`text-left px-4 py-2 ${content[selectedTab].button === '1' ? 'border-l-[3px] border-cyan-500' : 'border-l-[1px] border-neutral-600'}`} onClick={()=>setSelectedTab("professional")}>professional</button>
                    <button className={`text-left px-4 py-2 ${content[selectedTab].button === '2' ? 'border-l-[3px] border-cyan-500' : 'border-l-[1px] border-neutral-600'}`} onClick={()=>setSelectedTab("education")}>education</button>
                    <button className={`text-left px-4 py-2 ${content[selectedTab].button === '3' ? 'border-l-[3px] border-cyan-500' : 'border-l-[1px] border-neutral-600'}`} onClick={()=>setSelectedTab("personal")}>personal</button>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="font-bold text-xl">Details</div>
                        <div className="font-mono text-sm">{content[selectedTab].date}</div>
                    </div>
                    <div>{content[selectedTab].paragraph}</div>
                </div>
            </div>
        </section>
    )
}

export default About