"use client"
import React from "react";

import Skill from "./Components/Skill";
import ScrollAnimate from "./Components/ScrollAnimate";

export default function Skillspage() {
   

    return (
        <div className="">
            {/* <div className={styles.main}>
                <div className={styles.sliderContainer}>
                    <div ref={slider} className={styles.slider}>
                        <p ref={firstText}>MY SKILLS -</p>
                        <p ref={secondText}>MY SKILLS -</p>
                    </div>
                </div>
            </div> */}
            <div>
                <ScrollAnimate/>
            </div>
            {/* <div className="mb-20">
                <Skill />
            </div> */}
        </div>
    );  
}
