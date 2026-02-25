import { navLinks } from "@/constants/constant";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl">
      <nav className="px-4 py-6 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "block px-4 py-3 rounded-lg text-base font-bold transition-colors",
                isActive
                  ? "text-violet-600 bg-violet-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              )}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
          <Link href="/login">
            <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200">
              دخول
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full h-12 rounded-xl font-bold bg-violet-600 hover:bg-violet-700 text-white">
              ابدأ الآن
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
