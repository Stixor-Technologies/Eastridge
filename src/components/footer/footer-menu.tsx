import { MENU } from "@/src/core/constants";
import React from "react";

const FooterMenu = () => {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
      {MENU?.map((menuItem) => (
        <button
          key={menuItem?.id}
          className="text-body-primary cursor-pointer text-xl font-medium"
        >
          {menuItem?.label}
        </button>
      ))}
    </div>
  );
};

export default FooterMenu;
