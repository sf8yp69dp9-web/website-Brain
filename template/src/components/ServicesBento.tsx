import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { iconMap } from "@/lib/icons";
import { SERVICES, SERVICES_HEADLINE, IS_FR } from "@/lib/content";

const cardSpans = [
  "md:row-span-2 md:col-span-1 p-8 min-h-[480px]",
  "md:col-span-1 p-6 min-h-[228px]",
  "md:col-span-1 p-6 min-h-[228px]",
  "md:col-span-2 p-7 min-h-[228px]",
  "md:col-span-1 p-6 min-h-[228px]",
  "md:col-span-3 p-7 min-h-[200px]",
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-start gap-5 mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80">
            {IS_FR ? "Nos services" : "What we do"}
          </span>
          <BlurText
            text={SERVICES_HEADLINE}
            className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[20ch]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-min">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className={`liquid-glass rounded-2xl relative overflow-hidden group ${cardSpans[i] ?? "md:col-span-1 p-6"}`}
              >
                <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5">
                  <Icon className="size-5 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3 max-w-[18ch]">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-foreground/65 max-w-[38ch] leading-relaxed">
                  {s.body}
                </p>
                <ArrowUpRight className="absolute top-6 right-6 size-5 text-foreground/30 group-hover:text-foreground/80 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
