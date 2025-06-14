import type { SkillCategory } from "$lib/types";

export const skills: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: ["Java", "Python", "SQL", "SpringBoot", "FastAPI", "Typescript", "PHP", "Laravel"],
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
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MariaDB", "Redis"],
  },
  {
    title: "DevOps",
    skills: ["Linux", "Git", "Cisco", "Docker", "AWS", "Active Directory"],
  },
  {
    title: "Overig",
    skills: ["AMQP", "Celery", "SQLAlchemy", "Hibernate", "Websockets", "Oauth2"],
  },
];
