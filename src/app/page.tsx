import Image from "next/image";
import { AppContainer } from "./AppContainer";
import Link from "next/link";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="font-[600] font-mono text-[#E1B95A] text-center md:text-start text-[1.1em] md:text-[1.5em]">{`• ${title} •`}</div>
  );
};

const PressLink = ({
  link,
  title,
  year,
  author,
}: {
  author: string;
  year: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="border-gray-500 border-t-1 pt-3 flex items-center justify-between">
      <div>
        <Link
          href={link}
          target="_blank"
          className="md:hidden md:text-[1em] text-[0.85em] font-[600]"
        >
          {title}
        </Link>
        <div className="hidden md:flex md:text-[1em] text-[0.85em] font-[600]">
          {title}
        </div>
        <div className="text-[0.75em] font-thin">{author}</div>
        <div className="text-[0.75em] font-thin">{year}</div>
      </div>
      <Link
        className="border-1 hidden md:flex text-[0.75em] md:text-[0.8em] h-min md:py-2 py-1 rounded-2xl border-[#B58B37] justify-center items-center md:px-3 px-2 hover:bg-gray-100/10 hover:cursor-pointer"
        href={link}
        target="_blank"
      >
        Read More →
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <AppContainer>
      <div className="row-start-3 row-end-4 col-start-2 col-end-6 md:col-end-7 relative flex justify-start">
        <h1 className="absolute flex items-center justify-center w-[150px] md:w-full text-[1.5em] md:text-[3.25em] font-[700] top-[7%] right-[0%] md:top-[12%] md:left-[28%] scale-y-[1.1] mb-4 md:m-0 tracking-[0.2em]">
          MINORU 実 FARM
        </h1>
        <div className="w-full md:w-[90%]">
          <Image
            src="/minoru-farm-butterfly.jpg"
            alt="minoru farm butterfly"
            width={500}
            height={300}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="my-[1em] md:my-0 row-start-6 row-end-7 col-start-3 col-end-7 md:col-end-8 relative flex justify-start">
        <h2 className="location-title">BRIGHTON,</h2>
        <h2 className="state-title">COLORADO</h2>
        <div className="w-full md:w-[95%]">
          <Image
            src="/minoru-farm-tunnel.jpg"
            alt="minoru farm tunnel"
            width={600}
            height={400}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col justify-center gap-2 w-full p-2 row-start-11 row-end-12 md:col-start-3 col-start-2 col-end-7 text-center md:col-end-6 md:mt-0 mt-4"
      >
        <SectionTitle title="ABOUT" />
      </div>

      <div className="leading-6 md:text-[0.85em] text-[0.75em] font-thin row-start-12 row-end-13 col-start-2 md:col-end-5 col-end-7 md:text-start text-center px-2 md:mt-0 mt-2">
        Minoru Farm operates 4 acres of land in the Front Range town of
        Brighton, Colorado. Established in 2020, the farm practices low-till
        methods and is owned and operated by Jade Sato. <br /> <br />{" "}
        Specializing in growing Asian vegetables, you can find Minoru Farm
        produce at the City Park Farmers Market and at local restaurants around
        Denver. <br /> <br /> Restaurants include:{" "}
        <Link
          className="underline"
          href="https://www.instagram.com/yuanwonton/"
          target="_blank"
        >
          Yuan Wonton
        </Link>
        {", "}
        <Link
          className="underline"
          href="https://www.stowawaydenver.com/"
          target="_blank"
        >
          Stowaway
        </Link>
        {", "}
        and more!
        <br /> <br />
      </div>

      <div className="flex md:ml-4 row-start-13 row-end-14 w-full md:row-start-11 md:py-6 md:row-end-13 md:col-start-5 col-start-2 col-end-7 md:col-end-8 mb-4 md:mb-0">
        <Image
          src="/minoru-farm-tomatoes-two.jpg"
          alt="minoru farm tomatoes-two"
          width={500}
          height={300}
          className="w-full object-contain"
        />
      </div>

      <div
        id="press"
        className="flex flex-col gap-4 md:gap-8 w-full p-2 row-start-15 row-end-16 col-start-2 col-end-8 my-4 md:mb-0"
      >
        <SectionTitle title="PRESS" />

        <PressLink
          year="2025"
          author="Zero Foodprint"
          title="Jade Sato Loves a Challenge"
          link="https://www.zerofoodprint.org/blog/minoru-farm"
        />
        <PressLink
          year="2023"
          author="AGDAILY"
          title="Minoru Farm roots itself into Colorado's diverse community"
          link="https://www.agdaily.com/features/minoru-farm-roots-itself-into-colorados-diverse-community/"
        />
        <PressLink
          year="2023"
          author="City Park Farmers Market"
          title="Farming Food That Brings People Home"
          link="https://www.cityparkfarmersmarket.com/blog/farming-food-that-brings-people-home"
        />
        <PressLink
          year="2021"
          author="No-Till Growers"
          title="Jade Sato of Minoru Farm"
          link="https://www.notillgrowers.com/blog/2021/4/7/jade-sato-of-minoru-farm"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-1 row-start-19 row-end-20 col-start-2 md:col-end-5 col-end-7 gap-4 mb-2 md:mb-0">
        <Image
          src="/Jade-watering.jpg"
          alt="minoru farm watering"
          className="w-full object-contain"
          width={500}
          height={300}
        />
        <Image
          src="/minoru-farm-bees.jpg"
          alt="minoru farm bees"
          className="w-full object-contain"
          width={500}
          height={300}
        />
        <Image
          src="/minoru-farm-rainbow.jpg"
          alt="minoru farm rainbow"
          className="block md:hidden w-full object-contain"
          width={500}
          height={300}
        />
        <Image
          src="/minoru-farm-chickens.jpg"
          alt="minoru farm chickens"
          className="w-full object-contain"
          width={500}
          height={300}
        />
      </div>

      <div className="md:flex justify-center md:gap-4 gap-2 mb-2 md:mb-0 flex-col md:px-2 row-start-21 row-end-22 md:row-start-19 md:row-end-22 md:col-start-5 col-start-2 col-end-7 md:col-end-8 hidden">
        <Image
          src="/minoru-farm-lettuce.jpg"
          alt="minoru farm lettuce"
          className="w-full object-contain"
          width={500}
          height={300}
        />
        <Image
          src="/minoru-farm-rainbow.jpg"
          alt="minoru farm rainbow"
          className="w-full object-contain"
          width={500}
          height={300}
        />
      </div>

      <div className="md:text-[0.85em] text-[0.75em] flex gap-4 row-start-21 justify-center row-end-22 my-4 md:my-0 col-start-2 col-end-8">
        <div>Minoru Farm 2025</div>
        <div>|</div>
        <div>
          Photos by{" "}
          <a
            className="photos-by-link"
            target="_blank"
            style={{ textDecoration: "underline" }}
            href="https://www.ericlee.co/"
          >
            Eric Lee
          </a>
        </div>
      </div>
    </AppContainer>
  );
}
