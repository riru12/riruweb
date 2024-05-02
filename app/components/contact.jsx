import React from "react";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Contact = () => {
    return(
        <section id="contact" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col items-center gap-10 mx-0 2xl:mx-40">
                <div className="font-bold text-3xl">
                    Contact Me
                </div>
                <div className="text-neutral-300">
                    Want to reach out? Feel free to contact me through any of the following platforms!
                </div>
                <div className="flex flex-row gap-4">
                    <a href="https://github.com/riru12" target="_blank"><GithubIcon fillColor="#ffffff" /></a>
                    <a href="https://www.linkedin.com/in/brill-rina/" target="_blank"><LinkedinIcon fillColor="#ffffff" /></a>
                    <a href="https://twitter.com/artofriru" target="_blank"><TwitterIcon fillColor="#ffffff" /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact