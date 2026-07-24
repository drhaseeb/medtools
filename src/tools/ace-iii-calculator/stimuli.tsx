import spoonImg from "./assets/spoon.png";
import bookImg from "./assets/book.png";
import penguinImg from "./assets/penguin.png";
import anchorImg from "./assets/anchor.png";
import camelImg from "./assets/camel.png";
import accordionImg from "./assets/accordion.png";
import barrelImg from "./assets/barrel.png";
import crownImg from "./assets/crown.png";
import crocodileImg from "./assets/crocodile.png";
import harpImg from "./assets/harp.png";
import rhinoImg from "./assets/rhino.png";
import kangarooImg from "./assets/kangaroo.png";

// Stimulus artwork for the ACE-III visuospatial and naming items. The
// pentagons/cube/dots/letters below are original line-art matching the
// standard item descriptions. All stimuli render on a fixed white/black
// surface (via StimulusCard) so they read like a printed card regardless of
// the clinician's light/dark app theme.

const stroke = {
  fill: "none",
  stroke: "black",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InterlockingPentagons() {
  return (
    <svg viewBox="0 0 120 110" width="160" height="147">
      <polygon points="45,28 75.4,50.1 63.8,85.9 26.2,85.9 14.6,50.1" {...stroke} />
      <polygon points="75,28 105.4,50.1 93.8,85.9 56.2,85.9 44.6,50.1" {...stroke} />
    </svg>
  );
}

export function WireCube() {
  return (
    <svg viewBox="0 0 120 120" width="160" height="160">
      <polygon points="30,50 70,50 70,90 30,90" {...stroke} />
      <polygon points="50,30 90,30 90,70 50,70" {...stroke} />
      <line x1="30" y1="50" x2="50" y2="30" {...stroke} />
      <line x1="70" y1="50" x2="90" y2="30" {...stroke} />
      <line x1="70" y1="90" x2="90" y2="70" {...stroke} />
      <line x1="30" y1="90" x2="50" y2="70" {...stroke} />
    </svg>
  );
}

const dotPanels: Record<string, [number, number][]> = {
  d8: [[15, 15], [45, 10], [75, 20], [100, 15], [20, 50], [55, 45], [90, 55], [35, 75]],
  d10: [[12, 12], [40, 8], [68, 15], [95, 10], [15, 45], [45, 40], [75, 48], [100, 42], [30, 75], [70, 78]],
  d7: [[20, 15], [55, 10], [90, 18], [15, 50], [50, 55], [85, 50], [45, 80]],
  d9: [[15, 12], [42, 10], [70, 15], [98, 12], [20, 45], [50, 48], [80, 45], [35, 78], [70, 75]],
};

export function DotPanel({ pattern }: { pattern: "d8" | "d10" | "d7" | "d9" }) {
  return (
    <svg viewBox="0 0 115 90" width="150" height="117">
      <rect x="1" y="1" width="113" height="88" rx="6" fill="none" stroke="black" strokeWidth="2" opacity="0.3" />
      {dotPanels[pattern].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4.5} fill="black" />
      ))}
    </svg>
  );
}

// A shared occlusion pattern (small white blocks breaking up stroke
// continuity) applied over a bold glyph to create a "fragmented letter"
// perceptual-identification item.
const occlusions: [number, number, number, number][] = [
  [28, 15, 10, 9],
  [50, 10, 9, 10],
  [68, 25, 9, 8],
  [25, 45, 9, 9],
  [45, 50, 10, 9],
  [62, 58, 9, 10],
  [35, 35, 8, 8],
];

export function FragmentedLetter({ letter }: { letter: string }) {
  return (
    <svg viewBox="0 0 100 100" width="110" height="110">
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontSize="48"
        fontWeight="900"
        fontFamily="ui-sans-serif, system-ui"
        fill="black"
      >
        {letter}
      </text>
      {occlusions.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="white" transform={`rotate(${(i % 2 === 0 ? 12 : -10)} ${x + w / 2} ${y + h / 2})`} />
      ))}
    </svg>
  );
}

export const namingImages: Record<string, string> = {
  spoon: spoonImg,
  book: bookImg,
  penguin: penguinImg,
  anchor: anchorImg,
  camel: camelImg,
  accordion: accordionImg,
  barrel: barrelImg,
  crown: crownImg,
  crocodile: crocodileImg,
  harp: harpImg,
  rhino: rhinoImg,
  kangaroo: kangarooImg,
};
