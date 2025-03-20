import type { SkillCategory } from "$lib/types";

export const skills: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: ["Java", "Python", "SpringBoot", "FastAPI", "Typescript"],
  },

  {
    title: "Frontend Development",
    skills: [
      "SvelteKit",
      "Anuglar",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps",
    skills: ["Linux", "Cisco", "Docker", "AWS", "Active Directory", "Git"],
  },
  {
    title: "Overig",
    skills: ["RabbitMQ", "Celery", "SQLAlchemy", "Hibernate", "Websockets"],
  },
];
