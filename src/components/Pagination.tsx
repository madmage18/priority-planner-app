import { memo } from "react";
import { convertDateFormat } from "../utils/dateutils.ts";
import { PaginationProps } from "../types/interfaces.ts";

function Pagination({
  plannerWeek,
  updatePlannerWeek,
  setPlannerWeek,
}: PaginationProps) {
  function handleUpdatePage(nextPage: boolean, plannerWeek: string[]) {
    const inputFormatDate: string = convertDateFormat(plannerWeek[0]); // get input format of date: ex) 9/17/24
    const dateWithTimezone = new Date(inputFormatDate + "T00:00:00"); // get standardized Date obj with 0:00:00 hr set for current timezone

    // set dateWithTimezone to next week's or previous week's Sunday
    if (nextPage) {
      dateWithTimezone.setDate(dateWithTimezone.getDate() + 7);
    } else {
      dateWithTimezone.setDate(dateWithTimezone.getDate() - 7);
    }
    // call fn to update 7 day week week shown in the planner. Updates using setPlannerWeek state setter
    updatePlannerWeek({ dateWithTimezone, setPlannerWeek });
  }

  return (
    <>
      <button
        aria-labelledby="pagination-button-previous-week"
        className="pagination-button"
        onClick={() => handleUpdatePage(false, plannerWeek)}
      >
        {`< Previous Week`}
      </button>
      <button
        aria-labelledby="pagination-button-next-week"
        className="pagination-button"
        onClick={() => handleUpdatePage(true, plannerWeek)}
      >
        {`Next Week >`}
      </button>
    </>
  );
}

export default memo(Pagination);
