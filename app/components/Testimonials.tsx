"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "../data/testimonialsData";
import { initSmoothScroll } from "../lib/lenis";

export default function TestimonialsPage() {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl mt-8 md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What People Say About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="relative cursor-pointer p-6 rounded-3xl bg-gradient-to-tr from-gray-800/60 to-gray-900/80 border border-cyan-500/20 shadow-2xl backdrop-blur-sm hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover border-2 border-cyan-500 shadow-md"
                                />
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg text-cyan-400">{item.name}</h3>
                                    <p className="text-sm text-gray-300">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-200 leading-relaxed italic transition-colors duration-300 group-hover:text-white">
                                &quot;{item.review}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}