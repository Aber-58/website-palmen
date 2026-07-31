# Psychotherapeutische Privatpraxis Kathrin Palmen

Dies ist der Quellcode für die Webseite der Psychotherapeutischen Privatpraxis von Kathrin Palmen in Waldkirch. Die Seite wurde entwickelt, um modern, einladend und performant zu sein, mit einem Fokus auf Ästhetik und Nutzerfreundlichkeit (UI/UX). Die Seite ist eine vollständig statische Astro-Site (kein Server-Runtime nötig) mit mehreren gerouteten Unterseiten (kein reiner One-Pager).

## 🛠 Technologie-Stack

- **Astro:** Modernes Static Site Generator Framework für extrem schnelle Ladezeiten.
- **Tailwind CSS:** Utility-First CSS Framework für das Styling.
- **Alpine.js:** Leichtgewichtiges JavaScript für Interaktivität (z.B. FAQ-WGs, Mobile Menü).
- **AOS (Animate On Scroll):** Bibliothek für Scroll-Animationen (`fade-up`, etc.).

---

## 📂 Projektstruktur & Dateierklärung

Hier ist eine Übersicht der wichtigsten Dateien und Ordner, damit sich neue Entwickler schnell zurechtfinden.

### `src/layouts/`
- **`Layout.astro`**: Das Hauptgerüst der Seite.
  - Enthält den `<head>` Bereich mit SEO-Meta-Tags, **Schema.org JSON-LD** (für Google Local SEO) und Open Graph Tags (für Social Media).
  - Beinhaltet die **Navigation (Navbar)** und den **Footer**.
  - Definiert globale Hintergrund-Elemente (z.B. die unscharfen "Orbs").

### `src/pages/`
- **`index.astro`**: Die Startseite. Importiert und platziert `Hero` und `Intro` untereinander.
- **`ueber-mich.astro`**: Eigene Seite mit `About.astro`.
- **`angebot.astro`**: Eigene Seite mit `Psychotherapie.astro` — die Hauptseite des Angebots.
- **`angebot/methoden.astro`**: Unterseite mit `Methoden.astro`. Bewusst nachgeordnet: erreichbar über das Dropdown im Kopf und einen Teaser am Ende von `/angebot`, aber ohne gleichrangigen Umschalter. Für Seminare ist eine eigene Webseite geplant.
- **`ablauf-kosten.astro`**: Eigene Seite mit `ProcessAndCosts.astro`.
- **`kontakt.astro`**: Eigene Seite mit `Contact.astro`.
- **`impressum.astro` & `datenschutz.astro`**: Rechtliche Pflichtseiten.

### `src/components/`
Dies sind die Bausteine der Webseite. Jede Datei repräsentiert einen Abschnitt auf der Startseite.

- **`Hero.astro`**: Der Startbildschirm ("Above the Fold").
  - Enthält das Hintergrundbild, die Haupt-Überschrift und Call-to-Action Buttons ("Termin vereinbaren").
  
- **`Intro.astro`**: Ein kurzer Einleitungstext ("Willkommen") direkt nach dem Hero-Bereich.

- **`About.astro`**: Der "Über Mich" Bereich.
  - Zeigt das Portraitbild.
  - Enthält den Text über die therapeutische Haltung.
  - Beinhaltet die Zeitleiste ("Mein Weg").

- **`Psychotherapie.astro`**: Arbeitsweise und Arbeitsschwerpunkte.
  - **Die sechs Schwerpunkte stehen als Liste `schwerpunkte` im Kopf der Datei.** Text, Farbe, Reihenfolge und Anzahl ändern sich dort an einer einzigen Stelle; das Markup wird daraus erzeugt. Vorher war jede Karte einzeln ausgeschrieben (~230 Zeilen Dublette).
  - Farben kommen aus den `thema-*`-Token in `tailwind.config.mjs`.

- **`Methoden.astro`**: Körper, Atem und kreativer Ausdruck als Ergänzung zur Therapie.

- **`ProcessAndCosts.astro`**: Der Bereich "Ablauf & Kosten".
  - **Ablauf-Timeline:** Visuelle Darstellung der 3 Schritte (Kontakt -> Probatorik -> Beginn).
  - **Kosten-Tabs:** Interaktive Tabs (Privat, Selbstzahler, Coaching) mit Preisen und Infos.
  - **FAQ:** Häufig gestellte Fragen (Akkordeon-Format).

- **`Contact.astro`**: Der "Kontakt" Bereich am Ende.
  - Kontaktkarten (Adresse, Telefon, E-Mail).
  - Google Maps Link.

- **`ScrollToTop.astro`**: Der kleine Pfeil-Button, der erscheint, wenn man nach unten scrollt.

### `public/`
- **`assets/`**: Statische Bilder, die unter fester URL erreichbar sein müssen — OG-Vorschaubild und Logo. **Nicht** für Inhaltsbilder verwenden, hier findet keine Optimierung statt.
- **`favicon.ico`**: Enthält 16/32/48/64 px, jede Größe mit eigener Strichstärke gerendert. Ein einfaches Verkleinern des 640-px-Logos ergibt unter 32 px einen grauen Fleck, weil die Strichzeichnung nur rund 10 % der Fläche bedeckt.

