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
  /** Total capacity of the park, not the capacity installed by HeilAres. */
  parkCapacityKw: number;
  /** HeilAres' documented project share. For Stelpe, see shareBreakdown. */
  heilAresShareKw: number;
  heilAresShareApproximate?: boolean;
  shareBreakdown?: {
    mechanicalKw: number;
    electricalKw: number;
  };
  period: string;
  coverImage: string;
  coverAlt: LocalizedText;
  gallery: GalleryImage[];
  title: LocalizedText;
  description: LocalizedText;
  technology?: LocalizedText;
  developer?: string;
  mainContractor?: string;
  client?: string;
}

const zimTracker: LocalizedText = {
  et: "ZIMMERMANN PV-Tracker — ZIM Track",
  en: "ZIMMERMANN PV-Tracker — ZIM Track",
  fi: "ZIMMERMANN PV-Tracker — ZIM Track",
  de: "ZIMMERMANN PV-Tracker — ZIM Track",
};

export const projects: Project[] = [
  {
    slug: "risti-eesti",
    category: "tracker_park",
    location: { et: "Risti, Eesti", en: "Risti, Estonia", fi: "Risti, Viro", de: "Risti, Estland" },
    parkCapacityKw: 244000,
    heilAresShareKw: 80000,
    heilAresShareApproximate: true,
    period: "2025–2026",
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
    description: {
      et: "HeilAres teostas ligikaudu 80 MW ulatuses kandekonstruktsioonide ja päikesepaneelide paigaldust ning DC-kaabelduse ja inverterite töid. Pargi koguvõimsus on 244 MW.",
      en: "HeilAres delivered approximately 80 MW of mounting structures and PV module installation, together with DC cabling and inverter works. The park's total capacity is 244 MW.",
      fi: "HeilAres toteutti noin 80 MW edestä tukirakenteiden ja aurinkopaneelien asennusta sekä DC-kaapelointi- ja invertteritöitä. Puiston kokonaisteho on 244 MW.",
      de: "HeilAres montierte Unterkonstruktionen und PV-Module mit einem Umfang von etwa 80 MW und führte DC-Verkabelung sowie Wechselrichterarbeiten aus. Die Gesamtleistung des Parks beträgt 244 MW.",
    },
    technology: zimTracker,
    developer: "Sunly",
    mainContractor: "Connecto Infra",
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
    parkCapacityKw: 72500,
    heilAresShareKw: 40000,
    shareBreakdown: { mechanicalKw: 24000, electricalKw: 40000 },
    period: "2024–2025",
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
    description: {
      et: "HeilAres paigaldas 24 MW ulatuses kandekonstruktsioonid ja päikesepaneelid ning teostas 40 MW ulatuses DC-kaabelduse ja inverterite töid. Pargi koguvõimsus on 72,5 MW; tööpakettide mahtusid ei liideta.",
      en: "HeilAres installed 24 MW of mounting structures and PV modules and delivered 40 MW of DC cabling and inverter works. The park's total capacity is 72.5 MW; the work-package volumes are not additive.",
      fi: "HeilAres asensi 24 MW edestä tukirakenteita ja aurinkopaneeleita sekä toteutti 40 MW edestä DC-kaapelointi- ja invertteritöitä. Puiston kokonaisteho on 72,5 MW; työpakettien määriä ei lasketa yhteen.",
      de: "HeilAres montierte Unterkonstruktionen und PV-Module mit 24 MW und führte DC-Verkabelung sowie Wechselrichterarbeiten mit 40 MW aus. Die Gesamtleistung des Parks beträgt 72,5 MW; die Arbeitspakete werden nicht addiert.",
    },
    technology: {
      et: "CORAB WS-019NB, 15° fikseeritud paigaldusnurk",
      en: "CORAB WS-019NB, 15° fixed tilt",
      fi: "CORAB WS-019NB, 15° kiinteä asennuskulma",
      de: "CORAB WS-019NB, 15° feste Aufständerung",
    },
    developer: "Ignitis Renewables",
    mainContractor: "Smartecon OÜ",
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
    parkCapacityKw: 77500,
    heilAresShareKw: 32700,
    period: "2024",
    coverImage: kirikmae1,
    coverAlt: {
      et: "Kirikmäe 77,5 MW maapargi õhuvaade",
      en: "Aerial view of the 77.5 MW Kirikmäe ground-mounted solar park",
      fi: "Ilmakuva 77,5 MW:n Kirikmäen maapuistosta",
      de: "Luftaufnahme des 77,5-MW-Solarparks Kirikmäe",
    },
    gallery: [
      {
        src: kirikmae1,
        alt: {
          et: "Kirikmäe 77,5 MW maapargi õhuvaade",
          en: "Aerial view of the 77.5 MW Kirikmäe ground-mounted solar park",
          fi: "Ilmakuva 77,5 MW:n Kirikmäen maapuistosta",
          de: "Luftaufnahme des 77,5-MW-Solarparks Kirikmäe",
        },
      },
    ],
    title: {
      et: "Kirikmäe päikesepark",
      en: "Kirikmäe solar park",
      fi: "Kirikmäen aurinkopuisto",
      de: "Solarpark Kirikmäe",
    },
    description: {
      et: "HeilArese 32,7 MW töömaht hõlmas betoonvaide, kandekonstruktsioone, päikesepaneele, DC-kaabeldust ja invertereid. Pargi koguvõimsus on 77,5 MW.",
      en: "HeilAres' 32.7 MW scope covered concrete piles, mounting structures, PV modules, DC cabling and inverters. The park's total capacity is 77.5 MW.",
      fi: "HeilAresin 32,7 MW:n työmaara käsitti betonipaalut, tukirakenteet, aurinkopaneelit, DC-kaapeloinnin ja invertterit. Puiston kokonaisteho on 77,5 MW.",
      de: "Der 32,7-MW-Arbeitsumfang von HeilAres umfasste Betonpfähle, Unterkonstruktionen, PV-Module, DC-Verkabelung und Wechselrichter. Die Gesamtleistung des Parks beträgt 77,5 MW.",
    },
    technology: {
      et: "Fikseeritud maapealne kandekonstruktsioon, ligikaudu 117 600 Canadian Solar paneeli",
      en: "Fixed-tilt ground mounting, approximately 117,600 Canadian Solar modules",
      fi: "Kiinteäkulmainen maa-asennus, noin 117 600 Canadian Solar -paneelia",
      de: "Fest aufgeständerte Bodenmontage, etwa 117.600 Canadian-Solar-Module",
    },
    developer: "Baltic Renewable Energy Platform (Evecon & Mirova)",
    mainContractor: "Wiso Engineering",
  },
  {
    slug: "bls-eesti",
    category: "katusepark",
    location: { et: "Eesti", en: "Estonia", fi: "Viro", de: "Estland" },
    parkCapacityKw: 4200,
    heilAresShareKw: 4200,
    period: "2023",
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
      et: "BLS logistikakeskuse katusepark",
      en: "BLS Logistics Centre rooftop solar park",
      fi: "BLS-logistiikkakeskuksen kattoaurinkopuisto",
      de: "Dach-Solarpark des BLS Logistikzentrums",
    },
    description: {
      et: "HeilArese dokumenteeritud tööde maht BLS logistikakeskuse katusepargis oli 4,2 MW.",
      en: "HeilAres' documented scope at the BLS Logistics Centre rooftop solar park was 4.2 MW.",
      fi: "HeilAresin dokumentoitu työmaara BLS-logistiikkakeskuksen kattoaurinkopuistossa oli 4,2 MW.",
      de: "Der dokumentierte Arbeitsumfang von HeilAres am Dach-Solarpark des BLS Logistikzentrums betrug 4,2 MW.",
    },
    client: "BLS Baltic Logistic",
  },
  {
    slug: "lielvarde-latvia",
    category: "tracker_park",
    location: {
      et: "Lielvārde, Läti",
      en: "Lielvārde, Latvia",
      fi: "Lielvārde, Latvia",
      de: "Lielvārde, Lettland",
    },
    parkCapacityKw: 10940,
    heilAresShareKw: 10940,
    period: "2024–2025",
    coverImage: lielvarde1,
    coverAlt: {
      et: "Lielvārde Solar Tracker Park Lätis",
      en: "Lielvārde Solar Tracker Park in Latvia",
      fi: "Lielvärden Solar Tracker Park Latviassa",
      de: "Lielvārde Solar Tracker Park in Lettland",
    },
    gallery: [
      {
        src: lielvarde1,
        alt: {
          et: "Lielvārde Solar Tracker Park Lätis",
          en: "Lielvārde Solar Tracker Park in Latvia",
          fi: "Lielvärden Solar Tracker Park Latviassa",
          de: "Lielvārde Solar Tracker Park in Lettland",
        },
      },
    ],
    title: {
      et: "Lielvārde päikesepark",
      en: "Lielvārde solar park",
      fi: "Lielvärden aurinkopuisto",
      de: "Solarpark Lielvārde",
    },
    description: {
      et: "HeilAres teostas 10,94 MW suurusel projektil postide ramimise, kandekonstruktsioonide ja päikesepaneelide paigalduse. HeilAres oli projekti peatöövõtja.",
      en: "HeilAres delivered pile driving, mounting structures and PV module installation for the 10.94 MW project and acted as the project's main contractor.",
      fi: "HeilAres toteutti 10,94 MW:n hankkeessa paalutuksen, tukirakenteiden ja aurinkopaneelien asennuksen. HeilAres toimi hankkeen paaurakoitsijana.",
      de: "HeilAres führte bei dem 10,94-MW-Projekt die Rammung sowie die Montage der Unterkonstruktionen und PV-Module aus und war Hauptauftragnehmer des Projekts.",
    },
    technology: zimTracker,
    developer: "EVECON group",
    mainContractor: "HeilAres OÜ",
  },
];

export const projectsByCategory = projectCategoryOrder.flatMap((category) =>
  projects.filter((project) => project.category === category),
);

export const formatCapacity = (kw: number, locale: string = "et") => {
  if (kw >= 1000) {
    const mw = kw / 1000;
    const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(mw);
    return `${formatted} MW`;
  }
  return `${new Intl.NumberFormat(locale).format(kw)} kW`;
};

export const formatHeilAresShare = (project: Project, locale: string = "et") => {
  if (project.shareBreakdown) {
    return `${formatCapacity(project.shareBreakdown.mechanicalKw, locale)} / ${formatCapacity(
      project.shareBreakdown.electricalKw,
      locale,
    )}`;
  }
  return `${project.heilAresShareApproximate ? "≈" : ""}${formatCapacity(
    project.heilAresShareKw,
    locale,
  )}`;
};
