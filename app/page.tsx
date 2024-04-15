import "./page.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skillspage from "./Pages/Skills/Skillspage";
import Works from "./Pages/Works/Works";
import Image from "next/image";
import Behance from "../public/assets/Behance.png";
import Github from "../public/assets/Github.png";
import Instagram from "../public/assets/Instagram.png";
import LinkedIn from "../public/assets/LinkedIn.png";
import Navbar from "./Pages/Home/Components/Navbar";

export default function page() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* CONNECT WITH ME CONTAINER */}
      <div>
        <div className="fixed-bottom fixed h-full md:text-md sm:text-[10px] place-content-end bg-[#A86554] pb-3 pl-2 ">
          <h4 className="upright">Connect with me</h4>
          <div className="flex flex-col">
            {/* links */}
            <div className="py-3 sm:py-3">
              <a href="https://github.com/Ms-Crexa" className="cursor-pointer">
                <Image
                  className="sm:h-3 sm:w-3 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  src={Github}
                  alt="GFG logo served with static path of public directory"></Image>
              </a>
            </div>
            <div>
              <a href="" className="cursor-pointer">
                <Image
                  className="sm:h-3 sm:w-3 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  src={Instagram}
                  alt="GFG logo served with static path of public directory"></Image>
              </a>
            </div>
            <div className="py-3 sm:py-3">
              <a
                href="https://www.linkedin.com/in/marjhealou-nina-anne-paraiso-8421b9273/"
                className="cursor-pointer">
                <Image
                  className="sm:h-3 sm:w-3 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  src={LinkedIn}
                  alt="GFG logo served with static path of public directory"></Image>
              </a>
            </div>
            <div className="">
              <a
                href="https://www.behance.net/marjhealouparaiso"
                className="cursor-pointer ">
                <Image
                  className="sm:h-3 sm:w-3 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  src={Behance}
                  alt="GFG logo served with static path of public directory"></Image>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Container section */}

      <div>
        <Home />
        <About />
        <Skillspage />
        <Works />
      </div>

      {/* Container Navbar */}
      <div className="mx-1">
        <Navbar />
      </div>
    </div>
  );
}
