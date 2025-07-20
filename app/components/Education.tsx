'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

const degrees = [
    {
        degree: 'BS Computer Science',
        university: 'University of Agriculture Faisalabad Sub-Campus Burewala',
        years: '2020 – 2024',
        cgpa: 'CGPA: 3.58',
        image: '/images/8th Semester.jpg',
    },
    {
        degree: 'Intermediate in Pre-Engineering',
        university: 'Punjab Group of Colleges',
        years: '2018 – 2020',
        image: '/images/8th Semester.jpg',
    },
    {
        degree: 'Matriculation in Science',
        university: 'The Trust School',
        years: '2016 – 2018',
        image: '/images/8th Semester.jpg',
    },
];

const certifications = [
    {
        title: 'Meta Front-End Developer Professional Certificate',
        platform: 'Coursera / Meta',
        year: '2024',
        image: '/images/meta-cert.png',
    },
    {
        title: 'AWS Cloud Practitioner Essentials',
        platform: 'Amazon Web Services',
        year: '2024',
        image: '/images/aws-cert.png',
    },
    {
        title: 'Responsive Web Design',
        platform: 'FreeCodeCamp',
        year: '2023',
        image: '/images/fcc-cert.png',
    },
    {
        title: 'MERN Stack Development',
        platform: 'Devsinz Intern Connect',
        year: '2023',
    },
    {
        title: 'Web Development and Designing',
        platform: 'CodeAlpha',
        year: '2023',
    },
    {
        title: 'Web Development and Designing',
        platform: 'The Sparks Foundation',
        year: '2023',
    },
];

const diplomas = [
    { title: 'Website Development Using HTML and CSS', platform: 'Alison' },
    { title: 'Starting JavaScript Programming', platform: 'Alison' },
    { title: 'JavaScript ES6 Complete Guide', platform: 'Alison' },
    { title: 'React JavaScript - Fundamentals to Coding', platform: 'Alison' },
    { title: 'MERN Stack Development', platform: 'Alison' },
];

const internships = [
    {
        company: 'Devsinz Intern Connect',
        role: 'MERN Stack Developer Intern',
        duration: '1 Month',
        year: '2023',
    },
    {
        company: 'CodeAlpha',
        role: 'Web Development & Design Intern',
        duration: '1 Month',
        year: '2023',
    },
    {
        company: 'The Sparks Foundation',
        role: 'Web Development & Design Intern',
        duration: '1 Month',
        year: '2023',
    },
    {
        company: 'Innovixion Tech',
        role: 'MERN Stack Developer Intern',
        duration: '3 Months',
        year: '2023',
    },
];

export default function EducationPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <motion.h2
                    className="text-3xl font-bold mb-10 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <GraduationCap className="inline-block w-6 h-6 mr-2" />
                    Education, Certifications & Experience
                </motion.h2>

                {/* Degrees */}
                <motion.section
                    className="mb-12 px-4 py-8 rounded-xl bg-white dark:bg-gray-900 shadow-sm"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Degrees</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {degrees.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                            >
                                <p className="font-bold text-lg">{edu.degree}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.university}</p>
                                <p className="text-sm text-gray-400">{edu.years}</p>
                                {edu.cgpa && <p className="text-sm text-gray-400">{edu.cgpa}</p>}
                                {edu.image && (
                                    <button
                                        onClick={() => setSelectedImage(edu.image)}
                                        className="mt-2 cursor-pointer text-blue-600 hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition duration-200 text-sm font-medium"
                                    >
                                        📄 See Degree Certificate
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section
                    className="mb-12 px-4 py-8 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                            >
                                <p className="font-bold text-lg">{cert.title}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.platform}</p>
                                <p className="text-sm text-gray-400">{cert.year}</p>
                                {cert.image && (
                                    <button
                                        onClick={() => setSelectedImage(cert.image)}
                                        className="mt-2 cursor-pointer text-blue-600 hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition duration-200 text-sm font-medium"
                                    >
                                        📄 See Certificate
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Diplomas */}
                <motion.section
                    className="mb-12 px-4 py-8 rounded-xl bg-white dark:bg-gray-900 shadow-sm"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Diplomas</h3>
                    <ul className="space-y-3">
                        {diplomas.map((dip, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="cursor-pointer bg-white dark:bg-gray-900/80 border border-cyan-500/20 shadow-md p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-lg 
             hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:ring-1 hover:ring-cyan-400/40"
                            >
                                <p className="font-medium">{dip.title}</p>
                                <p className="text-sm text-gray-500">{dip.platform}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>

                {/* Internships */}
                <motion.section
                    className="px-4 py-8 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Internships</h3>
                    <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4">
                        {internships.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="cursor-pointer bg-white border border-cyan-500/20 shadow-sm dark:shadow-md p-6 rounded-2xl transition duration-300 hover:shadow-lg hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:via-blue-500/10 hover:to-indigo-500/10 dark:bg-gray-900/80 backdrop-blur-sm hover:ring-1 hover:ring-cyan-400/50">
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2.5"></div>
                                <div className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                    <p className="font-medium">{job.role}</p>
                                    <p className="text-sm text-gray-500">{job.company}</p>
                                    <p className="text-sm text-gray-400">{job.duration} — {job.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <Dialog
                        static
                        open={!!selectedImage}
                        onClose={() => setSelectedImage(null)}
                        className="fixed z-[1000] inset-0 bg-black/80 overflow-y-auto focus:outline-none"
                    >
                        <div className="flex items-center justify-center min-h-screen p-6">
                            <motion.div
                                tabIndex={0}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Preview"
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto rounded-lg object-contain cursor-pointer"
                                />
                                <div className="text-right mt-4">
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}
