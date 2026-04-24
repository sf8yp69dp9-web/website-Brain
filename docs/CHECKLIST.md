# Pre-Ship Checklist

Abhaken vor jedem Release. Entspricht `prompt.md` Sektion 22 (Anti-Slop) + 23 (Verification).

## Build

- [ ] `npm run dev` startet ohne Error und öffnet eine Localhost-URL.
- [ ] `npm run build` läuft ohne TypeScript- oder Vite-Error durch.
- [ ] `npm run preview` rendert identisch zu dev.

## Hero / Frame-Sequence

- [ ] Erster Paint zeigt `frame_0001.jpg` innerhalb von 300ms.
- [ ] Scrollen scrubbt die Canvas smooth (kein Stall > 50ms).
- [ ] Mindestens `FRAME_COUNT / 2.5` verschiedene Frames während des Scrolls sichtbar.
- [ ] Keine 404s auf `frame_*` URLs im Network-Tab.
- [ ] `<link rel="preload" ...>` für erstes Frame in `index.html` vorhanden.

## Sections

- [ ] Navbar: Pill reduziert `top-4` → `top-2` bei Scroll > 40px.
- [ ] Navbar Mobile (< md): Burger öffnet Full-Screen Sheet mit Links.
- [ ] ServicesBento: 6 Karten, asymmetrischer Bento-Grid auf Desktop.
- [ ] Pourquoi: 4 Karten, gleichhoch, bottom-accent rendert.
- [ ] Process: Nummern in 140px Display-Type, Connector-Linien auf Desktop.
- [ ] Stats: Zahlen zählen von 0 hoch wenn in View, Suffix bleibt stabil.
- [ ] Testimonials: Zwei Marquee-Reihen, gegenläufig, pausieren bei Hover.
- [ ] FAQ: Accordion öffnet/schließt mit smoother height-animation.
- [ ] CTA-Footer: Italic-Headline, zwei CTAs, Footer-Links rendern.

## Anti-Slop

- [ ] Keine Emoji anywhere (Copy, Cards, Buttons).
- [ ] Keine default violet/purple Gradients.
- [ ] Keine `shadow-2xl` auf liquid-glass Karten.
- [ ] Buttons `rounded-full`, Karten `rounded-2xl` — keine `rounded-xl` Mittelstufen.
- [ ] Keine Lorem-Platzhalter im Output.
- [ ] Body-Paragraphen links-aligned (außer Hero + CTA).
- [ ] Alle Headings entweder `font-display uppercase tracking-tight` ODER `font-display italic` — nie beides gleichzeitig.
- [ ] Jede Section hat Badge + BlurText + Sub (außer Hero und Footer).
- [ ] Nur lucide-react Icons.
- [ ] Kein `<video>` im Hero (Canvas only).
- [ ] Keine motion-Transitions > 0.9s.
- [ ] Keine `console.log`, kein commented-out Code, keine unused Imports.

## Responsive

- [ ] 375px (iPhone SE): kein horizontaler Scroll.
- [ ] Bento kollabiert zu 1 Spalte.
- [ ] Testimonials-Marquee animiert weiter.
- [ ] Hero Scrub rendert (auf Mobile ok wenn langsamer).

## Accessibility

- [ ] Jedes interaktive Element hat `focus-visible` Ring.
- [ ] Canvas hat `aria-hidden="true"`.
- [ ] Hero hat `<p className="sr-only">` als Beschreibung.
- [ ] Nav-Links haben lesbaren `aria-label` wenn nur Icon.

## Performance

- [ ] Lighthouse Performance ≥ 85 (Desktop).
- [ ] LCP < 2.5s auf 10 Mbps.
- [ ] Public `frames/` Ordner < 20 MB (Vercel Hobby limit = 100 MB total).
- [ ] Keine ungenutzten Fonts geladen (nur benötigte weights in index.css).

## Konsole

- [ ] Keine React warnings.
- [ ] Keine unhandled promise rejections.
- [ ] Keine 404s.
