import Link from "next/link";

export function Footer() {
  return (
    <footer className="md:text-[0.85em] text-[0.75em] flex gap-4 row-start-21 justify-center row-end-22 my-4 md:my-0 col-start-2 col-end-8">
      <div>Minoru Farm 2025</div>
      <div aria-hidden="true">|</div>
      <div>
        Photos by{" "}
        <Link
          className="photos-by-link underline hover:text-[#E1B95A] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ericlee.co/"
        >
          Eric Lee
        </Link>
      </div>
    </footer>
  );
}
