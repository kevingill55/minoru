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
          className="md:hidden md:text-[1em] text-[0.85em] font-[600] hover:text-[#E1B95A] transition-colors"
        >
          {title}
        </Link>
        <h3 className="hidden md:flex md:text-[1em] text-[0.85em] font-[600]">
          {title}
        </h3>
        <p className="text-[0.75em] font-thin">{author}</p>
        <time className="text-[0.75em] font-thin">{year}</time>
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
