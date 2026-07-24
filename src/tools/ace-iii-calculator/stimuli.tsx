import type { ReactNode } from "react";

// Original stimulus artwork for the ACE-III visuospatial and naming items.
// ACE-III itself is freely distributed for clinical/research use (unlike the
// commercially-licensed MMSE), but these SVGs are original line-art drawn to
// match the standard item descriptions (interlocking pentagons, a wire cube,
// scattered dots, fragmented letters, 12 named objects) rather than a copy of
// any specific published stimulus booklet.

const stroke = {
  fill: "none",
  stroke: "currentColor",
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
      <rect x="1" y="1" width="113" height="88" rx="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      {dotPanels[pattern].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4.5} fill="currentColor" />
      ))}
    </svg>
  );
}

// A shared occlusion pattern (small background-colored blocks breaking up
// stroke continuity) applied over a bold glyph to create a "fragmented
// letter" perceptual-identification item.
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
        fill="currentColor"
      >
        {letter}
      </text>
      {occlusions.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="var(--bg)" transform={`rotate(${(i % 2 === 0 ? 12 : -10)} ${x + w / 2} ${y + h / 2})`} />
      ))}
    </svg>
  );
}

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" width="88" height="88">
      {children}
    </svg>
  );
}

export const namingIcons: Record<string, ReactNode> = {
  spoon: (
    <IconFrame>
      <ellipse cx="50" cy="28" rx="15" ry="20" {...stroke} />
      <line x1="50" y1="46" x2="50" y2="88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </IconFrame>
  ),
  book: (
    <IconFrame>
      <rect x="18" y="25" width="64" height="52" rx="3" {...stroke} />
      <line x1="50" y1="25" x2="50" y2="77" {...stroke} />
      <path d="M22 33 Q50 40 78 33" {...stroke} />
    </IconFrame>
  ),
  penguin: (
    <IconFrame>
      <ellipse cx="50" cy="58" rx="22" ry="30" {...stroke} />
      <ellipse cx="50" cy="58" rx="11" ry="22" fill="var(--bg)" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="24" r="13" {...stroke} />
      <path d="M62 24 L74 27 L62 31 Z" fill="currentColor" />
      <ellipse cx="40" cy="90" rx="8" ry="4" fill="currentColor" />
      <ellipse cx="60" cy="90" rx="8" ry="4" fill="currentColor" />
    </IconFrame>
  ),
  anchor: (
    <IconFrame>
      <circle cx="50" cy="18" r="9" {...stroke} />
      <line x1="50" y1="27" x2="50" y2="78" {...stroke} />
      <line x1="34" y1="40" x2="66" y2="40" {...stroke} />
      <path d="M50 78 Q30 78 25 60" {...stroke} />
      <path d="M50 78 Q70 78 75 60" {...stroke} />
      <path d="M20 58 L25 60 L28 54" {...stroke} />
      <path d="M80 58 L75 60 L72 54" {...stroke} />
    </IconFrame>
  ),
  camel: (
    <IconFrame>
      <path
        d="M12 78 C12 60 20 48 28 52 C32 36 44 30 50 42 C54 32 62 36 64 48 C76 46 84 58 84 70"
        {...stroke}
      />
      <line x1="18" y1="78" x2="18" y2="90" {...stroke} />
      <line x1="30" y1="78" x2="30" y2="90" {...stroke} />
      <line x1="70" y1="72" x2="70" y2="90" {...stroke} />
      <line x1="80" y1="72" x2="80" y2="90" {...stroke} />
      <line x1="12" y1="78" x2="84" y2="72" {...stroke} />
      <path d="M62 48 Q66 40 72 42" {...stroke} />
    </IconFrame>
  ),
  accordion: (
    <IconFrame>
      <rect x="16" y="28" width="18" height="48" rx="2" {...stroke} />
      <rect x="66" y="28" width="18" height="48" rx="2" {...stroke} />
      <circle cx="70" cy="38" r="2.5" fill="currentColor" />
      <circle cx="76" cy="38" r="2.5" fill="currentColor" />
      <circle cx="70" cy="46" r="2.5" fill="currentColor" />
      <circle cx="76" cy="46" r="2.5" fill="currentColor" />
      <path d="M34 32 L44 26 L50 32 L56 26 L66 32" {...stroke} />
      <path d="M34 72 L44 78 L50 72 L56 78 L66 72" {...stroke} />
    </IconFrame>
  ),
  barrel: (
    <IconFrame>
      <path d="M32 18 Q18 50 32 82 L68 82 Q82 50 68 18 Z" {...stroke} />
      <path d="M33 32 Q50 38 67 32" {...stroke} />
      <path d="M30 65 Q50 71 70 65" {...stroke} />
      <ellipse cx="50" cy="18" rx="18" ry="5" {...stroke} />
    </IconFrame>
  ),
  crown: (
    <IconFrame>
      <path d="M20 72 L20 50 L36 62 L50 32 L64 62 L80 50 L80 72 Z" {...stroke} />
      <circle cx="50" cy="28" r="3.5" fill="currentColor" />
      <circle cx="20" cy="46" r="3" fill="currentColor" />
      <circle cx="80" cy="46" r="3" fill="currentColor" />
      <line x1="20" y1="72" x2="80" y2="72" strokeWidth="5" stroke="currentColor" strokeLinecap="round" />
    </IconFrame>
  ),
  crocodile: (
    <IconFrame>
      <path d="M6 60 L20 54 L82 54 L92 60 L82 66 L20 66 Z" {...stroke} />
      <path d="M26 54 L30 46 L34 54" {...stroke} />
      <path d="M42 54 L46 46 L50 54" {...stroke} />
      <path d="M58 54 L62 46 L66 54" {...stroke} />
      <circle cx="80" cy="58" r="2.2" fill="currentColor" />
      <line x1="14" y1="66" x2="14" y2="76" {...stroke} />
      <line x1="30" y1="66" x2="30" y2="76" {...stroke} />
      <path d="M92 60 L82 53" {...stroke} />
    </IconFrame>
  ),
  harp: (
    <IconFrame>
      <path d="M30 12 Q76 10 74 82 L60 86 Q56 40 30 20 Z" {...stroke} />
      <line x1="35" y1="24" x2="60" y2="80" strokeWidth="2.5" stroke="currentColor" opacity="0.7" />
      <line x1="41" y1="22" x2="63" y2="76" strokeWidth="2.5" stroke="currentColor" opacity="0.7" />
      <line x1="47" y1="20" x2="66" y2="72" strokeWidth="2.5" stroke="currentColor" opacity="0.7" />
      <line x1="53" y1="18" x2="69" y2="68" strokeWidth="2.5" stroke="currentColor" opacity="0.7" />
      <line x1="59" y1="16" x2="72" y2="64" strokeWidth="2.5" stroke="currentColor" opacity="0.7" />
    </IconFrame>
  ),
  rhino: (
    <IconFrame>
      <path d="M18 58 Q18 42 32 42 L68 42 Q82 42 82 58 L82 74 L18 74 Z" {...stroke} />
      <path d="M8 52 Q8 40 20 42 L20 58 Q8 60 8 52 Z" {...stroke} />
      <path d="M8 46 L4 39" {...stroke} />
      <path d="M20 40 L15 33" {...stroke} />
      <line x1="30" y1="74" x2="30" y2="86" strokeWidth="6" stroke="currentColor" strokeLinecap="round" />
      <line x1="70" y1="74" x2="70" y2="86" strokeWidth="6" stroke="currentColor" strokeLinecap="round" />
      <line x1="82" y1="66" x2="92" y2="70" {...stroke} />
    </IconFrame>
  ),
  kangaroo: (
    <IconFrame>
      <ellipse cx="52" cy="46" rx="16" ry="22" {...stroke} />
      <circle cx="50" cy="18" r="10" {...stroke} />
      <path d="M42 10 L38 2" {...stroke} />
      <path d="M58 10 L62 2" {...stroke} />
      <path d="M38 40 L26 48" {...stroke} />
      <path d="M60 62 Q78 66 82 84 L92 90" {...stroke} />
      <path d="M40 66 Q34 80 22 84 L34 90 Q46 84 48 68 Z" {...stroke} />
    </IconFrame>
  ),
};
