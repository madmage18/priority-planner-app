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
  return (
    <article>
      <div>
        <h2>{priority}</h2>
        {children}
        <p>{date}</p>
        <span>{status}</span>
      </div>
      <button onClick={() => onDelete({ id, setPriorities })}>Delete</button>
    </article>
  );
}
