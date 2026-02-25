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
      setIsScrolled(window.scrollY > 20);
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
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white border-b border-slate-200 shadow-sm py-1"
            : "bg-white/95 backdrop-blur-sm py-3",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-violet-600 p-2 rounded-lg shadow-sm">
                <Brain className="w-5 h-5 text-white" />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  إدارة ذكية
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-violet-600">
                  Enterprise ERP
                </span>
              </div>
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200",
                          isActive
                            ? "text-violet-600 bg-violet-50"
                            : "text-slate-600 hover:text-violet-600 hover:bg-slate-50",
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
                <div className="hidden sm:flex items-center gap-2">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="text-slate-600 font-bold">
                      دخول
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white px-5 rounded-lg font-bold shadow-sm">
                      ابدأ الآن
                    </Button>
                  </Link>
                </div>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors"
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

      <div className="h-20" />
    </>
  );
}
