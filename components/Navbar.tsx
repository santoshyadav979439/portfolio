"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  /*   { label: 'Projects', href: '#projects' }, */
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold font-serif tracking-tight"
          >
            Santosh<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            <Button asChild>
              <a
                href="/Santosh_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild className="w-full mt-2">
                  <a
                    href="/Santosh_Yadav_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
