"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import DesktopLogo from "@/public/Lodgify-logo.png";
import MobileLogo from "@/public/Lodgify-mobile.png";
import UserNav from "../UserNav/UserNav";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/" className="shrink-0">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo Lodgify"
            className="w-25 hidden lg:block h-12"
            priority
          />
          <Image
            src={MobileLogo}
            alt="Mobile Logo Lodgify"
            className="block lg:hidden w-12"
            priority
          />
        </Link>

        <div className="flex-1 mx-4">
          <SearchBar />
        </div>

        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
