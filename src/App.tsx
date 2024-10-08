import { useState, useRef } from "react";
import { PriorityProps } from "./types/interfaces.ts";
import { getDatesInWeek } from "./utils/dateutils.ts";
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
  const datesInCurrentWeek: string[] = getDatesInWeek();

  const [priorities, setPriorities] = useState<PriorityProps[]>([]);
  const [plannerWeek, setPlannerWeek] = useState<string[]>(datesInCurrentWeek);

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
        <div className="pagination">
          <Pagination
            updatePlannerWeek={updatePlannerWeek}
            plannerWeek={plannerWeek}
            setPlannerWeek={setPlannerWeek}
          />
        </div>
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
