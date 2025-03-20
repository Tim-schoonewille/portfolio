<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import ImageCarousel from "$lib/components/projects/ImageCarousel.svelte";
  import RelatedProjects from "$lib/components/projects/RelatedProjects.svelte";
  import TechStack from "$lib/components/projects/TechStack.svelte";
  import type { Project } from "$lib/types.js";

  // let { data } = $props();
  // let project = data.project;
  // let content = data.content;

  let { data } = $props();

  let project = $state<Project | null>(null);
  let content = $state<string>("");
  $effect(() => {
    project = data.project;
    content = data.content;
  });
</script>

{#if project != null}
  <!-- Project Hero Section -->
  <section
    class="w-full py-6 md:py-10 lg:py-10 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      ></div>
      <div
        class="absolute bottom-0 -right-4 w-72 h-72 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style="animation-delay: 2s;"
      ></div>
    </div>
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div
        class="flex flex-col items-center justify-center space-y-4 text-center mb-4"
      >
        <a
          href="/#work"
          class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 mb-2"
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
            class="mr-1 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Back to Projects
        </a>
        <div class="space-y-2">
          <!-- <span
          class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
        >
          Featured Project
        </span> -->
          <h1
            class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
          >
            {project.title}
          </h1>
          <p
            class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Image Carousel Section -->
  <section class="w-full py-8 md:py-12 lg:py-16">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto max-w-5xl">
        <ImageCarousel images={project.images} />
      </div>
    </div>
  </section>

  <!-- Project Details Section -->
  <section class="w-full py-8 md:py-12 lg:py-16">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        <!-- Tech Stack Column -->
        <div class="lg:col-span-1">
          <TechStack techStack={project.techStack} links={project.links} />
        </div>

        <!-- Project Description Column -->
        <div class="lg:col-span-2">
          <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <!-- start content-->

            {@html content}
            <!-- end content-->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
    <div class="container mx-auto px-4 md:px-6">
      <div
        class="flex flex-col items-center justify-center space-y-4 text-center mb-8"
      >
        <div class="space-y-2">
          <h2
            class="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
          >
          Alle Projecten
          </h2>
          <p class="max-w-[700px] text-gray-500 md:text-lg">
            Verken meer van mijn projecten.
          </p>
        </div>
      </div>

      <RelatedProjects />
    </div>
  </section>
{/if}

<style>
  :global(.bg-gradient-text) {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  :global(.animate-blob) {
    animation: blob 7s infinite;
  }

  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
</style>
