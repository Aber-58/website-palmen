# Psychotherapeutische Privatpraxis Albert Palmen

Dies ist der Quellcode für die Webseite der Psychotherapeutischen Privatpraxis von Albert Palmen in Waldkirch. Die Seite wurde entwickelt, um modern, einladend und performant zu sein, mit einem Fokus auf Ästhetik und Nutzerfreundlichkeit (UI/UX).

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
- **`index.astro`**: Die Startseite (One-Pager). Sie importiert und platziert alle Hauptkomponenten (`Hero`, `About`, `Services`, etc.) untereinander.
- **`ueber-mich.astro`, `angebot.astro`, etc.**: Weiterleitungen oder Unterseiten (in diesem Projekt als One-Pager konzipiert, aber Dateien existieren für Struktur/SEO).
- **`impressum.astro` & `datenschutz.astro`**: Rechtliche Pflichtseiten.

### `src/components/`
Dies sind die Bausteine der Webseite. Jede Datei repräsentiert einen Abschnitt auf der Startseite.

- **`Hero.astro`**: Der Startbildschirm ("Above the Fold").
  - Enthält das Begrüßungsvideo/Bild, die Haupt-Überschrift und Call-to-Action Buttons ("Termin vereinbaren").
  
- **`Intro.astro`**: Ein kurzer Einleitungstext ("Willkommen") direkt nach dem Hero-Bereich.

- **`About.astro`**: Der "Über Mich" Bereich.
  - Zeigt das Portraitbild.
  - Enthält den Text über die therapeutische Haltung.
  - Beinhaltet die Zeitleiste ("Mein Weg").

- **`Services.astro`**: Der Bereich "Therapieangebot & Schwerpunkte".
  - Listet die Schwerpunkte (Angst, Depression, etc.) in einem Grid auf.
  - Zeigt die "Methoden" (Tiefenpsychologie, Körperarbeit) in Accordion- oder Karten-Form.

- **`ProcessAndCosts.astro`**: Der Bereich "Ablauf & Kosten".
  - **Ablauf-Timeline:** Visuelle Darstellung der 3 Schritte (Kontakt -> Probatorik -> Beginn).
  - **Kosten-Tabs:** Interaktive Tabs (Privat, Selbstzahler, Coaching) mit Preisen und Infos.
  - **FAQ:** Häufig gestellte Fragen (Akkordeon-Format).

- **`Contact.astro`**: Der "Kontakt" Bereich am Ende.
  - Kontaktkarten (Adresse, Telefon, E-Mail).
  - Google Maps Link.

- **`ScrollToTop.astro`**: Der kleine Pfeil-Button, der erscheint, wenn man nach unten scrollt.

### `public/`
- **`assets/`**: Enthält statische Bilder (Logos, Portrait, Hintergründe).

---

## 🎨 Design System (`tailwind.config.mjs`)

Das Design basiert auf einer zentralen Farbpalette, definiert in der `tailwind.config.mjs`. Änderungen hier wirken sich auf die gesamte Seite aus.

- **`primary` (Grün):** `#2F5D62` (Deep Pine Green) - Hauptfarbe für Buttons, wichtige Elemente.
- **`secondary` (Sand):** `#DFD3C3` (Warm Sand) - Hintergrundakzente, weiche Elemente.
- **`accent` (Terracotta/Orange):** `#D68C45` (Warm Terracotta) - Für Highlights, Hover-Effekte.
- **`text` (Anthrazit):** `#2C3333` - Hauptschriftfarbe für gute Lesbarkeit.

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
