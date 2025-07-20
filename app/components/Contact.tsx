"use client";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaFacebook,
} from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSuccessMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Optional: hide the message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#0a0a0a] text-white px-6 py-20" id="contact">
            <div className="max-w-4xl mx-auto text-center px-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                    Let’s Get in Touch
                </h2>
                <p className="text-gray-400 mb-12">
                    Have a vision, collaboration idea, or just want to say hi? I’d love to hear from you!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 max-w-2xl mx-auto bg-[#1a1a1a] p-8 rounded-xl border border-gray-700 shadow-md"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#0f0f0f] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0f0f0f] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#0f0f0f] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* ✅ Success Message */}
                {successMessage && (
                    <div className="mt-6 text-green-400 text-sm font-medium transition-opacity duration-500">
                        {successMessage}
                    </div>
                )}

                {/* Social Icons */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-300">
                    {[
                        { href: "https://github.com/yourgithub", icon: <FaGithub /> },
                        { href: "https://linkedin.com/in/yourlinkedin", icon: <FaLinkedin /> },
                        { href: "https://instagram.com/yourinstagram", icon: <FaInstagram /> },
                        { href: "https://facebook.com/yourfacebook", icon: <FaFacebook /> },
                    ].map(({ href, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-gray-600 hover:border-teal-400 transition duration-300 hover:scale-110 cursor-pointer"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400 mt-8 items-center justify-center">
                    <div
                        className="flex items-center gap-2 hover:text-teal-400 cursor-pointer transition"
                        onClick={() => window.location.href = "mailto:mughal201burewala@gmail.com"}
                    >
                        <FaEnvelope />
                        <span className="hover:underline">mughal201burewala@gmail.com</span>
                    </div>
                    <div
                        className="flex items-center gap-2 hover:text-teal-400 cursor-pointer transition"
                        onClick={() => window.location.href = "tel:+923078357370"}
                    >
                        <FaPhone />
                        <span className="hover:underline">+92 307 8357370</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
