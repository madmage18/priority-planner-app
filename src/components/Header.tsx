import { memo } from "react";
import stoplightJpg from "../assets/stoplight.jpg";

function Header() {
  return (
    <header>
      <img src={stoplightJpg} alt="A list of priorities" />
      <div>
        <h1>Priority Planner</h1>
      </div>
    </header>
  );
}

export default memo(Header);
