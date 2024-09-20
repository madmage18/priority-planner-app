import { type ReactNode } from "react";
export interface PriorityProps {
  priority: string;
  date: string;
  status: string;
  children: ReactNode;
  id: number;
  onDelete: (id: number) => void;
}

export function Priority({
  priority,
  date,
  status,
  children,
  onDelete,
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
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
