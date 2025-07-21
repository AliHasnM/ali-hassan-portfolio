import { IconType } from "react-icons";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

export interface FullTimeExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  icon: IconType;
}

export interface FreelanceWork {
  platform: string;
  role: string;
  duration: string;
  clients: string;
  projects: number;
  highlights: string[];
  icon: IconType;
}

export const fullTimeExperiences: FullTimeExperience[] = [
  {
    company: "CodeAlpha",
    role: "Full Stack Developer (MERN)",
    duration: "March 2024 – June 2024",
    location: "Remote / India",
    achievements: [
      "Completed real-world projects including a Social Media Dashboard and Temperature Converter using React and Tailwind CSS",
      "Integrated RESTful APIs and applied responsive UI practices to improve usability across devices",
      "Successfully deployed projects to GitHub and wrote clean, maintainable code for scalable frontends",
    ],
    icon: MdWork,
  },
  {
    company: "CodeAlpha",
    role: "Web Development",
    duration: "March 2024 – April 2024",
    location: "Remote / India",
    achievements: [
      "Completed core web projects using HTML, CSS, JavaScript, and React.js",
      "Learned Git version control, GitHub collaboration, and best practices for component-based design",
      "Created and submitted 3 internship tasks aligned with professional frontend standards",
    ],
    icon: MdWork,
  },
  {
    company: "Devsinz Intern Connect",
    role: "Full Stack Developer (MERN)",
    duration: "August 2024 – September 2024",
    location: "Remote / Pakistan",
    achievements: [
      "Built an advanced Online Job Portal system with role-based authentication (Employer & JobSeeker)",
      "Implemented job posting, application tracking, and real-time notifications with Socket.IO",
      "Developed a fully functional backend using Node.js, Express, MongoDB and integrated Cloudinary for file uploads",
    ],
    icon: MdWork,
  },
  {
    company: "The Sparks Foundation",
    role: "MERN Stack Developer",
    duration: "April 2024 – May 2024",
    location: "Remote / Global",
    achievements: [
      "Created a real-time PDF to Word & PDF to Audio converter web app using Node.js and React",
      "Integrated text-to-speech APIs and handled PDF parsing for accurate conversions",
      "Focused on accessibility, UI performance, and user-friendly interactions throughout the app",
    ],
    icon: MdWork,
  },
];

export const freelanceWork: FreelanceWork[] = [
  {
    platform: "Fiverr",
    role: "Full Stack Developer (Freelance)",
    duration: "2023 – Present",
    clients: "Tech Startups, Entrepreneurs & Growing Businesses",
    projects: 0,
    highlights: [
      "Offering 4 professional gigs: Backend, Frontend (React), MERN Stack, and Bug Fixing / Feature Addition",
      "Built real-world projects using Node.js, Express, MongoDB, React, and Next.js",
      "Focused on building clean, maintainable, and scalable code for client needs",
      "Actively available for new orders and long-term work partnerships",
    ],
    icon: SiFiverr,
  },
  {
    platform: "Upwork",
    role: "MERN / Next.js Developer (Freelance)",
    duration: "2024 – Present",
    clients: "Agencies, Tech Teams & Product-Based Startups",
    projects: 0,
    highlights: [
      "Skilled in developing full-stack apps with Next.js, React, Express, and MongoDB",
      "Providing services for modern dashboards, admin panels, APIs, and scalable web apps",
      "Ready to deliver custom frontend/backend solutions with clean UI & secure backend",
      "Open for both fixed-price and hourly projects with commitment to deadlines",
    ],
    icon: SiUpwork,
  },
  {
    platform: "GitHub Open Source",
    role: "Full Stack Developer / Project Author",
    duration: "2021 – Present",
    clients: "Global Developer Community",
    projects: 40,
    highlights: [
      "Published 40+ repositories covering React, MERN, Next.js, Node, and Vanilla JS",
      "Built clone apps, portfolio templates, dashboards, PDF/audio tools, and more",
      "Codebases are fully documented and open for community contributions",
      "Passionate about learning, sharing knowledge, and helping developers",
    ],
    icon: FaGithub,
  },
];
