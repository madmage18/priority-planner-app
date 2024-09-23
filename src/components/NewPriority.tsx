import { useRef, useState, type FormEvent } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { NewPriorityProps } from "../types/interfaces";
import { convertToDisplayDate } from "../utils/dateutils";

export default function NewPriority({
  onAddPriority,
  weeklyPlannerHTML,
  setPriorities,
}: NewPriorityProps) {
  const priority = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("Not Started");

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target!.value);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredPriority = priority.current!.value;
    const enteredDescription = description.current!.value;
    const enteredDate = date.current!.value; // input format ex)2024-09-17
    const formattedDate = convertToDisplayDate(enteredDate); //display format 9/17/2024

    const enteredStatus = selectedStatus;

    event.currentTarget.reset();

    onAddPriority({
      priority: enteredPriority,
      description: enteredDescription,
      date: formattedDate,
      status: enteredStatus,
      setPriorities: setPriorities,
    });
  }

  function handleDownloadPriorities() {
    const weeklyPlannerHTMLNode: HTMLDivElement = weeklyPlannerHTML!.current!;

    html2canvas(weeklyPlannerHTMLNode).then((canvas) => {
      let imgData = canvas.toDataURL("image/png");
      let pdf = new jsPDF("landscape", "mm", "a4");
      let imgWidth = 297; // A4 width in mm for landscape
      let pageHeight = 210; // A4 height in mm for landscape
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("download.pdf"); //Download PDF
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
              checked={selectedStatus === "Not Started"}
              // Determine the correct tyoe later
              onChange={handleStatusChange}
            />
            <label htmlFor="notStarted">Not Started</label>
          </div>
          <p className="radio-group">
            <input
              type="radio"
              id="inProgress"
              name="statusOptions"
              value="In Progress"
              checked={selectedStatus === "In Progress"}
              onChange={handleStatusChange}
            />
            <label htmlFor="inProgress">In Progress</label>
          </p>
          <p className="radio-group">
            <input
              type="radio"
              id="completed"
              name="statusOptions"
              value="Completed"
              checked={selectedStatus === "Completed"}
              onChange={handleStatusChange}
            />
            <label htmlFor="completed">Completed</label>
          </p>
        </div>
        <p>
          <button className="primary-form-button">Add Priority</button>
        </p>
      </form>

      <button
        className="secondary-form-button"
        onClick={handleDownloadPriorities}
      >
        Download Current Week as PDF
      </button>
    </>
  );
}
