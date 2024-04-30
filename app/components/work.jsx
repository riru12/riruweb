import { React } from "react";
import "../assets/css/slider.css";
import tabs from "../assets/content/tabs.json";

/* 

WHEN UPDATING WORK CONTENT, TAKE NOTE OF THE FOLLOWING:

Adjust slider.css
* add .content-n {display:none;}
* add #tab-n:checked ~ div .content-n {display:block;}
* adjust HORIZONTAL length of .sliderBack (multiples of 150), and left movement of .slider
* adjust VERTICAL movement of .slider (100%/n)
*/

const Work = () => {
    return(
        <section id="work" className="py-24 mx-[10vw] lg:mx-[20vw]">
            <div className="flex flex-col gap-10 mx-0 xl:mx-24 2xl:mx-[13.5rem]">
                <div className="font-bold text-3xl">
                    <span className="font-mono text-2xl ">02.</span>Where I've Been
                </div>
                {tabs.map(tab => (
                    <input key={tab.id} id={`tab-${tab.id}`} name="slider" type="radio" className="hidden" defaultChecked={tab.id == 1}></input>
                ))}
                <div className="flex gap-10 flex-col sm:h-[30vh] sm:flex-row">
                    <div id="tablist">
                        <div className="relative overflow-x-scroll overflow-y-hidden h-[50px] mx-[-10vw] sm:overflow-hidden sm:h-min sm:mx-auto custom-scrollbar">
                            <nav className="flex flex-row sm:flex-col pl-[10vw] sm:pl-0">
                                {tabs.map(tab => (
                                    <div  key={tab.id} className="whitespace-nowrap shrink-0 w-[150px] sm:w-full"><label htmlFor={`tab-${tab.id}`} className="block font-mono text-neutral-300 cursor-pointer py-2 px-0 text-sm text-center sm:px-4 sm:text-base sm:text-left hover:text-[#bcedc5]">{tab.tabname}</label></div>
                                ))}
                            </nav>
                            <div id="slider" className="slider ml-[10vw] sm:ml-0"></div>
                            <div className="sliderBack ml-[10vw] sm:ml-0"></div>
                        </div>
                    </div>
                    {tabs.map(tab => (
                            <div key={tab.id} className={`work-content content-${tab.id}`}>
                                <div>
                                    <div className="font-bold text-xl">{tab.title} <span className="text-[#bcedc5]">{tab.place}</span></div>
                                    <div className="font-mono text-sm text-neutral-400">{tab.date}</div>
                                    </div>
                                <div className="mt-4 text-neutral-300">{tab.description}</div>

                                {tab.sublist && <div className="flex gap-10 font-mono text-neutral-400 mt-4">
                                    <div className="px-4">
                                        <ul className="list-disc list-inside">
                                            {tab.sublist.map((item,index) => (<li key={index}>{item}</li>))}
                                        </ul>
                                    </div>
                                </div>}
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work