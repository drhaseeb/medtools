import { useEffect, useRef, useState } from "react";

function beep() {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch {
    // Web Audio unavailable — the visual "Time's up" state is still shown.
  }
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function Timer({ seconds, label }: { seconds: number; label: string }) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setRunning(false);
          beep();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const done = remaining === 0;
  const pct = ((seconds - remaining) / seconds) * 100;

  function toggle() {
    if (done) {
      setRemaining(seconds);
      setRunning(true);
    } else {
      setRunning((r) => !r);
    }
  }

  function reset() {
    setRunning(false);
    setRemaining(seconds);
  }

  return (
    <div className={`rounded-xl border p-4 transition-colors ${done ? "border-bad/40 bg-bad-soft" : "border-line bg-surface"}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">{label}</div>
          <div className={`font-display text-3xl font-medium tabular-nums ${done ? "text-bad" : "text-ink"}`}>
            {formatTime(remaining)}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-xl border border-accent bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            {done ? "Restart" : running ? "Pause" : remaining === seconds ? "Start" : "Resume"}
          </button>
          {!done && (
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-line px-4 py-2 text-sm font-semibold text-ink-muted transition-colors hover:border-accent/40"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line/60">
        <div
          className={`h-full rounded-full transition-all ${done ? "bg-bad" : "bg-accent"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {done && <p className="mt-2 text-xs font-semibold text-bad">Time's up — stop counting and score what was produced.</p>}
    </div>
  );
}
