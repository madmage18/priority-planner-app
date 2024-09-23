import { UpdatePlannerWeekProps, onDeleteProps, AddPriorityProps, PriorityProps } from "../types/interfaces";

export function updatePlannerWeek({dateWithTimezone, setPlannerWeek}: UpdatePlannerWeekProps){
    let newViewWeek: string[] = [];

    for (let i = 0; i < 7; i++) {
      let newDate = new Date(dateWithTimezone);
      newDate.setDate(newDate.getDate() + i);
      newViewWeek.push(newDate.toLocaleDateString());
    }
    // update displayed planner week via state
    setPlannerWeek(newViewWeek); 
  }

export  function handleDeletePriority({id, setPriorities}: onDeleteProps) {
    // update priorities state via filter
    setPriorities((prevPriorities) =>
      prevPriorities.filter((priority) => priority.id !== id)
    );
  }  

export function handleAddPriority(
    {priority, description, date, status, setPriorities}: AddPriorityProps
  ) {
    console.log(`setPriorities in handleAddPriority: ${setPriorities}`);
    console.log(`priority passed in!: ${priority}`);
    // update priorities state
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
      console.log(`The return value: ${[...prevPriorities, newPriority]}`)
      return [...prevPriorities, newPriority];
    });
  }