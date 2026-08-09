"use client";

import { useState } from "react";

const STATS = [
  "#+ Hackers (Participants)",
  "#+ Projects",
  "10+ Years",
  "# hours",
  "#+ mini events (workshops & activities)",
  "#+ colleges represented",
  "# Reach",
  "Industry Partners",
  "Prizes & Swag",
];

const VALUE_CARDS = [
  "community",
  "growth",
  "innovation",
  "impact",
] as const;

const About = () => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (name: string) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section
      id="about"
      className="w-full bg-white px-10 py-16 text-black sm:px-14 lg:px-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        About [Hackathon name]
      </h2>

      <div className="mx-auto flex max-w-4xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="max-w-md space-y-6 text-base leading-relaxed sm:text-lg">
          <p>
            [Hackathon name] is ACM at UCR&apos;s [length of hackathon] hour,{" "}
            <strong>[focus of hackathon]</strong> hackathon with the goal to
            build and provide a place where students can build with the freedom
            of their creativity.
          </p>
          <p>
            Established <strong>for students by students</strong>, [hackathon
            name] has since become one of Southern California&apos;s premier
            collegiate hackathons and is a place where students can turn their
            ideas into <strong>impactful innovations.</strong>
          </p>
          <p>
            [Hackathon name] provides builders of all years, majors, and skill
            levels the chance to develop projects, present to a panel of
            industry judges, and compete for tracks and prizes!
          </p>
        </div>

        <ul className="w-fit shrink-0 list-disc pl-5 sm:text-lg">
          {STATS.map((stat) => (
            <li key={stat}>{stat}</li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-6">
        {VALUE_CARDS.map((name) => {
          const isFlipped = !!flipped[name];

          return (
            <button
              key={name}
              type="button"
              onClick={() => toggleFlip(name)}
              aria-pressed={isFlipped}
              aria-label={`${name} card, ${isFlipped ? "showing description" : "click to flip"}`}
              className="h-48 w-36 cursor-pointer transition-transform hover:scale-105 sm:w-40"
            >
              <div
                className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
                style={{
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-black bg-white [backface-visibility:hidden]">
                  <span className="text-xl font-semibold capitalize tracking-wide">
                    {name}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-black bg-white px-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-base leading-snug">
                    describe {name}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default About;
