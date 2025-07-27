"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPostsData";
import { initSmoothScroll } from "../lib/lenis";

export default function BlogPage() {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return (
        <section className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-4xl mt-8 md:text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Blog & Articles
                </h2>

                <div className="grid md:grid-cols-2 gap-10 px-2">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#1a1a1a] border cursor-pointer border-cyan-500/20 rounded-2xl p-6 shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-white">
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                            <p className="text-gray-300 leading-relaxed">
                                {post.description}
                            </p>
                            <span className="inline-block mt-4 text-cyan-400 italic">
                                🚧 Coming Soon
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
