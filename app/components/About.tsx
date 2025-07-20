"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
    {
        year: "2020",
        title: "Started with HTML & CSS",
        description: "Learned basic web structure and design foundations.",
    },
    {
        year: "2021",
        title: "JavaScript & React.js",
        description: "Dived deep into JavaScript and began building dynamic UIs.",
    },
    {
        year: "2022",
        title: "Node.js & Backend",
        description: "Expanded to backend with Express and MongoDB.",
    },
    {
        year: "2023",
        title: "Full Stack Development",
        description: "Became proficient in the MERN stack, built complete apps.",
    },
    {
        year: "2024",
        title: "Next.js & Latest Tools",
        description: "Switched to server-side rendering and scalable tools like Vercel, Cloudinary.",
    },
];

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="relative min-h-screen py-16 px-6 sm:px-10 md:px-16 bg-black text-white">
            <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
                {/* ─── Image Section ─── */}
                <div
                    className="relative w-[24rem] h-[24rem] rounded-2xl border-4 border-cyan-400 shadow-xl overflow-hidden"
                    data-aos="fade-right"
                >
                    <Image
                        src="/images/ali-hassan-about.jpg"
                        alt="Ali Hassan"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>

                {/* ─── About Text ─── */}
                <div
                    className="text-left px-2"
                    data-aos="fade-left"
                >
                    <h2 className="text-3xl text-center sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                        I&apos;m <span className="text-cyan-300 font-semibold">Ali Hassan</span>,
                        a Full Stack Developer with strong command over the{" "}
                        <span className="font-semibold text-cyan-400">MERN stack</span> and{" "}
                        <span className="font-semibold text-cyan-400">Next.js</span>. I hold a{" "}
                        <span className="text-cyan-300 font-semibold">Bachelor&apos;s in Computer Science</span>{" "}
                        from the University of Agriculture, Faisalabad.
                    </p>

                    <p className="mt-4 text-neutral-400">
                        I started with HTML & CSS, progressed into JavaScript, React.js,
                        and Node.js, eventually mastering full-stack development.
                    </p>

                    <p className="mt-4 text-neutral-500">
                        I believe in clean code, creative solutions, and continuous learning.
                        Whether working solo or with teams, I build digital experiences that make an impact.
                    </p>
                </div>
            </div>

            {/* ─── Timeline Section ─── */}
            <div
                className="mt-20 md:px-0 px-4 flex justify-center"
                data-aos="fade-up"
            >
                <div className="max-w-2xl w-full">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Career Journey</h3>
                    <ol className="relative border-s border-cyan-600">
                        {steps.map((step, index) => (
                            <li className="mb-10 ms-6" key={index}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -start-3 ring-8 ring-black">
                                    <span className="text-white text-sm font-bold">{index + 1}</span>
                                </span>
                                <h4 className="flex items-center mb-1 text-lg font-semibold text-white">
                                    {step.year} – {step.title}
                                </h4>
                                <p className="text-sm text-neutral-400">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
