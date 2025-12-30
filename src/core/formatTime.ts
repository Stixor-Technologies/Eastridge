export interface TimingItem {
  day: string;
  start: string;
  end: string;
}

export interface DepartmentTimingProps {
  timing?: TimingItem[] | null;
}

// Convert "HH:MM:SS.sss" to 12-hour format "h:mm AM/PM"
export const formatTimeTo12Hour = (time?: string) => {
  if (!time) return "";
  const [hourStr, minStr] = time.split(":");
  const hour = +hourStr % 12 || 12;
  const ampm = +hourStr >= 12 ? "PM" : "AM";
  return `${hour}:${minStr} ${ampm}`;
};
