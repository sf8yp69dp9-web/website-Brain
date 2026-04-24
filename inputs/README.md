# inputs — pro Projekt befüllen

Hier liegen **Vorlagen**, die du bei einem **neuen, separaten** Site-Projekt ins jeweilige Projektroot legst (dort wo auch `package.json` liegt).

## Dateien

| Datei | Verwendung |
|--------|------------|
| `WEBSITE-PLANE.template.md` | Kopieren → `WEBSITE-PLANE.md` im Kundenordner; Positioning, Sections, Ton, CTAs festhalten. |
| `GOOGLE.url.example.txt` | Umbenennen zu `GOOGLE.url.txt` und **eine Zeile**: vollständige Google-Maps-URL zum Lokal. |

Der Agent (Cursor) soll zuerst **WEBSITE-PLANE** + **Google-URL** lesen, dann **`docs/GOOGLE-INGEST.md`**, dann `src/lib/content.ts` und `index.html` anpassen.

**Tipp:** Wenn das Kundenrepo **ohne** den Brain-Ordner geöffnet wird, kopiere `docs/GOOGLE-INGEST.md` und `docs/FAST-TRACK.md` einmalig mit ins Projekt (z. B. nach `docs/client-onboarding/`), damit die Pfade stimmen.
