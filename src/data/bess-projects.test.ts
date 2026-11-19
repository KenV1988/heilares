import { describe, expect, it } from "vitest";
import { bessProjects, formatStorage, formatStorageMwh } from "./bess-projects";

describe("user-supplied BESS reference specifications", () => {
  it.each([
    ["parnu-bess-1542", ["parnu-1-1.webp", "parnu-1-2.webp"]],
    ["parnu-bess-105", ["parnu-2-1.webp", "parnu-2-2.webp", "parnu-2-3.webp"]],
    ["parnu-bess-630", ["parnu-3-1.webp", "parnu-3-2.webp", "parnu-3-3.webp", "parnu-3-4.webp"]],
    ["valga-bess-409-6", ["valga-1.webp", "valga-2.webp"]],
    ["marjamaa-bess-1260", ["marjamaa-1.webp", "marjamaa-2.webp", "marjamaa-3.webp"]],
  ])("uses photo 1 as the cover and keeps numbered order for %s", (slug, filenames) => {
    const project = bessProjects.find((p) => p.slug === slug);
    expect(project?.photos.map((photo) => photo.src.split("/").at(-1))).toEqual(filenames);
  });
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

  it.each([1542, 105, 630, 409.6, 1260])(
    "keeps the supplied %s kWh capacity exact in both units across all languages",
    (kwh) => {
      for (const locale of ["et", "en", "fi", "de"]) {
        const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 4 });
        expect(formatStorage(kwh, locale)).toBe(`${number.format(kwh)} kWh`);
        expect(formatStorageMwh(kwh, locale)).toBe(`${number.format(kwh / 1000)} MWh`);
      }
    },
  );
});
