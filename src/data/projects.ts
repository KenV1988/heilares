import risti1 from "@/assets/projects/risti-1.jpg";
import risti2 from "@/assets/projects/risti-2.jpg";
import risti3 from "@/assets/projects/risti-3.jpg";
import risti4 from "@/assets/projects/risti-4.jpg";
import kirikmae1 from "@/assets/projects/kirikmae-1.jpg";
import stelpe1 from "@/assets/projects/stelpe-1.jpg";
import stelpe2 from "@/assets/projects/stelpe-2.jpg";
import stelpe3 from "@/assets/projects/stelpe-3.jpg";

export type ProjectCategory = "tracker_park" | "maapark" | "katusepark";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  location: string;
  capacityKw: number;
  yearCompleted: number;
  coverImage: string;
  coverAlt: string;
  gallery: GalleryImage[];
  title: { et: string; en: string; fi: string };
  description: { et: string; en: string; fi: string };
  panelsUsed: string;
  inverter: string;
  mountingSystem: string;
  completionTime: string;
}

const sharedDesc = {
  et: "Teostasime raami paigalduse, paneelide paigalduse ning DC-tööd koos inverteriga.",
  en: "We delivered the mounting structure, panel installation and DC works together with the inverter.",
  fi: "Toteutimme rakenteen asennuksen, paneelien asennuksen sekä DC-työt invertterin kanssa.",
};

// Placeholder for projects without dedicated photos yet
const groundPlaceholder = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80";
const roofPlaceholder = "https://images.unsplash.com/photo-1611365892117-bce8a45f1f4e?auto=format&fit=crop&w=1600&q=80";

export const projects: Project[] = [
  {
    slug: "risti-eesti",
    category: "tracker_park",
    location: "Risti, Eesti",
    capacityKw: 244000,
    yearCompleted: 2024,
    coverImage: risti2,
    coverAlt: "Risti päikesepark Eestis, suuremahuline maapark silmapiirini ulatuvate paneeliridadega",
    gallery: [
      { src: risti1, alt: "Risti 244 MW päikesepargi õhuvaade ehituse ajal, maapealsed paneeliread ja paigaldustööd" },
      { src: risti2, alt: "Risti päikesepark Eestis, suuremahuline maapark silmapiirini ulatuvate paneeliridadega" },
      { src: risti3, alt: "Päikesepaneelide paigaldus Risti pargis, töömehed ja paigaldusmasin paneeliridade vahel" },
      { src: risti4, alt: "Risti päikesepargi vundamendipostid ja teraskonstruktsioon paigalduse käigus" },
    ],
    title: { et: "Risti päikesepark", en: "Risti solar park", fi: "Ristin aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Tracker (single-axis)",
    completionTime: "2–4 kuud",
  },
  {
    slug: "stelpe-latvia",
    category: "tracker_park",
    location: "Stelpe, Läti",
    capacityKw: 72500,
    yearCompleted: 2024,
    coverImage: stelpe1,
    coverAlt: "Stelpe päikesepargi paneeliread lähivaates talvel, galvaniseeritud teraskandurid",
    gallery: [
      { src: stelpe1, alt: "Stelpe päikesepargi paneeliread lähivaates talvel, galvaniseeritud teraskandurid" },
      { src: stelpe2, alt: "Vaade Stelpe päikesepaneelide alt, bifacial-paneelide tagakülg ja kandekonstruktsioon" },
      { src: stelpe3, alt: "Stelpe maapark Lätis, kaks paneeliridade plokki ja hooldustee talvisel maastikul" },
    ],
    title: { et: "Stelpe päikesepark", en: "Stelpe solar park", fi: "Stelpen aurinkopuisto" },
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
    yearCompleted: 2024,
    coverImage: kirikmae1,
    coverAlt: "Kirikmäe 76 MW päikesepargi õhuvaade, maapealsed paneelid roheliste põldude keskel",
    gallery: [
      { src: kirikmae1, alt: "Kirikmäe 76 MW päikesepargi õhuvaade, maapealsed paneelid roheliste põldude keskel" },
    ],
    title: { et: "Kirikmäe päikesepark", en: "Kirikmäe solar park", fi: "Kirikmäen aurinkopuisto" },
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
    yearCompleted: 2023,
    coverImage: roofPlaceholder,
    coverAlt: "Baltic Logistic Solutions katusepark — päikesepaneelid lao katusel",
    gallery: [
      { src: roofPlaceholder, alt: "Baltic Logistic Solutions katusepark — päikesepaneelid lao katusel" },
    ],
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
    yearCompleted: 2024,
    coverImage: groundPlaceholder,
    coverAlt: "Lielvarde maapark Lätis — päikesepaneelid avatud maastikul",
    gallery: [
      { src: groundPlaceholder, alt: "Lielvarde maapark Lätis — päikesepaneelid avatud maastikul" },
    ],
    title: { et: "Lielvarde päikesepark", en: "Lielvarde solar park", fi: "Lielvarden aurinkopuisto" },
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
