"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { initSmoothScroll } from "../lib/lenis";
import { techStack } from "../data/techStackData";

export default function TechStack() {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return (
        <section
            id="tech-stack"
            className="py-20 px-4 sm:px-10 lg:px-20 bg-white dark:bg-[#0c0c0c] transition-colors duration-300"
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl mt-8 sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
                    Tech Stack & Skills
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {techStack.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: false }}
                            className="p-6 rounded-2xl border border-cyan-500/30 shadow-md hover:shadow-cyan-500/20 bg-white dark:bg-gray-900 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-cyan-500 mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.items.map(({ name, icon, className }) => {
                                    const Icon = icon;
                                    return (
                                        <li key={name} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                            <span className={`text-2xl ${className}`}>
                                                <Icon />
                                            </span>
                                            <span className="font-medium">{name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
