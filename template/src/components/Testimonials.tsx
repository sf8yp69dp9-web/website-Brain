import { Quote } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { TESTIMONIALS, TESTIMONIALS_HEADLINE, UI } from "@/lib/content";

type T = (typeof TESTIMONIALS)[number];

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) {
    return parts[0]!.slice(0, 2).toLocaleUpperCase("de-DE");
  }
  const a = parts[0]![0]?.toLocaleUpperCase("de-DE") ?? "";
  const b = parts[parts.length - 1]![0]?.toLocaleUpperCase("de-DE") ?? "";
  return (a + b).slice(0, 2) || "?";
}

function Card({ quote, name, role }: T) {
  const initials = initialsFromName(name);
  return (
    <div className="ristorante-card rounded-2xl p-7 w-[340px] md:w-[400px] shrink-0 flex flex-col gap-5">
      <Quote className="size-5 text-primary/70" />
      <p className="font-body text-foreground/85 italic leading-relaxed text-[15px]">
        {quote}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div
          className="size-9 shrink-0 rounded-full bg-gradient-to-br from-primary/70 to-secondary/70 ring-1 ring-inset ring-foreground/10 flex items-center justify-center shadow-inner"
          title={name}
          aria-hidden
        >
          <span className="font-display text-[11px] font-semibold leading-none tracking-tight text-white/95 drop-shadow-sm">
            {initials}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-body font-medium text-sm">{name}</span>
          <span className="font-body text-xs text-foreground/55 uppercase tracking-wide">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const rowA = [...TESTIMONIALS, ...TESTIMONIALS];
  const split = Math.ceil(TESTIMONIALS.length / 2);
  const second = [...TESTIMONIALS.slice(split), ...TESTIMONIALS.slice(0, split)];
  const rowB = [...second, ...second];

  return (
    <section id="testimonials" className="relative py-28 md:py-40 border-t border-primary/10">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col items-start gap-5">
        <span className="pill-label">{UI.testimonialsKicker}</span>
        <BlurText
          text={TESTIMONIALS_HEADLINE}
          className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[22ch]"
        />
      </div>

      <div
        className="group relative mt-16 flex flex-col gap-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {rowA.map((t, i) => (
            <Card key={`a-${i}`} {...t} />
          ))}
        </div>
        <div
          className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee-rev 32s linear infinite" }}
        >
          {rowB.map((t, i) => (
            <Card key={`b-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
