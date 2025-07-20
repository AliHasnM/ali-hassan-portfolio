// app/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const handleNav = () => setOpen(false);

    /* Helper for social icons */
    /* single helper for bordered icon */
    const iconLink = (
        href: string,
        label: string,
        icon: React.ReactNode,
    ) => (
        <Link
            href={href}
            aria-label={label}
            target="_blank"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full
               border border-white/20 text-white transition
               hover:border-cyan-400 hover:text-cyan-400"
        >
            {icon}
        </Link>
    );


    return (
        <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6">
            <nav
                className="mx-auto flex w-full max-w-6xl items-center justify-between
                   rounded-full border border-white/10 bg-black/30 px-6 py-4 shadow-xl
                   backdrop-blur supports-[backdrop-filter]:bg-black/20"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="whitespace-nowrap text-lg font-bold tracking-wide text-white"
                    onClick={handleNav}
                >
                    Ali <span className="text-cyan-400">Hassan</span>
                </Link>

                {/* ---- Desktop nav links ---- */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
                    {navItems.map((item) => (
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
                    ))}
                </ul>

                {/* ---- Social icons (desktop) ---- */}
                <div className="hidden md:flex items-center gap-4">
                    {iconLink("https://github.com/ali-hassan-dev", "GitHub", <Github size={20} />)}
                    {iconLink("https://linkedin.com/in/alihassan-dev", "LinkedIn", <Linkedin size={20} />)}
                    {iconLink("https://instagram.com/yourhandle", "Instagram", <Instagram size={20} />)}
                    {iconLink("https://facebook.com/yourhandle", "Facebook", <Facebook size={20} />)}
                </div>


                {/* ---- Desktop CTA ---- */}
                <Link
                    href="/Ali_Hassan_CV.pdf"
                    download
                    className="hidden md:inline-block rounded-full bg-gradient-to-r
                     from-teal-400 to-cyan-500 px-4 py-1.5 text-sm font-semibold
                     text-black transition hover:from-teal-300 hover:to-cyan-400 dark:text-white"
                >
                    Download CV
                </Link>

                {/* ---- Hamburger (mobile) ---- */}
                <button
                    aria-label="Toggle navigation"
                    className="md:hidden hover:cursor-pointer flex items-center justify-center text-white"
                    onClick={() => setOpen((p) => !p)}
                >
                    {open ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </nav>

            {/* ---- Mobile dropdown ---- */}
            {open && (
                <div
                    className="absolute right-4 top-[72px] w-56 space-y-4 rounded-xl border border-white/10
                     bg-black/70 p-4 shadow-xl backdrop-blur
                     supports-[backdrop-filter]:bg-black/50 md:hidden"
                >
                    {navItems.map((item) => (
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
                    ))}

                    {/* Social icons (mobile) */}
                    <div className="flex items-center justify-start gap-4 pt-2">
                        {iconLink("https://github.com/ali-hassan-dev", "GitHub", <Github size={20} />)}
                        {iconLink("https://linkedin.com/in/alihassan-dev", "LinkedIn", <Linkedin size={20} />)}
                        {iconLink("https://instagram.com/yourhandle", "Instagram", <Instagram size={20} />)}
                        {iconLink("https://facebook.com/yourhandle", "Facebook", <Facebook size={20} />)}
                    </div>

                    {/* Mobile CV button */}
                    <Link
                        href="/Ali_Hassan_CV.pdf"
                        download
                        onClick={handleNav}
                        className="inline-block w-full rounded-full bg-gradient-to-r
                       from-teal-400 to-cyan-500 px-4 py-2 text-center text-sm
                       font-semibold text-black transition hover:from-teal-300
                       hover:to-cyan-400 dark:text-white"
                    >
                        Download CV
                    </Link>
                </div>
            )}
        </header>
    );
}
