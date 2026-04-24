import { BlurText } from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, FAQ_HEADLINE, FAQ_SUB, IS_FR } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
        <div className="md:sticky md:top-24 md:self-start flex flex-col gap-5 items-start">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80">
            FAQ
          </span>
          <BlurText
            text={FAQ_HEADLINE}
            className="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight mt-2"
          />
          <p className="font-body text-foreground/65 max-w-[36ch] leading-relaxed">
            {FAQ_SUB}
          </p>
          <Button variant="heroGlass" className="mt-3">
            {IS_FR ? "Nous contacter" : "Contact us"}
          </Button>
        </div>

        <Accordion type="single" collapsible>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-display uppercase text-lg md:text-xl tracking-tight py-6 hover:no-underline data-[state=open]:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/70 text-[15px] leading-relaxed pb-6 max-w-[60ch]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
