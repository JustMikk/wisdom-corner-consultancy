import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-purple-900 text-white sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <Image
          alt="logo"
          src="/images/logo.jpg"
          height={24}
          width={24}
          className="mr-2"
        />
        <span className="font-bold">Wisdom Corner Consultancy PLC</span>
      </Link>
      <Menu />
    </header>
  );
}
