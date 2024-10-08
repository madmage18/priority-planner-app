import { PriorityProps } from "../types/interfaces.ts";
import { toggleStatus } from "../utils/stateutils.ts";

export function Priority({
  priority,
  date,
  status,
  children,
  onDelete,
  setPriorities,
  id,
}: PriorityProps) {
  return (
    <article>
      <div>
        <div className="grid-item-header">
          <h2>{priority}</h2>
          {children}
        </div>
        <p className={`${status.replace(/\s+/g, "-").toLowerCase()}-p`}>
          {date}
        </p>
        {/* Clickable 'Status' value on Priority card*/}
        <button
          className="status-button"
          onClick={() => toggleStatus({ id, setPriorities })}
        >
          {status}
        </button>
      </div>
      {/* Clickable Delete priority link on Priority card*/}
      <button
        className="delete-button"
        onClick={() => onDelete({ id, setPriorities })}
      >
        Delete
      </button>
    </article>
  );
}
