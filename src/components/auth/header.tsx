import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface headerProps {
  label: string;
}

const Header: FC<headerProps> = ({ label }) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 items-center justify-center">
      <Link
        href="/"
        className={cn("text-3xl text-white font-semibold")}
      >
        AI Former
      </Link>
      <p className=" text-white/85 text-sm">{label}</p>
    </div>
  );
};

export default Header;
