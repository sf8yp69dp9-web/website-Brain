/**
 * Single source of truth for all copy, services, testimonials, FAQ, CTA, etc.
 * Every section reads from here. To localize the site, edit only this file.
 */

export const LANG = "en-US";
export const IS_FR = LANG.startsWith("fr");

export const BRAND = {
  name: "Atelier",
  tagline: "Built for what's next",
  logoPath: "/logo.svg",
};

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const CTA = {
  label: "Get Started",
  href: "#cta",
};

export const HERO = {
  badge: IS_FR ? "Nouveau" : "New",
  headline: "Move, quietly.",
  sub: "One move. Zero friction. The craft of relocation, signed Atelier.",
  primary: "Start now",
  secondary: "Watch film",
};

export const PARTNERS: string[] = [
  "Christie's",
  "Sotheby's",
  "Piaget",
  "Hermès",
  "Rolex",
];

export type IconName =
  | "Truck" | "Package" | "Warehouse" | "Globe" | "Building2" | "Sparkles"
  | "ShieldCheck" | "Clock" | "Leaf" | "Award";

export const SERVICES_HEADLINE = IS_FR
  ? "Tout ce qui bouge. Sous un seul toit."
  : "Everything that moves. Under one roof.";

export const SERVICES: { icon: IconName; title: string; body: string }[] = [
  { icon: "Truck",     title: "Relocation",   body: "Door-to-door white-glove relocation. Every object logged, wrapped, insured." },
  { icon: "Package",   title: "Packing",      body: "Custom crates for fine art, antiques, and furniture. Museum-grade materials." },
  { icon: "Warehouse", title: "Storage",      body: "Climate-controlled vaults. 24/7 monitoring. Flexible terms." },
  { icon: "Globe",     title: "International", body: "Customs, shipping, and settling-in — handled end-to-end across 40+ countries." },
  { icon: "Building2", title: "Offices",      body: "Weekend-overnight corporate relocations with zero downtime." },
  { icon: "Sparkles",  title: "Bespoke",      body: "A piano at 3am. A vault at 3m deep. If it's complex, it's ours." },
];

export const REASONS_HEADLINE = IS_FR
  ? "Pourquoi nous choisir."
  : "Why choose us.";

export const REASONS_SUB = IS_FR
  ? "Quatre raisons, signées dans chaque contrat."
  : "Four reasons, signed into every contract.";

export const REASONS: { icon: IconName; title: string; body: string }[] = [
  { icon: "ShieldCheck", title: "Fully insured",    body: "Full replacement value coverage on every engagement — no exceptions, no exclusions." },
  { icon: "Clock",       title: "On time",          body: "Punctuality written into the contract. Miss the window, discount the invoice." },
  { icon: "Leaf",        title: "Low impact",       body: "Reusable crates, biofuel fleet, carbon-offset on every route." },
  { icon: "Award",       title: "Certified",        body: "Swiss Moving Association, FIDI FAIM, ISO 9001. Audited annually." },
];

export const PROCESS_HEADLINE = IS_FR
  ? "Quatre étapes. Zéro friction."
  : "Four steps. Zero friction.";

export const PROCESS_STEPS: { n: string; title: string; body: string }[] = [
  { n: "1", title: "Brief",   body: "A 30-minute call or in-home visit. We map what moves, when, and how." },
  { n: "2", title: "Plan",    body: "Detailed quote within 24 hours. Fixed price, itemized, no surprises." },
  { n: "3", title: "Move",    body: "On the day: a dedicated team, a single point of contact, live updates." },
  { n: "4", title: "Settle",  body: "Unpacking, placement, disposal of packing material. You open doors, we close the job." },
];

export const STATS_BG_VIDEO = "https://stream.mux.com/placeholder.m3u8";

export const STATS: { value: string; label: string }[] = [
  { value: "2500+", label: "Relocations" },
  { value: "98%",   label: "Client satisfaction" },
  { value: "24h",   label: "Quote turnaround" },
  { value: "15 yrs",label: "In the trade" },
];

export const TESTIMONIALS_HEADLINE = IS_FR
  ? "Ils parlent mieux que nous."
  : "Don't take our word for it.";

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  { quote: "They moved a 400-year-old harpsichord without a scratch. I didn't think that was possible.", name: "Claire Lambert",    role: "Collector, Geneva" },
  { quote: "We relocated an entire floor over a weekend. Monday morning, nobody noticed anything had moved.", name: "Marc Dubois",        role: "COO, FinTech SA" },
  { quote: "The level of attention to detail is absurd in the best way. Every box, numbered and photographed.", name: "Sofia Renard",       role: "Private Client" },
  { quote: "Swiss precision is a cliché until you see it applied to a moving truck.",                      name: "Jan Hartmann",       role: "CEO, Zurich" },
  { quote: "I've used five movers in ten years. None came close.",                                         name: "Elena Visconti",     role: "Art Advisor, Milan" },
  { quote: "They packed a Calder mobile in a custom crate built overnight. Overnight.",                   name: "David Okonkwo",      role: "Gallerist, London" },
];

export const FAQ_HEADLINE = IS_FR
  ? "Questions fréquentes."
  : "Frequently asked.";

export const FAQ_SUB = IS_FR
  ? "Rien trouvé ici ? Un entretien de 15 minutes répond à tout."
  : "Not here? A 15-minute call answers the rest.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "How far in advance should I book?",
    a: "Two to four weeks for standard moves. For international or specialty (pianos, art, vaults), six to eight weeks is ideal — but we've turned around 72-hour emergency moves." },
  { q: "Do you handle fine art and antiques?",
    a: "Yes — this is a core specialty. We work with custom crating, conservation-grade materials, climate-controlled transit, and can coordinate with your insurer and conservator." },
  { q: "What's included in the quote?",
    a: "Packing materials, labor, transit, insurance, unpacking, and disposal of packing. Storage, customs, and specialty crating are line-itemed separately and disclosed up-front." },
  { q: "Are you insured?",
    a: "Fully. Every move carries full replacement value coverage. You receive the certificate before the truck arrives." },
  { q: "Can you store items between moves?",
    a: "Yes. Climate-controlled vaults in Geneva, Zurich, and Lugano. Minimum one month, flexible from there. 24/7 security and environmental monitoring." },
  { q: "Do you move internationally?",
    a: "Yes — 40+ countries. We handle customs, documentation, shipping, settling-in, and local compliance. Partner network audited to our own standard." },
];

export const CTA_SECTION = {
  headline: IS_FR ? "Prêts à partir ?" : "Ready to move?",
  sub: IS_FR ? "Un entretien. Un plan. Un déménagement." : "One call. One plan. One move.",
  bgVideo: "https://stream.mux.com/placeholder-cta.m3u8",
  secondary: IS_FR ? "Nos tarifs" : "Pricing",
};

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Legal",     href: "/legal" },
  { label: "Privacy",   href: "/privacy" },
  { label: "Terms",     href: "/terms" },
  { label: "Contact",   href: "/contact" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.`;
