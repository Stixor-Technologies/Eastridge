import React from "react";

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

const DepartmentTiming: React.FC<DepartmentTimingProps> = ({ timing }) => {
  if (!timing?.length)
    return (
      <div className="text-body-main text-base">No timings available.</div>
    );

  return (
    <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
      {timing.map(({ day, start, end }, idx) => (
        <li
          key={`${day}-${start}-${end}-${idx}`}
          className="text-body-main text-base"
        >
          <span className="text-body-primary font-bold">{day}</span>:{" "}
          {formatTimeTo12Hour(start)} – {formatTimeTo12Hour(end)}
        </li>
      ))}
    </ul>
  );
};

export default DepartmentTiming;
