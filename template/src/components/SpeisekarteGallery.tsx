import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { SPEISEKARTE_PAGES, UI, MENU_EXTERNAL_URL, linkPropsForHref } from "@/lib/content";

export function SpeisekarteGallery() {
  return (
    <section
      id="speisekarte"
      className="relative py-24 md:py-32 border-t border-primary/15 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,hsl(218_24%_14%/0.28),transparent_55%)]"
    >
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="pill-label mb-4 inline-block">{UI.speisekarteKicker}</span>
          <BlurText
            text={UI.speisekarteHeadline}
            className="font-display uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight"
          />
          <p className="mt-5 font-body text-foreground/70 text-base md:text-lg leading-relaxed">
            {UI.speisekarteSub}
          </p>
          <a
            href={MENU_EXTERNAL_URL}
            {...linkPropsForHref(MENU_EXTERNAL_URL)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/85 transition-colors"
          >
            Auf der Original-Website öffnen
            <ExternalLink className="size-3.5 shrink-0" aria-hidden />
          </a>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0">
          {SPEISEKARTE_PAGES.map((page, i) => (
            <motion.li
              key={page.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.35) }}
              className="ristorante-card rounded-2xl overflow-hidden p-1.5 shadow-lg shadow-black/25"
            >
              <a
                href={page.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
              >
                <figure className="m-0">
                  <img
                    src={page.src}
                    alt={page.alt}
                    width={724}
                    height={1024}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-auto rounded-lg bg-muted object-cover"
                  />
                  <figcaption className="px-2 pt-2 pb-1 font-body text-xs text-foreground/55 text-center">
                    {page.alt}
                  </figcaption>
                </figure>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
