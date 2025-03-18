<script lang="ts">
  import type { SkillCategory } from "$lib/types";

  import { skills } from "$lib/content/skills";

  const showTag = false;
</script>

<section id="skills" class="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
  <div class="container mx-auto px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        {#if showTag}
          <span
            class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
          >
            My Skills
          </span>
        {/if}
        <h2
          class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
        >
          Technische Expertise
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed "
        >
          Ik heb gewerkt met diverse technologieën en frameworks.
        </p>
      </div>
    </div>
    <div
      class="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {#each skills as category}
        <div class="overflow-hidden border-0 relative group rounded-lg">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          ></div>
          <div
            class="absolute inset-0 bg-white border border-gray-200 rounded-lg"
          ></div>
          <div class="p-6 relative">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="text-primary-600 group-hover:text-secondary-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-10 w-10"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold">{category.title}</h3>
            </div>
            <ul class="space-y-2">
              {#each category.skills as skill}
                <li class="flex items-center gap-2">
                  <div
                    class="h-1.5 w-1.5 rounded-full bg-primary-600 group-hover:bg-secondary-500 transition-colors duration-300"
                  ></div>
                  <span>{skill}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
