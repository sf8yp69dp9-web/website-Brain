import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_ITEMS, CTA } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        data-scrolled={scrolled}
        animate={{ top: scrolled ? 8 : 16 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100vw-32px))]"
      >
        <div className="liquid-glass rounded-full px-2 py-2 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 pl-3">
            <img src={BRAND.logoPath} alt="" className="h-6 w-auto" />
            <span className="font-display text-lg tracking-tight">{BRAND.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors font-body"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              variant="heroSolid"
              size="sm"
              className="rounded-full px-4 py-1.5 text-sm"
              asChild
            >
              <a href={CTA.href}>
                {CTA.label} <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden size-9 rounded-full liquid-glass-strong grid place-items-center mr-1"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] liquid-glass-strong flex flex-col md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg tracking-tight">{BRAND.name}</span>
            <button
              onClick={() => setOpen(false)}
              className="size-9 rounded-full liquid-glass grid place-items-center"
              aria-label="Close menu"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 mt-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase text-3xl py-3 text-foreground/90 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-6">
            <Button variant="hero" asChild className="w-full">
              <a href={CTA.href} onClick={() => setOpen(false)}>
                {CTA.label} <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
