"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import DesktopLogo from '@/public/airbnb-desktop.png'
import MobileLogo from '@/public/airbnb-mobile.png'
import UserNav from './UserNav'

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex item-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo airbnb"
            className="w-32 hidden lg:block"
          />
          <Image src={MobileLogo} alt="Mobile Logo airbnb" className="block lg:hidden w-12" />
              </Link>
              <div className="rounded-full border px-5 py-2">
                  <h1>Hello from this search</h1>
              </div>

              {/*User Nav comes here */}
              <UserNav />
      </div>
    </nav>
  );
}

export default Navbar