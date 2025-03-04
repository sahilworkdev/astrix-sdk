// Function to format date in IST
export function formatDateInIST(
  utcDateString: string,
  showDay: boolean = false
) {
  const utcDate = new Date(utcDateString);

  return utcDate.toLocaleDateString("en-US", {
    weekday: showDay ? "short" : undefined,
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

// Function to format the time in 12-hour format in IST
export function formatTimeInIST(utcDateString: string) {
  const utcDate = new Date(utcDateString);

  return utcDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}
