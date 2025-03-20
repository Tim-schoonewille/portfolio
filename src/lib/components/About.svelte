<script lang="ts">
  const aboutImages = ["/about.jpg", "/about_2.jpg"];

  const image = aboutImages.at(Math.floor(Math.random() * aboutImages.length));
</script>

<section id="about" class="w-full py-12 md:py-16 lg:py-20 z-10 relative">
  <!-- <div
    class="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none z-0"
  >
</div> -->
  <div class="container mx-auto px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        <span
          class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
        >
          Over Mij
        </span>
        <h2
          class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
        >
          Wie Ben Ik
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Drie jaar geleden begon ik met programmeren, puur uit interesse. Wat
          begon als een hobby, groeide al snel uit tot een echte passie. Ik dook
          dieper in verschillende talen en technieken en wist zeker: hier wil ik
          mijn carrière van maken.
        </p>
      </div>
    </div>
    <div
      class="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-2 lg:gap-12"
    >
      <img
        src={image}
        alt="About Me"
        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full border-2 border-primary-500/20"
      />
      <div class="flex flex-col justify-center space-y-4">
        <ul class="grid gap-6">
          <li>
            <div class="grid gap-1">
              <h3 class="text-xl font-bold text-primary-700">Achtergrond</h3>
              <p class="text-gray-500">
                Wanneer iets me écht interesseert, duik ik er volledig in. Zo
                heb ik mezelf in korte tijd veel aangeleerd door te
                experimenteren, problemen op te lossen en steeds een stap verder
                te gaan. Ik blijf mezelf uitdagen en ontwikkelen, omdat er
                altijd meer te ontdekken valt.
              </p>
            </div>
          </li>
          <li>
            <div class="grid gap-1">
              <h3 class="text-xl font-bold text-primary-700">Filosofie</h3>
              <p class="text-gray-500">
                Ik hou van programmeren omdat het me mentaal uitdaagt. Complexe
                problemen oplossen geeft me energie, en ik vind het geweldig om
                structuur te brengen in chaos met code.
              </p>
            </div>
          </li>
          <li>
            <div class="grid gap-1">
              <h3 class="text-xl font-bold text-primary-700">Interesses</h3>
              <p class="text-gray-500">
                Naast programmeren speel ik graag gitaar, lees ik veel en geniet
                ik van lange wandelingen in de natuur.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
