import { navLinks } from "@/constants/constant";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="md:hidden border-t z-[999] border-gray-400 bg-purple-800/80">
      <nav className="px-4 py-4 space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "text-violet-600 bg-violet-50"
                  : "text-white hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/login"
          className="block mt-2 px-4 py-3 rounded-md text-sm font-medium bg-violet-600 text-white text-center"
        >
          تسجيل الدخول
        </Link>
      </nav>
    </div>
  );
}
