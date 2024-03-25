"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { link } from "fs";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant={"link"} className=" text-white w-full" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
