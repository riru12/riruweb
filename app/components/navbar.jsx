"use client";

import React from "react";
import HomeIcon from "../assets/icons/HomeIcon.jsx"
import AboutIcon from "../assets/icons/AboutIcon.jsx"
import WorkIcon from "../assets/icons/WorkIcon.jsx"
import ContactIcon from "../assets/icons/ContactIcon.jsx"

const Navbar = () => {
    return (
        <div className="flex fixed w-full justify-center mx-0 px-4 bottom-5 md:justify-normal md:mx-[20vw] md:top-5 md:bottom-auto z-50">
            <nav className="flex grow justify-around rounded-2xl bg-[#1a1a1a99] backdrop-blur-md border-solid border-stone-700 border-[1px] p-1 gap-1 md:grow-0">
                <a href="/" className="grow rounded-[12px] text-neutral-300 hover:bg-[#404040d9] text-center px-4 py-2 cursor-pointer">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <div className="flex justify-center items-center"><HomeIcon fillColor="#d4d4d4"/></div>
                        <div>Home</div>
                    </div>
                </a>
                <a className="grow rounded-[12px] text-neutral-300 hover:bg-[#404040d9] text-center px-4 py-2 cursor-pointer">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <div className="flex justify-center items-center"><AboutIcon fillColor="#d4d4d4"/></div>
                        <div>About</div>
                    </div>
                </a>
                <a className="grow rounded-[12px] text-neutral-300 hover:bg-[#404040d9] text-center px-4 py-2 cursor-pointer">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <div className="flex justify-center items-center"><WorkIcon fillColor="#d4d4d4"/></div>
                        <div>Works</div>
                    </div>
                </a>
                <a className="grow rounded-[12px] text-neutral-300 hover:bg-[#404040d9] text-center px-4 py-2 cursor-pointer">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <div className="flex justify-center items-center"><ContactIcon fillColor="#d4d4d4"/></div>
                        <div>Contact</div>
                    </div>
                </a>
            </nav>
        </div>
    )
}

export default Navbar