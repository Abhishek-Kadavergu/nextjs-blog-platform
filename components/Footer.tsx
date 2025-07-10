import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap0 sm:flex-row py-5 bg-black items-center">
      <Image src={assets.logo_light} alt="log footer" width={120} />
      <p className="text-sm text-white">
        All rights reserved. Copyright @abhishek
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="kdfkls" width={40} />
        <Image src={assets.twitter_icon} alt="kdfkls" width={40} />
        <Image src={assets.googleplus_icon} alt="kdfkls" width={40} />
      </div>
    </div>
  );
};

export default Footer;
