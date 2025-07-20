import React from 'react'
import Header from "./components/Header";
import AliHassan from "./components/AliHassan";
import AboutPage from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import ExperiencePage from './components/Experience';
import EducationPage from './components/Education';
import TestimonialsPage from './components/Testimonials';
import BlogPage from './components/BlogPosts';
import ContactPage from './components/Contact';
import Footer from './components/Footer';

const page = () => {
  return (
    <main>
      <Header />
      <AliHassan />
      <AboutPage />
      <TechStack />
      <FeaturedProjects />
      <ExperiencePage />
      <EducationPage />
      <TestimonialsPage />
      <BlogPage />
      <ContactPage />
      <Footer />
    </main>
  )
}

export default page