import React from "react";
import styles from "./BubbleText.module.scss";


const BubbleText = () => {
 return (
  <span className="text-[#A86554]">
   {"UI/UX".split("").map((child, idx) => (
    <span className={styles.hoverText} key={idx}>
     {child}
    </span>
   ))}
  </span>
 );
};

export default BubbleText;
