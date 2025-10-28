"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `cursor-pointer no-underline font-serif tracking-wide text-[0.875rem] transition-colors ${
      isActive
        ? "text-[#D4AF37] font-semibold"
        : "text-[#B58B37] hover:text-[#D4AF37]"
    }`;
  };

  return (
    <>
      <div className="flex items-center justify-center row-start-1 row-end-3 md:col-start-4 md:col-end-5 col-start-3 col-end-4">
        <Link href="/" className={getLinkClassName("/")}>
          HOME
        </Link>
      </div>
      <div className="flex items-center justify-center row-start-1 row-end-3 md:col-start-5 md:col-end-6 col-start-4 col-end-5">
        <Link href="/csa" className={getLinkClassName("/csa")}>
          CSA
        </Link>
      </div>
      <div className="flex items-center justify-center row-start-1 my-3 md:my-0 row-end-3 md:col-start-6 md:col-end-7 col-start-5 col-end-6">
        <Link href="/recipes" className={getLinkClassName("/recipes")}>
          RECIPES
        </Link>
      </div>
    </>
  );
};
