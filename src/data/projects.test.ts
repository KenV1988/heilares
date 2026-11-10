import { describe, expect, it } from "vitest";
import { formatCapacity, formatHeilAresShare, projects } from "./projects";

const bySlug = (slug: string) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project ${slug}`);
  return project;
};

describe("documented reference project scopes", () => {
  it("separates Risti's 244 MW park capacity from HeilAres' 80 MW scope", () => {
    const project = bySlug("risti-eesti");
    expect(project.parkCapacityKw).toBe(244000);
    expect(project.heilAresShareKw).toBe(80000);
    expect(formatHeilAresShare(project, "en")).toBe("80 MW");
  });

  it("keeps Stelpe's 24 MW mechanical and 40 MW electrical packages separate", () => {
    const project = bySlug("stelpe-latvia");
    expect(project.parkCapacityKw).toBe(72500);
    expect(project.shareBreakdown).toEqual({ mechanicalKw: 24000, electricalKw: 40000 });
    expect(formatHeilAresShare(project, "en")).toBe("24 MW / 40 MW");
  });

  it("records Kirikmäe as a 77.5 MW park with a 32.7 MW HeilAres scope in 2024", () => {
    const project = bySlug("kirikmae-eesti");
    expect(project.parkCapacityKw).toBe(77500);
    expect(project.heilAresShareKw).toBe(32700);
    expect(project.period).toBe("2024");
  });

  it("records Lielvārde's full 10.94 MW project and HeilAres scope", () => {
    const project = bySlug("lielvarde-latvia");
    expect(project.parkCapacityKw).toBe(10940);
    expect(project.heilAresShareKw).toBe(10940);
    expect(formatCapacity(project.heilAresShareKw, "et")).toBe("10,94 MW");
  });

  it("records BLS as a 4.2 MW rooftop project and HeilAres scope in 2023", () => {
    const project = bySlug("bls-eesti");
    expect(project.category).toBe("katusepark");
    expect(project.parkCapacityKw).toBe(4200);
    expect(project.heilAresShareKw).toBe(4200);
    expect(project.period).toBe("2023");
  });

  it("provides complete Estonian, English, Finnish and German scope text for every project", () => {
    for (const project of projects) {
      expect(Object.keys(project.description).sort()).toEqual(["de", "en", "et", "fi"]);
      expect(Object.values(project.description).every((text) => text.includes("MW"))).toBe(true);
    }
  });
});

import { projects as allProjects } from "./projects";
describe("project years match the reference PDF", () => {
  it.each([
    ["risti", "2025–2026"],
    ["stelpe", "2025"],
    ["lielvarde", "2025"],
    ["kirikmae", "2024"],
    ["bls", "2023"],
  ])("%s → %s", (key, year) => {
    const p = allProjects.find((x) => x.slug.includes(key));
    expect(p?.period).toBe(year);
  });
});
