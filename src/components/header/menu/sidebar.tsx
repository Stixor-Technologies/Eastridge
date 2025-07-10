"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MENU } from "@/src/core/constants";
import { useScrollToSection } from "@/src/hooks/useScrollToSection";
import { useSectionContext } from "@/src/context/section-context";

const Sidebar = () => {
  const { scrollToSection } = useScrollToSection();
  const { activeSection } = useSectionContext();

  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  // const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuTopRef = useRef<SVGPathElement | null>(null);
  const menuMidRef = useRef<SVGPathElement | null>(null);
  const menuBottomRef = useRef<SVGPathElement | null>(null);

  const tl = useRef<GSAPTimeline>(null);

  const { contextSafe } = useGSAP({ scope: sideBarMenu });

  // const handleDocumentClick = useCallback(
  //   (event: MouseEvent) => {
  //     if (
  //       sideBarMenu.current &&
  //       menuButtonRef.current &&
  //       !sideBarMenu.current.contains(event.target as Node) &&
  //       !menuButtonRef.current?.contains(event.target as Node) &&
  //       isMenuOpen
  //     ) {
  //       setIsMenuOpen(false);
  //     }
  //   },
  //   [isMenuOpen],
  // );

  const closeMenuAnimation = useCallback(() => {
    if (sideBarMenu.current) {
      gsap.to(sideBarMenu.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    tl.current?.reverse();
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden!");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        closeMenuAnimation();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, closeMenuAnimation]);

  // useEffect(() => {
  //   document.addEventListener("click", handleDocumentClick);
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [handleDocumentClick]);

  const toggleMenu = contextSafe(() => {
    // Create timeline only once, when needed
    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current
        .to(menuTopRef.current, { y: "-2px", duration: 0.2 }, "initial")
        .to(menuBottomRef.current, { y: "2px", duration: 0.2 }, "initial")
        .to(
          menuMidRef.current,
          { scale: 0.1, transformOrigin: "50% 50%", duration: 0.2 },
          "initial",
        )
        .to(menuTopRef.current, { y: 7, duration: 0.2 }, "rotate")
        .to(menuBottomRef.current, { y: -7, duration: 0.2 }, "rotate")
        .to(
          menuTopRef.current,
          {
            rotationZ: 45,
            transformOrigin: "50% 50%",
            scale: 0.8,
            duration: 0.2,
          },
          "rotate",
        )
        .to(
          menuBottomRef.current,
          {
            rotationZ: -45,
            transformOrigin: "50% 50%",
            scale: 0.8,
            duration: 0.2,
          },
          "rotate",
        );
    }

    if (isMenuOpen) {
      // Animate sidebar closing
      closeMenuAnimation();
    } else {
      // Animate sidebar opening
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: -sideBarMenu?.current?.clientWidth,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      // Animate hamburger to open state
      tl.current?.play();
      setIsMenuOpen(true);
      document.body.classList.add("overflow-hidden!");
    }
  });

  return (
    <>
      {/* hamburger menu button */}
      <button
        className="group hide-custom-cursor no-custom-cursor relative z-50 flex size-9 transform items-center justify-center drop-shadow-lg md:hidden"
        type="button"
        onClick={toggleMenu}
      >
        <div
          className={`group-hover:bg-light-purple absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:scale-100 group-hover:opacity-100 ${
            !isMenuOpen
              ? "scale-0 bg-transparent"
              : "scale-100 bg-black opacity-100"
          }`}
        />
        <svg
          width="70%"
          height="70%"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={menuTopRef}
            d="M2 2H23.3049"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            ref={menuMidRef}
            d="M2 9H23.3049"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            ref={menuBottomRef}
            d="M2 16H23.3049"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* sidebar menu */}
      <div
        ref={sideBarMenu}
        className="fixed top-0 right-0 z-40 -mr-[100vw] h-screen w-screen overflow-y-auto bg-white will-change-auto"
      >
        <div className="mx-auto h-full w-full flex-col justify-center overflow-y-auto p-4 pt-24 pb-10">
          <ul className="min-aspect:space-y-[3vw] min-aspect:text-[3vw] space-y-1.5 text-[7vw] md:text-left">
            {MENU.map((item) => (
              <li
                className={`text-body-primay rounded-sm px-6 py-[4vw] font-semibold ${activeSection === item?.id && "bg-accent/5"}`}
                key={item?.id}
              >
                <button
                  onClick={() => {
                    scrollToSection(item?.id);
                    closeMenuAnimation();
                  }}
                  className="w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* sidebar menu overlay */}
      <div
        ref={overlayRef}
        className={`${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed inset-0 top-0 z-30 bg-black opacity-0`}
      />
    </>
  );
};

export default Sidebar;
