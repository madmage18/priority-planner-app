import { memo } from "react";
import { DownloadButtonProps } from "../types/interfaces.tsx";
import handleDownloadPriorities from "../utils/downloadutils.ts";

function DownloadButton({ weeklyPlannerHTML }: DownloadButtonProps) {
  const downloadString: string = "\u2B73  Download Current Week as PDF";

  return (
    <>
      <button
        className="secondary-form-button"
        onClick={() => handleDownloadPriorities({ weeklyPlannerHTML })}
      >
        {downloadString}
      </button>
    </>
  );
}

export default memo(DownloadButton);
