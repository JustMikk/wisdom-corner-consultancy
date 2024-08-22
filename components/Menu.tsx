"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";

type Props = {};

export default function Menu({}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="ml-auto flex gap-4 sm:gap-6">
      <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
        <MenuIcon className="w-6 h-6" />
      </Button>
      <nav className="hidden md:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#services"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#team"
        >
          Team
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#clients"
        >
          Clients
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md p-4 transition duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md p-4 transition">
            <Button variant="default" onClick={toggleSidebar} className="mb-4">
              <X className="w-6 h-6" />
            </Button>
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="hover:underline text-xl text-purple-900"
                prefetch={false}
                onClick={toggleSidebar}
              >
                About
              </Link>

              <Link
                href="#services"
                className="hover:underline text-xl text-purple-900"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Services
              </Link>

              <Link
                href="#team"
                className="hover:underline text-xl text-purple-900"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Our Team
              </Link>
              <Link
                href="#clients"
                className="hover:underline text-xl text-purple-900"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Our clients
              </Link>
              <Link
                href="#contact"
                className="hover:underline text-xl text-purple-900"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
