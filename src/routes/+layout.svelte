<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<Header activeSection="0" />

{@render children()}

<Footer />

<style>
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
</style>
