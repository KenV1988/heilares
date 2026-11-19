import { describe, expect, it } from "vitest";
import { bessProjects } from "./bess-projects";

describe("user-supplied BESS reference specifications", () => {
  it.each([
    ["parnu-bess-1542", 1542, 480, 6, 80, 6, 257],
    ["parnu-bess-105", 105, 60, 1, 60, 1, 105],
    ["parnu-bess-630", 630, 480, 6, 80, 6, 105],
    ["valga-bess-409-6", 409.6, 200, 4, 50, 4, 102.4],
    ["marjamaa-bess-1260", 1260, 600, 10, 60, 10, 126],
  ])(
    "preserves capacity and equipment quantities for %s",
    (slug, storage, power, inverterCount, inverterUnitKw, batteryCount, batteryUnitKwh) => {
      const project = bessProjects.find((p) => p.slug === slug);
      expect(project).toMatchObject({
        storageKwh: storage,
        inverterPowerKw: power,
        inverterCount,
        inverterUnitKw,
        batteryCount,
        batteryUnitKwh,
      });
      expect(project?.batteryCount && project.batteryCount * project.batteryUnitKwh).toBeCloseTo(
        storage as number,
      );
      expect(project?.inverterCount && project.inverterCount * project.inverterUnitKw).toBe(power);
    },
  );
});
