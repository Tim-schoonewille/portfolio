export type NavItem = {
  id: string;
  label: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Cert = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  techStack: TechStack[];
  tags: string[];
  mainImage: string;
  slug: string;
  links: ProjectLink[];
};

export type TechStack = {
  name: string;
  category: string;
  icon:
    | "compass"
    | "calendar"
    | "align-center"
    | "dollar-sign"
    | "folder-output"
    | "palette"
    | "github"
    | "external-link"
    | "backend"
    | "node"
    | "frontend-framework"
    | "default";
};

export type ProjectLink = {
  name: string;
  url: string;
  icon: string;
};

export type ProjectContent = {
  slug: string;
  content: string;
};
