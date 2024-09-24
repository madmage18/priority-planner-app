import { PriorityProps } from "../types/interfaces.ts";

export function Priority({
  priority,
  date,
  status,
  children,
  onDelete,
  setPriorities,
  id,
}: PriorityProps) {
  function toggleStatus(id: number) {
    setPriorities((prevPriorities) =>
      prevPriorities.map((priority) => {
        if (priority.id == id) {
          let newStatus;
          if (priority.status === "Not Started") {
            newStatus = "In Progress";
          } else if (priority.status === "In Progress") {
            newStatus = "Completed";
          } else {
            newStatus = "Not Started";
          }
          return { ...priority, status: newStatus };
        }
        return priority;
      })
    );
  }

  return (
    <article>
      <div>
        <div className="grid-item-header">
          <h2>{priority}</h2>
          {children}
        </div>
        <p>{date}</p>
        {/* <span>{status}</span> */}
        <button className="status-button" onClick={() => toggleStatus(id)}>
          {status}
        </button>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete({ id, setPriorities })}
      >
        Delete
      </button>
    </article>
  );
}
