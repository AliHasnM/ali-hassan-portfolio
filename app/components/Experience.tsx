"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { Briefcase, Globe2, Star } from "lucide-react";
import { freelanceWork, fullTimeExperiences } from "../data/experienceData";


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
                        {fullTimeExperiences.map((exp, i) => {
                            const Icon = exp.icon; // ✅ extract the icon component
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
          hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon className="text-xl text-gray-700 dark:text-gray-300" />
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
                                    <p className="text-xs text-gray-500 mb-3">{exp.duration}</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                        {exp.achievements.map((a, j) => (
                                            <li key={j}>{a}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Freelance Section */}
                <div className="px-2">
                    <h3 className="text-2xl font-semibold text-cyan-600 mb-6 flex items-center gap-2">
                        <Globe2 className="w-5 h-5" />
                        Freelance & Remote Work
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {freelanceWork.map((f, i) => {
                            const Icon = f.icon; // ✅ extract the icon component
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon className="w-6 h-6 text-cyan-500" />
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
                                    <p className="text-xs text-gray-500 mb-3">{f.duration}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        <Star className="inline-block w-4 h-4 text-yellow-400 mr-1" />
                                        {f.projects}+ projects completed
                                    </p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                        {f.highlights.map((h, j) => (
                                            <li key={j}>{h}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
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
