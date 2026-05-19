export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  scope: string;
  hero: string;
  thumb: string;
  description: string[];
  gallery: { src: string; caption: string }[];
  next: string;
}

const B = "https://alianicole.github.io/Studio.ZA-Website/images";

export const projects: Project[] = [
  {
    slug: "wilton-road",
    name: "Wilton Road",
    location: "London",
    year: "2023",
    scope: "Full interior design",
    hero: `${B}/wilton-rd/reception.webp`,
    thumb: `${B}/wilton-rd/reception.webp`,
    description: [
      "A first-floor reception in Pimlico, returned to its proportions and given a quiet confidence. Original cornicing was reinstated; a single deep-seated sofa anchors the room around the fireplace.",
      "The palette is taken from the bones of the building — plaster, oak, weathered brass — with a single note of ochre running through the upholstery.",
    ],
    gallery: [
      { src: `${B}/wilton-rd/reception.webp`, caption: "Reception room" },
      { src: `${B}/wilton-rd/kitchen.jpg`, caption: "Kitchen" },
      { src: `${B}/wilton-rd/entry.jpg`, caption: "Entry" },
      { src: `${B}/wilton-rd/red-chest.jpg`, caption: "Red chest" },
      { src: `${B}/wilton-rd/reception-2.jpg`, caption: "Reception" },
      { src: `${B}/wilton-rd/kitchen-table.jpg`, caption: "Kitchen table" },
      { src: `${B}/wilton-rd/red-detail.jpg`, caption: "Detail" },
      { src: `${B}/wilton-rd/kitchen-window.jpg`, caption: "Kitchen window" },
      { src: `${B}/wilton-rd/kitchen-fridge.jpg`, caption: "Kitchen" },
      { src: `${B}/wilton-rd/table-detail.jpg`, caption: "Table detail" },
    ],
    next: "suffolk-house",
  },
  {
    slug: "suffolk-house",
    name: "Suffolk",
    location: "Suffolk",
    year: "2024",
    scope: "Full interior design",
    hero: `${B}/suffolk-house/hero.jpg`,
    thumb: `${B}/suffolk-house/hero.jpg`,
    description: [
      "A Georgian rectory restored for a young family. The brief was a country house that could absorb daily life — wet boots, sticky fingers, a Labrador — without ever feeling precious.",
      "Antique linens, washable slipcovers, and a kitchen built around a single twelve-foot oak table set the tone.",
    ],
    gallery: [
      { src: `${B}/suffolk-house/hero.jpg`, caption: "Drawing room" },
      { src: `${B}/suffolk-house/sitting-room.jpg`, caption: "Sitting room" },
      { src: `${B}/suffolk-house/sitting-room-detail.jpg`, caption: "Sitting room detail" },
      { src: `${B}/suffolk-house/main-bedroom.jpg`, caption: "Main bedroom" },
      { src: `${B}/suffolk-house/fireplace.jpg`, caption: "Zellige tile fireplace" },
      { src: `${B}/suffolk-house/curtains-detail.jpg`, caption: "Curtain and window detail" },
      { src: `${B}/suffolk-house/desk-study.jpg`, caption: "Study" },
    ],
    next: "kensington",
  },
  {
    slug: "kensington",
    name: "Kensington",
    location: "London",
    year: "2023",
    scope: "Full interior design",
    hero: `${B}/kensington/hero.jpg`,
    thumb: `${B}/kensington/kitchen-wide.jpg`,
    description: [
      "The unifying idea: custom fluted oak joinery running unbroken through the entire flat — kitchen island, living room credenza, full-height study storage. The repetition creates a calm that lets the stone do the talking.",
      "Calacatta marble runs worktop to splashback in one continuous plane. The cloakroom is where the restraint breaks: deep green fish-scale tiles, a vanity carved from a single block of Calacatta Viola, a brass tap in an unusual tulip form.",
    ],
    gallery: [
      { src: `${B}/kensington/kitchen-wide.jpg`, caption: "Kitchen" },
      { src: `${B}/kensington/island-detail.jpg`, caption: "Island detail" },
      { src: `${B}/kensington/handles-detail.jpg`, caption: "Brass handles" },
      { src: `${B}/kensington/marble-edge.jpg`, caption: "Marble worktop" },
      { src: `${B}/kensington/tulips-corner.jpg`, caption: "Kitchen corner" },
      { src: `${B}/kensington/island-storage.jpg`, caption: "Island storage" },
      { src: `${B}/kensington/cabinet-open.jpg`, caption: "Study cabinet" },
      { src: `${B}/kensington/tv-unit.jpg`, caption: "TV unit" },
    ],
    next: "creighton-ave",
  },
  {
    slug: "creighton-ave",
    name: "Creighton Avenue",
    location: "London",
    year: "2025",
    scope: "Kitchen and ground floor",
    hero: `${B}/creighton-ave/kitchen-island.jpg`,
    thumb: `${B}/creighton-ave/kitchen-island.jpg`,
    description: [
      "An Edwardian semi in Muswell Hill, reorganised around a generous kitchen-living room that opens to the garden. The island is the heart of the plan — built to be cooked at, sat at, and leaned on.",
      "Soft greens, unlacquered brass, and reclaimed terracotta floors carry the room between morning and evening.",
    ],
    gallery: [
      { src: `${B}/creighton-ave/kitchen-island.jpg`, caption: "Kitchen island" },
    ],
    next: "wilton-road",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);