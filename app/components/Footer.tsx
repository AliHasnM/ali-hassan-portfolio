"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white py-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Name or Logo */}
                <div className="text-lg font-semibold">Ali Hassan</div>

                {/* Quick Links */}
                <div className="flex gap-6 text-sm">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="#projects" className="hover:underline">Projects</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="#contact" className="hover:underline">Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-5 text-xl">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-transparent hover:border-cyan-400 p-2 rounded-full transition duration-300 cursor-pointer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-transparent hover:border-cyan-400 p-2 rounded-full transition duration-300 cursor-pointer">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
                        className="hover:text-cyan-400 border border-transparent hover:border-cyan-400 p-2 rounded-full transition duration-300 cursor-pointer">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs mt-8">
                © {new Date().getFullYear()} Ali Hassan. All Rights Reserved.
            </div>
        </footer>
    );
}
