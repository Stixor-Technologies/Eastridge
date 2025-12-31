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
      {timing.map((time) => (
        <li key={time.id} className="text-body-main text-base">
          <span className="text-body-primary font-bold">{time.day}</span>:{" "}
          {formatTimeTo12Hour(time.startTime)} –{" "}
          {formatTimeTo12Hour(time.endTime)}
        </li>
      ))}
    </ul>
  );
};

export default DepartmentTiming;
