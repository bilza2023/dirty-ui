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
  { name: "sp", type: "text", content: "Default: Force is a fundamental concept." },

  { name: "line", content: "F = ma", showAt: 0 },
  { name: "sp", type: "image", content: imagesList[0] },

  { name: "line", content: "m = 2 kg", showAt: 2 },
  { name: "sp", type: "text", content: "Mass of the object is 2 kilograms." },

  { name: "line", content: "a = 3 m/s²", showAt: 4 },
  { name: "sp", type: "text", content: "Acceleration is 3 meters per second squared." },

  { name: "line", content: "F = 2 × 3", showAt: 6 },
  { name: "sp", type: "title", content: "Substitute into the formula" },

  { name: "line", content: "F = 6 N", showAt: 8 },
  { name: "sp", type: "text", content: "Result: The net force is 6 Newtons." },

  { name: "line", content: "Unit: Newton (N)", showAt: 10 },
  { name: "sp", type: "text", content: "Named after Sir Isaac Newton." },

  { name: "line", content: "Used in F = ma, W = mg", showAt: 12 },
  { name: "sp", type: "text", content: "Also applies to weight calculations." },

  { name: "line", content: "F increases with mass", showAt: 14 },
  { name: "sp", type: "text", content: "More mass → more force if acceleration is constant." },

  { name: "line", content: "F increases with acceleration", showAt: 16 },
  { name: "sp", type: "text", content: "More acceleration → more force if mass is constant." },
]);

export const deck = deckbuilder.build();
