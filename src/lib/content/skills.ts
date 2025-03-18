import type { SkillCategory } from "$lib/types";

export const skills: SkillCategory[] = [
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
    title: "Backend Development",
    skills: ["Java", "Python", "SpringBoot", "FastAPI"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "other",
    skills: ['RabbitMQ', 'Celery', 'SQLAlchemy', 'Hibernate']
  }
];
