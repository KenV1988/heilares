import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { LocalizedLink } from './LocalizedLink';

export interface ProjectExpansionProps {
  expanded?: boolean;
  onToggle?: () => void;
}

export function ProjectCardFrame({ slug, className, children, expanded, onToggle }: ProjectExpansionProps & { slug: string; className: string; children: ReactNode }) {
  if (!onToggle) return <LocalizedLink to={`/tehtud-tood/${slug}`} className={className}>{children}</LocalizedLink>;
  return <Button variant="ghost" onClick={onToggle} aria-expanded={expanded} aria-controls={`project-panel-${slug}`} id={`project-trigger-${slug}`} className={`${className} w-full scroll-mt-28 items-stretch justify-start gap-0 whitespace-normal p-0 text-left font-normal hover:bg-bg-elevated ${expanded ? 'border-brand ring-1 ring-brand/40' : ''}`}>{children}</Button>;
}
