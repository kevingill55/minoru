interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-serif text-[#E1B95A] text-[1.5em] md:text-[2em]">
      {`${title}`}
    </h2>
  );
}
