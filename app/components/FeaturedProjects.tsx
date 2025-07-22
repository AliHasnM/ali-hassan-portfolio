"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { CardContainer, CardBody } from "./ui/3d-card";
import { featuredProjects, categories } from "../data/projectData";
import { initSmoothScroll } from "../lib/lenis";

export default function FeaturedProjects() {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        initSmoothScroll();
    }, []);

    const filteredProjects =
        activeCategory === "All"
            ? featuredProjects
            : featuredProjects.filter((proj) => proj.category === activeCategory);

    return (
        <section
            className="py-20 px-5 max-w-7xl mx-auto"
            id="projects"
        >
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-12"
            >
                Featured Projects
            </motion.h2>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
                className="flex justify-center flex-wrap gap-4 mb-10"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 shadow-sm ${activeCategory === cat
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Project Cards */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.slice(0, 6).map((project, i) => (
                    <CardContainer key={project.id}>
                        <CardBody>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6, type: "spring", damping: 14 }}
                                viewport={{ once: false }}
                                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                    placeholder="blur"
                                    blurDataURL="/images/blur-placeholder.png"
                                />
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-blue-700 dark:text-cyan-400">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 dark:bg-blue-800/20 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-5 pt-2">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            aria-label="GitHub Repository"
                                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                                        >
                                            <FaGithub size={20} />
                                        </Link>
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            aria-label="Live Preview"
                                            className="text-blue-600 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
                                        >
                                            <FaExternalLinkAlt size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>

            {/* View All Projects */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-center mt-12"
            >
                <Link
                    href="/projects"
                    className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition"
                >
                    View All Projects
                </Link>
            </motion.div>
        </section>
    );
}