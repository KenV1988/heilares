export type ProjectCategory = "tracker_park" | "maapark" | "katusepark";

export interface Project {
  slug: string;
  category: ProjectCategory;
  location: string;
  capacityKw: number;
  yearCompleted: number;
  coverImage: string;
  gallery: string[];
  title: { et: string; en: string; fi: string };
  description: { et: string; en: string; fi: string };
  panelsUsed: string;
  inverter: string;
  mountingSystem: string;
  completionTime: string;
}

/**
 * KUIDAS LISADA UUS PROJEKT:
 * Lovable chat'is: "Add new project to projects.ts: name X, location Y,
 * capacity Z kW, category katusepark/maapark/tracker_park, year 2026,
 * description [tekst]"
 */

const sharedDesc = {
  et: "Teostasime raami paigalduse, paneelide paigalduse ning DC-tööd koos inverteriga.",
  en: "We delivered the mounting structure, panel installation and DC works together with the inverter.",
  fi: "Toteutimme rakenteen asennuksen, paneelien asennuksen sekä DC-työt invertterin kanssa.",
};

// TODO: replace Unsplash placeholders with real project photos
const tracker = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80";
const trackerAlt = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80";
const ground = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80";
const groundAlt = "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=80";
const roof = "https://images.unsplash.com/photo-1611365892117-bce8a45f1f4e?auto=format&fit=crop&w=1600&q=80";
const roofAlt = "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1600&q=80";

export const projects: Project[] = [
  {
    slug: "risti-eesti",
    category: "tracker_park",
    location: "Risti, Eesti",
    capacityKw: 244000, // TODO: verify
    yearCompleted: 2024, // TODO: verify
    coverImage: tracker,
    gallery: [tracker, trackerAlt],
    title: {
      et: "Risti päikesepark",
      en: "Risti solar park",
      fi: "Ristin aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid", // TODO
    inverter: "SMA / Huawei inverter", // TODO
    mountingSystem: "Tracker (single-axis)",
    completionTime: "2–4 kuud",
  },
  {
    slug: "stelpe-latvia",
    category: "tracker_park",
    location: "Stelpe, Läti",
    capacityKw: 72500,
    yearCompleted: 2024, // TODO
    coverImage: trackerAlt,
    gallery: [trackerAlt, tracker],
    title: {
      et: "Stelpe päikesepark",
      en: "Stelpe solar park",
      fi: "Stelpen aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Tracker (single-axis)",
    completionTime: "2–4 kuud",
  },
  {
    slug: "kirikmae-eesti",
    category: "tracker_park",
    location: "Kirikmäe, Eesti",
    capacityKw: 76000,
    yearCompleted: 2024, // TODO
    coverImage: tracker,
    gallery: [tracker, trackerAlt],
    title: {
      et: "Kirikmäe päikesepark",
      en: "Kirikmäe solar park",
      fi: "Kirikmäen aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Tracker (single-axis)",
    completionTime: "2–4 kuud",
  },
  {
    slug: "baltic-logistic-solutions",
    category: "katusepark",
    location: "Baltic Logistic Solutions, Eesti",
    capacityKw: 6,
    yearCompleted: 2023, // TODO
    coverImage: roof,
    gallery: [roof, roofAlt],
    title: {
      et: "Baltic Logistic Solutions katusepark",
      en: "Baltic Logistic Solutions rooftop",
      fi: "Baltic Logistic Solutions -kattopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Katuse kandekonstruktsioon",
    completionTime: "2–4 nädalat",
  },
  {
    slug: "lielvarde-latvia",
    category: "maapark",
    location: "Lielvarde, Läti",
    capacityKw: 10800,
    yearCompleted: 2024, // TODO
    coverImage: ground,
    gallery: [ground, groundAlt],
    title: {
      et: "Lielvarde päikesepark",
      en: "Lielvarde solar park",
      fi: "Lielvarden aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Maapealne kandekonstruktsioon",
    completionTime: "2–4 kuud",
  },
];

export const formatCapacity = (kw: number, locale: string = "et") => {
  if (kw >= 1000) {
    const mw = kw / 1000;
    const formatted = mw % 1 === 0 ? mw.toString() : mw.toFixed(1).replace(".", locale === "en" ? "." : ",");
    return `${formatted} MW`;
  }
  return `${kw} kW`;
};
