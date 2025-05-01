"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Google from '@/public/google.png'

export default function GoogleSignInButton() {
  return (
    <Button variant="outline" type="button" className="w-full">
      <Image
        src={Google}
        alt="Google"
        width={20}
        height={20}
        className="mr-2"
      />
      Continue with Google
    </Button>
  );
}
