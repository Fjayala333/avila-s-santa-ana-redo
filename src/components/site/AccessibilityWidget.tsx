import { useEffect, useState } from "react";
import {
  Accessibility,
  X,
  RotateCcw,
  Zap,
  Eye,
  LayoutPanelTop,
  Crosshair,
  ArrowRightToLine,
  AudioLines,
  Glasses,
  Type,
  AlignLeft,
  Link2,
  Contrast,
} from "lucide-react";

type ToggleKey =
  | "seizureSafe"
  | "lowVision"
  | "adhd"
  | "cognitive"
  | "keyboardNav"
  | "screenReader"
  | "olderAdults"
  | "bigText"
  | "highContrast"
  | "highlightLinks"
  | "readableFont"
  | "textAlignLeft";

const PROFILES: {
  key: ToggleKey;
  title: string;
  desc: string;
  icon: typeof Zap;
}[] = [
  { key: "seizureSafe", title: "Seizure Safety", desc: "Reduce motion and visual triggers", icon: Zap },
  { key: "lowVision", title: "Low Vision Support", desc: "Improve clarity and contrast", icon: Eye },
  { key: "adhd", title: "ADHD Friendly", desc: "Support focus and reduce distractions", icon: LayoutPanelTop },
  { key: "cognitive", title: "Reading & Cognitive Support", desc: "Simplify reading and navigation", icon: Crosshair },
  { key: "keyboardNav", title: "Keyboard Navigation", desc: "Use website with the keyboard", icon: ArrowRightToLine },
  { key: "screenReader", title: "Screen Reader Compatibility", desc: "Optimize for screen-readers", icon: AudioLines },
  { key: "olderAdults", title: "Older Adults", desc: "Enhance visibility and reading comfort", icon: Glasses },
];

const CONTENT: {
  key: ToggleKey;
  title: string;
  desc: string;
  icon: typeof Zap;
}[] = [
  { key: "bigText", title: "Bigger Text", desc: "Increase font size across the site", icon: Type },
  { key: "highContrast", title: "High Contrast", desc: "Boost color contrast", icon: Contrast },
  { key: "highlightLinks", title: "Highlight Links", desc: "Make links stand out", icon: Link2 },
  { key: "readableFont", title: "Readable Font", desc: "Switch to a simpler typeface", icon: Type },
  { key: "textAlignLeft", title: "Align Text Left", desc: "Left-align all body text", icon: AlignLeft },
];

const ALL = [...PROFILES, ...CONTENT];
const STORAGE_KEY = "ranchito-a11y";

const DEFAULTS = Object.fromEntries(ALL.map((i) => [i.key, false])) as Record<ToggleKey, boolean>;

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [state, setState] = useState<Record<ToggleKey, boolean>>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    for (const item of ALL) {
      root.classList.toggle(`a11y-${item.key}`, state[item.key]);
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = (key: ToggleKey) => setState((s) => ({ ...s, [key]: !s[key] }));

  if (hidden) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open accessibility adjustments"
        className="fixed bottom-5 left-5 z-[60] flex h-13 w-13 items-center justify-center rounded-full bg-[#0b57e3] text-white shadow-xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b57e3]"
        style={{ height: 52, width: 52 }}
      >
        <Accessibility className="h-7 w-7" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex justify-start bg-black/40 p-0 sm:p-4" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility Adjustments"
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-[560px] flex-col overflow-hidden bg-white shadow-2xl sm:rounded-2xl"
          >
            <div className="relative bg-[#0b57e3] px-6 pb-8 pt-5 text-white">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close accessibility panel"
                className="absolute left-4 top-4 rounded p-1 hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 className="mt-6 text-center text-2xl font-semibold">Accessibility Adjustments</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setState(DEFAULTS)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b57e3] hover:bg-white/90"
                >
                  <RotateCcw className="h-4 w-4" /> Reset Settings
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setHidden(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b57e3] hover:bg-white/90"
                >
                  <X className="h-4 w-4" /> Hide Interface
                </button>
              </div>
            </div>

            <div className="-mt-4 flex-1 overflow-y-auto px-4 pb-8">
              <Group title="Customize your browsing experience" items={PROFILES} state={state} toggle={toggle} />
              <Group title="Content Adjustments" items={CONTENT} state={state} toggle={toggle} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Group({
  title,
  items,
  state,
  toggle,
}: {
  title: string;
  items: typeof PROFILES;
  state: Record<ToggleKey, boolean>;
  toggle: (k: ToggleKey) => void;
}) {
  return (
    <section className="mt-4 rounded-2xl bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
      <h3 className="px-1 pb-2 text-lg font-semibold text-neutral-800">{title}</h3>
      <ul className="divide-y divide-neutral-200">
        {items.map((item) => {
          const on = state[item.key];
          const Icon = item.icon;
          return (
            <li key={item.key} className="flex items-center gap-4 py-3">
              <button
                type="button"
                role="switch"
                aria-checked={on}
                aria-label={`${item.title}: ${on ? "on" : "off"}`}
                onClick={() => toggle(item.key)}
                className="relative flex h-9 w-[86px] shrink-0 items-center rounded-full bg-neutral-100 text-xs font-bold shadow-inner"
              >
                <span
                  className={`absolute top-1 h-7 w-[42px] rounded-full bg-white shadow transition-all ${on ? "left-[42px]" : "left-1"}`}
                />
                <span className={`relative z-10 flex-1 text-center ${on ? "text-neutral-400" : "text-neutral-700"}`}>
                  OFF
                </span>
                <span className={`relative z-10 flex-1 text-center ${on ? "text-[#0b57e3]" : "text-neutral-400"}`}>
                  ON
                </span>
              </button>
              <div className="min-w-0 flex-1">
                <p className={`font-semibold ${on ? "text-[#0b57e3]" : "text-neutral-800"}`}>{item.title}</p>
                <p className={`text-sm ${on ? "text-[#0b57e3]" : "text-neutral-500"}`}>{item.desc}</p>
              </div>
              <Icon className={`h-5 w-5 shrink-0 ${on ? "text-[#0b57e3]" : "text-neutral-700"}`} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
