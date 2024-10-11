import DOMPurify from "dompurify";
import { useRef, type FormEvent, memo } from "react";
import { NewPriorityProps } from "../types/interfaces";
import { convertToDisplayDate } from "../utils/dateutils";

function NewPriority({ onAddPriority, setPriorities }: NewPriorityProps) {
  const priority = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredPriority = DOMPurify.sanitize(priority.current!.value);
    const enteredDescription = DOMPurify.sanitize(description.current!.value);
    const enteredDate = DOMPurify.sanitize(date.current!.value); // input format ex)2024-09-17

    const statusOption = event.currentTarget.querySelector(
      'input[name="statusOptions"]:checked'
    ) as HTMLInputElement;
    const enteredStatus = statusOption
      ? DOMPurify.sanitize(statusOption.value)
      : "";

    const formattedDate = convertToDisplayDate(enteredDate); //display format 9/17/2024

    event.currentTarget.reset();

    onAddPriority({
      priority: enteredPriority,
      description: enteredDescription,
      date: formattedDate,
      status: enteredStatus,
      setPriorities: setPriorities,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="priority">New Priority</label>
          <input id="priority" type="text" ref={priority} required></input>
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" ref={description}></input>
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" ref={date} required></input>
          <span className="validity"></span>
        </p>
        <div className="radio-form">
          <div className="radio-group">
            <input
              type="radio"
              id="notStarted"
              name="statusOptions"
              value="Not Started"
              required
            />
            <label htmlFor="notStarted">Not Started</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="inProgress"
              name="statusOptions"
              value="In Progress"
            />
            <label htmlFor="inProgress">In Progress</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="completed"
              name="statusOptions"
              value="Completed"
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>
        <p>
          <button className="primary-form-button">Add Priority</button>
        </p>
      </form>
    </>
  );
}

export default memo(NewPriority);
