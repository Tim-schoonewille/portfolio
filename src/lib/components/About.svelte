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
          Wie ben ik
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed "
        >
          Een gedreven fullstack software developer, gespecialiseerd in
          backend development, die zichzelf de vakkennis eigen heeft gemaakt.
          Wat begon als een hobby, is inmiddels uitgegroeid tot een echte
          passie.
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
              <h3 class="text-xl font-bold text-primary-700">
                Van service naar software
              </h3>
              <p class="text-gray-500">
                Mijn interesse in computers begon al op jonge leeftijd, zowel in
                hardware als software. Ik experimenteerde met HTML en PHP, maar
                koos aanvankelijk voor een carrière in de maatschappelijke zorg.
                Toch miste ik echte passie en maakte de overstap naar IT. Ik
                begon bij de service desk en ging op zoek naar wat me echt
                enthousiast maakte. Al snel kwam ik weer in aanraking met
                programmeren – en wist ik dat dit is waar mijn hart ligt.
              </p>
            </div>
          </li>
          <li>
            <div class="grid gap-1">
              <h3 class="text-xl font-bold text-primary-700">
                Innovatie door Code
              </h3>
              <p class="text-gray-500">
                Programmeren fascineert me omdat ik hou van uitdagingen. Elke
                complexe opdracht voelt als een logische puzzel die ik met
                plezier oplos. Mijn nieuwsgierigheid en leergierigheid drijven
                mij vooruit, en in een snel evoluerend technologisch landschap
                betekent dat constant groeien en vernieuwen.
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
