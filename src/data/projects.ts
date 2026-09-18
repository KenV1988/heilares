import risti1 from "@/assets/projects/risti-1.jpg";
import risti2 from "@/assets/projects/risti-2.jpg";
import risti3 from "@/assets/projects/risti-3.jpg";
import risti4 from "@/assets/projects/risti-4.jpg";
import kirikmae1 from "@/assets/projects/kirikmae-1.jpg";
import stelpe1 from "@/assets/projects/stelpe-1.jpg";
import stelpe2 from "@/assets/projects/stelpe-2.jpg";
import stelpe3 from "@/assets/projects/stelpe-3.jpg";
import lielvarde1 from "@/assets/projects/lielvarde-paikesepark-1.jpg";
import bls1 from "@/assets/projects/bls-1.webp.asset.json";

export type ProjectCategory = "tracker_park" | "maapark" | "katusepark";

export interface GalleryImage {
  src: string;
  alt: LocalizedText;
}

export type LocalizedText = { et: string; en: string; fi: string };

export interface Project {
  slug: string;
  category: ProjectCategory;
  location: LocalizedText;
  capacityKw?: number;
  yearCompleted: number;
  coverImage: string;
  coverAlt: LocalizedText;
  gallery: GalleryImage[];
  title: LocalizedText;
  description: LocalizedText;
  panelsUsed: LocalizedText;
  inverter: string;
  mountingSystem: LocalizedText;
  completionTime: LocalizedText;
}

const sharedDesc = {
  et: "Teostasime raami paigalduse, paneelide paigalduse ning DC-tööd koos inverteriga.",
  en: "We delivered the mounting structure, panel installation and DC works together with the inverter.",
  fi: "Toteutimme rakenteen asennuksen, paneelien asennuksen sekä DC-työt invertterin kanssa.",
};

