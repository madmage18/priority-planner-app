import {
  UpdatePlannerWeekProps,
  onDeleteProps,
  AddPriorityProps,
  PriorityProps,
  ToggleStatusProps,
} from "../types/interfaces";

// Updates 7-day week shown in planner view.
export function updatePlannerWeek({
  dateWithTimezone, // first date in new view week
  setPlannerWeek,
}: UpdatePlannerWeekProps) {
  const newViewWeek: string[] = [];
  // Add dateWithTimezone and next 6 dates in calendar to newViewWeek[]
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(dateWithTimezone);
    newDate.setDate(newDate.getDate() + i);
    newViewWeek.push(newDate.toLocaleDateString());
  }
  // set state (new planner week view)
  setPlannerWeek(newViewWeek);
}

export function handleDeletePriority({ id, setPriorities }: onDeleteProps) {
  // delete priority based on priority 'id'. Use state setter
  setPriorities((prevPriorities) =>
    prevPriorities.filter((priority) => priority.id !== id)
  );
}

export function handleAddPriority({
  priority,
  description,
  date,
  status,
  setPriorities,
}: AddPriorityProps) {
  // setter updates priorities[] with new Priority
  setPriorities((prevPriorities) => {
    const newPriority: PriorityProps = {
      id: Math.random(),
      children: description,
      priority: priority,
      status: status,
      date: date,
      onDelete: handleDeletePriority,
      setPriorities: setPriorities,
    };
    return [...prevPriorities, newPriority];
  });
}

// Updates Status state for a priority. loops through 3 Status options
export function toggleStatus({ id, setPriorities }: ToggleStatusProps) {
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
