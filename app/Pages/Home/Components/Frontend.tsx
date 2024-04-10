import React from "react";
import styles from "./BubbleText.module.scss";

const Frontend = () => {
 return (
  <span className="text-[#A86554]">
   {"Front-end".split("").map((child, idx) => (
    <span className={styles.hoverText} key={idx}>
     {child}
    </span>
   ))}
  </span>
 );
};

export default Frontend;
