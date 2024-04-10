"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
 const container = useRef(null);
 const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start 0.9", "start 0.25"],
 });

 const words = value.split("");

 return (
  <p ref={container}>
   {words.map((word, i) => {
    const start = i / words.length;
    const end = start + 1 / words.length;
    return (
     <Word key={i} range={[start, end]} progress={scrollYProgress}>
      {word}
     </Word>
    );
   })}
  </p>
 );
}

const Word = ({ children, range, progress }) => {
 const amount = range[1] - range[0];
 const step = amount / children.length;

 return (
  <span>

      {

        children.split("").map((char, i) => {

          const start = range[0] + (i * step);

          const end = range[0] + ((i + 1) * step)

          return <Character key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Character>

        })

      }

    </span>
 );
};

const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0 , 1]);
 return <motion.span style={{opacity}}>{children}</motion.span>;
};
