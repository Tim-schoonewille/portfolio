<script lang="ts">
  import type { ProjectLink, TechStack } from "$lib/types";

  interface Props {
    techStack: TechStack[];
    links: ProjectLink[];
  }

  const { techStack, links }: Props = $props();

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
      case "backend":
        return `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 6H18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6 6H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 17H18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6 17H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g>`;
      case "frontend-framework":
        return `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17,6 L17,16.2792476 L18.5,17.7902865 L20,16.2792476 L20,6 L17,6 Z M17,5 L20,5 L20,3.01471863 L17,3.01471863 L17,5 Z M21,7 L21,16.4852814 C21,16.6172545 20.9478236,16.7438756 20.8548472,16.8375362 L18.8548472,18.8522548 C18.6592928,19.0492484 18.3407072,19.0492484 18.1451528,18.8522548 L16.1451528,16.8375362 C16.0521764,16.7438756 16,16.6172545 16,16.4852814 L16,14 L15.5,14 C14.6715729,14 14,13.3284271 14,12.5 L14,9.5 C14,8.67157288 14.6715729,8 15.5,8 L16,8 L16,7 L6,7 L6,14.5 C6,14.7761424 5.77614237,15 5.5,15 L5,15 C3.34314575,15 2,16.3431458 2,18 C2,19.6568542 3.34314575,21 5,21 L22,21 L22,7 L21,7 Z M21,6 L22.5,6 C22.7761424,6 23,6.22385763 23,6.5 L23,21.5 C23,21.7761424 22.7761424,22 22.5,22 L5,22 C2.790861,22 1,20.209139 1,18 L1,6.5 C1,4.01471863 3.01471863,2 5.5,2 C5.77614237,2 6,2.22385763 6,2.5 L6,6 L16,6 L16,2.51471863 C16,2.23857625 16.2238576,2.01471863 16.5,2.01471863 L20.5,2.01471863 C20.7761424,2.01471863 21,2.23857625 21,2.51471863 L21,6 Z M16,9 L15.5,9 C15.2238576,9 15,9.22385763 15,9.5 L15,12.5 C15,12.7761424 15.2238576,13 15.5,13 L16,13 L16,9 Z M2,15.3541756 C2.73294445,14.5237549 3.80530747,14 5,14 L5,3.03544443 C3.30385293,3.27805926 2,4.73676405 2,6.5 L2,15.3541756 L2,15.3541756 Z M8.5,8 L11.5,8 C12.3284271,8 13,8.67157288 13,9.5 L13,12.5 C13,13.3284271 12.3284271,14 11.5,14 L8.5,14 C7.67157288,14 7,13.3284271 7,12.5 L7,9.5 C7,8.67157288 7.67157288,8 8.5,8 Z M8.5,9 C8.22385763,9 8,9.22385763 8,9.5 L8,12.5 C8,12.7761424 8.22385763,13 8.5,13 L11.5,13 C11.7761424,13 12,12.7761424 12,12.5 L12,9.5 C12,9.22385763 11.7761424,9 11.5,9 L8.5,9 Z M7.5,17 C7.22385763,17 7,16.7761424 7,16.5 C7,16.2238576 7.22385763,16 7.5,16 L14.5,16 C14.7761424,16 15,16.2238576 15,16.5 C15,16.7761424 14.7761424,17 14.5,17 L7.5,17 Z M7.5,19 C7.22385763,19 7,18.7761424 7,18.5 C7,18.2238576 7.22385763,18 7.5,18 L15.5,18 C15.7761424,18 16,18.2238576 16,18.5 C16,18.7761424 15.7761424,19 15.5,19 L7.5,19 Z"></path> </g>`;
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

<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
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

  {#if links.length > 0}
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
  {/if}
</div>
