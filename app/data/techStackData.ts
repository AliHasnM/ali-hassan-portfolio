import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaRobot,
  FaCogs,
  FaMagic,
  FaTerminal,
  FaProjectDiagram,
  FaLock,
  FaCloudUploadAlt,
  FaCode,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiSocketdotio,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiNetlify,
  SiRailway,
  SiFramer,
  SiJsonwebtokens,
  SiFigma,
  SiTypescript,
  SiOpenai,
  SiApollographql,
  SiN8N,
  SiPrisma,
} from "react-icons/si";
import { RiToolsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

// TYPES
export interface TechItem {
  name: string;
  icon: IconType;
  className?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

// DATA
export const techStack: TechCategory[] = [
  {
    title: "Web Basics",
    items: [
      { name: "HTML", icon: FaHtml5, className: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, className: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, className: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, className: "text-cyan-400" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        className: "text-black dark:text-white",
      },
      { name: "Tailwind CSS", icon: SiTailwindcss, className: "text-teal-400" },
      { name: "Redux", icon: SiRedux, className: "text-purple-500" },
      { name: "Framer Motion", icon: SiFramer, className: "text-pink-500" },
      { name: "Zustand", icon: FaCogs, className: "text-yellow-500" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, className: "text-green-600" },
      {
        name: "Express.js",
        icon: SiExpress,
        className: "text-gray-700 dark:text-white",
      },
      { name: "JWT", icon: SiJsonwebtokens, className: "text-red-500" },
      { name: "Bcrypt", icon: FaLock, className: "text-gray-600" },
      {
        name: "Cloudinary",
        icon: FaCloudUploadAlt,
        className: "text-purple-500",
      },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, className: "text-green-500" },
      { name: "Mongoose", icon: SiMongoose, className: "text-red-500" },
      { name: "Prisma (Mongo)", icon: SiPrisma, className: "text-indigo-600" },
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
      {
        name: "Vercel",
        icon: SiVercel,
        className: "text-black dark:text-white",
      },
      { name: "Netlify", icon: SiNetlify, className: "text-green-500" },
      { name: "Railway", icon: SiRailway, className: "text-purple-600" },
      {
        name: "GitHub Actions",
        icon: FaGithub,
        className: "text-gray-800 dark:text-white",
      },
    ],
  },
  {
    title: "Testing & API Tools",
    items: [
      { name: "Postman", icon: SiPostman, className: "text-orange-500" },
      {
        name: "Thunder Client",
        icon: SiPostman, // No direct icon, reusing Postman’s for now
        className: "text-pink-500",
      },
      {
        name: "Jest (Unit Testing)",
        icon: FaTerminal,
        className: "text-red-600",
      },
      {
        name: "React Testing Library",
        icon: FaMagic,
        className: "text-purple-600",
      },
    ],
  },
  {
    title: "AI Tools & Builders",
    items: [
      { name: "OpenAI (ChatGPT)", icon: SiOpenai, className: "text-green-500" },
      { name: "LangChain", icon: FaMagic, className: "text-indigo-500" },
      { name: "Blackbox AI", icon: FaTerminal, className: "text-pink-600" },
      { name: "LLM UI (ChatGPT)", icon: FaRobot, className: "text-rose-500" },
      {
        name: "AI SaaS Builder",
        icon: FaCogs,
        className: "text-gray-500 dark:text-white",
      },
      { name: "Pinecone", icon: FaDatabase, className: "text-green-700" }, // For vector DBs (OpenAI + LangChain)
    ],
  },
  {
    title: "AI Automation & Workflow",
    items: [
      { name: "n8n Workflows", icon: SiN8N, className: "text-orange-500" },
      {
        name: "Trigger → Action Logic",
        icon: RiToolsFill,
        className: "text-cyan-400",
      },
      { name: "Custom AI Agents", icon: FaRobot, className: "text-red-500" },
      {
        name: "Workflow Logic",
        icon: FaProjectDiagram,
        className: "text-blue-500",
      },
      {
        name: "API Orchestration",
        icon: SiApollographql,
        className: "text-pink-600",
      },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "REST API", icon: RiToolsFill, className: "text-blue-600" },
      { name: "WebSocket", icon: SiSocketdotio, className: "text-purple-600" },
      { name: "Postman", icon: SiPostman, className: "text-orange-500" },
      { name: "Git", icon: FaGitAlt, className: "text-red-600" },
      { name: "VS Code", icon: VscVscode, className: "text-blue-500" },
      { name: "Figma", icon: SiFigma, className: "text-pink-500" },
      { name: "ESLint + Prettier", icon: FaCode, className: "text-indigo-600" },
      {
        name: "Zod (Validation)",
        icon: FaShieldAlt,
        className: "text-green-600",
      },
    ],
  },
];
