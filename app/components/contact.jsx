import React from "react";
import "../assets/css/button.css"
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Contact = () => {
    return(
        <section id="contact" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col items-center gap-10 mx-0 2xl:mx-40 pt-24">
                <div className="flex flex-col items-center gap-4">
                    <div className="font-bold text-3xl">
                        Contact Me
                    </div>
                    <div className="text-neutral-300 text-center">
                        Want to reach out? Feel free to contact me through any of the following platforms:
                    </div>
                </div>
                <div className="flex flex-row gap-10">
                    <a href="https://github.com/riru12" target="_blank"><GithubIcon fillColor="#ffffff" /></a>
                    <a href="https://www.linkedin.com/in/brill-rina/" target="_blank"><LinkedinIcon fillColor="#ffffff" /></a>
                    <a href="https://twitter.com/artofriru" target="_blank"><TwitterIcon fillColor="#ffffff" /></a>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="text-neutral-300 text-center">
                        or directly send me an email!
                    </div>
                    <a className="back" href="mailto:brilljulianrina@gmail.com"><span className="front font-mono text-sm">Say Hello</span></a>
                </div>
            </div>
        </section>
    )
}

export default Contact