"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-header.png";
import { MENU } from "@/src/core/constants";
import Sidebar from "./menu/sidebar";
import { gsap } from "gsap";
import { useScrollToSection } from "@/src/hooks/useScrollToSection";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useSectionContext } from "@/src/context/section-context";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const { scrollToSection } = useScrollToSection();
  const { activeSection } = useSectionContext();

  return (
    <header className="fixed z-50 flex h-[5.625rem] w-full items-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={120} height={41} alt="Eastridge-logo" />
        </Link>

        <ul className="hidden gap-8 md:flex">
          {MENU?.map((item) => (
            <li key={item?.id}>
              <button
                onClick={() => {
                  scrollToSection(item?.id);
                }}
                className={`transition-all duration-300 ${activeSection === item?.id ? "text-xl font-semibold text-black" : "text-lg text-black/80"} `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
