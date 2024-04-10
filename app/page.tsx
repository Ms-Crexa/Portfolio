import "./page.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skillspage from "./Pages/Skills/Skillspage";
import Works from "./Pages/Works/Works";


export default function page() {
  return (
    <div>
      <Home />
      <About/>
      <Skillspage/>
      <Works/>


    </div>
  );
}
