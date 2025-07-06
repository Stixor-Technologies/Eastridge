import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

type IconBadgeProps = {
  icon: StaticImageData;
  altText?: string;
};

const IconBadge: FC<IconBadgeProps> = ({ icon, altText = "" }) => {
  return (
    <div className="border-card-border flex size-[3.375rem] items-center justify-center rounded-full border bg-white md:size-16">
      <Image src={icon} width={31} height={31} alt={altText} />
    </div>
  );
};

export default IconBadge;
