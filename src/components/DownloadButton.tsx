import { memo } from "react";
import { DownloadButtonProps } from "../types/interfaces.tsx";
import handleDownloadPriorities from "../utils/downloadutils.ts";
import downloadPng from "../assets/download-icon.png";

function DownloadButton({ weeklyPlannerHTML }: DownloadButtonProps) {
  return (
    <>
      <button
        aria-labelledby="download-pdf"
        className="secondary-form-button"
        onClick={() => handleDownloadPriorities({ weeklyPlannerHTML })}
      >
        <span>
          <img src={downloadPng} alt="Download" className="button-icon"></img>
        </span>
        Download Current Week as PDF
      </button>
    </>
  );
}

export default memo(DownloadButton);
