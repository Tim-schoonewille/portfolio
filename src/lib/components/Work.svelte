<script lang="ts">
  import type { Project } from "$lib/types";

  import { projects } from "$lib/content/projetcs";
</script>

<section id="work" class="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
  <div class="container mx-auto px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        <span
          class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
        >
          Mijn Werk
        </span>
        <h2
          class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
        >
          Uitgelichte Projecten
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Hier zijn enkele van mijn recente projecten. Klik op elk project om
          meer te weten te komen.
        </p>
      </div>
    </div>
    <div
      class="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
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
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tags as tag}
                  <span
                    class="inline-flex items-center rounded-full bg-blue-100/50 px-2 py-0.5 text-xs font-medium text-blue-800"
                    >{tag}</span
                  >
                {/each}
              </div>
              <a
                href={`/projects/${project.slug}`}
                class="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 hover:border-primary-600 group-hover:border-primary-600 group-hover:text-primary-600 transition-colors duration-300"
              >
                Bekijk details
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
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
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
    <!-- <div class="flex justify-center mt-8">
      <a
        href="/projects"
        class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Alle Projecten Bekijken
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
          class="ml-2 h-4 w-4"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          ></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" x2="21" y1="14" y2="3"></line>
        </svg>
      </a>
    </div> -->
  </div>
</section>
