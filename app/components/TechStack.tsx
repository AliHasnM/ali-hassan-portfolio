"use client";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiVercel,
    SiSocketdotio,
    SiNextdotjs,
    SiRedux,
    SiPostman,
    SiNetlify,
    SiRailway,
    SiFramer,
    SiJsonwebtokens,
    SiFigma,
    SiTypescript,
} from "react-icons/si";
import { RiToolsFill } from "react-icons/ri";
import { VscVscode } from 'react-icons/vsc';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
    {
        title: "Web Basics",
        items: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> }
        ],
    },
    {
        title: "DevOps & Deployment",
        items: [
            { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
            { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
            { name: "Railway", icon: <SiRailway className="text-purple-600" /> },
            { name: "GitHub Actions", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
        ],
    },
    {
        title: "Others",
        items: [
            { name: "REST API", icon: <RiToolsFill className="text-blue-600" /> },
            { name: "WebSocket", icon: <SiSocketdotio className="text-purple-600" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
            { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
            { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        ],
    },
];

export default function TechStack() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section id="tech-stack" className="py-16 px-2 sm:px-8 lg:px-20 bg-white dark:bg-[#0c0c0c]">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12"
                    data-aos="fade-up"
                >
                    Tech Stack & Skills
                </h2>

                <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, i) => (
                        <div
                            key={category.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="p-6 rounded-2xl border border-cyan-500/30 shadow-md hover:shadow-cyan-500/20 bg-white dark:bg-gray-900 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-cyan-500 mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.items.map(({ name, icon }) => (
                                    <li key={name} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                        <span className="text-2xl">{icon}</span>
                                        <span className="font-medium">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
