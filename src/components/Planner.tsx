import { Priority } from "./Priority.tsx";
import { getDayName } from "../utils/dateutils.ts";
import { PlannerProps } from "../types/interfaces.ts";

export default function Planner({
  plannerWeek,
  priorities,
  onDelete,
  setPriorities,
}: PlannerProps) {
  return (
    <div className="grid-container">
      {plannerWeek.map((date, i) => (
        <div className="grid-section" id={date} key={date}>
          <li id={date} key={date} className="column-title">
            {getDayName(i)}:<div>{date}</div>
          </li>

          {priorities ? (
            priorities.map((priority) => (
              <div key={priority.id} className="priority-margin">
                {priority.date === date && (
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
                )}
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
