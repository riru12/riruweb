import { React } from "react";
import "../assets/css/slider.css";

/* 

WHEN UPDATING WORK CONTENT, TAKE NOTE OF THE FOLLOWING:

1) Adding new input (tab-n radio button), adding new tab (tab-n label), and adding new content (div) with className="content-n"
2) Adjust slider.css
    * add .content-n {display:none;}
    * add #tab-n:checked ~ div .content-n {display:block;}
    * adjust top movement of the slider (depends on 100%/n)
    * adjust left movement of the slider (increments of 150px)
*/

const Work = () => {
    return(
        <section id="work" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 xl:mx-24 2xl:mx-52">
                <div className="font-bold text-3xl">
                    Where I've Been
                </div>
                <input id="tab-1" name="slider" className="hidden" type="radio" defaultChecked></input>
                <input id="tab-2" name="slider" className="hidden" type="radio"></input>
                <input id="tab-3" name="slider" className="hidden" type="radio"></input>
                <div className="flex gap-10 h-fit flex-col md:h-[40vh] md:flex-row">
                    <div className="relative h-min">
                            <nav className="flex flex-row md:flex-col overflow-scroll">
                                <div className="whitespace-nowrap shrink-0 w-[150px] md:w-full"><label htmlFor="tab-1" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">UP Diliman</label></div>
                                <div className="whitespace-nowrap shrink-0 w-[150px] md:w-full"><label htmlFor="tab-2" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">AUB</label></div>
                                <div className="whitespace-nowrap shrink-0 w-[150px] md:w-full"><label htmlFor="tab-3" className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center md:px-4 md:text-base md:text-left hover:bg-neutral-900">Freelance</label></div>
                            </nav>
                            <div id="slider" className="slider"></div>
                            <div className="sliderBack"></div>
                    </div>
                    <div className="work-content content-1">
                        <div>
                            <div className="font-bold text-xl">BS Computer Science <span className="text-[#bcedc5]">@ University of the Philippines</span></div>
                            <div className="font-mono text-sm text-neutral-400">2020 - 2024</div>
                        </div>
                        <div className="mt-4 text-neutral-300">I had the opportunity to study in the Philippines' premier state university. Learned computer science concepts and developed plenty of projects for software engineering classes, operating systems classes, and data structure classes (stuff like an RSDL task scheduler and an AI model to predict risk of heart attacks).</div>
                        <div className="flex gap-10 font-mono text-neutral-400 mt-4">
                            <div className="px-4">
                                <ul className="list-disc list-inside">
                                    <li>Summa Cum Laude</li>
                                    <li>University Scholar Awardee</li>
                                    <li>UP CURSOR</li>
                                    <li>DevelUP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-content content-2">
                        <div>
                        <div className="font-bold text-xl">Information Security Intern <span className="text-[#bcedc5]">@ Asia United Bank</span></div>
                            <div className="font-mono text-sm text-neutral-400">July 2023 - August 2023</div>
                        </div>
                        <div className="mt-4 text-neutral-300">Interned at Asia United Bank and collaborated with other interns in developing a CLI tool using Go to automate running scripts that set up servers in accordance with security benchmarks.</div>
                    </div>
                    <div className="work-content content-3">
                        <div>
                        <div className="font-bold text-xl">Digital Artist <span className="text-[#bcedc5]">through Freelance and Commission</span></div>
                            <div className="font-mono text-sm text-neutral-400">2021 - Present</div>
                        </div>
                        <div className="mt-4 text-neutral-300">Delivered high-quality commissions for clients as a side activity using the skills I've learned through self-learning. These commissions range from personal portraits to art of characters they like. Keep scrolling to see some of my work!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work