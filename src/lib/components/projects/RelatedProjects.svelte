<script lang="ts">
  import { projects } from "$lib/content/projetcs";

</script>

<div
  class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  {#each projects as project}
    <div class="overflow-hidden group relative border-0 rounded-lg">
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
      ></div>
      <div
        class="absolute inset-0 bg-white border border-gray-200 rounded-lg"
      ></div>
      <div class="relative">
        <div class="relative h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
        <div class="p-6 relative">
          <h3
            class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-300"
          >
            {project.title}
          </h3>
          <p class="text-sm text-gray-500 mb-4">{project.description}</p>
          <!-- <div class="flex flex-wrap gap-2 mb-4">
            {#each project.technologies as tech}
              <span
                class="inline-flex items-center rounded-full bg-blue-100/50 px-2 py-0.5 text-xs font-medium text-blue-800"
                >{tech}</span
              >
            {/each}
          </div> -->
          <a
            href={`/projects/${project.slug}`}
            class="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 hover:border-primary-600 group-hover:border-primary-600 group-hover:text-primary-600 transition-colors duration-300"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-3 w-3"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" x2="21" y1="14" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
