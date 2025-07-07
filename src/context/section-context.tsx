// context/SectionContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const SectionContext = createContext<SectionContextType | null>(null);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState("#home");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const ctx = useContext(SectionContext);
  if (!ctx)
    throw new Error("useSectionContext must be used within SectionProvider");
  return ctx;
};
