<script lang="ts">
  // Animation timing using Svelte 5 runes
  let animationDelay2 = $state(2);
  let animationDelay4 = $state(4);
</script>

<section
  id="hero"
  class="w-full py-12 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
>
  <div class="absolute inset-0 z-0">
    <div
      class="absolute top-0 -left-4 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
    ></div>
    <div
      class="absolute top-0 -right-4 w-72 h-72 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      style="animation-delay: {animationDelay2}s;"
    ></div>
    <div
      class="absolute -bottom-8 left-20 w-72 h-72 bg-accent-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      style="animation-delay: {animationDelay4}s;"
    ></div>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative z-10">
    <div
      class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]"
    >
      <div class="flex flex-col justify-center space-y-4">
        <div class="space-y-2">
          <h1
            class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
          >
            Hallo, ik ben <span class="text-primary-600">Tim Schoonewille</span>
          </h1>
          <p class="max-w-[600px] text-gray-500 md:text-xl">
            Full-stack developer specializing in building exceptional digital
            experiences
          </p>
        </div>
        <div class="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Kom in Contact
          </a>
          <a
            href="#work"
            class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Bekijk mijn Werk
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-primary-500"
        >
          <img
            src="https://avatar.iran.liara.run/public"
            alt="Profile"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex animate-bounce"
    >
      <a
        href="#about"
        class="rounded-full p-2 bg-primary-500/10 text-primary-600"
        aria-label="about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
