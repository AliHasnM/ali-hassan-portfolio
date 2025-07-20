"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import 3D card wrappers
import { CardContainer, CardBody } from "./ui/3d-card";

const featuredProjects = [
    {
        id: 1,
        title: "AI Voice Assistant",
        category: "Full Stack",
        tech: ["React", "Node.js", "ChatGPT API", "WebSocket", "Tailwind"],
        description:
            "Real-time voice assistant integrated with ChatGPT API and WebSocket to control IoT devices using natural voice input.",
        github: "https://github.com/yourusername/ai-voice-assistant",
        live: "https://ai-voice-assistant.vercel.app",
        image: "/images/project-img.png",
    },
    {
        id: 2,
        title: "Job Portal & Recruitment System",
        category: "Backend",
        tech: ["Next.js", "MongoDB", "Express", "Tailwind"],
        description:
            "Complete MERN-stack platform for hiring and job applications, with resume management and real-time notifications.",
        github: "https://github.com/yourusername/job-portal",
        live: "https://job-portal.vercel.app",
        image: "/images/project-img.png",
    },
    {
        id: 3,
        title: "PDF to Voice & Word Converter",
        category: "Frontend",
        tech: ["React", "Node.js", "Express", "Tailwind"],
        description:
            "Convert PDF files into speech and editable Word documents with a sleek, user-friendly interface.",
        github: "https://github.com/yourusername/pdf-tools",
        live: "https://pdf-tools.vercel.app",
        image: "/images/project-img.png",
    },
    // Add 3 more dummy projects
    {
        id: 4,
        title: "Portfolio Website",
        category: "Frontend",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        description: "A personal developer portfolio showcasing skills, experience, and projects.",
        github: "#",
        live: "#",
        image: "/images/project-img.png",
    },
    {
        id: 5,
        title: "Real-Time Chat App",
        category: "Full Stack",
        tech: ["React", "Node.js", "Socket.io", "Tailwind"],
        description: "A modern real-time chat application with private rooms and notifications.",
        github: "#",
        live: "#",
        image: "/images/project-img.png",
    },
    {
        id: 6,
        title: "Blog Platform",
        category: "Full Stack",
        tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
        description: "Full-featured blog with authentication, markdown support, and CMS dashboard.",
        github: "#",
        live: "#",
        image: "/images/project-img.png",
    },
];

const categories = ["All", "Full Stack", "Frontend", "AI"];

export default function FeaturedProjects() {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 120, // default is 120px before it triggers
            easing: 'ease-in-out',
        });
    }, []);


    const filteredProjects =
        activeCategory === "All"
            ? featuredProjects
            : featuredProjects.filter((proj) => proj.category === activeCategory);

    return (
        <section className="py-20 px-5 max-w-7xl mx-auto" id="projects">
            <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-12">
                Featured Projects
            </h2>

            {/* Category Filter */}
            <div className="flex justify-center flex-wrap gap-4 mb-10">
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
            </div>

            {/* Project Cards */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.slice(0, 6).map((project, i) => (
                    <CardContainer key={project.id}>
                        <CardBody>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
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
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>

            {/* View All Projects */}
            <div className="text-center mt-12">
                <Link
                    href="/projects"
                    className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition"
                >
                    View All Projects
                </Link>
            </div>
        </section>
    );
}

