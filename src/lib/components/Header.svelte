<script lang="ts">
  interface Props {
    activeSection: string;
  }

  const { activeSection }: Props = $props();
  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header
  class="sticky top-0 z-40 w-full border-b border-b-gray-200 bg-white/95 backdrop-blur"
>
  <div class="container mx-auto flex h-16 items-center justify-between px-4">
    <a
      href="/"
      class="flex items-center gap-2 font-bold text-xl text-primary-700"
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span class="tracking-tighter">Tim Schoonewille</span>
    </a>
    <nav class="hidden md:flex gap-6">
      <a href="/#about" class="text-sm font-medium relative group nav-link">
        <span
          class="transition-colors duration-300 group-hover:text-primary-600"
          >About</span
        >
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
      <a href="#skills" class="text-sm font-medium relative group nav-link">
        <span
          class="transition-colors duration-300 group-hover:text-primary-600"
          >Skills</span
        >
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
      <a
        href="/#certifications"
        class="text-sm font-medium relative group nav-link"
      >
        <span
          class="transition-colors duration-300 group-hover:text-primary-600"
          >Certifications</span
        >
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
      <a href="/#work" class="text-sm font-medium relative group nav-link">
        <span
          class="transition-colors duration-300 group-hover:text-primary-600"
          >Work</span
        >
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
      <a href="/#contact" class="text-sm font-medium relative group nav-link">
        <span
          class="transition-colors duration-300 group-hover:text-primary-600"
          >Contact</span
        >
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
    </nav>
    <div class="flex items-center gap-2">
      <a
        href="#"
        class="rounded-full p-2 border border-gray-200 hover:border-primary-600 hover:text-primary-600 transition-colors"
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
          class="h-4 w-4"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        <span class="sr-only">GitHub</span>
      </a>
      <a
        href="#"
        class="rounded-full p-2 border border-gray-200 hover:border-primary-600 hover:text-primary-600 transition-colors"
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
          class="h-4 w-4"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span class="sr-only">LinkedIn</span>
      </a>
      <button
        on:click={toggleMobileMenu}
        class="md:hidden rounded-full p-2 border border-gray-200"
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
          class="h-4 w-4"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
        <span class="sr-only">Toggle Menu</span>
      </button>
    </div>
  </div>
  <div
    class="{mobileMenuOpen
      ? ''
      : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 shadow-md"
  >
    <nav class="flex flex-col gap-4">
      <a
        href="/#about"
        class="text-sm font-medium py-2 px-4 hover:bg-gray-50 rounded-md mobile-nav-link"
        >About</a
      >
      <a
        href="/#skills"
        class="text-sm font-medium py-2 px-4 hover:bg-gray-50 rounded-md mobile-nav-link"
        >Skills</a
      >
      <a
        href="/#certifications"
        class="text-sm font-medium py-2 px-4 hover:bg-gray-50 rounded-md mobile-nav-link"
        >Certifications</a
      >
      <a
        href="/#work"
        class="text-sm font-medium py-2 px-4 hover:bg-gray-50 rounded-md mobile-nav-link"
        >Work</a
      >
      <a
        href="/#contact"
        class="text-sm font-medium py-2 px-4 hover:bg-gray-50 rounded-md mobile-nav-link"
        >Contact</a
      >
    </nav>
  </div>
</header>
