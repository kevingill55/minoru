import Link from "next/link";

interface PressLinkProps {
  link: string;
  title: string;
  year: string;
  author: string;
}

export function PressLink({ link, title, year, author }: PressLinkProps) {
  return (
    <article className="border-gray-500 border-t-1 pt-3 flex items-center justify-between">
      <div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-[1.1em] leading-5 font-serif hover:text-[#E1B95A] transition-colors"
        >
          {title}
        </Link>
        <h3 className="hidden md:flex md:text-[1.25em] font-serif text-[0.9em]">
          {title}
        </h3>
        <p className="text-[0.8em] text-[#9D8B6F] mt-2">{`${year}, ${author}`}</p>
      </div>
      <Link
        className="border-1 hidden md:flex text-[0.75em] md:text-[0.8em] h-min md:py-2 py-1 rounded-2xl border-[#B58B37] justify-center items-center md:px-3 px-2 hover:bg-gray-100/10 hover:cursor-pointer transition-colors"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title}`}
      >
        Read More →
      </Link>
    </article>
  );
}
