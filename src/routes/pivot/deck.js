import { DeckBuilder } from "../../lib/taleem-pivot-deckbuilder";

const deckbuilder = new DeckBuilder();
debugger;
const eq = deckbuilder.s.eq(70); // slide ends at 70s

eq.addLine({ type: "heading", content: "Welcome to EQ!", showAt: 0 });
eq.addSp({ type: "text", content: "This is Taleem.Help" });
eq.addSp({ type: "text", content: "Granite system, clean SPs" });

eq.addLine({ type: "math", content: "E = mc^2", showAt: 4 });
eq.addSp({ type: "text", content: "Einstein’s formula" });

eq.addLine({ type: "text", content: "x = -b ± √(b² - 4ac)/2a", showAt: 8 });
eq.addSp({ type: "text", content: "Quadratic roots formula" });

console.log("deck"  , deckbuilder.build());
export const deck = deckbuilder.build();
