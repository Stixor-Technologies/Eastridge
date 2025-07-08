"use client";
import { MENU } from "@/src/core/constants";
import { useScrollToSection } from "@/src/hooks/useScrollToSection";
import React from "react";

const FooterMenu = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
      {MENU?.map((menuItem) => (
        <button
          key={menuItem?.id}
          onClick={() => scrollToSection(menuItem?.id)}
          className="text-body-primary cursor-pointer text-xl font-medium"
        >
          {menuItem?.label}
        </button>
      ))}
    </div>
  );
};

export default FooterMenu;
