import { DeckBuilder } from "../../lib/taleem-pivot-deckbuilder";

const deckbuilder = new DeckBuilder();

// EQ slide ending at 60s
const eq = deckbuilder.s.eq(60);

// Line 1: mass–energy equivalence
eq.addLine({ type: "math", content: "E = mc^2", showAt: 0 });
eq.addSp({ type: "math", content: "E = mc^2" });

// Line 2: quadratic formula
eq.addLine({
  type: "math",
  content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  showAt: 10
});
eq.addSp({ type: "math", content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" });

// Line 3: definite integral
eq.addLine({
  type: "math",
  content: "\\int_{0}^{π} \\sin x \\,dx = 2",
  showAt: 20
});
eq.addSp({ type: "math", content: "\\int_{0}^{π} \\sin x \\,dx = 2" });

// Line 4: Basel problem
eq.addLine({
  type: "math",
  content: "\\sum_{n=1}^{∞} \\frac{1}{n^2} = \\frac{π^2}{6}",
  showAt: 30
});
eq.addSp({ type: "math", content: "\\sum_{n=1}^{∞} \\frac{1}{n^2} = \\frac{π^2}{6}" });

// Line 5: limit of sine over x
eq.addLine({
  type: "math",
  content: "\\lim_{x→0} \\frac{\\sin x}{x} = 1",
  showAt: 40
});
eq.addSp({ type: "math", content: "\\lim_{x→0} \\frac{\\sin x}{x} = 1" });

export const deck = deckbuilder.build();
