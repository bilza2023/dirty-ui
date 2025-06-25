import { DeckBuilder } from "taleem-pivot-deckbuilder";

const deckbuilder = new DeckBuilder();

const imagesList = [
  "/pivot/box.webp",
  "/pivot/defaultBg.png",
  "/pivot/fbise9physics.webp",
  "/pivot/banner_brand.png"
];

// Slide 7: Equation Slide
deckbuilder.s.eq(70, [
  { name: "sp", type: "text", content: "Intro note about force." }, // default

  { name: "line", content: "F = ma", showAt: 0 },
  { name: "sp", type: "image", content: "/pivot/box.webp" },

  { name: "line", content: "F = 2 × 3", showAt: 4 },

  { name: "line", content: "F = 6 N", showAt: 8 },
  { name: "sp", type: "title", content: "Final Result" }
]);


export const deck = deckbuilder.build();