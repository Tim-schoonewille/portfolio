<h2 class="text-2xl font-bold text-primary-700 mb-4">Pingsage</h2>
<div class="prose max-w-none text-gray-600">
  <p class="mb-4 tracking-tight font-semibold">
    Pingsage is een applicatie in ontwikkeling, ontworpen om websites en
    services te monitoren. Niet omdat zoiets nog niet bestaat, maar als een
    creatieve speeltuin om mijn vaardigheden in diverse talen en technieken
    verder aan te scherpen.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Functionaliteit</h3>

  <p class="mb-4">
    Met Pingsage kun je gemakkelijk een configuratie invoeren om verschillende
    websites en services te monitoren. Dit kan simpelweg de uptime zijn of de
    responstijd, maar het biedt ook de mogelijkheid om custom metrics op te
    halen vanuit een API.
  </p>
  <p class="mb-4">
    Een configuratie bestaat uit een service. Bij elke service is het mogelijk
    om targets in te stellen, elk met een eigen monitor. Middels een mooi
    gestileerde grafiek kun je eenvoudig inzicht krijgen in de waarden die
    daaruit voortkomen.
  </p>
  <p class="mb-4">
    Ook wil ik de mogelijkheid bieden om alerts in te stellen die flexibel van
    aard zijn. Zo bepaal je zelf wanneer je op de hoogte wordt gehouden van een
    verandering in je services. Daarnaast wil ik websockets gebruiken, zodat de
    gebruiker aan de client-side realtime updates krijgt.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Gebruik van Technologie
  </h3>

  <p class="mb-4">
    De frontend is gemaakt met SvelteKit in combinatie met TailwindCSS. Voor de
    grafieken gebruik ik CharJS. Ik gebruik v0 voor het design.
  </p>
  <p class="mb-3">
    De data wordt opgeslagen in MongoDB, met als reden omdat de configuratie
    variabel, een een relationele DB te statisch is.
  </p>
  <p class="mb-4">
    Java is de motor in de backend die verantwoordelijk is voor de I/O operaties
    om de metrics op te halen. Hierbij maak ik gebruik van Java 21 Virtual
    Threads zodat ik goedkoop concurrent verzoeken kan versturen.
  </p>
  <p class="mb-4">
    Voor de RestAPI gebruik ik Python's FastAPI. Dit framework maakt het
    gemakkelijk om gebruik te maken van websockets.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Leerproces & Ontwikkeling
  </h3>

  <p class="mb-4">
    Pingsage is een lopend project in ontwikkeling. Mijn doel is om een platform
    te bouwen waarin ik de virtual threads van Java kan benutten, verschillende
    concepten in Python kan herhalen en mijn kennis van TypeScript en Svelte
    verder kan verdiepen.
  </p>
  <p class="mb-4">
    Stap voor stap werk ik de backend en frontend uit, waarbij ik elke feature
    zorgvuldig toevoeg. Zo ontstaat uiteindelijk een compleet en goed
    geïntegreerd product.
  </p>
</div>
