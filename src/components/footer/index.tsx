import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { SOCIAL_LINKS, FOOTER_CONTACTS } from "@/src/core/constants";
import Link from "next/link";
import FooterMenu from "./footer-menu";

const Footer = () => {
  return (
    <footer>
      <div className="container bg-[url(/images/footer-bg.png)] bg-contain bg-bottom bg-no-repeat pt-10 pb-[5.5625rem] md:pt-14">
        <div className="flex flex-col flex-wrap justify-between gap-10 md:flex-row md:items-center">
          <div className="sm:max-w-[18.75rem]">
            <Image
              src={Logo}
              width={220}
              height={76}
              alt="Eastridge-logo"
              className="mx-auto"
            />
            <p className="text-body-main mt-[1.375rem] text-center md:hidden">
              Expert care. Genuine compassion. Always here for you.
            </p>
          </div>

          {/* <div className="flex flex-1 items-center justify-between gap-10"> */}
          <div className="contents">
            {/* <div className="flex flex-col items-start gap-8 md:flex-row">
              {MENU?.map((menuItem) => (
                <button
                  key={menuItem?.id}
                  className="text-body-primary cursor-pointer text-xl font-medium"
                >
                  {menuItem?.label}
                </button>
              ))}
            </div> */}

            <FooterMenu />

            <div className="flex gap-5 self-center sm:gap-8">
              {SOCIAL_LINKS?.map((item) => (
                <Link
                  href={item?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item?.id}
                  className="bg-card-bg group flex size-12 items-center justify-center rounded-full"
                >
                  <Image
                    src={item?.icon}
                    width={48}
                    height={48}
                    alt={item?.id}
                    className="group-hover:hidden"
                  />
                  <Image
                    src={item?.hoverIcon}
                    width={48}
                    height={48}
                    alt={item?.id}
                    className="hidden group-hover:block"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start justify-between">
          <p className="text-body-main hidden max-w-[18.75rem] text-xl md:block">
            Expert care. Genuine compassion. Always here for you.
          </p>
          <div>
            <span className="bg-accent rounded-xl px-3 py-1.5 text-white">
              Contact
            </span>
            <div className="text-body-main mt-6 flex flex-col gap-4 text-lg">
              {FOOTER_CONTACTS.map((item) => (
                <Link
                  key={item.type}
                  href={item.link}
                  target="_blank"
                  rel={
                    item.type === "address" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-2 hover:underline"
                >
                  <Image
                    src={item.icon}
                    alt={item.type}
                    width={20}
                    height={20}
                  />
                  {item.value}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
