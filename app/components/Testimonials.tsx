"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "../data/testimonialsData"; // Custom testimonials data

export default function TestimonialsPage() {
    return (
        <section className="min-h-screen bg-[#0e0e0e] py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    What People Say About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative cursor-pointer p-6 rounded-xl bg-[#1a1a1a] border border-transparent group transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-cyan-700 hover:via-cyan-800 hover:to-cyan-950 hover:border-transparent hover:shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
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
