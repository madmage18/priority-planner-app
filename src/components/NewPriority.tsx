import { useRef, type FormEvent } from "react";
interface NewPriorityProps {
  onAddPriority: (
    priority: string,
    description: string,
    date: string,
    status: string
  ) => void;
}

export default function NewPriority({ onAddPriority }: NewPriorityProps) {
  const priority = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const status = useRef<HTMLSelectElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredPriority = priority.current!.value;
    const enteredDescription = description.current!.value;
    const enteredDate = date.current!.value;
    const enteredStatus = status.current!.value;

    event.currentTarget.reset();

    onAddPriority(
      enteredPriority,
      enteredDescription,
      enteredDate,
      enteredStatus
    );
  }

  return (
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
        <input id="date" type="text" ref={date}></input>
      </p>
      <p>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" ref={status}>
          <option value="Not Started" selected>
            Not Started
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <p>
        <button>Add Priority</button>
      </p>
    </form>
  );
}
