"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AppContainer } from "../AppContainer";

const validateEmail = (email: string) => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.test(email);
};

export default function CsaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [val, setVal] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const isValid = validateEmail(val);

    if (!isValid) {
      setMessage("Invalid email");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: val.trim() }),
      });

      const data = await res.json();
      setIsSubmitting(false);
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <AppContainer>
      <div className="relative row-start-3 flex justify-center row-end-4 col-start-3 col-end-6 md:col-end-8">
        <h2 className="flex justify-center transform tracking-wider items-center top-[10%] right-[-6%] md:right-[-9%] absolute text-[2.25em] md:text-[3em] font-[700] text-[#B58B37] font-serif">
          SUMMER CSA
        </h2>
        <h2 className="flex justify-center transform tracking-wider items-center top-[80%] left-[-6%] md:left-[-2%] absolute text-[2.25em] md:text-[3em] font-[700] text-[#E1B95A] font-serif leading-10">
          WINTER CSA
        </h2>
        <Image
          src="/minoru-farm-dual.jpg"
          alt="minoru farm dual"
          width={650}
          height={450}
        />
      </div>

      <div className="flex gap-2 row-start-6 row-end-7 col-end-7 col-start-3 md:col-start-3 md:col-end-6 my-2">
        <div className="md:mr-4 flex flex-col items-start justify-start w-full h-full">
          <div className="md:text-start text-[1.33em] font-[600] text-[#E1B95A] font-serif w-full mt-4 md:mt-0">
            Summer
          </div>
          <div className="ml-4 md:ml-0 my-4 text-sm">
            <ul className="list-disc space-y-2">
              <li>Sign-up begins January 1st of each year</li>
              <li>
                20 weeks of greens-focused produce with seasonal specialties
              </li>
              <li>Pickup in the greater Denver area</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-2 md:ml-4 row-start-7 row-end-8 md:row-start-6 md:row-end-7 md:col-start-6 md:col-end-9 col-start-3 col-end-6 my-2">
        <div className="flex flex-col mb-2 w-full h-full">
          <div className="md:text-start font-[600] text-[#E1B95A] text-[1.33em] font-serif">
            Winter
          </div>
          <div className="my-4 ml-4 md:ml-0 text-sm">
            <ul className="list-disc space-y-2">
              <li>Sign-up begins September 1st of each year</li>
              <li>
                10 weeks of greens-focused produce with seasonal specialties
              </li>
              <li>Pickup in the greater Denver area</li>
            </ul>
          </div>
        </div>
      </div>

      <form
        className="row-start-9 gap-6 flex md:h-[350px] flex-col justify-center items-center text-sm row-end-10 md:col-start-3 md:col-end-8 col-start-2 col-end-7 border-2 px-2 py-5 md:px-4 md:py-12"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 md:gap-4 items-center">
          <div className="font-serif md:text-[1.75em] text-[1.5em]">
            Interested in CSA?
          </div>
          <div className="text-[0.85em] md:text-[0.9em] w-[80%] text-center">
            Subscribe below to hear from us directly when sign-up starts and
            other news!
          </div>
        </div>
        <div className="flex flex-col md:flex md:mt-2 justify-center items-center gap-6">
          <input
            className="border-2 py-2 px-3 md:w-[325px] w-[250px]"
            type="email"
            placeholder="Email"
            value={val}
            required
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-[0.85em] w-[125px] h-min py-3 rounded-2xl bg-[#E1B95A] text-black flex justify-center items-center hover:bg-[#E1B95A]/60 hover:cursor-pointer font-[500]"
          >
            {isSubmitting ? "Loading..." : "Subscribe"}
          </button>
        </div>
        {<div className="md:h-[50px] h-[10px]">{message || ""}</div>}
      </form>

      <div className="md:h-[800px] flex flex-col w-full md:relative row-start-12 row-end-17 col-start-2 col-end-7 md:col-end-9 justify-center gap-2 md:bg-stone-300 mt-6">
        <div className="bg-stone-300 p-2">
          <Image
            width={500}
            height={100}
            src="/minoru-farm-views.jpg"
            alt="minoru farm views"
            className="md:absolute bottom-50 right-10"
          />
        </div>
        <div className="bg-stone-300 p-2">
          <Image
            width={500}
            height={400}
            src="/minoru-farm-flowers.jpg"
            alt="minoru farm flowers"
            className="md:absolute bottom-10 left-20"
          />
        </div>
        <div className="bg-stone-300 p-2">
          <Image
            width={500}
            height={100}
            src="/minoru-farm-loading.jpg"
            alt="minoru farm loading"
            className="md:absolute top-10 left-10"
          />
        </div>
      </div>

      <div className="md:text-[0.85em] text-[0.75em] items-center flex gap-4 row-start-20 justify-center row-end-22 my-4 md:my-0 col-start-2 md:col-start-3 md:col-end-8 col-end-7">
        <div className="flex gap-6 items-center">
          <div>Minoru Farm 2025</div>
        </div>
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
