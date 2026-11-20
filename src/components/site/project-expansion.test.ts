import { describe, expect, it } from 'vitest';
import { projectReturnScrollY, toggleExpandedProject } from './project-expansion';

describe('only one reference project can be expanded', () => {
  it('opens the selected project', () => { expect(toggleExpandedProject(null, 'risti-eesti')).toBe('risti-eesti'); });
  it('replaces the previous project when another is opened', () => { expect(toggleExpandedProject('risti-eesti', 'parnu-bess-1542')).toBe('parnu-bess-1542'); });
  it('closes a project when selected again', () => { expect(toggleExpandedProject('risti-eesti', 'risti-eesti')).toBeNull(); });
});

describe('closing a project restores its opening position', () => {
  it('returns to the opening scroll position after reading to the bottom', () => {
    expect(projectReturnScrollY(3496, -1875, 200)).toBe(1421);
  });
  it('preserves the card position when a previous panel changed the layout', () => {
    expect(projectReturnScrollY(2400, -800, 150)).toBe(1450);
  });
  it('does not scroll above the start of the page', () => {
    expect(projectReturnScrollY(0, 100, 200)).toBe(0);
  });
});
