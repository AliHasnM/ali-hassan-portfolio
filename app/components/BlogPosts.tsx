"use client";
import { blogPosts } from "../data/blogPostsData";

export default function BlogPage() {
    return (
        <section className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Blog & Articles
                </h2>

                <div className="grid md:grid-cols-2 gap-10 px-2">
                    {blogPosts.map((post, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-white">{post.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                            <p className="text-gray-300">{post.description}</p>
                            <span className="inline-block mt-4 text-gray-500 italic">🚧 Coming Soon</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
