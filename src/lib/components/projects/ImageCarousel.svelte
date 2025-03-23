<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  interface Props {
    images: string[];
  }
  let { images }: Props = $props();

  let currentIndex = $state(0);
  let isTransitioning = $state(false);

  let intervalId = $state<any>();

  $effect(() => {
    intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });

  function nextSlide() {
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function prevSlide() {
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function goToSlide(index: number) {
    if (isTransitioning || currentIndex === index) return;

    isTransitioning = true;
    currentIndex = index;

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
</script>

<div class="relative rounded-xl overflow-hidden shadow-lg bg-white">
  <div class="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
    {#each images as image, index}
      <div
        class="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style="opacity: {currentIndex === index
          ? '1'
          : '0'}; z-index: {currentIndex === index ? '10' : '0'};"
      >
        <a href={image} target="_blank">
          <img
            src={image || "/placeholder.svg"}
            alt={`Project Screenshot ${index + 1}`}
            class="absolute inset-0 h-full w-full"
          />
        </a>
      </div>
    {/each}

    <!-- Carousel Controls -->
    <button
      onclick={prevSlide}
      class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary-600 shadow-md hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 z-20"
      aria-label="Previous slide"
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
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </button>
    <button
      onclick={nextSlide}
      class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary-600 shadow-md hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 z-20"
      aria-label="Next slide"
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
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </div>

  <!-- Carousel Indicators -->
  <div
    class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20"
  >
    {#each images as _, index}
      <button
        class="h-2 rounded-full transition-all {currentIndex === index
          ? 'w-8 bg-primary-600'
          : 'w-2 bg-gray-300 hover:bg-primary-400'}"
        onclick={() => goToSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
      ></button>
    {/each}
  </div>
</div>
