import { Priority, PriorityProps } from "./Priority.tsx";

interface PriorityListProps {
  priorities: PriorityProps[];
  onDelete: (id: number) => void;
}

export default function PriorityList({
  priorities,
  onDelete,
}: PriorityListProps) {
  return (
    <ul>
      {priorities.map((priority) => (
        <li key={priority.id}>
          <Priority
            priority={priority.priority}
            date={priority.date}
            status={priority.status}
            id={priority.id}
            onDelete={onDelete}
          >
            {priority.children}
          </Priority>
        </li>
      ))}
    </ul>
  );
}
