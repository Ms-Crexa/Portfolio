import { Noto_Serif_HK, Amaranth, Alumni_Sans } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./About.module.scss";
import Character from "./Components/Character/Character";
const Aboutme = Amaranth({
    subsets: ["latin"],
    weight: ["400"],
});

const bout = Noto_Serif_HK({
    subsets: ["latin"],
    weight: ["400"],
});

const Click = Alumni_Sans({
    subsets: ["latin"],
    weight: ["400"],
});

const paragraph =
    "I am Marjhealou Nina Anne M. Paraiso, a Computer Science student who has a passion and focus in producing web design and making it to life.";

export default function About() {
    return (
        <div className=" bg-neutral-900 lg:px-[216px] lg:pt-[160px] md:px-[116px] md:pt-[160px] md:h-full sm:px-[90px] sm:pt-[100px] sm:h-full flex flex-col lg:h-full">
            <div className="text-[#A86554] text-[24px] font-bold">
                <h3 className={Aboutme.className}>ABOUT ME</h3>
            </div>
            <div className="text-[#D9D9D9] lg:text-[64px] md:text-[55px] md:tracking-[-2px] md:leading-[109.3%] lg:leading-[109.3%] lg:tracking-[-5px] sm:text-[43px] sm:tracking-[-2px] sm:leading-[109.3%] font-black">
                <h1 className={bout.className}>
                    {/* <Paragraph value={paragraph}/> */}
                    <Character value={paragraph} />
                </h1>
            </div>

            <div className="flex flex-col place-items-end mt-36 mb-24">
                <div className={styles.bouncetop}>
                    <div className="sm:text-[24px] md:text-[28px]">
                        <h4 className={Click.className}>Check this!</h4>
                    </div>
                </div>
                <div className="text-[32px] sm:text-[20px] md:text-[28px] text-[#29282B] ">
                    <a download href="https://github.com/Ms-Crexa/Portfolio/blob/master/public/assets/Marjhealou%20Paraiso%20-%20Resume.pdf">
                        <button className={styles.btn}>Resume</button>
                    </a>                
                </div>
            </div>
        </div>
    );
}
