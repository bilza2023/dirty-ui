import { DeckBuilder } from "taleem-pivot-deckbuilder";

const deckbuilder = new DeckBuilder();

const imagesList = [
  "/pivot/box.webp",
  "/pivot/defaultBg.png",
  "/pivot/fbise9physics.webp",
  "/pivot/banner_brand.png"
];
deckbuilder.s.eq(70, [
  { name: "sp", type: "text", content: "Default sidebar: general math formulas" },

  { name: "line", type: "heading", content: "Math Formula Showcase", showAt: 0 },
  { name: "sp", type: "text", content: "This slide demonstrates KaTeX rendering." },

  { name: "line", type: "math", content: "E = mc^2", showAt: 2 },
  { name: "sp", type: "text", content: "Einstein's mass-energy equivalence." },

  { name: "line", type: "heading", content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", showAt: 4 },
  { name: "sp", type: "text", content: "Quadratic formula." },

  { name: "line", type: "text", content: "a^2 + b^2 = c^2", showAt: 6 },
  { name: "sp", type: "text", content: "Pythagorean theorem." },

  { name: "line", type: "math", content: "\\int_a^b f(x)\\,dx", showAt: 8 },
  { name: "sp", type: "text", content: "Definite integral from a to b." },

  { name: "line", type: "math", content: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}", showAt: 10 },
  { name: "sp", type: "text", content: "Basel problem — converging infinite sum." },

  { name: "line", type: "math", content: "\\lim_{x\\to0} \\frac{\\sin x}{x} = 1", showAt: 12 },
  { name: "sp", type: "text", content: "Standard trigonometric limit." },

  { name: "line", type: "math", content: "\\log_b(x) = \\frac{\\log_c(x)}{\\log_c(b)}", showAt: 14 },
  { name: "sp", type: "text", content: "Logarithmic base change formula." },

  { name: "line", type: "math", content: "\\vec{a} \\cdot \\vec{b} = ab\\cos\\theta", showAt: 16 },
  { name: "sp", type: "text", content: "Dot product of vectors." },

  { name: "line", type: "math", content: "\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}", showAt: 18 },
  { name: "sp", type: "text", content: "Gauss's law (divergence of electric field)." },
]);


export const deck = deckbuilder.build();
