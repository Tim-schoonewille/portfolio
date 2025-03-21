<script lang="ts">
  import { certifications } from "$lib/content/certifications";
  import type { Cert } from "$lib/types";
</script>

<section id="certifications" class="w-full py-12 md:py-16 lg:py-20">
  <div class="container mx-auto px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        <span
          class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
        >
          Certificaten
        </span>
        <h2
          class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
        >
          Professionele Kwalificaties
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed italic"
        >
          "Ik blijf mezelf continu ontwikkelen, zowel professioneel als
          persoonlijk."
        </p>
      </div>
    </div>
    <div
      class="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {#each certifications as cert}
        <div class="overflow-hidden group relative border-0 rounded-lg">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-400/10 via-secondary-400/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          ></div>
          <div
            class="absolute inset-0 bg-white border border-gray-200 rounded-lg"
          ></div>
          <div class="p-6 relative">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="relative h-16 w-16 overflow-hidden rounded-md border-2 border-primary-400/20 group-hover:border-primary-500/50 transition-colors duration-300"
              >
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.issuer}
                  class="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <div>
                <h3
                  class="font-bold group-hover:text-primary-600 transition-colors duration-300"
                >
                  {cert.title}
                </h3>
                <p class="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
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
                class="h-4 w-4 text-primary-600 group-hover:text-secondary-500 transition-colors duration-300"
              >
                <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z"></path>
              </svg>
              <span class="text-sm">Behaald in {cert.date}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
