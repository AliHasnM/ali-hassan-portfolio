"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import { initSmoothScroll } from "../lib/lenis";

export default function Footer() {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return (
        <footer className="relative bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1f2937] text-white py-20 border-t border-gray-800 backdrop-blur-xl shadow-inner overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 z-10 relative">
                {/* Logo or Name */}
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
                    className="flex flex-wrap justify-center gap-6 text-sm font-medium"
                >
                    <Link href="/" className="hover:text-cyan-400 transition duration-300 cursor-pointer">Home</Link>
                    <Link href="#projects" className="hover:text-cyan-400 transition duration-300 cursor-pointer">Projects</Link>
                    <Link href="#about" className="hover:text-cyan-400 transition duration-300 cursor-pointer">About</Link>
                    <Link href="#contact" className="hover:text-cyan-400 transition duration-300 cursor-pointer">Contact</Link>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-5 text-xl"
                >
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 p-2 rounded-full transition duration-300">
                        <FaFacebook />
                    </a>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center cursor-pointer text-gray-400 text-xs mt-12 z-10 relative"
            >
                © {new Date().getFullYear()} Ali Hassan. All Rights Reserved.
            </motion.div>
        </footer>
    );
}
