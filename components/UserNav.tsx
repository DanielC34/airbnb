// components/UserNav.tsx
"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import DefaultAvatar from "@/public/user.png";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// This hook gives you loading state, auth state, and the user object
export default function UserNav() {
  const { isLoading, isAuthenticated, user } = useKindeBrowserClient();

  if (isLoading) {
    return <div className="px-4 py-2">Loading…</div>;
  }

  // Pick the right avatar (Google URL when logged in, else local default)
  const avatarSrc =
    isAuthenticated && user?.picture ? user.picture : DefaultAvatar;

  const avatarAlt =
    isAuthenticated && user?.given_name
      ? `${user.given_name}'s profile picture`
      : "Default profile icon";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={32}
            height={32}
            className="rounded-full hidden lg:block bg-gray-300"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px]" align="end">
        {isAuthenticated ? (
          // 3. LogoutLink triggers /api/auth/logout and then resets the session
          <DropdownMenuItem>
            <LogoutLink className="w-full">Logout</LogoutLink>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
