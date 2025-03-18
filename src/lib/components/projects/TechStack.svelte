<script lang="ts">
  import type { ProjectLink, TechStack } from "$lib/types";

  interface Props {
    techStack: TechStack[];
    links: ProjectLink[];
  }

  const { techStack, links }: Props = $props();

  // Icon mapping function
  function getIconSvg(iconName: string) {
    switch (iconName) {
      case "compass":
        return `<circle cx="12" cy="12" r="10"></circle><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>`;
      case "calendar":
        return `<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4Z"></path><path d="M15 18v-4"></path><path d="M7 18v-4"></path><path d="M15 10V6"></path><path d="M7 10V6"></path>`;
      case "align-center":
        return `<path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path>`;
      case "dollar-sign":
        return `<path d="M2 16V4a2 2 0 0 1 2-2h11"></path><path d="M5 14H4a2 2 0 1 0 0 4h1"></path><path d="M22 18h-5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path>`;
      case "folder-output":
        return `<path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"></path><path d="M2 13h10"></path><path d="m9 16 3-3-3-3"></path>`;
      case "palette":
        return `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19 3v4"></path><path d="M21 5h-4"></path>`;
      case "github":
        return `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>`;
      case "external-link":
        return `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line>`;
      default:
        return `<circle cx="12" cy="12" r="10"></circle>`;
    }
  }

  // Color mapping for tech categories
  function getColorClass(index: number) {
    const colors = [
      "bg-primary-50 text-primary-600",
      "bg-green-50 text-green-600",
      "bg-yellow-50 text-yellow-600",
      "bg-blue-50 text-blue-600",
      "bg-purple-50 text-purple-600",
      "bg-red-50 text-red-600",
    ];

    return colors[index % colors.length];
  }
</script>

<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <h2 class="text-xl font-bold text-primary-700 mb-4">Tech Stack</h2>
  <ul class="space-y-4">
    {#each techStack as tech, index}
      <li class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg {getColorClass(
            index
          )}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            {@html getIconSvg(tech.icon)}
          </svg>
        </div>
        <div>
          <h3 class="font-medium">{tech.name}</h3>
          <p class="text-sm text-gray-500">{tech.category}</p>
        </div>
      </li>
    {/each}
  </ul>

  <div class="mt-8">
    <h2 class="text-xl font-bold text-primary-700 mb-4">Project Links</h2>
    <div class="flex flex-col space-y-3">
      {#each links as link}
        <a
          href={link.url}
          class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2 h-4 w-4"
          >
            {@html getIconSvg(link.icon)}
          </svg>
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</div>
