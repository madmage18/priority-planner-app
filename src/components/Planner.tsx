import { Priority } from "./Priority.tsx";
import { getDayName } from "../utils/dateutils.ts";
import { PlannerProps } from "../types/interfaces.ts";

export default function Planner({
  plannerWeek,
  priorities,
  onDelete,
  setPriorities,
}: PlannerProps) {
  function getPlannerDayPriorities(date: string) {
    // returns [] of priorities for specific date
    return priorities.filter((priority) => priority.date === date);
  }

  // Displays a 7 day-planner week. Priorities listed for each date
  return (
    <div className="grid-container">
      {/* renders grid sections for each day in 7 day planner week */}
      {plannerWeek.map((date, i) => (
        <div className="grid-section" id={date} key={date}>
          <li id={date} key={date} className="column-title">
            {getDayName(i)}:<div>{date}</div>
          </li>
          {/* renders priorities for specific date */}
          {priorities ? (
            getPlannerDayPriorities(date).map((priority) => (
              <div key={priority.id} className="priority-margin">
                <div
                  key={priority.id}
                  className={`${priority.status
                    .replace(/\s+/g, "-")
                    .toLowerCase()} grid-item`}
                >
                  <Priority
                    priority={priority.priority}
                    date={priority.date}
                    status={priority.status}
                    id={priority.id}
                    onDelete={onDelete}
                    setPriorities={setPriorities}
                  >
                    {priority.children}
                  </Priority>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
