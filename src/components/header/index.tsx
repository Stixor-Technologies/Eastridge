import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-header.png";
import { MENU } from "@/src/core/constants";
import Sidebar from "./menu/sidebar";

const Header = () => {
  return (
    <header className="fixed z-50 flex h-[5.625rem] w-full items-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={120} height={41} alt="Eastridge-logo" />
        </Link>

        <ul className="hidden gap-8 md:flex">
          {MENU?.map((item) => (
            <li key={item?.id}>
              <Link href="/" className="text-lg text-white/80">
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>

        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
