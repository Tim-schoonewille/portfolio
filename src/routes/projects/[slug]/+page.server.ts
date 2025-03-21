import { project_contents } from "$lib/content/project_content.js";
import { projects } from "$lib/content/projetcs.js";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const project = projects.find((project) => project.slug === params.slug);
  const content = project_contents.find(
    (content) => content.slug === params.slug
  );

  if (!project || !content) error(404);

  return { project, content: content.content };
}
