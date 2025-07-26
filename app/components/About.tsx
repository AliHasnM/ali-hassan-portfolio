"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { initSmoothScroll } from "../lib/lenis";
import { steps } from "../data/aboutData";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
        initSmoothScroll();
    }, []);

    return (
        <section className="relative min-h-screen py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>

            <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <CardContainer containerClassName="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                        <CardBody className="relative w-full aspect-square">
                            <CardItem
                                translateZ={50}
                                className="relative cursor-pointer w-full h-full rounded-2xl border-4 border-cyan-400 shadow-xl overflow-hidden"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src="/images/ali-hassan-about.jpg"
                                        alt="Ali Hassan"
                                        fill
                                        className="rounded-2xl object-cover object-top z-10"
                                        priority
                                    />
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </motion.div>





                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-left px-2"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="text-3xl text-center sm:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: false }}
                        className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed"
                    >
                        I&apos;m <span className="text-cyan-300 font-semibold">Ali Hassan</span>,
                        a Full Stack Developer with expertise in the
                        <span className="font-semibold text-cyan-400"> MERN stack</span> and
                        <span className="font-semibold text-cyan-400"> Next.js</span>. I hold a
                        <span className="text-cyan-300 font-semibold"> Bachelor&apos;s in Computer Science</span> from the University of Agriculture, Faisalabad.
                    </motion.p>

                    <p className="mt-4 text-neutral-400">
                        I started with HTML & CSS, progressed into JavaScript, React.js, and Node.js, eventually mastering full-stack development.
                    </p>

                    <p className="mt-4 text-neutral-500">
                        I believe in clean code, creative solutions, and continuous learning. Whether working solo or with teams, I build digital experiences that make an impact.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="mt-24 px-4 md:px-0 flex justify-center"
            >
                <div className="max-w-2xl w-full">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                        Career Journey
                    </h3>
                    <ol className="relative border-s border-cyan-600">
                        {steps.map((step, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: false }}
                                className="mb-10 ms-6"
                            >
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -start-3 ring-8 ring-black">
                                    <span className="text-white text-sm font-bold">{index + 1}</span>
                                </span>
                                <h4 className="flex items-center mb-1 text-lg font-semibold text-white">
                                    {step.year} – {step.title}
                                </h4>
                                <p className="text-sm text-neutral-400">{step.description}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutPage;
