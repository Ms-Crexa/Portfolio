'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParagraphProps {
 value: string;
}

export default function Paragraph({ value }: ParagraphProps) {
 const container = useRef<HTMLParagraphElement>(null);
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

interface WordProps {
 children: string;
 range: [number, number];
 progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {
 const amount = range[1] - range[0];
 const step = amount / children.length;

 return (
  <span>
   {children.split("").map((char, i) => {
    const start = range[0] + i * step;
    const end = range[0] + (i + 1) * step;

    return (
     <Character key={`c_${i}`} progress={progress} range={[start, end]}>
      {char}
     </Character>
    );
   })}
  </span>
 );
};

interface CharacterProps {
 children: string;
 range: [number, number];
 progress: MotionValue<number>;
}

const Character = ({ children, range, progress }: CharacterProps) => {
 const opacity = useTransform(progress, range, [0, 1]);
 return <motion.span style={{ opacity }}>{children}</motion.span>;
};
