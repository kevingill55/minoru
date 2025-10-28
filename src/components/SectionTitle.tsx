interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-[600] font-mono text-[#E1B95A] text-center md:text-start text-[1.1em] md:text-[1.5em]">
      {`• ${title} •`}
    </h2>
  );
}
