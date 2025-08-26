"use client";
import React, { useState, useEffect, useRef } from "react";
import ButtonOne from "./ui/ButtonOne";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Framer-motion animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-background md:bg-background">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Left side Logo */}
        <Link
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h2 className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Gahasu <span className="text-foreground">Coffee.</span>
          </h2>
        </Link>

        {/* Center Nav Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/home" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/home#about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/home#products" className="hover:text-foreground">
            Products
          </Link>
          <Link href="/gallery" className="hover:text-foreground">
            Gallery
          </Link>
        </div>

        {/* Right side Contact Button + Mobile Hamburger */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Contact button (desktop) */}
          <div className="hidden md:block">
            <ButtonOne onClick={() => router.push("/contact")}>
              Contact
            </ButtonOne>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="absolute top-full left-0 w-full bg-customWhite shadow-md md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col p-4 font-medium rounded-b-lg space-y-2">
                <li>
                  <Link
                    href="/home"
                    className="block py-2 px-3 text-customBlack rounded-sm hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home#about"
                    className="block py-2 px-3 text-customBlack rounded-sm hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home#products"
                    className="block py-2 px-3 text-customBlack rounded-sm hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="block py-2 px-3 text-customBlack rounded-sm hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>

                {/* Mobile Contact Button */}
                <li className="mt-4">
                  <ButtonOne
                    onClick={() => {
                      router.push("/contact");
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-center"
                  >
                    Contact
                  </ButtonOne>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
