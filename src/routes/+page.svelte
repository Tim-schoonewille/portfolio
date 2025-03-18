<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Certifications from "$lib/components/Certifications.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Work from "$lib/components/Work.svelte";

  let activeSection = $state("");
</script>

<main>
  <Hero />
  <About />
  <Skills />
  <Certifications />
  <Work />
  <Contact />
</main>

<!-- <style>
  :global(.bg-gradient-text) {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  :global(.animation-delay-2000) {
    animation-delay: 2s;
  }

  :global(html) {
    scroll-behavior: smooth;
  }
  :global(.animation-delay-4000) {
    animation-delay: 4s;
  }
</style> -->
