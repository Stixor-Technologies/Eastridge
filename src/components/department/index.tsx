import React from "react";
import {
  DepartmentTimingProps,
  formatTimeTo12Hour,
} from "@/src/core/formatTime";

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
