import { describe, expect, it } from 'vitest';
import { toggleExpandedProject } from './project-expansion';

describe('only one reference project can be expanded', () => {
  it('opens the selected project', () => { expect(toggleExpandedProject(null, 'risti-eesti')).toBe('risti-eesti'); });
  it('replaces the previous project when another is opened', () => { expect(toggleExpandedProject('risti-eesti', 'parnu-bess-1542')).toBe('parnu-bess-1542'); });
  it('closes a project when selected again', () => { expect(toggleExpandedProject('risti-eesti', 'risti-eesti')).toBeNull(); });
});
