import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={Logo} width={220} height={76} alt="Eastridge-logo" />
      </div>
    </footer>
  );
};

export default Footer;
