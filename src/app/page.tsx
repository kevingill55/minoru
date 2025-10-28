import Image from "next/image";
import { AppContainer } from "./AppContainer";
import Link from "next/link";
import { SectionTitle } from "../components/SectionTitle";
import { PressLink } from "../components/PressLink";

export default function Home() {
  return (
    <AppContainer>
      <div className="row-start-3 row-end-4 col-start-2 col-end-6 md:col-end-7 relative flex justify-start">
        <h1 className="absolute flex items-center justify-center md:w-full text-[2.5em] tracking-wider md:text-[3.75em] font-[700] top-[5%] right-[8%] w-[180px] leading-9 md:top-[12%] md:left-[36%] mb-4 md:m-0 font-serif">
          MINORU 実 FARM
        </h1>
        <div className="w-full">
          <Image
            src="/minoru-farm-butterfly.jpg"
            alt="minoru farm butterfly"
            width={400}
            height={200}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="my-[1em] md:my-0 row-start-6 row-end-7 col-start-3 col-end-7 md:col-end-8 relative flex justify-start">
        <h2 className="font-serif tracking-wide text-[2.5em] md:text-[3.5em] md:top-[-3%] md:left-[-12%] top-[-13%] left-[2%] absolute font-bold text-[#E1B95A]">
          BRIGHTON,
        </h2>
        <h2 className="text-[2.5em] md:text-[3.5em] absolute md:top-[8%] md:left-[-5%] top-[4%] left-[12%] font-serif font-bold text-[#E1B95A] tracking-wider">
          COLORADO
        </h2>
        <div className="w-full">
          <Image
            src="/minoru-farm-tunnel.jpg"
            alt="minoru farm tunnel"
            width={400}
            height={200}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col gap-6 row-start-11 row-end-12 px-2 col-start-2 col-end-7 md:col-end-5 md:mt-0 mt-8"
      >
        <SectionTitle title="About" />
        <div className="leading-6 text-[0.9em]">
          Minoru Farm operates 4 acres of land in the Front Range town of
          Brighton, Colorado. Established in 2020, the farm practices low-till
          methods and is owned and operated by Jade Sato. <br /> <br />{" "}
          Specializing in growing Asian vegetables, you can find Minoru Farm
          produce at the City Park Farmers Market and at local restaurants
          around Denver. <br /> <br /> Restaurants include:{" "}
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
      </div>

      <div className="flex md:ml-4 row-start-13 row-end-14 w-full md:row-start-11 md:row-end-12 md:col-start-5 col-start-2 col-end-7 md:col-end-8 mb-4 md:mb-0">
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
        <SectionTitle title="Press" />

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
