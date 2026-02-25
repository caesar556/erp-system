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
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-2"
            : "bg-transparent py-4",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-violet-600 p-2 rounded-xl shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col leading-tight">
                <span className={clsx(
                  "text-lg font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-slate-900" : "text-slate-900"
                )}>
                  إدارة ذكية
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-violet-600/80">
                  Enterprise ERP
                </span>
              </div>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group",
                          isActive
                            ? "text-violet-600"
                            : "text-slate-600 hover:text-violet-600",
                        )}
                      >
                        {link.label}
                        <span className={clsx(
                          "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-600 transition-all duration-300 opacity-0 group-hover:opacity-100",
                          isActive && "opacity-100 w-4"
                        )} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!isLoggedIn && (
                <div className="hidden md:flex items-center gap-3">
                  <Link href="/login">
                    <Button variant="ghost" className="text-slate-600 hover:text-violet-600 font-medium">
                      دخول
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 rounded-full shadow-md shadow-violet-100 transition-all hover:shadow-lg hover:shadow-violet-200 active:scale-95">
                      ابدأ الآن
                    </Button>
                  </Link>
                </div>
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
