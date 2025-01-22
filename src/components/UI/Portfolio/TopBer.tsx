/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link"; // Importing a basic Button icon, feel free to customize
import { useState } from "react";
import Container from "../Container";

export const AcmeLogo = () => {
  return (
    <>
      <Link href="/">
        <img
          src="/images/Brand-logo.svg"
          alt="Company Logo"
          className="h-[22px] w-[125px]" // Tailwind CSS example for height and width
        />
      </Link>
    </>
  );
};

export default function Topber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <header className="bg-[#1a1a1a] py-4 px-0 md:px-6 sticky top-0 z-50">
      <Container>
        <div className="px-4 pl-1">
          <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
            {/* Logo */}
            <div className="flex items-center">
              <AcmeLogo />
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="sm:hidden flex items-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl text-green-500 z-50">
                {isMenuOpen ? "✖" : "☰"}
              </span>
            </button>

            {/* Desktop Navbar Links */}
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/"
                className="text-white hover:opacity-80 text-[14px]"
              >
                HOME
              </Link>
              <Link
                href="/about-me"
                className="text-white hover:opacity-80 text-[14px]"
              >
                ABOUT ME
              </Link>
              <Link
                href="/my-work"
                className="text-white hover:opacity-80 text-[14px]"
              >
                MY WORK
              </Link>
              <Link
                href="/contact"
                className="text-white hover:opacity-80 text-[14px] bg-[#03030480] rounded-full px-3 py-1 border-2 border-slate-400"
              >
                CONTACT
              </Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden absolute top-16 left-0 w-full bg-inherit shadow-lg p-6 z-40`}
          >
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="block text-white hover:opacity-80">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
