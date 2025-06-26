import { DeckBuilder } from "taleem-pivot-deckbuilder";

const deckbuilder = new DeckBuilder();

// ——— 1 EQ slide ending at 60s ———
const eq = deckbuilder.s.eq(20);

// 1) Heading at time 0
eq.addLine({
  type: "heading",
  content: "Math Formula Showcase",
  showAt: 0
});
eq.addSp({ type: "heading", content: "Math Formula Showcase" });
eq.addSp({ type: "text",    content: "A quick review of famous formulas" });

// 2) Mass–energy equivalence at 5s
eq.addLine({
  type: "math",
  content: "E = mc^2",
  showAt: 5
});
eq.addSp({ type: "math",  content: "E = mc^2" });
eq.addSp({ type: "image", content: "/pivot/box.webp" });

// 3) Quadratic formula at 15s
eq.addLine({
  type: "math",
  content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  showAt: 15
});
eq.addSp({ type: "math", content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" });

// 4) Closing text at 55s
eq.addLine({
  type: "text",
  content: "End of math showcase. Explore further concepts!",
  showAt: 20
});
eq.addSp({ type: "text", content: "Thank you for watching" });

// ——— build and export ———
export const deck = deckbuilder.build();
