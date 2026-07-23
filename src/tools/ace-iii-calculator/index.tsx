import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const fluencyScale = (count: number) => {
  if (count >= 18) return 7;
  if (count >= 14) return 6;
  if (count >= 11) return 5;
  if (count >= 10) return 4;
  if (count >= 7) return 3;
  if (count >= 4) return 2;
  if (count >= 2) return 1;
  return 0;
};

function useChecks(keys: string[]) {
  const [state, setState] = useState<Record<string, boolean>>({});
  const count = keys.filter((k) => state[k]).length;
  const toggle = (key: string) => (v: boolean) => setState((p) => ({ ...p, [key]: v }));
  return { state, count, toggle };
}

export default function AceIiiCalculator() {
  const timeOrientation = useChecks(["year", "season", "date", "day", "month"]);
  const placeOrientation = useChecks(["state", "county", "town", "hospital", "floor"]);
  const registration = useChecks(["lemon", "key", "ball"]);
  const [serial7, setSerial7] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);

  const wordRecall = useChecks(["r-lemon", "r-key", "r-ball"]);
  const addressRecall = useChecks(["harry", "barnes", "73", "orchard", "court", "kingsbridge", "devon"]);
  const retrograde = useChecks(["leader", "notableFigure", "president", "assassination"]);

  const [pWords, setPWords] = useState<number | "">("");
  const [animalWords, setAnimalWords] = useState<number | "">("");

  const comprehension = useChecks(["rightHand", "fold", "floorTask"]);
  const [writing, setWriting] = useState<0 | 1 | 2>(0);
  const repetition = useChecks(["caterpillar", "eccentricity", "unintelligible", "statistician"]);
  const naming = useChecks([
    "spoon", "book", "penguin", "anchor", "camel", "accordion",
    "barrel", "crown", "crocodile", "harp", "rhino", "kangaroo",
  ]);
  const [readingCorrect, setReadingCorrect] = useState(false);
  const compQuestions = useChecks(["monarchy", "marsupial", "antarctic", "nautical"]);

  const [loopsCorrect, setLoopsCorrect] = useState(false);
  const cube = useChecks(["shape", "perspective"]);
  const clock = useChecks(["circle", "numbers", "position", "hands", "time"]);
  const dots = useChecks(["d8", "d10", "d7", "d9"]);
  const letters = useChecks(["K", "M", "A", "T"]);

  const scores = useMemo(() => {
    const attention = timeOrientation.count + placeOrientation.count + registration.count + serial7;
    const memory = wordRecall.count + addressRecall.count + retrograde.count;
    const fluency = fluencyScale(typeof pWords === "number" ? pWords : 0) + fluencyScale(typeof animalWords === "number" ? animalWords : 0);
    const language =
      comprehension.count + writing + repetition.count + naming.count + (readingCorrect ? 1 : 0) + compQuestions.count;
    const visuospatial = (loopsCorrect ? 1 : 0) + cube.count + clock.count + dots.count + letters.count;
    const total = attention + memory + fluency + language + visuospatial;
    return { attention, memory, fluency, language, visuospatial, total };
  }, [
    timeOrientation.count, placeOrientation.count, registration.count, serial7,
    wordRecall.count, addressRecall.count, retrograde.count,
    pWords, animalWords,
    comprehension.count, writing, repetition.count, naming.count, readingCorrect, compQuestions.count,
    loopsCorrect, cube.count, clock.count, dots.count, letters.count,
  ]);

  let tone: Tone = "good";
  let description = "Normal range — cognitive impairment unlikely";
  if (scores.total < 82) {
    tone = "bad";
    description = "Impairment likely (high sensitivity for dementia at this cutoff)";
  } else if (scores.total < 88) {
    tone = "warn";
    description = "Inconclusive — borderline range, consider follow-up testing";
  }

  return (
    <div className="space-y-8">
      <Section title="1. Attention (max 18)">
        <p className="-mt-2 text-xs text-ink-muted">Time orientation — 1 point each</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {["year", "season", "date", "day", "month"].map((k) => (
            <CheckboxRow key={k} label={k[0].toUpperCase() + k.slice(1)} checked={!!timeOrientation.state[k]} onChange={timeOrientation.toggle(k)} />
          ))}
        </div>
        <p className="text-xs text-ink-muted">Place orientation — 1 point each</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <CheckboxRow label="State/county" checked={!!placeOrientation.state.state} onChange={placeOrientation.toggle("state")} />
          <CheckboxRow label="Region" checked={!!placeOrientation.state.county} onChange={placeOrientation.toggle("county")} />
          <CheckboxRow label="Town/city" checked={!!placeOrientation.state.town} onChange={placeOrientation.toggle("town")} />
          <CheckboxRow label="Hospital/building" checked={!!placeOrientation.state.hospital} onChange={placeOrientation.toggle("hospital")} />
          <CheckboxRow label="Floor/room" checked={!!placeOrientation.state.floor} onChange={placeOrientation.toggle("floor")} />
        </div>
        <p className="text-xs text-ink-muted">
          Registration — say "Lemon, Key, Ball," score only the first trial (repeat until learned for later recall)
        </p>
        <div className="grid grid-cols-3 gap-2">
          <CheckboxRow label="Lemon" checked={!!registration.state.lemon} onChange={registration.toggle("lemon")} />
          <CheckboxRow label="Key" checked={!!registration.state.key} onChange={registration.toggle("key")} />
          <CheckboxRow label="Ball" checked={!!registration.state.ball} onChange={registration.toggle("ball")} />
        </div>
        <p className="text-xs text-ink-muted">Serial 7s from 100 (93, 86, 79, 72, 65) — number correct</p>
        <OptionListField
          options={[5, 4, 3, 2, 1, 0].map((n) => ({ value: n, label: `${n} correct` }))}
          value={serial7}
          onChange={(v) => setSerial7(v as typeof serial7)}
        />
      </Section>

      <Section title="2. Memory (max 26)">
        <p className="-mt-2 text-xs text-ink-muted">Recall the 3 registered words</p>
        <div className="grid grid-cols-3 gap-2">
          <CheckboxRow label="Lemon" checked={!!wordRecall.state["r-lemon"]} onChange={wordRecall.toggle("r-lemon")} />
          <CheckboxRow label="Key" checked={!!wordRecall.state["r-key"]} onChange={wordRecall.toggle("r-key")} />
          <CheckboxRow label="Ball" checked={!!wordRecall.state["r-ball"]} onChange={wordRecall.toggle("r-ball")} />
        </div>
        <p className="text-xs text-ink-muted">
          Anterograde memory — after 3 learning trials, recall: "Harry Barnes, 73 Orchard Court, Kingsbridge, Devon"
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["harry", "barnes", "73", "orchard", "court", "kingsbridge", "devon"].map((k) => (
            <CheckboxRow key={k} label={k[0].toUpperCase() + k.slice(1)} checked={!!addressRecall.state[k]} onChange={addressRecall.toggle(k)} />
          ))}
        </div>
        <p className="text-xs text-ink-muted">Retrograde (semantic) memory — 4 general-knowledge questions</p>
        <div className="grid grid-cols-2 gap-2">
          <CheckboxRow label="Current head of government" checked={!!retrograde.state.leader} onChange={retrograde.toggle("leader")} />
          <CheckboxRow label="A notable historical figure" checked={!!retrograde.state.notableFigure} onChange={retrograde.toggle("notableFigure")} />
          <CheckboxRow label="A head of state (e.g. US president)" checked={!!retrograde.state.president} onChange={retrograde.toggle("president")} />
          <CheckboxRow label="A well-known historical assassination" checked={!!retrograde.state.assassination} onChange={retrograde.toggle("assassination")} />
        </div>
      </Section>

      <Section title="3. Verbal Fluency (max 14)">
        <p className="-mt-2 text-xs text-ink-muted">
          Time each task for 60 seconds using a separate clock/timer, excluding proper nouns and repeats with different endings.
        </p>
        <NumberField
          label="Letter fluency — words starting with 'P'"
          value={pWords}
          onChange={setPWords}
          min={0}
          hint={`Scaled score: ${fluencyScale(typeof pWords === "number" ? pWords : 0)} / 7`}
        />
        <NumberField
          label="Category fluency — animals"
          value={animalWords}
          onChange={setAnimalWords}
          min={0}
          hint={`Scaled score: ${fluencyScale(typeof animalWords === "number" ? animalWords : 0)} / 7`}
        />
      </Section>

      <Section title="4. Language (max 26)">
        <p className="-mt-2 text-xs text-ink-muted">
          Comprehension — "Take this paper in your right hand, fold it in half, place it on the floor."
        </p>
        <div className="grid grid-cols-3 gap-2">
          <CheckboxRow label="Right hand" checked={!!comprehension.state.rightHand} onChange={comprehension.toggle("rightHand")} />
          <CheckboxRow label="Fold" checked={!!comprehension.state.fold} onChange={comprehension.toggle("fold")} />
          <CheckboxRow label="Floor" checked={!!comprehension.state.floorTask} onChange={comprehension.toggle("floorTask")} />
        </div>
        <p className="text-xs text-ink-muted">Writing — 2 sentences about any topic</p>
        <OptionListField
          options={[
            { value: 2, label: "Complete sentences with correct grammar/spelling" },
            { value: 1, label: "Incomplete or grammatical errors" },
            { value: 0, label: "Unable" },
          ]}
          value={writing}
          onChange={(v) => setWriting(v as typeof writing)}
        />
        <p className="text-xs text-ink-muted">Repetition</p>
        <div className="grid grid-cols-2 gap-2">
          <CheckboxRow label='"Caterpillar"' checked={!!repetition.state.caterpillar} onChange={repetition.toggle("caterpillar")} />
          <CheckboxRow label='"Eccentricity"' checked={!!repetition.state.eccentricity} onChange={repetition.toggle("eccentricity")} />
          <CheckboxRow label='"Unintelligible"' checked={!!repetition.state.unintelligible} onChange={repetition.toggle("unintelligible")} />
          <CheckboxRow label='"Statistician"' checked={!!repetition.state.statistician} onChange={repetition.toggle("statistician")} />
        </div>
        <p className="text-xs text-ink-muted">Naming — 12 line-drawn objects (use your own picture set)</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["spoon", "book", "penguin", "anchor", "camel", "accordion", "barrel", "crown", "crocodile", "harp", "rhino", "kangaroo"].map((k) => (
            <CheckboxRow key={k} label={k[0].toUpperCase() + k.slice(1)} checked={!!naming.state[k]} onChange={naming.toggle(k)} />
          ))}
        </div>
        <p className="text-xs text-ink-muted">Reading — irregular words (e.g. sew, pint, soot, dough, height, chorus, rouble, colonel, yacht, quay)</p>
        <CheckboxRow label="Reads all words correctly" checked={readingCorrect} onChange={setReadingCorrect} />
        <p className="text-xs text-ink-muted">Comprehension of named objects</p>
        <div className="grid grid-cols-2 gap-2">
          <CheckboxRow label="Associated with monarchy (crown)" checked={!!compQuestions.state.monarchy} onChange={compQuestions.toggle("monarchy")} />
          <CheckboxRow label="Is a marsupial (kangaroo)" checked={!!compQuestions.state.marsupial} onChange={compQuestions.toggle("marsupial")} />
          <CheckboxRow label="Found in Antarctica (penguin)" checked={!!compQuestions.state.antarctic} onChange={compQuestions.toggle("antarctic")} />
          <CheckboxRow label="Nautical association (anchor)" checked={!!compQuestions.state.nautical} onChange={compQuestions.toggle("nautical")} />
        </div>
      </Section>

      <Section title="5. Visuospatial (max 16)">
        <p className="-mt-2 text-xs text-ink-muted">Infinity loops — ask the patient to copy a pair of interlocking pentagons/loops</p>
        <CheckboxRow label="Copies loops correctly" checked={loopsCorrect} onChange={setLoopsCorrect} />
        <p className="text-xs text-ink-muted">3D wire cube — ask the patient to copy a drawn wire cube</p>
        <div className="grid grid-cols-2 gap-2">
          <CheckboxRow label="Shape correct" checked={!!cube.state.shape} onChange={cube.toggle("shape")} />
          <CheckboxRow label="3D perspective correct" checked={!!cube.state.perspective} onChange={cube.toggle("perspective")} />
        </div>
        <p className="text-xs text-ink-muted">Clock drawing — draw a clock face showing 5:10</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <CheckboxRow label="Circle" checked={!!clock.state.circle} onChange={clock.toggle("circle")} />
          <CheckboxRow label="Numbers present" checked={!!clock.state.numbers} onChange={clock.toggle("numbers")} />
          <CheckboxRow label="Number positions correct" checked={!!clock.state.position} onChange={clock.toggle("position")} />
          <CheckboxRow label="Hands present" checked={!!clock.state.hands} onChange={clock.toggle("hands")} />
          <CheckboxRow label="Time correct (5:10)" checked={!!clock.state.time} onChange={clock.toggle("time")} />
        </div>
        <p className="text-xs text-ink-muted">Dot counting — 4 panels of scattered dots (8, 10, 7, 9), counted without touching</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <CheckboxRow label="Panel of 8" checked={!!dots.state.d8} onChange={dots.toggle("d8")} />
          <CheckboxRow label="Panel of 10" checked={!!dots.state.d10} onChange={dots.toggle("d10")} />
          <CheckboxRow label="Panel of 7" checked={!!dots.state.d7} onChange={dots.toggle("d7")} />
          <CheckboxRow label="Panel of 9" checked={!!dots.state.d9} onChange={dots.toggle("d9")} />
        </div>
        <p className="text-xs text-ink-muted">Letter identification — noisy/fragmented letters K, M, A, T</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["K", "M", "A", "T"].map((k) => (
            <CheckboxRow key={k} label={`Letter ${k}`} checked={!!letters.state[k]} onChange={letters.toggle(k)} />
          ))}
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="ACE-III Total"
        value={scores.total}
        valueSuffix="/100"
        description={description}
        breakdown={
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            <div><div className="font-bold text-ink">{scores.attention}/18</div>Attention</div>
            <div><div className="font-bold text-ink">{scores.memory}/26</div>Memory</div>
            <div><div className="font-bold text-ink">{scores.fluency}/14</div>Fluency</div>
            <div><div className="font-bold text-ink">{scores.language}/26</div>Language</div>
            <div><div className="font-bold text-ink">{scores.visuospatial}/16</div>Visuospatial</div>
          </div>
        }
        footnote="A cognitive score alone never establishes a dementia diagnosis — always interpret alongside a full history, collateral history, physical/neurological exam, and, where indicated, bloods and neuroimaging."
      />
    </div>
  );
}
