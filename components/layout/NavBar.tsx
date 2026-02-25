"use client";

import { Brain, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { navLinks } from "@/constants/constant";
import clsx from "clsx";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  const isLoggedIn = false;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 z-50 w-full shadow-lg transition-all duration-300",
          isScrolled
            ? "bg-purple-800/90 backdrop-blur-md border-b border-gray-400"
            : "bg-white/90 ",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="bg-slate-700 p-2 rounded-md ml-1.5 ">
                <Brain className="w-6 h-6 text-violet-400" />
              </span>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  نظام إدارة الأعمال
                </span>
                <span className="text-[11px] text-slate-200">
                  Enterprise Solutions
                </span>
              </div>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "px-4 py-2 rounded-md text-sm font-bold transition-colors",
                          isActive
                            ? "text-violet-600 bg-violet-50"
                            : "text-slate-200  hover:text-slate-400 hover:bg-slate-100",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {!isLoggedIn && (
                <Link href="/login" className="hidden md:block">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white px-5 rounded-md shadow-sm">
                    تسجيل الدخول
                  </Button>
                </Link>
              )}

              {isLoggedIn && (
                <div className="hidden md:block">
                  <Avatar className="cursor-pointer h-12 w-12  border-none  hover:ring-2 hover:ring-violet-500 transition">
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                    <AvatarFallback className="bg-violet-600 text-white">
                      BH
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-700" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && <MobileMenu />}
      </header>

      <div className="h-16" />
    </>
  );
}
