"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo-header.png";
import LogoBlack from "@/public/logo-black.svg";
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
  const pathname = usePathname();

  const header = useRef<HTMLElement | null>(null);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const [navClassList, setNavClassList] = useState<string[]>([]);

  // Check if we're on a doctor detail page
  const isDetailPage =
    pathname?.startsWith("/doctor-listing/") && pathname !== "/doctor-listing";

  const handleScroll = useCallback(() => {
    setData((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const _classList = [];

    if (data.y > 20) {
      _classList.push("bg-black/80 backdrop-blur-md !h-[4.625rem]");
    } else {
      if (isDetailPage) {
        // Initial state for detail page - light background
        _classList.push("bg-[#F5F5F5] h-[5.625rem]");
      } else {
        _classList.push("h-[5.625rem]");
      }
    }

    setNavClassList(_classList);
  }, [data.y, isDetailPage]);

  return (
    <header
      ref={header}
      className={`fixed z-50 flex h-[5.625rem] w-full items-center duration-300 ${navClassList.join(" ")}`}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <ExportedImage
            src={isDetailPage && data.y <= 20 ? LogoBlack : Logo}
            width={120}
            height={41}
            alt="Eastridge-logo"
          />
        </Link>

        <ul className="hidden gap-8 md:flex">
          {MENU?.map((item) => (
            <li key={item?.id}>
              <button
                onClick={() => {
                  if (item?.scrollOnPage) {
                    scrollToSection(item?.id);
                  } else {
                    window.location.href = item?.id;
                  }
                }}
                className={`transition-all duration-300 ${
                  activeSection === item?.id
                    ? `text-xl font-semibold ${isDetailPage && data.y <= 20 ? "text-black" : "text-white"}`
                    : `text-lg ${isDetailPage && data.y <= 20 ? "text-black/80" : "text-white/80"}`
                } cursor-pointer`}
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
