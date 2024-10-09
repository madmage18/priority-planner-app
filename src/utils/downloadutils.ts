import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import { DownloadButtonProps } from "../types/interfaces";

export default function handleDownloadPriorities({
  weeklyPlannerHTML,
}: DownloadButtonProps) {
  const weeklyPlannerHTMLNode: HTMLDivElement = weeklyPlannerHTML!.current!;

  if (weeklyPlannerHTMLNode.getBoundingClientRect().width < 1887) {
    // Temporarily set width to 1887px for pdf formatting
    weeklyPlannerHTMLNode.style.width = "1887px";
  }

  domtoimage
    .toPng(weeklyPlannerHTMLNode)
    .then((dataUrl) => {
      const pdf = new jsPDF("landscape", "mm", "a4");
      const imgWidth = 297; // A4 width in mm for landscape
      const pageHeight = 210; // A4 height in mm for landscape
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const imgHeight = (img.height * imgWidth) / img.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("priority-planner-week.pdf"); // Downloads PDF
        weeklyPlannerHTMLNode.style.removeProperty("width"); // Restore responsive width. Remove any inline width styling for pdf formatting
      };
    })
    .catch((error) => {
      console.error("Error generating image:", error);
      weeklyPlannerHTMLNode.style.removeProperty("width"); // Restore responsive width in case of an error
    });
}
