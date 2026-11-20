import { Link, useLocation } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { languageFromPath } from '@/i18n';

export function ContentLink({ kind, slug, children, className }: { kind: 'project' | 'article'; slug: string; children: ReactNode; className?: string }) {
  const lang = languageFromPath(useLocation().pathname);
  if (kind === 'project') return lang === 'et'
    ? <Link to="/tehtud-tood/$slug" params={{ slug }} className={className}>{children}</Link>
    : <Link to="/$lang/tehtud-tood/$slug" params={{ lang, slug }} className={className}>{children}</Link>;
  return lang === 'et'
    ? <Link to="/blogi/$slug" params={{ slug }} className={className}>{children}</Link>
    : <Link to="/$lang/blogi/$slug" params={{ lang, slug }} className={className}>{children}</Link>;
}