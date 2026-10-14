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

export const projectCategoryOrder: readonly ProjectCategory[] = [
  "tracker_park",
  "maapark",
  "katusepark",
];

export interface GalleryImage {
  src: string;
  alt: LocalizedText;
}

export type LocalizedText = { et: string; en: string; fi: string; de: string };

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
  de: "Wir führten die Montage des Untergestells, die Installation der Module sowie die DC-Arbeiten inklusive Wechselrichter aus.",
};

export const projects: Project[] = [
  {
    slug: "risti-eesti",
    category: "tracker_park",
    location: { et: "Risti, Eesti", en: "Risti, Estonia", fi: "Risti, Viro", de: "Risti, Estland" },
    capacityKw: 244000,
    yearCompleted: 2026,
    coverImage: risti2,
    coverAlt: {
      et: "Risti Solar Tracker Park Eestis, suuremahuline päikest jälgiv park",
      en: "Risti Solar Tracker Park in Estonia with rows of sun-tracking panels",
      fi: "Ristin Solar Tracker Park Virossa ja aurinkoa seuraavat paneelirivit",
      de: "Risti Solar Tracker Park in Estland mit einachsigen Nachführsystemen",
    },
    gallery: [
      {
        src: risti1,
        alt: {
          et: "Risti 244 MW Solar Tracker Park ehituse ajal",
          en: "Risti 244 MW Solar Tracker Park during construction",
          fi: "Ristin 244 MW Solar Tracker Park rakennusvaiheessa",
          de: "Risti 244 MW Solar Tracker Park während der Bauphase",
        },
      },
      {
        src: risti2,
        alt: {
          et: "Risti Solar Tracker Park Eestis",
          en: "Risti Solar Tracker Park in Estonia",
          fi: "Ristin Solar Tracker Park Virossa",
          de: "Risti Solar Tracker Park in Estland",
        },
      },
      {
        src: risti3,
        alt: {
          et: "Paigaldustööd Risti Solar Tracker Pargis",
          en: "Installation work at Risti Solar Tracker Park",
          fi: "Asennustyöt Ristin Solar Tracker Parkissa",
          de: "Montagearbeiten im Risti Solar Tracker Park",
        },
      },
      {
        src: risti4,
        alt: {
          et: "Risti Solar Tracker Pargi teraskonstruktsioon",
          en: "Steel structure at Risti Solar Tracker Park",
          fi: "Ristin Solar Tracker Parkin teräsrakenne",
          de: "Stahlkonstruktion im Risti Solar Tracker Park",
        },
      },
    ],
    title: {
      et: "Risti päikesepark",
      en: "Risti solar park",
      fi: "Ristin aurinkopuisto",
      de: "Solarpark Risti",
    },
    description: sharedDesc,
    panelsUsed: {
      et: "Tier-1 paneelid",
      en: "Tier-1 panels",
      fi: "Tier-1-paneelit",
      de: "Tier-1 Module",
    },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Üheteljeline tracker",
      en: "Single-axis tracker",
      fi: "Yksiakselinen tracker",
      de: "Einachsige Nachführung",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta", de: "2–4 Monate" },
  },
  {
    slug: "stelpe-latvia",
    category: "maapark",
    location: {
      et: "Stelpe, Läti",
      en: "Stelpe, Latvia",
      fi: "Stelpe, Latvia",
      de: "Stelpe, Lettland",
    },
    capacityKw: 72500,
    yearCompleted: 2025,
    coverImage: stelpe1,
    coverAlt: {
      et: "Stelpe maapargi paneeliread talvel",
      en: "Panel rows at the Stelpe ground-mounted solar park in winter",
      fi: "Stelpen maapuiston paneelirivit talvella",
      de: "Modulreihen des Solarparks Stelpe im Winter",
    },
    gallery: [
      {
        src: stelpe1,
        alt: {
          et: "Stelpe maapargi paneeliread talvel",
          en: "Panel rows at the Stelpe ground-mounted solar park in winter",
          fi: "Stelpen maapuiston paneelirivit talvella",
          de: "Modulreihen des Solarparks Stelpe im Winter",
        },
      },
      {
        src: stelpe2,
        alt: {
          et: "Stelpe maapargi bifacial-paneelid ja kandekonstruktsioon",
          en: "Bifacial panels and mounting structure at Stelpe solar park",
          fi: "Stelpen aurinkopuiston kaksipuoliset paneelit ja tukirakenne",
          de: "Bifaziale Module und Untergestell im Solarpark Stelpe",
        },
      },
      {
        src: stelpe3,
        alt: {
          et: "Stelpe maapark Lätis talvisel maastikul",
          en: "Stelpe ground-mounted solar park in Latvia in winter",
          fi: "Stelpen maapuisto Latviassa talvimaisemassa",
          de: "Solarpark Stelpe in Lettland in winterlicher Landschaft",
        },
      },
    ],
    title: {
      et: "Stelpe päikesepark",
      en: "Stelpe solar park",
      fi: "Stelpen aurinkopuisto",
      de: "Solarpark Stelpe",
    },
    description: sharedDesc,
    panelsUsed: {
      et: "Tier-1 paneelid",
      en: "Tier-1 panels",
      fi: "Tier-1-paneelit",
      de: "Tier-1 Module",
    },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Maapealne kandekonstruktsioon",
      en: "Ground-mounted structure",
      fi: "Maa-asennusrakenne",
      de: "Freilandanlage",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta", de: "2–4 Monate" },
  },
  {
    slug: "kirikmae-eesti",
    category: "maapark",
    location: {
      et: "Kirikmäe, Eesti",
      en: "Kirikmäe, Estonia",
      fi: "Kirikmäe, Viro",
      de: "Kirikmäe, Estland",
    },
    capacityKw: 76000,
    yearCompleted: 2023,
    coverImage: kirikmae1,
    coverAlt: {
      et: "Kirikmäe 76 MW maapargi õhuvaade",
      en: "Aerial view of the 76 MW Kirikmäe ground-mounted solar park",
      fi: "Ilmakuva 76 MW:n Kirikmäen maapuistosta",
      de: "Luftaufnahme des 76 MW Solarparks Kirikmäe",
    },
    gallery: [
      {
        src: kirikmae1,
        alt: {
          et: "Kirikmäe 76 MW maapargi õhuvaade",
          en: "Aerial view of the 76 MW Kirikmäe ground-mounted solar park",
          fi: "Ilmakuva 76 MW:n Kirikmäen maapuistosta",
          de: "Luftaufnahme des 76 MW Solarparks Kirikmäe",
        },
      },
    ],
    title: {
      et: "Kirikmäe päikesepark",
      en: "Kirikmäe solar park",
      fi: "Kirikmäen aurinkopuisto",
      de: "Solarpark Kirikmäe",
    },
    description: sharedDesc,
    panelsUsed: {
      et: "Tier-1 paneelid",
      en: "Tier-1 panels",
      fi: "Tier-1-paneelit",
      de: "Tier-1 Module",
    },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Maapealne kandekonstruktsioon",
      en: "Ground-mounted structure",
      fi: "Maa-asennusrakenne",
      de: "Freilandanlage",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta", de: "2–4 Monate" },
  },
  {
    slug: "bls-eesti",
    category: "katusepark",
    location: { et: "Eesti", en: "Estonia", fi: "Viro", de: "Estland" },
    yearCompleted: 2023,
    coverImage: bls1.url,
    coverAlt: {
      et: "BLS logistikakeskuse katusepargi objekt Eestis",
      en: "BLS logistics centre rooftop solar park site in Estonia",
      fi: "BLS-logistiikkakeskuksen kattoaurinkopuistokohde Virossa",
      de: "Dach-Solaranlage auf dem BLS Logistikzentrum in Estland",
    },
    gallery: [
      {
        src: bls1.url,
        alt: {
          et: "BLS logistikakeskuse katusepargi objekt Eestis",
          en: "BLS logistics centre rooftop solar park site in Estonia",
          fi: "BLS-logistiikkakeskuksen kattoaurinkopuistokohde Virossa",
          de: "Dach-Solaranlage auf dem BLS Logistikzentrum in Estland",
        },
      },
    ],
    title: {
      et: "BLS päikesepark",
      en: "BLS solar park",
      fi: "BLS-aurinkopuisto",
      de: "Solarpark BLS",
    },
    description: sharedDesc,
    panelsUsed: {
      et: "Tier-1 paneelid",
      en: "Tier-1 panels",
      fi: "Tier-1-paneelit",
      de: "Tier-1 Module",
    },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Katuse kandekonstruktsioon",
      en: "Rooftop mounting structure",
      fi: "Kattoasennusrakenne",
      de: "Dachmontage-System",
    },
    completionTime: { et: "2–4 nädalat", en: "2–4 weeks", fi: "2–4 viikkoa", de: "2–4 Wochen" },
  },
  {
    slug: "lielvarde-latvia",
    category: "tracker_park",
    location: {
      et: "Lielvarde, Läti",
      en: "Lielvarde, Latvia",
      fi: "Lielvarde, Latvia",
      de: "Lielvarde, Lettland",
    },
    yearCompleted: 2025,
    coverImage: lielvarde1,
    coverAlt: {
      et: "Lielvarde Solar Tracker Park Lätis",
      en: "Lielvarde Solar Tracker Park in Latvia",
      fi: "Lielvarden Solar Tracker Park Latviassa",
      de: "Lielvarde Solar Tracker Park in Lettland",
    },
    gallery: [
      {
        src: lielvarde1,
        alt: {
          et: "Lielvarde Solar Tracker Park Lätis",
          en: "Lielvarde Solar Tracker Park in Latvia",
          fi: "Lielvarden Solar Tracker Park Latviassa",
          de: "Lielvarde Solar Tracker Park in Lettland",
        },
      },
    ],
    title: {
      et: "Lielvarde päikesepark",
      en: "Lielvarde solar park",
      fi: "Lielvarden aurinkopuisto",
      de: "Solarpark Lielvarde",
    },
    description: sharedDesc,
    panelsUsed: {
      et: "Tier-1 paneelid",
      en: "Tier-1 panels",
      fi: "Tier-1-paneelit",
      de: "Tier-1 Module",
    },
    inverter: "SMA / Huawei inverter",
    mountingSystem: {
      et: "Üheteljeline tracker",
      en: "Single-axis tracker",
      fi: "Yksiakselinen tracker",
      de: "Einachsige Nachführung",
    },
    completionTime: { et: "2–4 kuud", en: "2–4 months", fi: "2–4 kuukautta", de: "2–4 Monate" },
  },
];

export const projectsByCategory = projectCategoryOrder.flatMap((category) =>
  projects.filter((project) => project.category === category),
);

export const formatCapacity = (kw: number, locale: string = "et") => {
  if (kw >= 1000) {
    const mw = kw / 1000;
    const formatted =
      mw % 1 === 0 ? mw.toString() : mw.toFixed(1).replace(".", locale === "en" ? "." : ",");
    return `${formatted} MW`;
  }
  return `${kw} kW`;
};
