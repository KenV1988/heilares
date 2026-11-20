import { Fragment, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';
import type { BessProject } from '@/data/bess-projects';
import { ProjectCard } from './ProjectCard';
import { BessProjectCard } from './BessProjectCard';
import { ProjectInlineDetails } from './ProjectInlineDetails';

export function ExpandableProjectGrid({ projects, expandedSlug, onToggle, onClose, onClosed }: { projects: (Project | BessProject)[]; expandedSlug: string | null; onToggle: (slug: string) => void; onClose: () => void; onClosed: () => void }) {
  const reduced = useReducedMotion();
  return <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => <Fragment key={project.slug}>
      <div style={{ order: index * 10 }} className="min-w-0" data-project-card={project.slug}>
        {'parkCapacityKw' in project ? <ProjectCard project={project} expanded={expandedSlug === project.slug} onToggle={() => onToggle(project.slug)} /> : <BessProjectCard project={project} expanded={expandedSlug === project.slug} onToggle={() => onToggle(project.slug)} />}
      </div>
      <AnimatePresence onExitComplete={onClosed}>
        {expandedSlug === project.slug && <motion.div key={project.slug} id={`project-panel-${project.slug}`} role="region" aria-labelledby={`project-trigger-${project.slug}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.15 }} style={{ '--mobile-order': index * 10 + 1, '--tablet-order': (Math.floor(index / 2) * 2 + 1) * 10 + 1, '--desktop-order': (Math.floor(index / 3) * 3 + 2) * 10 + 1 } as CSSProperties} className="col-span-full min-w-0 overflow-hidden [order:var(--mobile-order)] md:[order:var(--tablet-order)] lg:[order:var(--desktop-order)]">
          <ProjectInlineDetails project={project} onClose={onClose} />
        </motion.div>}
      </AnimatePresence>
    </Fragment>)}
  </div>;
}
