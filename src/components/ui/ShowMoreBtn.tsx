"use client";

import { FC } from "react";
import Image from "next/image";
import Arrow from "@/public/icons/right-arrow.svg";

interface ShowMoreButtonProps {
  showAll: boolean;
  totalItems: number;
  limit: number;
  onToggle: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  className?: string;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  showAll,
  totalItems,
  limit,
  onToggle,
  buttonRef,
  className = "",
}) => {
  if (totalItems <= limit) return null;

  return (
    <div className={`mt-12 flex justify-center ${className}`}>
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="flex items-center gap-3 rounded-full bg-[#D82519] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#b81d13]"
      >
        {showAll ? "Show Less" : "Show More"}
        <span
          className={`rounded-full bg-white p-3 transition-transform ${
            showAll ? "rotate-180" : ""
          }`}
        >
          <Image src={Arrow} alt="arrow" width={20} height={20} />
        </span>
      </button>
    </div>
  );
};

export default ShowMoreButton;
