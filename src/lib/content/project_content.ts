import type { ProjectContent } from "$lib/types";

export const project_contents: ProjectContent[] = [
  {
    slug: "mijnbonnetje",
    content: `<h2 class="text-2xl font-bold text-primary-700 mb-4">Mijnbonnetje</h2>
<div class="prose max-w-none text-gray-600">
  <p class="mb-4 tracking-tight font-medium">
 Dit project ontstond uit een persoonlijke behoefte: ik
    verloor vaak bonnetjes en had daardoor minder goed inzicht in mijn uitgaven.
    Tegelijkertijd wilde ik mijn programmeervaardigheden verbeteren en mezelf
    uitdagen met nieuwe technologieën.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Functionaliteit</h3>

  <p class="mb-4">
    De applicatie maakt het mogelijk om fysieke bonnetjes te scannen, de
    gegevens automatisch uit te lezen met Optical Character Recognition (OCR) en
    deze vervolgens op te slaan in een database. Gebruikers krijgen een handig
    overzicht van hun uitgaven per maand en kunnen bonnetjes filteren op winkel,
    categorie of scanstatus. Ook kunnen gegevens worden geëxporteerd voor
    verdere analyse.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Gebruik van Technologie
  </h3>

  <p class="mb-4">
    Om het scannen van bonnetjes efficiënt te laten verlopen, wordt de
    verwerking asynchroon afgehandeld. Zodra een bonnetje wordt geüpload, wordt
    het scannen op de achtergrond uitgevoerd en ontvangt de gebruiker een
    melding zodra de gegevens beschikbaar zijn. Dit voorkomt lange wachttijden
    en zorgt voor een soepele gebruikerservaring.
  </p>
  <p class="mb-4">
    Daarnaast wordt caching ingezet om veelgebruikte gegevens sneller op te
    halen en minimaliseert een message broker de belasting op de server door
    taken in de juiste volgorde af te handelen. De frontend communiceert met de
    backend via een WebSocket-verbinding, zodat updates real-time zichtbaar zijn
    zonder de pagina te hoeven verversen.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Leerproces & Ontwikkeling
  </h3>

  <p class="mb-4">
    Dit project heeft mij enorm veel geleerd over softwareontwikkeling. Ik heb
    de basis van REST API's en authenticatie geleerd, evenals hoe ik een
    applicatie- en databasearchitectuur opzet. Daarnaast heb ik kennisgemaakt
    met message brokers voor asynchrone taken en WebSockets voor real-time
    communicatie. Ook heb ik gewerkt met een frontend framework in combinatie
    met Tailwind CSS om een overzichtelijke en gebruiksvriendelijke interface te
    creëren.
  </p>
  <p class="mb-4">
    Naast technische vaardigheden heeft dit project mij ook geholpen om beter te
    plannen en ontwerpen voordat ik begin met coderen. Ik ben meer gaan denken
    en werken volgens Test Driven Development (TDD), wat me heeft geholpen om
    gestructureerder te werken en mijn code betrouwbaarder te maken.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Status & Toekomstplannen
  </h3>
  <p class="mb-4">
    De applicatie is momenteel een work in progress en nog niet online
    beschikbaar vanwege andere verplichtingen.
  </p>
  <p class="mb-4">
    Dit project heeft me veel geleerd over softwareontwikkeling en
    probleemoplossing in de praktijk.
  </p>
</div>`,
  },
  {
    slug: "assessment",
    content: `<h2 class="text-2xl font-bold text-primary-700 mb-4">Software Assessment</h2>
<div class="prose max-w-none text-gray-600">
  <p class="mb-4 tracking-tight font-semibold">
    Voor toelating tot de zogenoemde "softwaretrack" binnen mijn huidige bedrijf
    moest ik, samen met meerdere kandidaten, een assessment afleggen. Degene met
    de meeste aanleg en potentie werd geselecteerd om de track te volgen. Onze
    opdracht was het ontwikkelen van een backend waarmee je films en series kon
    zoeken. Het systeem moest als resultaat de bijbehorende metadata van de film
    of serie leveren, inclusief de trailer.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Functionaliteit</h3>

  <p class="mb-4">
    De gebruiker voert de naam van de film of serie in en ontvangt een overzicht
    van de zoekresultaten, inclusief de bijbehorende metadata. De trailer wordt
    tevens weergegeven, waarna de gebruiker deze direct kan afspelen.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Gebruik van Technologie
  </h3>

  <p class="mb-4">
    Ik heb gebruikgemaakt van FastAPI als backend. Mijn taal of choice was
    destijds Python, en FastAPI was naar mijn mening de beste tool voor de job.
    De backend moest namelijk meerdere I/O-verzoeken afhandelen naar
    verschillende API's, waaronder OMDB (Open Movie Database) en de YouTube API
    voor de trailer.
  </p>
  <p class="mb-4">
    Een vereiste was dat wij resultaten cacheden, omdat het mogelijk is dat
    dezelfde resultaten nodig zijn door verschillende gebruikers. Het cachen van
    resultaten zorgt er niet alleen voor dat de externe API minder belast wordt,
    maar het verlaagt ook eventuele kosten die gemaakt worden.</p><p class="mb-4"> Ik heb caching op
    de backend toegepast door gebruik te maken van Redis. Zoekresultaten worden
    op basis van zoektermen gecached voor een voorafgestelde periode. Daarnaast
    heb ik een custom middleware geschreven in FastAPI, zodat ik ook resultaten
    bij de client kon cachen door gebruik te maken van de cache-header en ETags.
  </p>
  <p class="mb-4">
    De frontend heb ik ontwikkeld in React. Het is een simpel design, gemaakt
    met ChakraUI. Ook heb ik de frontend opnieuw gemaakt met SvelteKit in
    combinatie met TailwindCSS.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Leerproces & Ontwikkeling
  </h3>

  <p class="mb-4">
    Dit project heeft mij meer inzicht en kennis gegeven op het gebied van
    cachen. De strategieen die je kunt gebruiken, zowel op de backend als
    richting de client.
  </p>
  <p class="mb-4">
    Ook gaf dit project mij de ruimte om wat basiskennis op te doen van React
  </p>
</div>`,
  },
  {
    slug: "untitled",
    content: `<h2 class="text-2xl font-bold text-primary-700 mb-4">Untitled</h2>
<div class="prose max-w-none text-gray-600">
  <p class="mb-4 tracking-tight font-semibold">
    Heb je dat ook? Je ploft op de bank, klaar voor een film of serie, maar voor
    je het weet zit je eindeloos te scrollen door de oneindige keuzes. En die
    film die je collega laatst tipte? Allang vergeten. Untitled is er om dat
    gedoe te skippen—een simpele, minimalistische manier om je filmlijst bij te
    houden.
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Functionaliteit</h3>

  <p class="mb-4">
    Deze app is ontworpen om je filmlijst zo moeiteloos mogelijk bij te houden.
    Geen overbodige toeters en bellen—gewoon een strakke, eenvoudige UI met
    precies de opties die je nodig hebt.
  </p>
  <p class="mb-4">
    Je ziet in één oogopslag wat je al hebt gekeken en wat er nog op je lijst
    staat. Daarnaast krijg je IMDB-scores te zien, kun je zelf een rating geven
    en checken of een film of serie op een streamingdienst beschikbaar is.
  </p>
  <p class="mb-4">
    Oh, en voor de statistiekfans: onderin vind je nog wat leuke cijfers over je
    kijkgedrag!
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Gebruik van Technologie
  </h3>

  <p class="mb-4">
    Voor de backend heb ik gekozen voor Spring Boot, een populair en krachtig
    webframework in Java. Hiermee heb ik de REST API ontwikkeld, die gekoppeld
    is aan een PostgreSQL-database.
  </p>
  <p class="mb-4">
    Om te checken of een film of serie op een streamingdienst beschikbaar is,
    gebruik ik Python met BeautifulSoup om data van het web te scrapen. Wanneer
    die informatie nodig is, wordt er via AMQP een bericht verstuurd om de
    worker aan te zetten.
  </p>
  <p class="mb-4">
    De frontend draait op een nieuwere versie van AngularJS, waarbij ik vooral
    gebruikmaak van signals. Voor de styling zorgt TailwindCSS.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Leerproces & Ontwikkeling
  </h3>

  <p class="mb-4">
    Dit project heeft me de kans gegeven om diep in Spring Boot te duiken. Ik
    heb allerlei configuraties en ingebouwde technologieën zoals Hibernate en
    JUnit ontdekt en toegepast.
  </p>
  <p class="mb-4">
    Daarnaast kon ik weer werken met een message broker, maar deze keer met een
    eenvoudigere library in Python: Pika.
  </p>
  <p class="mb-4">
    En tot mijn verrassing? De ooit gevreesde AngularJS is in de loop der jaren
    uitgegroeid tot een verrassend prettig framework om mee te werken!
  </p>
</div>
`,
  },

  {
    slug: "pingsage",
    content: `<h2 class="text-2xl font-bold text-primary-700 mb-4">Pingsage</h2>
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
`,
  },
  {
    slug: "cicd-compose",
    content: `<h2 class="text-2xl font-bold text-primary-700 mb-4">CI/CD Compose</h2>
<div class="prose max-w-none text-gray-600">
  <p class="mb-4 tracking-tight font-semibold">
    Applicaties met weinig traffic kunnen prima draaien op een Docker
    Compose-setup op een VPS. Voor mij is dit dé manier om applicaties te
    deployen. Veel CI/CD-oplossingen voelden te zwaar voor mijn behoeften, dus
    ging ik op zoek naar iets eenvoudigers – en dit werkt perfect!
  </p>
  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Functionaliteit</h3>

  <p class="mb-4">
    Wat ik wilde bereiken, was simpel: zodra ik een commit maakte op de main
    branch van verschillende services binnen mijn applicatie, moesten ze
    automatisch opnieuw gedeployed worden.
  </p>
  <p class="mb-4">
    Om dat voor elkaar te krijgen, heb ik een eigen Python-script geschreven dat
    het volgende doet:
  </p>
  <ul class="list-disc pl-5 space-y-2 mb-4">
    <li>
      Je maakt een YAML-configuratiebestand met alle benodigde info over je
      Compose-project.
    </li>
    <li>
      Het script checkt periodiek of er nieuwe commits zijn op de main branches.
    </li>
    <li>
      Bij een nieuwe commit start het script automatisch een continuous
      deployment-proces.
    </li>
    <li>
      Je krijgt per mail een notificatie of de deployment geslaagd is of niet.
    </li>
  </ul>
  <p class="mb-4">
    De configuratie is simpel en bevat paden naar de GitHub-repo’s, Dockerfiles,
    projecten en de Compose-file. Voordat het script start, valideert het eerst
    deze instellingen. Is er iets mis? Dan krijg je direct een melding.
  </p>
  <p class="mb-4">
    Via de GitHub API controleert het script op wijzigingen in de main branch.
    Zodra er een nieuwe commit is, worden de updates automatisch binnengehaald.
    Bij een
    <strong>zero-downtime deployment</strong> wordt eerst een extra container gestart
    voordat de Docker-image opnieuw wordt gebouwd.
  </p>
  <p class="mb-4">
    Zodra de nieuwe container draait, wordt de oude netjes afgesloten. Hierdoor
    ervaren gebruikers vrijwel <strong>geen downtime</strong> en blijft de applicatie
    soepel draaien.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Gebruik van Technologie
  </h3>

  <p class="mb-4">
    Het script is grotendeels geschreven in Python en blijft lekker lichtgewicht
    met minimale dependencies. Daarnaast gebruik ik een SQLite-database.
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">
    Leerproces & Ontwikkeling
  </h3>

  <p class="mb-4">
    Dit project heeft me veel geleerd over het automatiseren van processen. Het
    dwong me om het hele proces tot in de puntjes uit te werken, zodat elke stap
    precies verliep zoals bedoeld.
  </p>
  <p class="mb-4">
    Goede logging bleek hierbij onmisbaar—vooral op momenten dat het misgaat.
    Dan is het cruciaal om snel en volledig inzicht te hebben in wat er is
    gebeurd.
  </p>
</div>`,
  },
];
