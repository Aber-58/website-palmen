/**
 * Werte, die an mehreren Stellen der Seite gebraucht werden.
 */

/**
 * Adresse der Seminar-Webseite (eigenes Projekt: website-palmen-seminare).
 *
 * SOLANGE DIESER WERT LEER IST, ERSCHEINT KEIN HINWEIS AUF DIE SEMINARE –
 * weder im Fußbereich noch am Ende von /angebot/methoden. Das ist Absicht:
 * ein Link auf eine Adresse, die es noch nicht gibt, wäre schlechter als
 * gar kein Hinweis.
 *
 * Entschieden ist die Adresse palmen-seminare.de. Eingetragen wird sie erst,
 * wenn die Seite auch antwortet:
 *
 *     export const SEMINAR_URL = "https://www.palmen-seminare.de";
 *
 * Mehr ist nicht nötig, Fußbereich und /angebot/methoden schalten sich damit
 * von selbst frei.
 *
 * Bewusst KEINE Subdomain von praxis-palmen.de: Seminare sind ein
 * gewerbliches Bildungsangebot, Psychotherapie ist Heilkunde. Die
 * Berufsordnung verlangt, dass beides nicht vermischt wird – eine
 * Subdomain würde als Teil des Praxisauftritts gelesen.
 */
export const SEMINAR_URL = "";

/** Adresse ohne Protokoll und ohne "www.", für die Anzeige im Text. */
export const SEMINAR_URL_ANZEIGE = SEMINAR_URL.replace(
	/^https?:\/\/(www\.)?/,
	"",
).replace(/\/$/, "");
