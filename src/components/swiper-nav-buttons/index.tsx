import React from "react";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";

interface SwiperNavButtonProps {
  onClick: () => void;
  direction: "prev" | "next";
  className?: string;
}

const SwiperNavButton: React.FC<SwiperNavButtonProps> = ({
  onClick,
  direction,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`bg-accent shadow-slider-btn flex size-11 cursor-pointer items-center justify-center rounded-full ${className}`}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    type="button"
  >
    <Image
      src={Arrow}
      alt={direction === "prev" ? "arrow-previous" : "arrow-next"}
      className={direction === "next" ? "rotate-180" : ""}
    />
  </button>
);

export default SwiperNavButton;
