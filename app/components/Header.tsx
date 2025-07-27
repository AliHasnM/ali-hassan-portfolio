"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        initSmoothScroll();
    }, []);

    const handleNav = () => setOpen(false);

    const iconLink = (href: string, label: string, icon: React.ReactNode) => (
        <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
            {icon}
        </motion.a>
    );

    return (
        <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-4 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-black/20"
            >
                <Link
                    href="/"
                    className="whitespace-nowrap text-lg font-bold tracking-wide text-white"
                    onClick={handleNav}
                >
                    Ali <span className="text-cyan-400">Hassan</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
                    {navItems.map((item) =>
                        item.dropdown ? (
                            <li key={item.name} className="relative group">
                                <span className="cursor-pointer px-3 py-1 hover:text-cyan-400">
                                    {item.name}
                                </span>
                                <ul className="absolute top-full mt-2 hidden w-48 flex-col space-y-1 rounded-lg bg-black/90 p-2 text-sm text-white shadow-lg group-hover:flex z-50">
                                    {item.dropdown.map((sub) => (
                                        <li key={sub.href}>
                                            <Link
                                                href={sub.href}
                                                onClick={handleNav}
                                                className={cn(
                                                    "block px-3 py-1 hover:text-cyan-400",
                                                    pathname === sub.href && "text-cyan-400"
                                                )}
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={handleNav}
                                    className={cn(
                                        "relative px-3 py-1 transition duration-200 hover:text-cyan-400",
                                        pathname === item.href && "text-cyan-400"
                                    )}
                                >
                                    {item.name}
                                    <span
                                        className={cn(
                                            "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300",
                                            pathname === item.href && "w-full"
                                        )}
                                    />
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* Desktop Icons & CV */}
                <div className="hidden md:flex items-center gap-4">
                    {iconLink("https://github.com/AliHasnM", "GitHub", <Github size={20} />)}
                    {iconLink("https://www.linkedin.com/in/ali-hassan-261187253", "LinkedIn", <Linkedin size={20} />)}
                    {iconLink("https://www.instagram.com/alihassan.mughal.7524", "Instagram", <Instagram size={20} />)}
                    {iconLink("https://www.facebook.com/alihassan.mughal.7524", "Facebook", <Facebook size={20} />)}
                </div>

                <Link
                    href="/images/MERN Ali Hassan.pdf"
                    download
                    className="hidden md:inline-block rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-black transition hover:from-teal-300 hover:to-cyan-400 dark:text-white"
                >
                    Download CV
                </Link>

                <button
                    aria-label="Toggle navigation"
                    className="md:hidden hover:cursor-pointer flex items-center justify-center text-white"
                    onClick={() => setOpen((p) => !p)}
                >
                    {open ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </motion.nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobileMenu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-4 top-[72px] w-64 space-y-4 rounded-xl border border-white/10 bg-black/70 p-4 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-black/50 md:hidden"
                    >
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.name}>
                                    <p className="mt-2 mb-1 text-sm font-semibold text-white">{item.name}</p>
                                    {item.dropdown.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={handleNav}
                                            className={cn(
                                                "block pl-4 text-base font-medium text-white transition hover:text-cyan-400",
                                                pathname === sub.href && "text-cyan-400"
                                            )}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleNav}
                                    className={cn(
                                        "block text-base font-medium text-white transition hover:text-cyan-400",
                                        pathname === item.href && "text-cyan-400"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}

                        <div className="flex items-center justify-start gap-4 pt-2">
                            {iconLink("https://github.com/ali-hassan-dev", "GitHub", <Github size={20} />)}
                            {iconLink("https://linkedin.com/in/alihassan-dev", "LinkedIn", <Linkedin size={20} />)}
                            {iconLink("https://instagram.com/yourhandle", "Instagram", <Instagram size={20} />)}
                            {iconLink("https://facebook.com/yourhandle", "Facebook", <Facebook size={20} />)}
                        </div>

                        <Link
                            href="/images/MERN Ali Hassan.pdf"
                            download
                            onClick={handleNav}
                            className="inline-block w-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-2 text-center text-sm font-semibold text-black transition hover:from-teal-300 hover:to-cyan-400 dark:text-white"
                        >
                            Download CV
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
