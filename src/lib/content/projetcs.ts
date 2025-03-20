import TechStack from "$lib/components/projects/TechStack.svelte";
import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    title: "Mijnbonnetje",
    subtitle:
      "Een applicatie ontworpen om gemakkelijk je bonnetjes en uitgaves bij te houden.",
    description:
      "Een applicatie ontworpen om gemakkelijk je bonnetjes en uitgaves bij te houden.",

    images: [
      "/mijnbonnetje/bonnetjes_desktop.png",
      "/mijnbonnetje/details_desktop.png",
      "/mijnbonnetje/overzicht_desktop.png",
      "/mijnbonnetje/nieuw_desktop.png",
      "/mijnbonnetje/exporteer_desktop.png",
    ],
    techStack: [
      { name: "FastAPI", category: "Backend Framework", icon: "compass" },
      { name: "Python", category: "Backend Runtime", icon: "calendar" },
      {
        name: "SvelteKit",
        category: "Frontend Framework",
        icon: "align-center",
      },
      { name: "PostgreSQL", category: "Database", icon: "dollar-sign" },
      { name: "OCR", category: "Image Scanning", icon: "folder-output" },
      { name: "Websockets", category: "Bi-directional", icon: "palette" },
    ],

    tags: ["Python", "Svelte", "FastAPI", "OCR"],
    mainImage:
      "https://www.treehugger.com/thmb/PY3JRt8wFzh3NPDx3gjNN9dFROI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/can-receipts-be-recycled-5072255-02-88708bb6a70f4f34adfbed5939ca8baa.JPG",
    slug: "mijnbonnetje",
    links: [],
  },
  {
    title: "Software Assessment",
    subtitle:
      "Gemaakte assessment waarmee ik ben toegelaten tot een traineeship",
    description:
      "Voor mijn bedrijf heb ik een project ontwikkeld als onderdeel van een selectieprocedure voor een stage in de software shorttrack. Dit project diende als toelatingseis,",
    images: [
      "/assessment/v1_desktop.png",
      "/assessment/cod2.png",

      "/assessment/flow.png",
    ],
    techStack: [
      { name: "FastAPI", category: "Backend Framework", icon: "calendar" },
      { name: "Python", category: "Backend Runtime", icon: "calendar" },
      { name: "Pytest", category: "Testing Framework", icon: "dollar-sign" },

      { name: "React", category: "Frontend Framework", icon: "compass" },
      { name: "Node.JS", category: "Frontend Runtime", icon: "compass" },

      { name: "Redis", category: "Cache", icon: "default" },
      { name: "YouTube", category: "External API", icon: "palette" },
      { name: "omdb", category: "External API", icon: "palette" },
    ],
    tags: ["Python", "React", "Cache", "Redis"],
    mainImage: "/assessment/main_image.png",
    slug: "assessment",
    links: [],
  },
  {
    title: `"Untitled"`,
    subtitle: "Een mobiele web applicatie om films en series bij te houden.",
    description:
      "Een mobiele web applicatie om films en series bij te houden. Ook krijg je informatie over waar deze content te streamen is.",
    images: [
      "/untitled/main_mobile_wider.png",
      "/untitled/main_mobile_watch_later.png",
      "/untitled/search_mobile_wide.png",
    ],
    techStack: [
      { name: "Java", category: "Backend Runtime", icon: "backend" },
      { name: "Springboot", category: "Backend Framework", icon: "compass" },
      { name: "Node.JS", category: "Frontend Runtime", icon: "node" },
      { name: "Angular JS", category: "Frontend Framework", icon: "calendar" },
      { name: "Python", category: "Web Scraper", icon: "backend" },
      { name: "RabbitMQ", category: "Message Broker", icon: "palette" },
    ],
    tags: ["Angular JS", "Java", "Springboot", "Junit", "Hibernate"],

    mainImage: "/untitled/main_image.jpg",
    slug: "untitled",
    links: [],
  },
  {
    title: "Pingsage",
    subtitle: "Monitor eenvoudig websites en services.",
    description:
      "Deze app biedt een eenvoudige manier om verschillende servers en websites te monitoren op responstijd, uptime en aangepaste metrics. Met behulp van overzichtelijke en visueel aantrekkelijke grafieken krijg je snel inzicht in de prestaties van je systemen, zodat je problemen tijdig kunt opsporen en verhelpen.",
    images: [
      "/pingsage/dashboard_desktop.png",
      "/pingsage/details_1_desktop.png",
      "/pingsage/details_2_desktop.png",
      "/pingsage/new_1.png",
      "/pingsage/new_2.png",
      "/pingsage/new_3.png",
    ],
    techStack: [
      { name: "Python", category: "Backend Runtime", icon: "backend" },
      { name: "Java 21", category: "Backend Runtime", icon: "dollar-sign" },
      {
        name: "FastAPI",
        category: "Backend RestAPI Framework",
        icon: "align-center",
      },
      { name: "Node JS", category: "Frontend Runtime", icon: "node" },
      { name: "Sveltekit", category: "Frontend Framework", icon: "calendar" },
      { name: "MongoDB", category: "Database", icon: "compass" },
      { name: "ChartJS", category: "Frontend Library", icon: "palette" },
    ],
    tags: ["Java", "Python", "TypeScript", "MongoDB"],
    mainImage:
      "https://engagedly.com/wp-content/uploads/2021/06/need-of-performance-management-software-2021-engagedly.webp",
    slug: "pingsage",
    links: [],
  },
  {
    title: "CI/CD Compose",
    subtitle:
      "Dit Python-script automatiseert het deployen van applicaties op basis van Docker Compose.",
    description:
      "Dit Python-script automatiseert het deployen van applicaties op basis van Docker Compose. Het voert configuratievalidaties uit en stuurt notificaties bij succesvolle of mislukte builds, waardoor het proces efficiënter en betrouwbaarder wordt.",
    images: [
      "/cicd_compose/success_desktop.png",
      "/cicd_compose/failure_desktop.png",
      "/cicd_compose/example_config_desktop.png",
    ],
    techStack: [
      { name: "Python", category: "Backend runtime", icon: "backend" },
      { name: "SQLite", category: "Lightweight RDB", icon: "compass" },
      { name: "Docker", category: "Container", icon: "dollar-sign" },
    ],
    tags: ["Python", "Docker", "SQLite"],
    mainImage:
      "https://imageio.forbes.com/specials-images/imageserve/60f1e792c7e89f933811814c/DevOps-concept/960x0.jpg?format=jpg&width=1440",
    slug: "cicd-compose",
    links: [],
  },
];
