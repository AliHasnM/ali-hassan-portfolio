/* app/components/HeroSection.tsx */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import { easeInOut, motion, Variants } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
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
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: false,
  //     offset: 120, // default is 120px before it triggers
  //     easing: 'ease-in-out',
  //   });
  // }, []);
  const scrollDirection = useScrollDirection();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.6,
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24">
      <Spotlight />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center
                      gap-12 px-4 sm:px-6 md:flex-row md:gap-20">
        {/* ─── Left column ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 px-2 w-full text-left md:mt-0 md:w-7/12"
        >
          {/* Headings */}
          <motion.div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-3xl mt-6 xs:text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ali&nbsp;Hassan
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-2 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent break-words"
            >
              Full&nbsp;Stack&nbsp;Developer&nbsp;(MERN&nbsp;/&nbsp;Next.js)
            </motion.h2>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl"
          >
            I specialize in the&nbsp;
            <span className="text-cyan-300 font-semibold">MERN stack</span> and&nbsp;
            <span className="text-cyan-300 font-semibold">Next.js</span>, crafting responsive UIs and robust back‑end systems with precision. I build clean, scalable, high‑performance solutions that work flawlessly and look great doing it.
            <br />
            <br />
            Let&apos;s collaborate to turn your vision into a reliable, high‑impact digital experience that your users (and clients) will love.
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-items-center md:justify-start gap-3"
          >
            <Badge label="Full Stack Dev (MERN / Next JS)" icon={<Code size={16} />} />
            <Badge label="3+ Years Experience" icon={<Clock size={16} />} />
            <Badge label="BS Computer Science" icon={<GraduationCap size={16} />} />
            <Badge label="Freelancer" icon={<Briefcase size={16} />} />
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex justify-center gap-3 sm:gap-5 md:justify-start"
          >
            <IconLink href="https://github.com/ali-hassan-dev" label="GitHub" icon={<Github size={20} />} />
            <IconLink href="https://linkedin.com/in/alihassan-dev" label="LinkedIn" icon={<Linkedin size={20} />} />
            <IconLink href="https://instagram.com/yourhandle" label="Instagram" icon={<Instagram size={20} />} />
            <IconLink href="https://facebook.com/yourhandle" label="Facebook" icon={<Facebook size={20} />} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Link href="#contact">
              <Button
                borderRadius="1.75rem"
                className={cn(
                  "w-full sm:w-auto",
                  "bg-transparent hover:cursor-pointer text-white hover:bg-white/10 border border-white/30 flex items-center gap-2"
                )}
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>



        {/* ─── Right column ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <CardContainer containerClassName="md:w-5/12 flex justify-center">
            <CardBody className="relative mt-20 sm:mt-1 h-72 w-72 xs:h-64 xs:w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
              <CardItem
                translateZ={80}
                className="relative cursor-pointer mx-0 sm:mx-14 h-full w-full rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400/30 to-cyan-500/10 blur-2xl z-0" />
                <Image
                  src="/images/ali-hassan-profile.png"
                  alt="Ali Hassan"
                  fill
                  className="rounded-full object-cover z-10"
                  priority
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
