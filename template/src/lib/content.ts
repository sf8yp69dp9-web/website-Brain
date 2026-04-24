/**
 * Lago di Garda Magdeburg — Inhalte synchron mit https://lagodigardamagdeburg.de/ (WordPress-Startseite).
 * Google-Zahlen (Bewertung/Anzahl) bei Abweichung in Maps bitte in GOOGLE_PLACE anpassen.
 */

export const LANG = "de-DE";
export const IS_FR = LANG.startsWith("fr");

/** Leer lassen oder volle Video-URL (WebM/MP4). Überschreibt lokales `public/hero.webm`. */
export const HERO_VIDEO_REMOTE = "";

/** Für `http(s)`: neuer Tab; für `tel:` / `mailto:` / Anker: gleicher Tab. */
export function linkPropsForHref(href: string): {
  target?: "_blank";
  rel?: string;
} {
  if (href.startsWith("http")) return { target: "_blank", rel: "noopener noreferrer" };
  return {};
}

export const UI = {
  trustedBy: "Frische Zutaten · italienische Spezialitäten",
  servicesKicker: "Speisekarte & Genuss",
  speisekarteKicker: "Menükarte",
  speisekarteHeadline: "Speisekarte",
  speisekarteSub:
    "Alle Kapitel wie auf https://lagodigardamagdeburg.de/speisekarte/ — hier als Bilder eingebunden (Menü-PNGs lokal; Startseiten-Texte an WP angeglichen, Stand Quelle: Sept. 2025).",
  whyKicker: "Seit 2006 in Magdeburg",
  processKicker: "Ihr Besuch",
  testimonialsKicker: "Gästestimmen",
  statsKicker: "Öffnungszeiten",
  statsHeadline: "Wann wir für Sie da sind",
  faqCta: "Jetzt anrufen",
  mapKicker: "Anfahrt",
  mapHeadline: "Universitätsplatz · Magdeburger Altstadt",
};

export const BRAND = {
  name: "Lago di Garda",
  tagline: "Italienisches Restaurant Magdeburg",
  /** Favicon von lagodigardamagdeburg.de (Gabel/Löffel). */
  logoPath: "/favicon-lago.png",
};

/** Google Maps / Bewertungen — Zahlen bei Bedarf an die aktuelle Place-Karte anpassen. */
export const GOOGLE_PLACE = {
  rating: 4.5,
  reviewCount: 1870,
  label: "Restaurant am Universitätsplatz",
  description:
    "Mitten in der Altstadt, unweit vom Theater und dem Breiten Weg: italienische Küche mit Buffet und à-la-carte-Karte — seit 2006 für Magdeburg da.",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lago+di+Garda+Universitätsplatz+10+39104+Magdeburg&hl=de",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Universitätsplatz+10,+39104+Magdeburg&hl=de",
  embedUrl:
    "https://maps.google.com/maps?q=Universitätsplatz%2010%2C%2039104%20Magdeburg&t=m&z=13&output=embed&iwloc=near",
};

export const RESERVE_URL = "tel:+493915639658";

/** In-page Speisekarte (Bildergalerie unter `#speisekarte`). */
export const MENU_URL = "#speisekarte";

/** Original-WordPress-Seite (extern). */
export const MENU_EXTERNAL_URL = "https://lagodigardamagdeburg.de/speisekarte/";

/** 15 Menü-Seiten als PNG (724×1024) aus dem offiziellen WordPress-Upload. */
export const SPEISEKARTE_PAGES: { src: string; alt: string }[] = [
  { src: "/speisekarte/01-Lago-di-Garda-1-724x1024.png", alt: "Speisekarte — Titelseite" },
  { src: "/speisekarte/02-Aperitifs-1-724x1024.png", alt: "Aperitifs" },
  { src: "/speisekarte/03-Vorspeisen-1-724x1024.png", alt: "Vorspeisen" },
  { src: "/speisekarte/04-Insalate-1-724x1024.png", alt: "Insalate" },
  { src: "/speisekarte/05-Pizza-1-724x1024.png", alt: "Pizza" },
  { src: "/speisekarte/06-Pasta-1-724x1024.png", alt: "Pasta" },
  { src: "/speisekarte/07-Carne-di-Maiale-1-724x1024.png", alt: "Carne di Maiale" },
  { src: "/speisekarte/08-Carne-di-Manzo-1-724x1024.png", alt: "Carne di Manzo" },
  { src: "/speisekarte/09-Dolce-1-724x1024.png", alt: "Dolce" },
  { src: "/speisekarte/10-Offener-Wein-1-724x1024.png", alt: "Offener Wein" },
  { src: "/speisekarte/11-Italienische-Flaschenweine-1-724x1024.png", alt: "Italienische Flaschenweine" },
  { src: "/speisekarte/12-Heisse-Getraenke-1-724x1024.png", alt: "Heiße Getränke" },
  { src: "/speisekarte/13-Spirituosen-1-724x1024.png", alt: "Spirituosen" },
  { src: "/speisekarte/14-Cocktails-1-724x1024.png", alt: "Cocktails" },
  { src: "/speisekarte/15-Allergene-1-724x1024.png", alt: "Allergene" },
];

