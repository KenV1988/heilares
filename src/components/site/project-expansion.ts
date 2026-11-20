import type { LocalizedText } from '@/data/projects';

export const expansionCopy: Record<string, LocalizedText> = {
  open: { et: 'Ava projekt', en: 'Open project', fi: 'Avaa projekti', de: 'Projekt öffnen' },
  close: { et: 'Sulge projekt', en: 'Close project', fi: 'Sulje projekti', de: 'Projekt schließen' },
  photo: { et: 'Suurenda pilti', en: 'Enlarge photo', fi: 'Suurenna kuva', de: 'Bild vergrößern' },
  closePhoto: { et: 'Sulge pilt', en: 'Close photo', fi: 'Sulje kuva', de: 'Bild schließen' },
  previous: { et: 'Eelmine pilt', en: 'Previous photo', fi: 'Edellinen kuva', de: 'Vorheriges Bild' },
  next: { et: 'Järgmine pilt', en: 'Next photo', fi: 'Seuraava kuva', de: 'Nächstes Bild' },
};

export const toggleExpandedProject = (current: string | null, selected: string): string | null =>
  current === selected ? null : selected;

// Preserve the card's viewport position even when a different panel changed its document position.
export const projectReturnScrollY = (scrollY: number, cardTop: number, openingTop: number): number =>
  Math.max(0, scrollY + cardTop - openingTop);
