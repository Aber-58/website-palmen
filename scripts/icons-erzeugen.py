#!/usr/bin/env python3
"""
Erzeugt Favicon und Kopfzeilen-Logo aus public/assets/Logo_palmen.png.

Aufruf:  python3 scripts/icons-erzeugen.py     (aus dem Projektverzeichnis)
Bedingung: Pillow installiert  (pip install Pillow)

Warum ein Skript und nicht einfach verkleinern?

1. Die Strichzeichnung bedeckt nur rund 10 % der Bildfläche. Ein simples
   Verkleinern des 640-px-Logos ergibt unter 32 px einen grauen Fleck, weil
   die Linien dünner als ein Bildschirmpixel werden. Deshalb wird der Strich
   je Zielgröße verstärkt – klein kräftig, groß fein.

2. Das Verstärken weitet die Linien nach außen. Der Kreis im Original berührt
   fast schon den Bildrand, ohne zusätzlichen Rand liefe er über die Kante und
   würde abgeschnitten. Deshalb: erst Rand anfügen, dann verstärken, dann auf
   den Inhalt zuschneiden und definierte Luft lassen.

3. Bei 16 px wird der Kreis weggelassen. Er kostet dort so viel Platz, dass die
   Palmen darin nicht mehr erkennbar wären.
"""

from pathlib import Path
import io
import struct

from PIL import Image, ImageDraw, ImageFilter, ImageOps

WURZEL = Path(__file__).resolve().parent.parent
QUELLE = WURZEL / "public/assets/Logo_palmen.png"

TEAL = (27, 112, 108)  # Farbe der Logolinien
CREME = (249, 249, 247)  # Hintergrundscheibe, entspricht --background

RAND_ZUM_VERSTAERKEN = 80  # Platz, damit das Verstärken nicht an der Kante klemmt
RING_RADIUS = 283  # innerhalb davon liegen die Palmen, außerhalb der Kreis


def maske_aufbereiten(dilatation: int, ohne_ring: bool) -> Image.Image:
    quelle = Image.open(QUELLE).convert("RGBA")
    maske = ImageOps.expand(quelle.split()[3], border=RAND_ZUM_VERSTAERKEN, fill=0)
    if ohne_ring:
        mitte = quelle.size[0] // 2 + RAND_ZUM_VERSTAERKEN
        innen = Image.new("L", maske.size, 0)
        ImageDraw.Draw(innen).ellipse(
            [mitte - RING_RADIUS, mitte - RING_RADIUS,
             mitte + RING_RADIUS, mitte + RING_RADIUS], fill=255)
        maske = Image.composite(maske, Image.new("L", maske.size, 0), innen)
    if dilatation:
        maske = maske.filter(ImageFilter.MaxFilter(dilatation))
    return maske


def zeichen(groesse: int, dilatation: int, rand_anteil: float = 0.06,
            ohne_ring: bool = False, scheibe: bool = False) -> Image.Image:
    maske = maske_aufbereiten(dilatation, ohne_ring)

    bild = Image.new("RGBA", maske.size, (0, 0, 0, 0))
    bild.paste(Image.new("RGBA", maske.size, TEAL + (255,)), (0, 0), maske)
    bild = bild.crop(maske.getbbox())

    breite, hoehe = bild.size
    kante = max(breite, hoehe)
    quadrat = Image.new("RGBA", (kante, kante), (0, 0, 0, 0))
    quadrat.paste(bild, ((kante - breite) // 2, (kante - hoehe) // 2))

    rand = int(kante * rand_anteil)
    ergebnis = Image.new("RGBA", (kante + 2 * rand,) * 2, (0, 0, 0, 0))
    ergebnis.paste(quadrat, (rand, rand))

    if scheibe:
        unten = Image.new("RGBA", ergebnis.size, (0, 0, 0, 0))
        ImageDraw.Draw(unten).ellipse(
            [0, 0, ergebnis.size[0] - 1, ergebnis.size[1] - 1], fill=CREME + (255,))
        unten.alpha_composite(ergebnis)
        ergebnis = unten

    return ergebnis.resize((groesse, groesse), Image.LANCZOS)


def ico_schreiben(ziel: Path, bilder: list[tuple[int, Image.Image]]) -> None:
    """ICO von Hand bauen: PNG-Einträge, von allen aktuellen Browsern unterstützt."""
    blobs = []
    for _, bild in bilder:
        puffer = io.BytesIO()
        bild.save(puffer, "PNG", optimize=True)
        blobs.append(puffer.getvalue())

    versatz = 6 + 16 * len(blobs)
    eintraege, daten = b"", b""
    for (groesse, _), blob in zip(bilder, blobs):
        eintraege += struct.pack("<BBBBHHII", groesse, groesse, 0, 0, 1, 32,
                                 len(blob), versatz)
        versatz += len(blob)
        daten += blob
    ziel.write_bytes(struct.pack("<HHH", 0, 1, len(blobs)) + eintraege + daten)


def main() -> None:
    # Kopfzeile: wird mit 48 px angezeigt, 144 px deckt dreifache Pixeldichte ab
    zeichen(144, dilatation=15).save(
        WURZEL / "public/assets/logo-144.png", "PNG", optimize=True)

    # Favicon. Je Größe eigene Strichstärke; bei 16 px ohne Kreis
    plan = [(16, 15, True), (32, 15, False), (48, 9, False), (64, 7, False)]
    bilder = [(g, zeichen(g, d, rand_anteil=0.08, ohne_ring=o, scheibe=True))
              for g, d, o in plan]

    ico_schreiben(WURZEL / "public/favicon.ico", bilder)
    dict(bilder)[32].save(WURZEL / "public/favicon-32.png", "PNG", optimize=True)

    print("Erzeugt: public/assets/logo-144.png, public/favicon.ico, public/favicon-32.png")


if __name__ == "__main__":
    main()