export const HERO_VIDEO: {
  srcWebm: string;
  srcMp4?: string;
  poster?: string;
} = {
  srcWebm: "/hero.webm",
  srcMp4: "/hero.mp4",
  /** Motiv wie WP-Startseite (Hero-Hintergrund xxx-scaled). */
  poster: "/hero-poster-lago.jpg",
};

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Angebot", href: "#services" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Warum wir", href: "#why" },
  { label: "Ablauf", href: "#process" },
  { label: "Zeiten", href: "#hours" },
  { label: "Gäste", href: "#testimonials" },
  { label: "Anfahrt", href: "#lage" },
  { label: "Fragen", href: "#faq" },
];

export const CTA = {
  label: "Tisch reservieren",
  href: RESERVE_URL,
};

export const HERO = {
  badge: "Italienisches Restaurant",
  headline: "Lago di Garda",
  headlineLine2: "Magdeburg",
  sub:
    "Dienstag bis Sonntag von 11:00 Uhr bis 0:00 Uhr für Sie geöffnet. Seit 2006 füllen wir mit unserem köstlichen Angebot Magdeburgs Bäuche — frische Zutaten, sorgfältig ausgesucht, mit reichhaltigem Buffet und à la carte.",
  primary: "Tisch reservieren",
  secondary: "Zu unserem Menü",
};

export const PARTNERS: string[] = [
  "Reichhaltiges Buffet",
  "À la carte",
  "Pizza & Pasta",
  "Kaffee & Wein",
];

export type IconName =
  | "Flame"
  | "UtensilsCrossed"
  | "Wine"
  | "MapPin"
  | "Clock"
  | "Heart";

export const SERVICES_HEADLINE = "Was Sie bei uns erwartet";

export const SERVICES: {
  icon: IconName;
  title: string;
  body: string;
  image: string;
}[] = [
  {
    icon: "UtensilsCrossed",
    title: "À la carte",
    body: "Exzellent, einzigartig, genau nach Ihrem Anspruch — erleben Sie unser kulinarisches Niveau und wählen Sie frei Speisen und Getränke anhand unserer Menükarte.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/11-scaled.jpg",
  },
  {
    icon: "Flame",
    title: "Unschlagbares Buffet",
    body: "Suchen Sie sich bei unserem reichhaltigen Buffet Ihre persönlichen Favoriten aus und lassen Sie sich von unseren vielfältigen Zutaten begeistern.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/2-scaled.jpg",
  },
  {
    icon: "Heart",
    title: "Frisch & mit Liebe",
    body: "Seit 2006 köstliches Essen aus frischen Zutaten, sorgfältig ausgesucht — damit Qualität und Geschmack dauerhaft stimmen.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/3-scaled.jpg",
  },
  {
    icon: "Wine",
    title: "Frischer Genuss",
    body: "Nach dem Essen bleiben Sie in unserem Ambiente: frisch gerösteter Kaffee oder der Wein Ihres Begehrens — fragen Sie unser Personal.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/6-1024x645.jpg",
  },
  {
    icon: "MapPin",
    title: "Die Lage",
    body: "Universitätsplatz 10 — zentral in der Altstadt, nah an Universität, Geschäftsmeile und Theater.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/4-scaled.jpg",
  },
  {
    icon: "Clock",
    title: "Öffnungszeiten",
    body: "Dienstag bis Sonntag von 11:00 Uhr bis 0:00 Uhr — spontan ist oft möglich, zu Stoßzeiten lohnt sich ein kurzer Anruf.",
    image: "https://lagodigardamagdeburg.de/wp-content/uploads/2021/09/22-scaled.jpg",
  },
];

export const REASONS_HEADLINE = "Warum Gäste wiederkommen";

export const REASONS_SUB =
  "Ehrliche Küche, große Portionen und ein Team, das auch in vollem Haus freundlich bleibt.";

export const REASONS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "Heart",
    title: "Gastfreundschaft",
    body: "Freundliches Personal und gute Laune — genau das, was unsere Gäste an uns schätzen.",
  },
  {
    icon: "Flame",
    title: "Geschmack & Qualität",
    body: "Pizza, Pasta, Lasagne und mehr: schön angerichtet, großzügig portioniert, immer frisch.",
  },
  {
    icon: "Wine",
    title: "Rundum satt werden",
    body: "Umfangreiche Karte, Buffet und Getränke — für Familien, Studierende und Feierabend gleichermaßen.",
  },
  {
    icon: "MapPin",
    title: "Ambiente & Lage",
    body: "Gemütliche Inneneinrichtung mitten in Magdeburg — ideal vor oder nach dem Stadtbummel.",
  },
];

export const PROCESS_HEADLINE = "So läuft Ihr Besuch";

