import type { ReactNode } from "react";

// Original stimulus artwork for the ACE-III visuospatial and naming items.
// ACE-III itself is freely distributed for clinical/research use (unlike the
// commercially-licensed MMSE), but these SVGs are original artwork drawn to
// match the standard item descriptions (interlocking pentagons, a wire cube,
// scattered dots, fragmented letters, 12 named objects) rather than a copy of
// any specific published stimulus booklet. All stimuli render on a fixed
// white/black surface (via StimulusCard) so they read like a printed card
// regardless of the clinician's light/dark app theme.

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

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" width="96" height="96">
      {children}
    </svg>
  );
}

const outline = { stroke: "black", strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

export const namingIcons: Record<string, ReactNode> = {
  spoon: (
    <IconFrame>
      <ellipse cx="50" cy="27" rx="15" ry="20" fill="#C9CFD6" {...outline} />
      <path d="M44 45 Q44 60 46 88 L54 88 Q56 60 56 45 Z" fill="#C9CFD6" {...outline} />
    </IconFrame>
  ),
  book: (
    <IconFrame>
      <rect x="16" y="24" width="68" height="54" rx="3" fill="#2F5FA8" {...outline} />
      <rect x="19" y="27" width="28" height="48" fill="#F4F1E8" stroke="black" strokeWidth="1.5" />
      <rect x="53" y="27" width="28" height="48" fill="#F4F1E8" stroke="black" strokeWidth="1.5" />
      <line x1="50" y1="24" x2="50" y2="78" stroke="black" strokeWidth="2.5" />
      <line x1="24" y1="36" x2="42" y2="36" stroke="#B9B2A0" strokeWidth="2" />
      <line x1="24" y1="44" x2="42" y2="44" stroke="#B9B2A0" strokeWidth="2" />
      <line x1="58" y1="36" x2="76" y2="36" stroke="#B9B2A0" strokeWidth="2" />
      <line x1="58" y1="44" x2="76" y2="44" stroke="#B9B2A0" strokeWidth="2" />
    </IconFrame>
  ),
  penguin: (
    <IconFrame>
      <path
        d="M50 8 C68 8 76 28 76 52 C76 74 66 92 50 92 C34 92 24 74 24 52 C24 28 32 8 50 8 Z"
        fill="#1B1D1F"
        {...outline}
      />
      <path
        d="M50 22 C60 22 65 36 65 54 C65 70 59 82 50 82 C41 82 35 70 35 54 C35 36 40 22 50 22 Z"
        fill="white"
        stroke="black"
        strokeWidth="1.5"
      />
      <circle cx="43" cy="22" r="3" fill="white" />
      <circle cx="57" cy="22" r="3" fill="white" />
      <circle cx="43" cy="22" r="1.4" fill="black" />
      <circle cx="57" cy="22" r="1.4" fill="black" />
      <path d="M48 26 L52 26 L50 32 Z" fill="#F2A71B" stroke="black" strokeWidth="1" />
      <ellipse cx="38" cy="90" rx="8" ry="3.5" fill="#F2A71B" {...outline} />
      <ellipse cx="62" cy="90" rx="8" ry="3.5" fill="#F2A71B" {...outline} />
      <path d="M24 46 Q14 52 18 66" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path d="M76 46 Q86 52 82 66" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </IconFrame>
  ),
  anchor: (
    <IconFrame>
      <circle cx="50" cy="17" r="8" fill="none" stroke="#3B4A5A" strokeWidth="5" />
      <line x1="50" y1="25" x2="50" y2="78" stroke="#3B4A5A" strokeWidth="6" strokeLinecap="round" />
      <line x1="33" y1="38" x2="67" y2="38" stroke="#3B4A5A" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 78 Q28 78 22 56" fill="none" stroke="#3B4A5A" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 78 Q72 78 78 56" fill="none" stroke="#3B4A5A" strokeWidth="6" strokeLinecap="round" />
      <path d="M16 54 L22 56 L26 48" fill="none" stroke="#3B4A5A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 54 L78 56 L74 48" fill="none" stroke="#3B4A5A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </IconFrame>
  ),
  camel: (
    <IconFrame>
      <path
        d="M12 82 C9 68 12 56 22 54 C24 42 30 32 30 32 C30 32 26 42 30 48
           C36 36 46 30 54 34 C50 38 47 44 48 50
           C58 42 68 42 74 50 C80 46 88 50 90 60
           C90 68 84 72 76 72
           L76 82 L64 82 L64 72 L34 72 L34 82 L22 82 L22 72 C16 72 13 78 12 82 Z"
        fill="#C99A5B"
        {...outline}
      />
      <circle cx="82" cy="54" r="2" fill="black" />
      <path d="M84 46 L90 40" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="60" x2="96" y2="66" stroke="#C99A5B" strokeWidth="3" strokeLinecap="round" />
    </IconFrame>
  ),
  accordion: (
    <IconFrame>
      <rect x="14" y="26" width="20" height="50" rx="3" fill="#B23A2E" {...outline} />
      <rect x="66" y="26" width="20" height="50" rx="3" fill="#1B1D1F" {...outline} />
      <circle cx="71" cy="36" r="2.3" fill="#D4AF37" />
      <circle cx="78" cy="36" r="2.3" fill="#D4AF37" />
      <circle cx="71" cy="44" r="2.3" fill="#D4AF37" />
      <circle cx="78" cy="44" r="2.3" fill="#D4AF37" />
      <circle cx="71" cy="52" r="2.3" fill="#D4AF37" />
      <circle cx="78" cy="52" r="2.3" fill="#D4AF37" />
      <path d="M34 30 L44 24 L50 30 L56 24 L66 30 L66 72 L56 78 L50 72 L44 78 L34 72 Z" fill="#E8C24A" {...outline} />
      <line x1="40" y1="34" x2="40" y2="68" stroke="black" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="32" x2="50" y2="70" stroke="black" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="34" x2="60" y2="68" stroke="black" strokeWidth="1.5" opacity="0.5" />
    </IconFrame>
  ),
  barrel: (
    <IconFrame>
      <path d="M30 16 Q16 50 30 84 L70 84 Q84 50 70 16 Z" fill="#A9702F" {...outline} />
      <path d="M31 30 Q50 36 69 30" fill="none" stroke="#5A3A1A" strokeWidth="3" />
      <path d="M28 63 Q50 69 72 63" fill="none" stroke="#5A3A1A" strokeWidth="3" />
      <ellipse cx="50" cy="16" rx="20" ry="6" fill="#8B5A2B" {...outline} />
    </IconFrame>
  ),
  crown: (
    <IconFrame>
      <path d="M18 74 L18 48 L34 60 L50 28 L66 60 L82 48 L82 74 Z" fill="#D4AF37" {...outline} />
      <circle cx="50" cy="24" r="4" fill="#B3261E" stroke="black" strokeWidth="1.5" />
      <circle cx="18" cy="44" r="3.5" fill="#1E4FA0" stroke="black" strokeWidth="1.5" />
      <circle cx="82" cy="44" r="3.5" fill="#1E4FA0" stroke="black" strokeWidth="1.5" />
      <rect x="18" y="70" width="64" height="8" rx="2" fill="#D4AF37" {...outline} />
    </IconFrame>
  ),
  crocodile: (
    <IconFrame>
      <path d="M4 62 L18 54 L86 54 L96 62 L86 70 L18 70 Z" fill="#4F7A3C" {...outline} />
      <path d="M22 54 L27 44 L32 54 Z" fill="#3E6230" stroke="black" strokeWidth="1.5" />
      <path d="M40 54 L45 44 L50 54 Z" fill="#3E6230" stroke="black" strokeWidth="1.5" />
      <path d="M58 54 L63 44 L68 54 Z" fill="#3E6230" stroke="black" strokeWidth="1.5" />
      <path d="M78 55 L83 58 L78 61 Z" fill="white" stroke="black" strokeWidth="1" />
      <circle cx="88" cy="59" r="2.2" fill="black" />
      <line x1="12" y1="70" x2="12" y2="80" stroke="#4F7A3C" strokeWidth="6" strokeLinecap="round" />
      <line x1="28" y1="70" x2="28" y2="80" stroke="#4F7A3C" strokeWidth="6" strokeLinecap="round" />
      <path d="M96 62 L86 53" fill="none" stroke="black" strokeWidth="2.5" />
    </IconFrame>
  ),
  harp: (
    <IconFrame>
      <path d="M30 10 Q78 8 76 84 L60 88 Q56 40 30 18 Z" fill="#A9702F" {...outline} />
      <line x1="35" y1="22" x2="60" y2="82" stroke="#F4F1E8" strokeWidth="2" />
      <line x1="41" y1="20" x2="63" y2="78" stroke="#F4F1E8" strokeWidth="2" />
      <line x1="47" y1="18" x2="66" y2="74" stroke="#F4F1E8" strokeWidth="2" />
      <line x1="53" y1="16" x2="69" y2="70" stroke="#F4F1E8" strokeWidth="2" />
      <line x1="59" y1="14" x2="72" y2="66" stroke="#F4F1E8" strokeWidth="2" />
    </IconFrame>
  ),
  rhino: (
    <IconFrame>
      <path
        d="M14 56 C10 44 16 34 26 34 L64 34 C78 34 84 44 84 56 L84 78 L14 78 Z"
        fill="#8A8F94"
        {...outline}
      />
      <path d="M14 56 L4 50 L6 40 L14 44 Z" fill="#8A8F94" {...outline} />
      <path d="M18 36 L14 24 L22 30 Z" fill="#F4F1E8" stroke="black" strokeWidth="1.5" />
      <ellipse cx="20" cy="46" rx="2.5" ry="2" fill="black" />
      <path d="M8 44 L10 40 L12 46" fill="none" stroke="black" strokeWidth="1.5" />
      <line x1="30" y1="78" x2="30" y2="90" stroke="#8A8F94" strokeWidth="10" strokeLinecap="round" />
      <line x1="68" y1="78" x2="68" y2="90" stroke="#8A8F94" strokeWidth="10" strokeLinecap="round" />
      <path d="M84 68 L94 72" fill="none" stroke="#8A8F94" strokeWidth="5" strokeLinecap="round" />
    </IconFrame>
  ),
  kangaroo: (
    <IconFrame>
      <path
        d="M62 38 C68 38 72 46 70 56 C76 60 82 70 84 84 L92 92
           M84 84 C80 76 74 68 66 64
           L66 64 C64 74 56 82 44 86 L32 92 L36 82
           C40 76 42 68 40 60 C34 58 30 50 32 42 C34 32 42 26 50 26 C56 26 60 30 62 38 Z"
        fill="#A97C50"
        {...outline}
      />
      <circle cx="52" cy="16" r="9" fill="#A97C50" {...outline} />
      <path d="M46 8 L43 2 L48 4 Z" fill="#A97C50" stroke="black" strokeWidth="1.5" />
      <path d="M58 8 L63 3 L60 6 Z" fill="#A97C50" stroke="black" strokeWidth="1.5" />
      <circle cx="55" cy="16" r="1.4" fill="black" />
      <path d="M40 44 L28 50" fill="none" stroke="#A97C50" strokeWidth="6" strokeLinecap="round" />
    </IconFrame>
  ),
};
