import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { getSupportedLang } from '@/i18n';
import type { GalleryImage } from '@/data/projects';
import { expansionCopy as copy } from './project-expansion';

export function ProjectGallery({ photos, title }: { photos: GalleryImage[]; title: string }) {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const [selected, setSelected] = useState<number | null>(null);
  const photo = selected === null ? undefined : photos[selected];
  const move = (delta: number) => setSelected(current => current === null ? null : (current + delta + photos.length) % photos.length);
  return <>
    <div className={`grid gap-3 ${photos.length > 1 ? 'sm:grid-cols-2' : ''}`}>
      {photos.map((image, index) => <Button key={image.src} variant="ghost" aria-label={`${copy.photo[lang]} ${index + 1}: ${title}`} onClick={() => setSelected(index)} className={`group relative h-auto w-full overflow-hidden rounded-lg p-0 ${photos.length === 3 && index === 0 ? 'sm:col-span-2' : ''}`}>
        <img src={image.src} alt={image.alt[lang]} loading="lazy" width={960} height={720} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/85 text-foreground"><Expand aria-hidden /></span>
      </Button>)}
    </div>
    <Dialog open={photo !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogPortal><DialogOverlay className="z-[100] bg-background/95" />
        <DialogPrimitive.Content aria-describedby={undefined} onKeyDown={event => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }} className="fixed inset-3 z-[101] flex flex-col items-center justify-center gap-4 outline-none sm:inset-8">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogPrimitive.Close asChild><Button variant="outline" size="icon" aria-label={copy.closePhoto[lang]} title={copy.closePhoto[lang]} className="absolute right-0 top-0 h-11 w-11"><X /></Button></DialogPrimitive.Close>
          {photo && <img src={photo.src} alt={photo.alt[lang]} className="max-h-[75dvh] w-auto max-w-full object-contain" />}
          <div className="flex items-center gap-5">
            {photos.length > 1 && <Button variant="outline" size="icon" className="h-11 w-11" aria-label={copy.previous[lang]} title={copy.previous[lang]} onClick={() => move(-1)}><ChevronLeft /></Button>}
            <span className="text-sm text-foreground/70">{selected === null ? 0 : selected + 1} / {photos.length}</span>
            {photos.length > 1 && <Button variant="outline" size="icon" className="h-11 w-11" aria-label={copy.next[lang]} title={copy.next[lang]} onClick={() => move(1)}><ChevronRight /></Button>}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  </>;
}
