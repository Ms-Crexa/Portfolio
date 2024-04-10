import Image from "next/image";
import flower from "../../../../public/assets/Flower.png";
import Carnation from "../../../../public/assets/Carnation.png";

export default function Flower() {
    return (
     <div className="lg:w-full lg:h-full ">
      <Image

       src={Carnation}
       alt="Carnation"
       height="100"
       width="517"
       priority
       ></Image>
     </div>
    );
}