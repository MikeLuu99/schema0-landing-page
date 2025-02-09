"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <nav className="w-full px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Logo />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            LOGIN
          </Link>
          <Link
            href="/waitlist"
            className="px-4 py-2 text-sm text-white bg-black rounded-lg hover:bg-gray-800"
          >
            JOIN WAITLIST
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
