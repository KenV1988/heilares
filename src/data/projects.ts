import risti1 from "@/assets/projects/risti-1.jpg";
import risti2 from "@/assets/projects/risti-2.jpg";
import risti3 from "@/assets/projects/risti-3.jpg";
import risti4 from "@/assets/projects/risti-4.jpg";
import kirikmae1 from "@/assets/projects/kirikmae-1.jpg";
import stelpe1 from "@/assets/projects/stelpe-1.jpg";
import stelpe2 from "@/assets/projects/stelpe-2.jpg";
import stelpe3 from "@/assets/projects/stelpe-3.jpg";
import lielvarde1 from "@/assets/projects/lielvarde-paikesepark-1.jpg";

export type ProjectCategory = "tracker_park" | "maapark" | "katusepark";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  location: string;
  capacityKw?: number;
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
    yearCompleted: 2026,
    coverImage: risti2,
    coverAlt: "Risti Solar Tracker Park Eestis, suuremahuline päikest jälgiv park silmapiirini ulatuvate paneeliridadega",
    gallery: [
      { src: risti1, alt: "Risti 244 MW Solar Tracker Park õhuvaade ehituse ajal, maapealsed paneeliread ja paigaldustööd" },
      { src: risti2, alt: "Risti Solar Tracker Park Eestis, suuremahuline päikest jälgiv park silmapiirini ulatuvate paneeliridadega" },
      { src: risti3, alt: "Päikesepaneelide paigaldus Risti Solar Tracker Pargis, töömehed ja paigaldusmasin paneeliridade vahel" },
      { src: risti4, alt: "Risti Solar Tracker Pargi vundamendipostid ja teraskonstruktsioon paigalduse käigus" },
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
    category: "maapark",
    location: "Stelpe, Läti",
    capacityKw: 72500,
    yearCompleted: 2025,
    coverImage: stelpe1,
    coverAlt: "Stelpe maapargi paneeliread lähivaates talvel, galvaniseeritud teraskandurid",
    gallery: [
      { src: stelpe1, alt: "Stelpe maapargi paneeliread lähivaates talvel, galvaniseeritud teraskandurid" },
      { src: stelpe2, alt: "Vaade Stelpe maapargi päikesepaneelide alt, bifacial-paneelide tagakülg ja kandekonstruktsioon" },
      { src: stelpe3, alt: "Stelpe maapark Lätis, kaks paneeliridade plokki ja hooldustee talvisel maastikul" },
    ],
    title: { et: "Stelpe päikesepark", en: "Stelpe solar park", fi: "Stelpen aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Maapealne kandekonstruktsioon",
    completionTime: "2–4 kuud",
  },
  {
    slug: "kirikmae-eesti",
    category: "maapark",
    location: "Kirikmäe, Eesti",
    capacityKw: 76000,
    yearCompleted: 2023,
    coverImage: kirikmae1,
    coverAlt: "Kirikmäe 76 MW maapargi õhuvaade, maapealsed paneelid roheliste põldude keskel",
    gallery: [
      { src: kirikmae1, alt: "Kirikmäe 76 MW maapargi õhuvaade, maapealsed paneelid roheliste põldude keskel" },
    ],
    title: { et: "Kirikmäe päikesepark", en: "Kirikmäe solar park", fi: "Kirikmäen aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Maapealne kandekonstruktsioon",
    completionTime: "2–4 kuud",
  },
  {
    slug: "bls-eesti",
    category: "katusepark",
    location: "Eesti",
    yearCompleted: 2023,
    coverImage: roofPlaceholder,
    coverAlt: "BLS katusepark Eestis — päikesepaneelid tööstushoone katusel",
    gallery: [
      { src: roofPlaceholder, alt: "BLS katusepark Eestis — päikesepaneelid tööstushoone katusel" },
    ],
    title: {
      et: "BLS päikesepark",
      en: "BLS solar park",
      fi: "BLS-aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Katuse kandekonstruktsioon",
    completionTime: "2–4 nädalat",
  },
  {
    slug: "lielvarde-latvia",
    category: "tracker_park",
    location: "Lielvarde, Läti",
    yearCompleted: 2025,
    coverImage: lielvarde1,
    coverAlt: "Lielvarde päikesepark Lätis, sinise taeva all maapealsed päikesepaneelid metsa ääres",
    gallery: [
      { src: lielvarde1, alt: "Lielvarde päikesepark Lätis, sinise taeva all maapealsed päikesepaneelid metsa ääres" },
    ],
    title: { et: "Lielvarde päikesepark", en: "Lielvarde solar park", fi: "Lielvarden aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: "Tier-1 paneelid",
    inverter: "SMA / Huawei inverter",
    mountingSystem: "Tracker (single-axis)",
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
