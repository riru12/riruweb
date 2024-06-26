import { React } from "react";
import "../assets/css/slider.css";

const About = () => {
    return(
        <section id="about" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 2xl:mx-40">
                <div className="flex flex-col gap-4 ">
                    <div className="font-bold text-3xl">
                        <span className="font-mono text-2xl text-neutral-300">01.</span>About
                    </div>
                    <div className="text-neutral-300">
                        I was born and raised in the Philippines. My passions have brought me to software development and the field of Computer Science — while I enjoy front-end development a lot, I also dabble in other domains to learn new skills and hone them further.
                    </div>
                    <div className="text-neutral-300">
                        I am also a digital artist! I take commissions as freelance work from time to time. I have a lot of experience in graphic design from past projects and visual works.
                    </div>
                    <div className="text-neutral-300">
                        Here are some technologies I've been working with recently:
                    </div>
                    <div className="flex gap-10 font-mono text-neutral-400">
                        <div className="px-4">
                            <ul className="list-disc list-inside">
                                <li>HTML, CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="px-4">
                            <ul className="list-disc list-inside">
                                <li>Python</li>
                                <li>C</li>
                                <li>C#</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About