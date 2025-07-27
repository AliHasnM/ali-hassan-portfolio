"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import { initSmoothScroll } from "../lib/lenis";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    {
        name: "Portfolio",
        dropdown: [
            { name: "Tech Stack", href: "/techstacks" },
            { name: "Experience", href: "/experiences" },
            { name: "Education", href: "/educations" },
            { name: "Testimonials", href: "/testimonials" },
        ],
    },
    { name: "Blog", href: "/blogposts" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return (
        <footer className="relative bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1f2937] text-white pt-16 pb-8 border-t border-gray-800 backdrop-blur-xl shadow-inner overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 md:flex-row md:items-start items-center text-center md:text-left justify-between relative z-10">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl cursor-pointer font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                    Ali Hassan
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-300"
                >
                    {/* Static sections like Home/About/etc. */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-xs">
                            Pages
                        </h4>
                        <ul className="space-y-2">
                            {navItems
                                .filter((item) => !item.dropdown)
                                .map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="relative inline-block transition duration-300 hover:text-cyan-400"
                                        >
                                            <span className="before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Portfolio Section */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-xs">
                            Portfolio
                        </h4>
                        <ul className="space-y-2">
                            {navItems
                                .find((item) => item.name === "Portfolio")
                                ?.dropdown?.map((sub) => (
                                    <li key={sub.href}>
                                        <Link
                                            href={sub.href}
                                            className="relative inline-block transition duration-300 hover:text-cyan-400"
                                        >
                                            <span className="before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full">
                                                {sub.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Contact & CV Download Section */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-xs">
                            Get in Touch
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/contact"
                                    className="relative inline-block transition duration-300 hover:text-cyan-400"
                                >
                                    <span className="before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/images/MERN Ali Hassan.pdf"
                                    download
                                    className="relative inline-block transition duration-300 hover:text-cyan-400"
                                >
                                    <span className="before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full">
                                        Download CV
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>


                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-5 text-xl justify-center md:justify-start"
                >
                    <a
                        href="https://github.com/AliHasnM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/ali-hassan-261187253"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/alihassan.mughal.7524"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/alihassan.mughal.7524"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300"
                    >
                        <FaFacebook />
                    </a>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center text-gray-400 text-xs mt-12 z-10 relative"
            >
                © {new Date().getFullYear()} Ali Hassan. All Rights Reserved.
            </motion.div>
        </footer>
    );
}
