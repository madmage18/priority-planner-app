import { memo } from "react";
import stoplightJpg from "../assets/stoplight.jpg";

function Header() {
  return (
    <header>
      <img src={stoplightJpg} alt="A list of priorities" />
      <span className="sr-only">
        Stoplight Image by macrovector on Freepik from
        https://www.freepik.com/free-vector/traffic-lights-realistic_1538788.htm#query=stoplight&position=0&from_view=keyword&track=ais_hybrid&uuid=b29a6556-fca5-4c75-a318-71b2fafda1ce
      </span>
      <div>
        <h1>Priority Planner</h1>
      </div>
    </header>
  );
}

export default memo(Header);
