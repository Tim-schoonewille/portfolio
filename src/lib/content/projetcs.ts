import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    subtitle:
      "Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  ",
    description:
      "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",

    images: [],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "compass" },
      { name: "Node.js", category: "Backend Runtime", icon: "calendar" },
      { name: "Express", category: "Web Framework", icon: "align-center" },
      { name: "MongoDB", category: "Database", icon: "dollar-sign" },
      { name: "Stripe", category: "Payment Processing", icon: "folder-output" },
      { name: "Tailwind CSS", category: "Styling", icon: "palette" },
    ],

    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    mainImage: "https://picsum.photos/300/200.jpg",
    slug: "ecommerce",
    links: [
      { name: "GitHub Repository", url: "#", icon: "github" },
      { name: "Live Demo", url: "#", icon: "external-link" },
    ],
  },
  {
    title: "Task Management App",
    subtitle:
      "Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  ",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    images: [],
    techStack: [],
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    mainImage: "https://picsum.photos/300/200.jpg",
    slug: "task-manager",
    links: [],
  },
  {
    title: "Health & Fitness Tracker",
    subtitle:
      "Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  Subtitle  ",
    description:
      "A mobile-responsive application for tracking fitness goals, nutrition, and health metrics.",
    images: [],
    techStack: [],
    tags: ["React Native", "Express", "PostgreSQL"],

    mainImage: "https://picsum.photos/300/200.jpg",
    slug: "health-fitness-tracker",
    links: [],
  },
];
