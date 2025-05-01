"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import DefaultAvatar from "@/public/user.png";
import LoginModal from "@/app/(auth)/login/page";
import RegisterModal from "@/app/(auth)/signup/page";

export default function UserNav() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const isAuthenticated = false;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="rounded-full border px-2 py-2 lg:px-4 flex items-center gap-x-3">
            <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
            <Image
              src={DefaultAvatar}
              alt="Profile picture"
              width={32}
              height={32}
              className="rounded-full hidden lg:block bg-gray-300"
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[200px]" align="end">
          {isAuthenticated ? (
            <DropdownMenuItem>
              <button className="w-full text-left">Logout</button>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem onSelect={() => setIsRegisterModalOpen(true)}>
                Register
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setIsLoginModalOpen(true)}>
                Login
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onRegisterClick={() => {
          setIsRegisterModalOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLoginClick={() => {
          setIsLoginModalOpen(true);
        }}
      />
    </>
  );
}
