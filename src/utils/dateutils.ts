export function getDatesInCurrentWeek() {
  const now = new Date(); // current date
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)

  const targetDate = new Date(now); // current date
  targetDate.setDate(now.getDate() - dayOfWeek); // reset to Sunday date value, Day 1 of week

  const datesInWeek: string[] = []; // empty array to be populated with dates in week to display (e.g.): ["9/22/2024", "9/23/2024", "9/24/2024", "9/25/2024", "9/26/2024", "9/27/2024", "9/28/2024"]

  // Using targetDate (Day 1 date), push all dates for week to datesInWeek array
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(targetDate);
    newDate.setDate(newDate.getDate() + i);
    datesInWeek.push(newDate.toLocaleDateString());
  }
  return datesInWeek;
}

export function getDayName(day: number) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[(day + 6) % 7];
}

// Converts display date format (e.g.) 9/17/2024 to input form field date format (e.g.) 2024-09-17
export function convertDateFormat(dateStr: string) {
  // Split the input date string by '/'
  const [month, day, year] = dateStr.split("/");

  // Pad the month and day with leading zeros if necessary
  const paddedMonth = month.padStart(2, "0");
  const paddedDay = day.padStart(2, "0");

  // Construct the new date string in the desired format
  const formattedDate = `${year}-${paddedMonth}-${paddedDay}`;

  return formattedDate; // Expected input field date format. Ex) 2024-09-17
}

// Convert input format (e.g.) 2024-09-17 ) to Display date format (e.g.) 9/17/2024).
export function convertToDisplayDate(enteredDate: string) {
  const formattedDate = new Date(
    enteredDate + "T00:00:00"
  ).toLocaleDateString();
  // fn standardizes to Date Obj with hour set to 0:00:00 for current timezone as intermediate step.
  return formattedDate;
}
