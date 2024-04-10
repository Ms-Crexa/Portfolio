"use client";
import styles from "./Skills.module.scss";
import gsap from "gsap";

const projects = [
 {
  title: "CSS",

  color: "#A86554",
 },

 {
  title: "HTML",

  color: "#A86554",
 },

 {
  title: "JAVASCRIPT",

  color: "#A86554",
 },

 {
  title: "BOOTSRAP",

  color: "#A86554",
 },

 {
  title: "TAILWIND",

  color: "#A86554",
 },

 {
  title: "REACT JS",

  color: "#A86554",
 },

 {
  title: "NEXT JS",

  color: "#A86554",
 },

 {
  title: "UI/UX",

  color: "#A86554",
 },
];

export default function Skills() {
 const manageMouseEnter = (e, index) => {
  gsap.to(e.target, {
   top: "-2vw",
   backgroundColor: projects[index].color,
   duration: 0.3,
  });
 };

 const manageMouseLeave = (e, index) => {
  gsap.to(e.target, {
   top: "0",
   backgroundColor: "#29282B",
   duration: 0.3,
   delay: 0.1,
  });
 };

 return (
  <div className={styles.container}>
   <div className={styles.projectContainer}>
    {projects.map((project, index) => {
     return (
      <div
       onMouseEnter={(e) => {
        manageMouseEnter(e, index);
       }}
       onMouseLeave={(e) => {
        manageMouseLeave(e, index);
       }}
       key={index}>
       <p>{project.title}</p>
      </div>
     );
    })}
   </div>
  </div>
 );
}
