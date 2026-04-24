import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/BlurText";
import {
  CTA_SECTION,
  CTA,
  FOOTER_LINKS,
  COPYRIGHT,
} from "@/lib/content";

export function CtaFooter() {
  return (
    <section
      id="cta"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden border-t border-border/40"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        src={CTA_SECTION.bgVideo}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="absolute top-0 inset-x-0 h-[200px] gradient-fade-t z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] gradient-fade-b z-[1]" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-28">
        <BlurText
          as="h2"
          text={CTA_SECTION.headline}
          className="font-display italic text-[clamp(56px,10vw,180px)] leading-[0.88] tracking-[-0.02em] text-center max-w-[16ch]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-8 font-body text-base md:text-lg text-foreground/75 max-w-xl text-center"
        >
          {CTA_SECTION.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 flex items-center gap-3 flex-wrap justify-center"
        >
          <Button variant="hero" asChild>
            <a href={CTA.href}>
              {CTA.label} <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button variant="heroGlass">{CTA_SECTION.secondary}</Button>
        </motion.div>
      </div>

      <div className="relative z-10 w-full border-t border-border/40">
        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-foreground/50">{COPYRIGHT}</span>
          <nav className="flex items-center gap-6">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs text-foreground/50 hover:text-foreground/80 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