export const PROCESS_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "Tisch sichern",
    body: "Rufen Sie uns an oder kommen Sie spontan vorbei — besonders abends lohnt sich ein kurzer Anruf.",
  },
  {
    n: "2",
    title: "Buffet oder Karte",
    body: "Wählen Sie vom Buffet oder bestellen Sie à la carte — wie es Ihnen beliebt.",
  },
  {
    n: "3",
    title: "Genießen",
    body: "Lehnen Sie sich zurück: frische Gerichte, entspannte Atmosphäre, Zeit zum Plaudern.",
  },
  {
    n: "4",
    title: "Ausklang",
    body: "Kaffee oder ein Glas Wein — genießen Sie den Abend, solange Sie möchten (bis 0:00 Uhr).",
  },
];

export const OPENING_ROWS: { days: string; hours: string }[] = [
  { days: "Montag", hours: "Ruhetag" },
  { days: "Dienstag – Sonntag", hours: "11:00 – 0:00 Uhr" },
];

export const OPENING_NOTE =
  "Weitere Vereinbarungen nach Absprache möglich — fragen Sie unser Personal.";

export const TESTIMONIALS_HEADLINE = "Überzeugen Sie sich selbst";

/**
 * Zitate aus öffentlichen Google-Maps-Rezensionen (Name + Text wie dort abrufbar).
 * Stand: Abruf April 2026 — bei Änderungen in Maps bitte hier und optional die Jahreszahl anpassen.
 */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Klasse Mittagsangebot, absolut empfehlenswert, da nicht nur günstig sondern auch lecker. Sowohl die Pizzen als auch die Pastagerichte schmecken authentisch italienisch.",
    name: "Emma Jack",
    role: "Google-Rezension",
  },
  {
    quote:
      "Das Essen war sehr lecker. Obwohl das Restaurant sehr sehr voll war, lag die Wartezeit auf das Essen bei unter 30 min. Kellner waren trotz Stress sehr umsichtig und nett. Mein Fazit, bester Italiener in Magdeburg, ist nur weiter zu empfehlen",
    name: "Chris Bosse",
    role: "Google-Rezension",
  },
  {
    quote:
      "Sehr gute Küche, Speisen gut abgeschmeckt und wirklich fein in der Würze. Kann man empfehlen.",
    name: "Anke Körber",
    role: "Google-Rezension",
  },
  {
    quote:
      "Sehr nettes Personal, tolles Lokal und wirklich leckeres Essen. Der Mittagstisch ist auch immer wieder zu empfehlen.",
    name: "Robert Engel",
    role: "Google-Rezension",
  },
  {
    quote:
      "Sehr lecker, Preis Leistung waren sehr gut. Personal sehr freundlich und nett. Bis zum nächsten mal.",
    name: "Maik Eberling",
    role: "Google-Rezension",
  },
];

export const FAQ_HEADLINE = "Häufige Fragen";

export const FAQ_SUB =
  "Wenn Ihre Frage nicht dabei ist, erreichen Sie uns telefonisch oder per E-Mail — wir helfen gern.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Brauche ich eine Reservierung?",
    a: "Spontane Plätze sind oft möglich — zu Stoßzeiten und am Wochenende empfehlen wir einen kurzen Anruf unter 0391 5639658.",
  },
  {
    q: "Wo liegt das Restaurant?",
    a: "Universitätsplatz 10, 39104 Magdeburg — in der Altstadt, gut erreichbar zu Fuß und mit öffentlichen Verkehrsmitteln. Den Routenplaner finden Sie weiter unten auf der Karte.",
  },
  {
    q: "Gibt es die Speisekarte online?",
    a: "Ja — weiter unten auf dieser Seite finden Sie alle Kapitel der Speisekarte als Bilder. Alternativ: https://lagodigardamagdeburg.de/speisekarte/",
  },
  {
    q: "Wann haben Sie geöffnet?",
    a: "Dienstag bis Sonntag von 11:00 bis 0:00 Uhr. Montags haben wir Ruhetag — weitere Vereinbarungen sind nach Absprache möglich.",
  },
  {
    q: "Wie erreiche ich Sie telefonisch oder per Mail?",
    a: "Telefon: 0391 5639658. E-Mail: info@lagodigardamagdeburg.de",
  },
];

export const CTA_SECTION = {
  headline: "Wir freuen uns auf Ihren Besuch!",
  sub: "Italienische Spezialitäten, Buffet und à la carte — kommen Sie vorbei und überzeugen Sie sich selbst.",
  secondary: "Zu unserem Menü",
};

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "lagodigardamagdeburg.de", href: "https://lagodigardamagdeburg.de/" },
  { label: "Speisekarte", href: MENU_URL },
  { label: "Anrufen", href: RESERVE_URL },
  { label: "Google & Karte", href: "#lage" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "https://lagodigardamagdeburg.de/impressum/" },
  { label: "Datenschutz", href: "https://lagodigardamagdeburg.de/privacy-policy/" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} ${BRAND.name} · Universitätsplatz 10, 39104 Magdeburg`;

export const CONTACT = {
  street: "Universitätsplatz 10",
  zip: "39104 Magdeburg",
  phone: "0391 5639658",
  phoneHref: "tel:+493915639658",
  email: "info@lagodigardamagdeburg.de",
  emailHref: "mailto:info@lagodigardamagdeburg.de",
};