---

## 🖼 Bilder einbinden

**Immer nach `src/assets/` legen und mit `<Image />` aus `astro:assets` einbinden.** Astro erzeugt daraus automatisch WebP, liefert passende Größen je Bildschirm aus und lädt verzögert. Vorbilder: `Hero.astro` und `About.astro`.

```astro
---
import { Image } from "astro:assets";
import praxisraum from "../assets/praxisraum.jpg";
---
<Image src={praxisraum} alt="Therapieraum der Praxis mit Sesseln am Fenster" class="w-full h-auto rounded-3xl" />
```

**Was gebraucht wird, nach Wirkung sortiert:**

| Platz | Motiv | Format |
|---|---|---|
| `/kontakt` | Therapieraum — stärkstes Vertrauenssignal | quer, ab 2000 px breit |
| `/angebot` | Praxis oder Detailaufnahme | quer, ab 2000 px breit |
| `/ueber-mich` | zweites Porträt, Arbeitssituation statt Passfoto | hoch, ca. 1200 × 1500 px |
| `/ablauf-kosten` | Waldkirch oder Natur als Trenner | quer, ab 2000 px breit |

**Regeln:** JPEG direkt aus der Kamera, nicht vorher verkleinern — das macht Astro. Keine Personen außer Kathrin selbst; nichts, was Klientinnen oder Klienten identifizierbar macht. Zu jedem Bild gehört ein `alt`-Text, der beschreibt, was zu sehen ist.

**Offen:** Bildquellen und Lizenzen sind bisher nirgends dokumentiert. Beim Einbauen hier ergänzen.

### `src/assets/`
- Enthält die von `<Image />` optimierten Bilder (Hero-Hintergrund, Porträt) sowie das Kammer-Infoblatt `Infos_Privatpraxis_Therapeutenkammer.pdf` (aktuell nicht auf der Seite verlinkt — klären, ob und wo es veröffentlicht werden soll).

---

## 🎨 Design System (`tailwind.config.mjs`)

Das Design basiert auf einer zentralen Farbpalette, definiert in der `tailwind.config.mjs`. Änderungen hier wirken sich auf die gesamte Seite aus.

- **`primary` (Grün):** `#1a3c3b` (Deep Pine Green) – Hauptfarbe für Buttons, wichtige Elemente.
- **`secondary` (Sand):** `#D6CFC7` – Hintergrundakzente, weiche Elemente.
- **`secondary-dark`:** `#736553` – abgedunkeltes Sand für Icons und Text auf Sandflächen.
- **`background` (Leinen):** `#F9F9F7` – Seitenhintergrund.
- **`text` (Anthrazit):** `#2D2D2D` – Hauptschriftfarbe.
- **`muted`:** `#6B6B69` – gedämpfter Fließtext (5,1:1). **Ersetzt die früheren `text-text/50` und `/40`**, die mit 2,9:1 bzw. 2,3:1 durch die WCAG-Prüfung fielen.
- **`accent` (Terracotta):** `#E07A5F` – **nur für dekorative Flächen.** Auf Weiß nur 2,95:1, also nicht für Text oder Buttons geeignet.
- **`accent-dark`:** `#B14D30` – Terracotta für Text und Buttonflächen (5,3:1 auf Weiß, 5,0:1 auf Background).

### Regeln für Farben

- Für Text auf hellem Grund nur `text`, `text-text/80`, `text-text/70`, `muted`, `primary`, `accent-dark` oder `secondary-dark` verwenden.
- **Keine Alpha-Abstufungen unter `/70`** für Text – darunter reißt der Kontrast.
- `accent` nie mit weißer Schrift kombinieren.
- Neue Kombinationen vor dem Einbau nachrechnen (AA = 4,5:1 für Fließtext, 3:1 ab 24 px bzw. 18,66 px fett).

### Schriften

`Layout.astro` importiert gezielt einzelne Schnitte im `latin`-Subset: Lato 300/400/700, Cormorant Garamond 400/400-italic/600, Caveat 400. **Nicht auf den Sammel-Import (`@fontsource/lato`) zurückwechseln** – der liefert nur Weight 400, wodurch `font-light` wirkungslos wird und der Browser Fett und Kursiv künstlich erzeugt.

---

## 🚀 Installation & Starten

Um das Projekt lokal auf deinem Computer zu bearbeiten:

1.  **Repository klonen:**
    ```bash
    git clone <repository-url>
    cd website-palmen
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

3.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Die Seite ist dann unter `http://localhost:4321` erreichbar.

4.  **Seite bauen (für Produktion):**
    ```bash
    npm run build
    ```
    Erstellt den fertigen Code im Ordner `dist/`.

---

## ✅ Checkliste für Änderungen

Wenn du an der Seite arbeitest, achte auf Folgendes:
*   **Responsive Design:** Teste Änderungen immer auch auf mobilen Ansichten (Tailwind `md:`, `lg:` Klassen).
*   **Barrierefreiheit:** Nutze semantisches HTML und `aria-labels` wo nötig.
*   **SEO:** Texte in `Layout.astro` oder den Komponenten anpassen, wenn sich Keywords ändern. Die technischen Meta-Tags und Schema.org Daten werden im `Layout.astro` verwaltet.
