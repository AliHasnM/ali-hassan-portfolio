/* app/components/HeroSection.tsx */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Clock,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import { Spotlight } from "./ui/spotlight-new";
import { Button } from "../components/ui/moving-border";

/* — Badge pill unchanged — */
const Badge = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) => (
  <span className="inline-block">
    <span className="inline-flex hover:cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r
                     from-cyan-500 via-blue-500 to-indigo-500 p-[1px]">
      <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-1.5
                       text-xs sm:text-sm text-white backdrop-blur-md transition
                       hover:scale-105">
        <span className="text-cyan-300">{icon}</span>
        {label}
      </span>
    </span>
  </span>
);

/* — Social icon pill unchanged — */
const IconLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="group rounded-full p-3 border border-cyan-400 bg-white/5
               backdrop-blur transition hover:scale-105 hover:bg-cyan-400/10
               shadow-md hover:shadow-cyan-400/30"
  >
    {icon}
  </Link>
);

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120, // default is 120px before it triggers
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24">
      <Spotlight />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center
                      gap-12 px-4 sm:px-6 md:flex-row md:gap-20">
        {/* ─── Left column ─── */}
        <div className="mt-10 px-2 w-full text-left md:mt-0 md:w-7/12">
          {/* Headings */}
          <div className="text-center md:text-left" data-aos="fade-up">
            <h1 className="text-3xl mt-6 xs:text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500
                             bg-clip-text text-transparent">
                Ali&nbsp;Hassan
              </span>
            </h1>
            <h2 className="mt-2 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl
               font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500
               bg-clip-text text-transparent break-words">
              Full&nbsp;Stack&nbsp;Developer&nbsp;(MERN&nbsp;/&nbsp;Next.js)
            </h2>
          </div>
          {/* Intro */}
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl" data-aos="fade-up">
            I specialize in the&nbsp;
            <span className="text-cyan-300 font-semibold">MERN stack</span> and&nbsp;
            <span className="text-cyan-300 font-semibold">Next.js</span>, crafting
            responsive UIs and robust back‑end systems with precision. I build
            clean, scalable, high‑performance solutions that work flawlessly and
            look great doing it.
            <br />
            <br />
            Let&apos;s collaborate to turn your vision into a reliable, high‑impact
            digital experience that your users (and clients) will love.
          </p>

          {/* Badges */}
          <div
            className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-items-center md:justify-start gap-3"
            data-aos="fade-right"
          >
            <Badge label="Full Stack Dev (MERN / Next JS)" icon={<Code size={16} />} />
            <Badge label="3+ Years Experience" icon={<Clock size={16} />} />
            <Badge label="BS Computer Science" icon={<GraduationCap size={16} />} />
            <Badge label="Freelancer" icon={<Briefcase size={16} />} />
          </div>



          {/* Social icons */}
          <div className="mt-6 flex justify-center gap-3 sm:gap-5 md:justify-start" data-aos="fade-right">
            <IconLink href="https://github.com/ali-hassan-dev" label="GitHub" icon={<Github size={20} />} />
            <IconLink href="https://linkedin.com/in/alihassan-dev" label="LinkedIn" icon={<Linkedin size={20} />} />
            <IconLink href="https://instagram.com/yourhandle" label="Instagram" icon={<Instagram size={20} />} />
            <IconLink href="https://facebook.com/yourhandle" label="Facebook" icon={<Facebook size={20} />} />
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            {[
              { href: "#contact", label: "Contact Me", variant: "outline" }
            ].map((btn) => (
              <Link key={btn.label} href={btn.href}>
                <Button
                  borderRadius="1.75rem"
                  className={cn(
                    "w-full sm:w-auto", // <- full width on mobile
                    btn.variant === "primary" &&
                    "bg-gradient-to-r from-teal-400 to-cyan-500 text-black hover:from-teal-300 hover:to-cyan-400 dark:text-white",
                    btn.variant === "outline" &&
                    "bg-transparent hover:cursor-pointer text-white hover:bg-white/10 border border-white/30 flex items-center gap-2",
                    btn.variant === "ghost" &&
                    "bg-white text-black hover:bg-neutral-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 border border-neutral-200 dark:border-slate-800"
                  )}
                >
                  {btn.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Right column ─── */}
        <div className="flex w-auto justify-center md:w-5/12" data-aos="zoom-in">
          <div className="relative h-60 w-60 xs:h-64 xs:w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 mt-20 sm:mt-1">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr
                    from-teal-400/30 to-cyan-500/10 blur-2xl" />
            <Image
              src="/images/ali-hassan-profile.png"
              alt="Ali Hassan"
              fill
              className="rounded-full border-4 border-cyan-400 object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
