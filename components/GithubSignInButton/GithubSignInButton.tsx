"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "@/public/github.png";

export default function GithubSignInButton() {
    return (
        <Button variant="outline" type="button" className="w-full">
            <Image src={Github}
                alt="Github"
                width={20}
                height={20}
                className="mr-2"
            />
        Continue with Github
        </Button>
    );
 }
