import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center row-start-1 row-end-3 md:col-start-4 md:col-end-5 col-start-3 col-end-4">
        <Link
          href="/"
          className="cursor-pointer no-underline font-mono text-[#B58B37]"
        >
          HOME
        </Link>
      </div>
      <div className="flex items-center justify-center row-start-1 row-end-3 md:col-start-5 md:col-end-6 col-start-4 col-end-5">
        <Link
          href="/csa"
          className="cursor-pointer no-underline font-mono text-[#B58B37]"
        >
          CSA
        </Link>
      </div>
      <div className="flex items-center justify-center row-start-1 my-3 md:my-0 row-end-3 md:col-start-6 md:col-end-7 col-start-5 col-end-6">
        <Link
          href="/recipes"
          className="cursor-pointer no-underline font-mono text-[#B58B37]"
        >
          RECIPES
        </Link>
      </div>
    </>
  );
};
