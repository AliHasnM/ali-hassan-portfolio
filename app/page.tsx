import React from 'react'
import AliHassan from "./components/AliHassan";
import AboutPage from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import ExperiencePage from './components/Experience';
import EducationPage from './components/Education';
import TestimonialsPage from './components/Testimonials';
import BlogPage from './components/BlogPosts';
import ContactPage from './components/Contact';

const page = () => {
  return (
    <main>
      <AliHassan />
      <AboutPage />
      <TechStack />
      <FeaturedProjects showViewAll={true} />
      <ExperiencePage />
      <EducationPage />
      <TestimonialsPage />
      <BlogPage />
      <ContactPage />
    </main>
  )
}

export default page