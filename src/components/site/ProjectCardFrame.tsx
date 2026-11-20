import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ContentLink } from './ContentLink';

export interface ProjectExpansionProps {
  expanded?: boolean;
  onToggle?: () => void;
}

export function ProjectCardFrame({ slug, className, children, expanded, onToggle }: ProjectExpansionProps & { slug: string; className: string; children: ReactNode }) {
  if (!onToggle) return <ContentLink kind="project" slug={slug} className={className}>{children}</ContentLink>;
  return <div className={`${className} relative ${expanded ? 'border-brand ring-1 ring-brand/40' : ''}`}><div className="pointer-events-none flex h-full flex-col">{children}</div><Button variant="ghost" onClick={onToggle} aria-expanded={expanded} aria-controls={`project-panel-${slug}`} id={`project-trigger-${slug}`} aria-labelledby={`project-title-${slug}`} className="absolute inset-0 h-full w-full scroll-mt-28 rounded-2xl p-0 hover:bg-transparent" /></div>;
}
