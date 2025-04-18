"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

const NavigationBar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeClass = currentTheme === "dark" ? "text-white" : "text-black";
  const buttonClass = `btn btn-ghost text-xl ${themeClass}`;

  if (!mounted) return null;

  return (
    <nav
      className={`sticky top-0 z-50 w-full ${
        currentTheme === "dark" ? "bg-black" : "bg-white"
      } transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          href="/"
          className={`text-2xl font-bold ${themeClass} hover:opacity-80 transition duration-200`}
        >
          Dhruv Sinha
        </Link>

        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <Link href="/" className={buttonClass}>Home</Link>
          <Link href="/about" className={buttonClass}>About</Link>
          <Link href="/experience" className={buttonClass}>Experience</Link>
          <Link href="/education" className={buttonClass}>Education</Link>
          <Link href="/projects" className={buttonClass}>Projects</Link>
          <Link href="/contact" className={buttonClass}>Contact</Link>

          <button
            onClick={toggleTheme}
            className={`btn btn-ghost text-xl ${themeClass}`}
          >
            {currentTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <button onClick={toggleMenu} className={`md:hidden text-xl ${themeClass}`}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} ${
          currentTheme === "dark" ? "bg-black" : "bg-white"
        } transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="/" className={buttonClass} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={buttonClass} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/experience" className={buttonClass} onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
          <Link href="/education" className={buttonClass} onClick={() => setMenuOpen(false)}>
            Education
          </Link>
          <Link href="/projects" className={buttonClass} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className={buttonClass} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className={`btn btn-ghost text-xl mt-2 ${themeClass}`}
          >
            {currentTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
