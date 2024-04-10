import JobOrder from "./Components/Section1/JobOrder";
import SportsCenter from "./Components/Section2/SportsCenter";

export default function Works() {
    return (
     <div className="m-20">
        <div>
            <h4>My works</h4>
        </div>
      <div>
       <div className="mt-10">
        <JobOrder />
       </div>
       {/* <div><SportsCenter/></div> */}
      </div>
     </div>
    );
}   