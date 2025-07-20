"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { Briefcase, Globe2, Star } from "lucide-react";

// 💼 Professional Experience
const fullTimeExperiences = [
    {
        company: "TechNova Solutions",
        role: "Full Stack Developer",
        dates: "Jan 2023 – Present",
        location: "Remote / Global",
        achievements: [
            "Built scalable MERN stack apps handling 10K+ users",
            "Integrated real-time features using WebSockets",
            "Led 5-member team for internal SaaS dashboard",
        ],
        icon: <MdWork className="text-blue-500" />,
    },
    {
        company: "CodeAlpha Internship",
        role: "Frontend Developer Intern",
        dates: "Jun 2022 – Sep 2022",
        location: "Remote / India",
        achievements: [
            "Delivered 3 full-featured projects in React and Tailwind CSS",
            "Optimized performance and accessibility scores to 95+",
        ],
        icon: <MdWork className="text-blue-500" />,
    },
];

// 🌍 Freelance & Remote Work
const freelanceWork = [
    {
        platform: "Fiverr",
        role: "Full Stack Developer (Freelance)",
        dates: "Jan 2022 – Present",
        clients: "Global Clients",
        projects: 50,
        highlights: [
            "Completed 50+ projects with 5-star ratings",
            "Built portfolios, dashboards, and e-commerce stores",
        ],
        icon: <SiFiverr className="text-green-500" />,
    },
    {
        platform: "Upwork",
        role: "Frontend Engineer (Contract)",
        dates: "Jul 2021 – Dec 2021",
        clients: "Startups & Agencies",
        projects: 20,
        highlights: [
            "Built scalable frontend apps using React and Tailwind CSS",
            "Collaborated remotely via Slack & GitHub",
        ],
        icon: <SiUpwork className="text-green-600" />,
    },
    {
        platform: "GitHub Open Source",
        role: "Contributor – Full Stack / MERN",
        dates: "2020 – Present",
        clients: "Community",
        projects: 10,
        highlights: [
            "Contributed to 10+ open source repositories",
            "Maintained PRs, code reviews & dev support",
        ],
        icon: <FaGithub className="text-gray-700 dark:text-white" />,
    },
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#191822] via-[#0b1618] to-[#090802] text-white">
            <section className="py-20 px-5 max-w-7xl mx-auto" id="experience">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-16"
                >
                    Experience & Remote Work
                </motion.h2>

                {/* Professional Experience */}
                <div className="mb-16 px-2">
                    <h3 className="text-2xl font-semibold text-cyan-600 mb-6 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Professional Roles
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {fullTimeExperiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {exp.icon}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {exp.company}
                                        </h4>
                                        <p className="text-sm text-gray-500">{exp.location}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {exp.role}
                                </p>
                                <p className="text-xs text-gray-500 mb-3">{exp.dates}</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                    {exp.achievements.map((a, j) => (
                                        <li key={j}>{a}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Freelance Section */}
                <div className="px-2">
                    <h3 className="text-2xl font-semibold text-cyan-600 mb-6 flex items-center gap-2">
                        <Globe2 className="w-5 h-5" />
                        Freelance & Remote Work
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {freelanceWork.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {f.icon}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {f.platform}
                                        </h4>
                                        <p className="text-sm text-gray-500">{f.clients}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {f.role}
                                </p>
                                <p className="text-xs text-gray-500 mb-3">{f.dates}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    <Star className="inline-block w-4 h-4 text-yellow-400 mr-1" />
                                    {f.projects}+ projects completed
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                    {f.highlights.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div className="text-center mt-20">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">
                        Connect with me
                    </h4>
                    <div className="flex justify-center gap-6 text-4xl text-gray-700 dark:text-gray-300">
                        <a
                            href="https://www.linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="hover:text-blue-600" />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="hover:text-black dark:hover:text-white" />
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/your-id"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiUpwork className="hover:text-green-600" />
                        </a>
                        <a
                            href="https://www.fiverr.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiFiverr className="hover:text-green-500" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
