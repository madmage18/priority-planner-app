import { useState } from "react";
import { PriorityProps } from "./components/Priority.tsx";
import PriorityList from "./components/PriorityList.tsx";
import Header from "./components/Header.tsx";
import stoplightJpg from "./assets/stoplight.jpg";

import NewPriority from "./components/NewPriority.tsx";

export default function App() {
  const [priorities, setPriorities] = useState<PriorityProps[]>([]);

  function handleAddPriority(
    priority: string,
    description: string,
    date: string,
    status: string
  ) {
    // new state depends on the old state. Using ((old state) => {new state})
    setPriorities((prevPriorities) => {
      const newPriority: PriorityProps = {
        id: Math.random(),
        children: description,
        priority: priority,
        status: status,
        date: date,
        onDelete: handleDeletePriority,
      };
      return [...prevPriorities, newPriority];
    });
  }
  function handleDeletePriority(id: number) {
    // updating state via filter method
    setPriorities((prevPriorities) =>
      prevPriorities.filter((priority) => priority.id !== id)
    );
  }

  return (
    <main>
      <Header image={{ src: stoplightJpg, alt: "A list of priorities" }}>
        <h1>Priority Planner</h1>
      </Header>
      <NewPriority onAddPriority={handleAddPriority} />
      <PriorityList onDelete={handleDeletePriority} priorities={priorities} />
    </main>
  );
}
