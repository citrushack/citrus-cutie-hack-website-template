"use client";
import { useState } from "react";
import { roles } from "@/data/register";

const Register = () => {
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());

  const toggleFlip = (id: string) => {
    setFlippedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="register"
      className="w-full bg-white px-6 py-16 text-black sm:px-14 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Register
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {roles.map((role) => {
            const isFlipped = flippedIds.has(role.id);

            return (
              <button
                key={role.id}
                type="button"
                aria-pressed={isFlipped}
                onClick={() => toggleFlip(role.id)}
                className="w-full transition-transform duration-300 ease-out perspective-[1000px] hover:scale-105 focus-visible:scale-105"
              >
                <div
                  className={[
                    "relative h-full w-full rounded-2xl border-[3px] border-black transition-transform duration-500 ease-out transform-3d",
                    isFlipped ? "transform-[rotateY(180deg)]" : "",
                  ].join(" ")}
                >
                  <div
                    aria-hidden="true"
                    className="invisible px-4 py-4 text-sm leading-relaxed sm:text-base"
                  >
                    {role.description}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white px-2 text-center text-xl font-medium backface-hidden sm:text-2xl">
                    {role.name}
                  </div>

                  <div className="absolute inset-0 flex transform-[rotateY(180deg)] items-center justify-center rounded-2xl bg-white px-2 text-center text-sm leading-relaxed [backface-visibility:hidden] sm:text-base">
                    {role.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Register;
