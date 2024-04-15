import Navbar from "./Components/Navbar";
import { Wendy_One } from "next/font/google";
import { Noto_Serif_HK } from "next/font/google";
import "./Home.css";
import Flower from "./Components/Flower";
import Behance from "../../../public/assets/Behance.png";
import Github from "../../../public/assets/Github.png";
import Instagram from "../../../public/assets/Instagram.png";
import LinkedIn from "../../../public/assets/LinkedIn.png";
import BubbleText from "./Components/BubbleText";

import Image from "next/image";
import Frontend from "./Components/Frontend";

const wendy = Wendy_One({
  subsets: ["latin"],
  weight: ["400"],
});
const UI_FRONT = Noto_Serif_HK({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    // MAIN CONTAINER
    <div className="flex flex-row h-full">
      

      {/* Main */}
      <div className="bg_image pt-20 lg:h-full lg:w-full sm:h-full sm:w-full md:h-full md:w-full">
        <div className="flex flex-col place-items-center">
          <div className="text-[#CCCAC5] md:text-[28px] text-center lg:text-[48px]">
            <h2 className={wendy.className}>Henlo Hooman,</h2>
          </div>
          <div className="text-[#A86554] md:text-[24px] md:px-9 flex flex-row content-center w-fit px-12 text-center lg:text-[54px] font-extrabold border rounded-lg border-[#A86554] ">
            <h2>I am Ninya Paraiso</h2>
          </div>
        </div>
        <div className="flex flex-row h-full w-full">

          {/* MAIN CONTENT */}

          <div className="justify-evenly place-content-center flex flex-row h-full w-full">
            <div className="text-[#CCCAC5] place-content-center sm:text-[17px] sm:px-3 md:text-[30px] md:px-3 font-black lg:text-[64px]">
              <span className={UI_FRONT.className}>
                <BubbleText />
              </span>
            </div>
            <div className="lg:mt-2 sm:m-1 sm:w-80 md:m-1 md:w-96 lg:w-[517px]">
              <div className="scale_in_center">
                <Flower />
              </div>
            </div>
            <div className="front_end_word text-[#CCCAC5] place-content-center sm:text-[17px] sm:px-3 md:text-[30px] md:px-3 lg:text-[64px] font-black">
              <h1 className={UI_FRONT.className}>
                <Frontend />
              </h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
