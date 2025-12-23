import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

type IconBadgeProps = {
  icon: StaticImageData | string;
  hoverIcon?: StaticImageData | string;
  altText?: string;
};

const IconBadge: FC<IconBadgeProps> = ({ icon, hoverIcon, altText = "" }) => {
  return (
    <div className="border-card-border group relative flex size-[3.375rem] items-center justify-center rounded-full border bg-white md:size-16">
      <Image
        src={icon}
        alt={altText}
        width={50}
        height={50}
        className="z-10 h-3/5 w-3/5 object-contain transition-opacity duration-200 group-hover:opacity-0"
      />
      {hoverIcon && (
        <Image
          src={hoverIcon}
          alt={altText + " hover"}
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 z-20 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}
    </div>
  );
};

export default IconBadge;
