import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { BlurText } from "@/components/BlurText";
import { STATS, STATS_BG_VIDEO, IS_FR } from "@/lib/content";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView && match) {
      const controls = animate(count, target, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, target, count, match]);

  if (!match) {
    return <span ref={ref}>{value}</span>;
  }
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={STATS_BG_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)" }}
      />
      <div className="absolute top-0 inset-x-0 h-[200px] gradient-fade-t z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] gradient-fade-b z-[1]" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        <div className="flex flex-col items-center gap-5 text-center mb-12">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80">
            {IS_FR ? "Les chiffres" : "By the numbers"}
          </span>
          <BlurText
            text={IS_FR ? "Preuves, pas promesses." : "Proof, not promises."}
            className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[18ch]"
          />
        </div>

        <div className="liquid-glass rounded-3xl p-10 md:p-14 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((s, i) => (
              <div key={i} className="relative flex flex-col">
                <span className="font-display italic text-5xl md:text-6xl lg:text-7xl leading-none text-foreground">
                  <StatValue value={s.value} />
                </span>
                <span className="font-body text-sm text-foreground/60 mt-3 tracking-wide uppercase">
                  {s.label}
                </span>
                {i < STATS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-6 w-px h-12 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
