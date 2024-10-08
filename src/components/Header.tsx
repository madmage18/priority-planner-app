import { memo } from "react";
function Header() {
  return (
    <header>
      <img src="/src/assets/stoplight.jpg" alt="A list of priorities" />
      <div>
        <h1>Priority Planner</h1>
      </div>
    </header>
  );
}

export default memo(Header);
