import { useState, useRef, useEffect } from "react";
import { PriorityProps } from "./types/interfaces.ts";
import { getDatesInCurrentWeek } from "./utils/dateutils.ts";
import {
  updatePlannerWeek,
  handleDeletePriority,
  handleAddPriority,
} from "./utils/stateutils.ts";
import Planner from "./components/Planner.tsx";
import Pagination from "./components/Pagination.tsx";
import Header from "./components/Header.tsx";
import NewPriority from "./components/NewPriority.tsx";
import DownloadButton from "./components/DownloadButton.tsx";

export default function App() {
  const getInitialData = () => {
    const data: PriorityProps[] = JSON.parse(
      localStorage.getItem("priorities") || "[]"
    );
    return data;
  };

  const [priorities, setPriorities] = useState<PriorityProps[]>(getInitialData);
  const [plannerWeek, setPlannerWeek] = useState<string[]>(
    getDatesInCurrentWeek()
  );

  useEffect(() => {
    localStorage.setItem("priorities", JSON.stringify(priorities));
  }, [priorities]);

  const weeklyPlannerHTML = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <main>
          <Header />
          <NewPriority
            onAddPriority={handleAddPriority}
            setPriorities={setPriorities}
          />
          <DownloadButton weeklyPlannerHTML={weeklyPlannerHTML} />
        </main>
        <nav className="pagination" role="navigation" aria-label="pagination">
          <Pagination
            updatePlannerWeek={updatePlannerWeek}
            plannerWeek={plannerWeek}
            setPlannerWeek={setPlannerWeek}
          />
        </nav>
        <div className="planner" ref={weeklyPlannerHTML}>
          <Planner
            priorities={priorities}
            plannerWeek={plannerWeek}
            onDelete={handleDeletePriority}
            setPriorities={setPriorities}
          />
        </div>
      </div>
    </>
  );
}