export const projects: Project[] = [
  {
    slug: "risti-eesti",
    category: "tracker_park",
    location: { et: "Risti, Eesti", en: "Risti, Estonia", fi: "Risti, Viro" },
    capacityKw: 244000,
    yearCompleted: 2026,
    coverImage: risti2,
    coverAlt: {
      et: "Risti Solar Tracker Park Eestis, suuremahuline päikest jälgiv park",
      en: "Risti Solar Tracker Park in Estonia with rows of sun-tracking panels",
      fi: "Ristin Solar Tracker Park Virossa ja aurinkoa seuraavat paneelirivit",
    },
    gallery: [
      {
        src: risti1,
        alt: {
          et: "Risti 244 MW Solar Tracker Park ehituse ajal",
          en: "Risti 244 MW Solar Tracker Park during construction",
          fi: "Ristin 244 MW Solar Tracker Park rakennusvaiheessa",
        },
      },
      {
        src: risti2,
        alt: {
          et: "Risti Solar Tracker Park Eestis",
          en: "Risti Solar Tracker Park in Estonia",
          fi: "Ristin Solar Tracker Park Virossa",
        },
      },
      {
        src: risti3,
        alt: {
          et: "Paigaldustööd Risti Solar Tracker Pargis",
          en: "Installation work at Risti Solar Tracker Park",
          fi: "Asennustyöt Ristin Solar Tracker Parkissa",
        },
      },
      {
        src: risti4,
        alt: {
          et: "Risti Solar Tracker Pargi teraskonstruktsioon",
          en: "Steel structure at Risti Solar Tracker Park",
          fi: "Ristin Solar Tracker Parkin teräsrakenne",
        },
      },
    ],
    title: { et: "Risti päikesepark", en: "Risti solar park", fi: "Ristin aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: { et: "Tier-1 paneelid", en: "Tier-1 panels", fi: "Tier-1-paneelit" },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Üheteljeline tracker",
      en: "Single-axis tracker",
      fi: "Yksiakselinen tracker",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta" },
  },
  {
    slug: "stelpe-latvia",
    category: "maapark",
    location: { et: "Stelpe, Läti", en: "Stelpe, Latvia", fi: "Stelpe, Latvia" },
    capacityKw: 72500,
    yearCompleted: 2025,
    coverImage: stelpe1,
    coverAlt: {
      et: "Stelpe maapargi paneeliread talvel",
      en: "Panel rows at the Stelpe ground-mounted solar park in winter",
      fi: "Stelpen maapuiston paneelirivit talvella",
    },
    gallery: [
      {
        src: stelpe1,
        alt: {
          et: "Stelpe maapargi paneeliread talvel",
          en: "Panel rows at the Stelpe ground-mounted solar park in winter",
          fi: "Stelpen maapuiston paneelirivit talvella",
        },
      },
      {
        src: stelpe2,
        alt: {
          et: "Stelpe maapargi bifacial-paneelid ja kandekonstruktsioon",
          en: "Bifacial panels and mounting structure at Stelpe solar park",
          fi: "Stelpen aurinkopuiston kaksipuoliset paneelit ja tukirakenne",
        },
      },
      {
        src: stelpe3,
        alt: {
          et: "Stelpe maapark Lätis talvisel maastikul",
          en: "Stelpe ground-mounted solar park in Latvia in winter",
          fi: "Stelpen maapuisto Latviassa talvimaisemassa",
        },
      },
    ],
    title: { et: "Stelpe päikesepark", en: "Stelpe solar park", fi: "Stelpen aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: { et: "Tier-1 paneelid", en: "Tier-1 panels", fi: "Tier-1-paneelit" },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Maapealne kandekonstruktsioon",
      en: "Ground-mounted structure",
      fi: "Maa-asennusrakenne",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta" },
  },
  {
    slug: "kirikmae-eesti",
    category: "maapark",
    location: { et: "Kirikmäe, Eesti", en: "Kirikmäe, Estonia", fi: "Kirikmäe, Viro" },
    capacityKw: 76000,
    yearCompleted: 2023,
    coverImage: kirikmae1,
    coverAlt: {
      et: "Kirikmäe 76 MW maapargi õhuvaade",
      en: "Aerial view of the 76 MW Kirikmäe ground-mounted solar park",
      fi: "Ilmakuva 76 MW:n Kirikmäen maapuistosta",
    },
    gallery: [
      {
        src: kirikmae1,
        alt: {
          et: "Kirikmäe 76 MW maapargi õhuvaade",
          en: "Aerial view of the 76 MW Kirikmäe ground-mounted solar park",
          fi: "Ilmakuva 76 MW:n Kirikmäen maapuistosta",
        },
      },
    ],
    title: { et: "Kirikmäe päikesepark", en: "Kirikmäe solar park", fi: "Kirikmäen aurinkopuisto" },
    description: sharedDesc,
    panelsUsed: { et: "Tier-1 paneelid", en: "Tier-1 panels", fi: "Tier-1-paneelit" },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Maapealne kandekonstruktsioon",
      en: "Ground-mounted structure",
      fi: "Maa-asennusrakenne",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta" },
  },
  {
    slug: "bls-eesti",
    category: "katusepark",
    location: { et: "Eesti", en: "Estonia", fi: "Viro" },
    yearCompleted: 2023,
    coverImage: bls1.url,
    coverAlt: {
      et: "BLS logistikakeskuse katusepargi objekt Eestis",
      en: "BLS logistics centre rooftop solar park site in Estonia",
      fi: "BLS-logistiikkakeskuksen kattoaurinkopuistokohde Virossa",
    },
    gallery: [
      {
        src: bls1.url,
        alt: {
          et: "BLS logistikakeskuse katusepargi objekt Eestis",
          en: "BLS logistics centre rooftop solar park site in Estonia",
          fi: "BLS-logistiikkakeskuksen kattoaurinkopuistokohde Virossa",
        },
      },
    ],
    title: {
      et: "BLS päikesepark",
      en: "BLS solar park",
      fi: "BLS-aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: { et: "Tier-1 paneelid", en: "Tier-1 panels", fi: "Tier-1-paneelit" },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Katuse kandekonstruktsioon",
      en: "Rooftop mounting structure",
      fi: "Kattoasennusrakenne",
    },
    completionTime: { et: "2–4 nädalat", en: "2–4 weeks", fi: "2–4 viikkoa" },
  },
  {
    slug: "lielvarde-latvia",
    category: "tracker_park",
    location: { et: "Lielvarde, Läti", en: "Lielvarde, Latvia", fi: "Lielvarde, Latvia" },
    yearCompleted: 2025,
    coverImage: lielvarde1,
    coverAlt: {
      et: "Lielvarde Solar Tracker Park Lätis",
      en: "Lielvarde Solar Tracker Park in Latvia",
      fi: "Lielvarden Solar Tracker Park Latviassa",
    },
    gallery: [
      {
        src: lielvarde1,
        alt: {
          et: "Lielvarde Solar Tracker Park Lätis",
          en: "Lielvarde Solar Tracker Park in Latvia",
          fi: "Lielvarden Solar Tracker Park Latviassa",
        },
      },
    ],
    title: {
      et: "Lielvarde päikesepark",
      en: "Lielvarde solar park",
      fi: "Lielvarden aurinkopuisto",
    },
    description: sharedDesc,
    panelsUsed: { et: "Tier-1 paneelid", en: "Tier-1 panels", fi: "Tier-1-paneelit" },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Üheteljeline tracker",
      en: "Single-axis tracker",
      fi: "Yksiakselinen tracker",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta" },
  },
];

export const formatCapacity = (kw: number, locale: string = "et") => {
  if (kw >= 1000) {
    const mw = kw / 1000;
    const formatted =
      mw % 1 === 0 ? mw.toString() : mw.toFixed(1).replace(".", locale === "en" ? "." : ",");
    return `${formatted} MW`;
  }
  return `${kw} kW`;
};
