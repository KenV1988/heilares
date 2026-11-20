import photo41 from "@/assets/projects/bess/valga-1.webp.asset.json";
import photo42 from "@/assets/projects/bess/valga-2.webp.asset.json";
import photo51 from "@/assets/projects/bess/marjamaa-1.webp.asset.json";
import photo52 from "@/assets/projects/bess/marjamaa-2.webp.asset.json";
import photo53 from "@/assets/projects/bess/marjamaa-3.webp.asset.json";
import type { LocalizedText } from "./projects";
import photo11 from "@/assets/projects/bess/parnu-1-1.webp.asset.json";
import photo12 from "@/assets/projects/bess/parnu-1-2.webp.asset.json";
import photo21 from "@/assets/projects/bess/parnu-2-1.webp.asset.json";
import photo22 from "@/assets/projects/bess/parnu-2-2.webp.asset.json";
import photo23 from "@/assets/projects/bess/parnu-2-3.webp.asset.json";
import photo31 from "@/assets/projects/bess/parnu-3-1.webp.asset.json";
import photo32 from "@/assets/projects/bess/parnu-3-2.webp.asset.json";
import photo33 from "@/assets/projects/bess/parnu-3-3.webp.asset.json";
import photo34 from "@/assets/projects/bess/parnu-3-4.webp.asset.json";

export interface BessProject {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  storageKwh: number;
  inverterPowerKw: number;
  inverterCount: number;
  inverterUnitKw: number;
  batteryCount: number;
  batteryUnitKwh: number;
  work: LocalizedText[];
  photos: { src: string; alt: LocalizedText }[];
}

export const bessProjectLabels = {
  category: {
    et: "BESS akupangad",
    en: "BESS energy storage",
    fi: "BESS-akkuvarastot",
    de: "BESS-Batteriespeicher",
  },
  capacity: {
    et: "Salvestusmaht",
    en: "Storage capacity",
    fi: "Varastointikapasiteetti",
    de: "Speicherkapazität",
  },
  power: {
    et: "Inverterite koguvõimsus",
    en: "Total inverter power",
    fi: "Invertterien kokonaisteho",
    de: "Gesamtleistung der Wechselrichter",
  },
  work: {
    et: "HeilArese tehtud tööd",
    en: "Work delivered by HeilAres",
    fi: "HeilAresin toteuttamat työt",
    de: "Von HeilAres ausgeführte Arbeiten",
  },
  location: {
    et: "Asukoht",
    en: "Location",
    fi: "Sijainti",
    de: "Standort",
  },
  back: {
    et: "Tagasi tehtud tööde juurde",
    en: "Back to projects",
    fi: "Takaisin referensseihin",
    de: "Zurück zu den Referenzen",
  },
};

export const bessProjects: BessProject[] = [
  {
    slug: "parnu-bess-1542",
    title: {
      et: "Pärnu hübriidelektrijaam",
      en: "Pärnu Hybrid Power Plant",
      fi: "Pärnun hybridivoimalaitos",
      de: "Hybridkraftwerk Pärnu",
    },
    description: {
      et: "Objektile rajati energiasalvestussüsteemiga hübriidelektrijaam.",
      en: "A hybrid power plant with an energy storage system was built on site.",
      fi: "Kohteeseen rakennettiin hybridivoimalaitos ja energianvarastointijärjestelmä.",
      de: "Am Standort wurde ein Hybridkraftwerk mit Energiespeichersystem errichtet.",
    },
    location: {
      et: "Pärnu, Eesti",
      en: "Pärnu, Estonia",
      fi: "Pärnu, Viro",
      de: "Pärnu, Estland",
    },
    storageKwh: 1542,
    inverterPowerKw: 480,
    inverterCount: 6,
    inverterUnitKw: 80,
    batteryCount: 6,
    batteryUnitKwh: 257,
    work: [
      {
        et: "Paigaldasime 6 Deye SUN-80K-SG02HP3-EU-EM6 hübriidinverterit, igaüks 80 kW (kokku 480 kW).",
        en: "Installed 6 Deye SUN-80K-SG02HP3-EU-EM6 hybrid inverters, 80 kW each (480 kW in total).",
        fi: "Asensimme 6 Deye SUN-80K-SG02HP3-EU-EM6 -hybridi-invertteriä, kukin 80 kW (yhteensä 480 kW).",
        de: "Montage von 6 Deye SUN-80K-SG02HP3-EU-EM6 Hybridwechselrichtern mit jeweils 80 kW (insgesamt 480 kW).",
      },
      {
        et: "Paigaldasime 6 BSL S314-16 LiFePO₄ akusüsteemi, igaüks 257 kWh (kokku 1542 kWh).",
        en: "Installed 6 BSL S314-16 LiFePO₄ battery systems, 257 kWh each (1542 kWh in total).",
        fi: "Asensimme 6 BSL S314-16 LiFePO₄ -akkujärjestelmää, kukin 257 kWh (yhteensä 1 542 kWh).",
        de: "Montage von 6 BSL S314-16 LiFePO₄-Batteriesystemen mit jeweils 257 kWh (insgesamt 1542 kWh).",
      },
      {
        et: "Rajasime kaabliteed ja paigaldasime AXCMK-HF C-Pro 4×50/16 jõukaabli.",
        en: "Built cable routes and installed AXCMK-HF C-Pro 4×50/16 power cable.",
        fi: "Rakensimme kaapelireitit ja asensimme AXCMK-HF C-Pro 4×50/16 -voimakaapelin.",
        de: "Errichtung der Kabelwege und Verlegung des Leistungskabels AXCMK-HF C-Pro 4×50/16.",
      },
      {
        et: "Paigaldasime seadmete ühendamiseks ja käitamiseks uue jaotuskilbi.",
        en: "Installed a new distribution board to connect and run the equipment.",
        fi: "Asensimme uuden jakokeskuksen laitteiden liittämistä ja käyttöä varten.",
        de: "Installation einer neuen Verteilung für den Anschluss und Betrieb der Anlagen.",
      },
    ],
    photos: [
      {
        src: photo11.url,
        alt: {
          et: "Pärnu 1542 kWh akupanga paigaldus – vaade 1",
          en: "Pärnu 1542 kWh energy storage installation – view 1",
          fi: "Pärnu: 1542 kWh:n akkuvaraston asennus – näkymä 1",
          de: "Pärnu: 1542 kWh Batteriespeicherinstallation – Ansicht 1",
        },
      },
      {
        src: photo12.url,
        alt: {
          et: "Pärnu 1542 kWh akupanga paigaldus – vaade 2",
          en: "Pärnu 1542 kWh energy storage installation – view 2",
          fi: "Pärnu: 1542 kWh:n akkuvaraston asennus – näkymä 2",
          de: "Pärnu: 1542 kWh Batteriespeicherinstallation – Ansicht 2",
        },
      },
    ],
  },
  {
    slug: "parnu-bess-105",
    title: {
      et: "Pärnu hübriidelektrijaam",
      en: "Pärnu Hybrid Power Plant",
      fi: "Pärnun hybridivoimalaitos",
      de: "Hybridkraftwerk Pärnu",
    },
    description: {
      et: "Objektile rajati energiasalvestussüsteemiga hübriidelektrijaam.",
      en: "A hybrid power plant with an energy storage system was built on site.",
      fi: "Kohteeseen rakennettiin hybridivoimalaitos ja energianvarastointijärjestelmä.",
      de: "Am Standort wurde ein Hybridkraftwerk mit Energiespeichersystem errichtet.",
    },
    location: {
      et: "Pärnu, Eesti",
      en: "Pärnu, Estonia",
      fi: "Pärnu, Viro",
      de: "Pärnu, Estland",
    },
    storageKwh: 105,
    inverterPowerKw: 60,
    inverterCount: 1,
    inverterUnitKw: 60,
    batteryCount: 1,
    batteryUnitKwh: 105,
    work: [
      {
        et: "Paigaldasime 60 kW Deye hübriidinverteri.",
        en: "Installed a 60 kW Deye hybrid inverter.",
        fi: "Asensimme 60 kW:n Deye-hybridi-invertterin.",
        de: "Montage eines Deye-Hybridwechselrichters mit 60 kW.",
      },
      {
        et: "Paigaldasime BSL S205-10 akusüsteemi kogumahuga 105 kWh.",
        en: "Installed a BSL S205-10 battery system with 105 kWh total capacity.",
        fi: "Asensimme BSL S205-10 -akkujärjestelmän, jonka kokonaiskapasiteetti on 105 kWh.",
        de: "Montage eines BSL S205-10 Batteriesystems mit einer Gesamtkapazität von 105 kWh.",
      },
      {
        et: "Paigaldasime ja ühendasime voolutrafod.",
        en: "Installed and connected current transformers.",
        fi: "Asensimme ja kytkimme virtamuuntajat.",
        de: "Montage und Anschluss der Stromwandler.",
      },
      {
        et: "Paigaldasime, ühendasime ja seadistasime nutiarvesti.",
        en: "Installed, connected and configured a smart meter.",
        fi: "Asensimme, kytkimme ja konfiguroimme älymittarin.",
        de: "Montage, Anschluss und Konfiguration eines Smart Meters.",
      },
      {
        et: "Ühendasime ja seadistasime kõik seadmed.",
        en: "Connected all equipment and set it up.",
        fi: "Kytkimme ja otimme käyttöön kaikki laitteet.",
        de: "Anschluss und Konfiguration aller Geräte.",
      },
    ],
    photos: [
      {
        src: photo21.url,
        alt: {
          et: "Pärnu 105 kWh akupanga paigaldus – vaade 1",
          en: "Pärnu 105 kWh energy storage installation – view 1",
          fi: "Pärnu: 105 kWh:n akkuvaraston asennus – näkymä 1",
          de: "Pärnu: 105 kWh Batteriespeicherinstallation – Ansicht 1",
        },
      },
      {
        src: photo22.url,
        alt: {
          et: "Pärnu 105 kWh akupanga paigaldus – vaade 2",
          en: "Pärnu 105 kWh energy storage installation – view 2",
          fi: "Pärnu: 105 kWh:n akkuvaraston asennus – näkymä 2",
          de: "Pärnu: 105 kWh Batteriespeicherinstallation – Ansicht 2",
        },
      },
      {
        src: photo23.url,
        alt: {
          et: "Pärnu 105 kWh akupanga paigaldus – vaade 3",
          en: "Pärnu 105 kWh energy storage installation – view 3",
          fi: "Pärnu: 105 kWh:n akkuvaraston asennus – näkymä 3",
          de: "Pärnu: 105 kWh Batteriespeicherinstallation – Ansicht 3",
        },
      },
    ],
  },
  {
    slug: "parnu-bess-630",
    title: {
      et: "Pärnu hübriidelektrijaam ja akupank",
      en: "Pärnu Hybrid Power Plant and Energy Storage",
      fi: "Pärnun hybridivoimalaitos ja akkuvarasto",
      de: "Hybridkraftwerk und Energiespeicher Pärnu",
    },
    description: {
      et: "Objektile rajati energiasalvestussüsteemiga hübriidelektrijaam.",
      en: "A hybrid power plant with an energy storage system was built on site.",
      fi: "Kohteeseen rakennettiin hybridivoimalaitos ja energianvarastointijärjestelmä.",
      de: "Am Standort wurde ein Hybridkraftwerk mit Energiespeichersystem errichtet.",
    },
    location: {
      et: "Pärnu, Eesti",
      en: "Pärnu, Estonia",
      fi: "Pärnu, Viro",
      de: "Pärnu, Estland",
    },
    storageKwh: 630,
    inverterPowerKw: 480,
    inverterCount: 6,
    inverterUnitKw: 80,
    batteryCount: 6,
    batteryUnitKwh: 105,
    work: [
      {
        et: "Paigaldasime 6 Deye SUN-80K-SG02HP3-EU-EM6 hübriidinverterit, igaüks 80 kW (kokku 480 kW).",
        en: "Installed 6 Deye SUN-80K-SG02HP3-EU-EM6 hybrid inverters, 80 kW each (480 kW in total).",
        fi: "Asensimme 6 Deye SUN-80K-SG02HP3-EU-EM6 -hybridi-invertteriä, kukin 80 kW (yhteensä 480 kW).",
        de: "Montage von 6 Deye SUN-80K-SG02HP3-EU-EM6 Hybridwechselrichtern mit jeweils 80 kW (insgesamt 480 kW).",
      },
      {
        et: "Paigaldasime 6 BSL S205-10 LiFePO₄ akusüsteemi, igaüks 105 kWh (kokku 630 kWh).",
        en: "Installed 6 BSL S205-10 LiFePO₄ battery systems, 105 kWh each (630 kWh in total).",
        fi: "Asensimme 6 BSL S205-10 LiFePO₄ -akkujärjestelmää, kukin 105 kWh (yhteensä 630 kWh).",
        de: "Montage von 6 BSL S205-10 LiFePO₄-Batteriesystemen mit jeweils 105 kWh (insgesamt 630 kWh).",
      },
      {
        et: "Rajasime kaabliteed ja paigaldasime MCCMKF 4×70/35 jõukaabli.",
        en: "Built cable routes and installed MCCMKF 4×70/35 power cable.",
        fi: "Rakensimme kaapelireitit ja asensimme MCCMKF 4×70/35 -voimakaapelin.",
        de: "Errichtung der Kabelwege und Verlegung des Leistungskabels MCCMKF 4×70/35.",
      },
      {
        et: "Paigaldasime uue JK-PEJ jaotuskilbi.",
        en: "Installed a new JK-PEJ distribution board.",
        fi: "Asensimme uuden JK-PEJ-jakokeskuksen.",
        de: "Installation einer neuen JK-PEJ-Verteilung.",
      },
    ],
    photos: [
      {
        src: photo31.url,
        alt: {
          et: "Pärnu 630 kWh akupanga paigaldus – vaade 1",
          en: "Pärnu 630 kWh energy storage installation – view 1",
          fi: "Pärnu: 630 kWh:n akkuvaraston asennus – näkymä 1",
          de: "Pärnu: 630 kWh Batteriespeicherinstallation – Ansicht 1",
        },
      },
      {
        src: photo32.url,
        alt: {
          et: "Pärnu 630 kWh akupanga paigaldus – vaade 2",
          en: "Pärnu 630 kWh energy storage installation – view 2",
          fi: "Pärnu: 630 kWh:n akkuvaraston asennus – näkymä 2",
          de: "Pärnu: 630 kWh Batteriespeicherinstallation – Ansicht 2",
        },
      },
      {
        src: photo33.url,
        alt: {
          et: "Pärnu 630 kWh akupanga paigaldus – vaade 3",
          en: "Pärnu 630 kWh energy storage installation – view 3",
          fi: "Pärnu: 630 kWh:n akkuvaraston asennus – näkymä 3",
          de: "Pärnu: 630 kWh Batteriespeicherinstallation – Ansicht 3",
        },
      },
      {
        src: photo34.url,
        alt: {
          et: "Pärnu 630 kWh akupanga paigaldus – vaade 4",
          en: "Pärnu 630 kWh energy storage installation – view 4",
          fi: "Pärnu: 630 kWh:n akkuvaraston asennus – näkymä 4",
          de: "Pärnu: 630 kWh Batteriespeicherinstallation – Ansicht 4",
        },
      },
    ],
  },
  {
    slug: "valga-bess-409-6",
    title: {
      et: "Valga tööstuslik akupank KSTAR BluePulse",
      en: "Valga Industrial Energy Storage KSTAR BluePulse",
      fi: "Valgan teollinen KSTAR BluePulse -akkuvarasto",
      de: "Industrieller KSTAR BluePulse Energiespeicher Valga",
    },
    description: {
      et: "Valga objektile rajati tööstuslik KSTAR BluePulse energiasalvestussüsteem.",
      en: "An industrial KSTAR BluePulse energy storage system was built for a site in Valga.",
      fi: "Valgan kohteeseen rakennettiin teollinen KSTAR BluePulse -energianvarastointijärjestelmä.",
      de: "Am Standort Valga wurde ein industrielles KSTAR BluePulse Energiespeichersystem errichtet.",
    },
    location: {
      et: "Valga, Eesti",
      en: "Valga, Estonia",
      fi: "Valga, Viro",
      de: "Valga, Estland",
    },
    storageKwh: 409.6,
    inverterPowerKw: 200,
    inverterCount: 4,
    inverterUnitKw: 50,
    batteryCount: 4,
    batteryUnitKwh: 102.4,
    work: [
      {
        et: "Paigaldasime 4 KSTAR KAC50DP inverterit, igaüks 50 kW (kokku 200 kW).",
        en: "Installed 4 KSTAR KAC50DP inverters, 50 kW each (200 kW in total).",
        fi: "Asensimme 4 KSTAR KAC50DP -invertteriä, kukin 50 kW (yhteensä 200 kW).",
        de: "Montage von 4 KSTAR KAC50DP Wechselrichtern mit jeweils 50 kW (insgesamt 200 kW).",
      },
      {
        et: "Paigaldasime 4 KSTAR BC100DE akuüksust, igaüks 102,4 kWh (kokku 409,6 kWh).",
        en: "Installed 4 KSTAR BC100DE battery units, 102.4 kWh each (409.6 kWh in total).",
        fi: "Asensimme 4 KSTAR BC100DE -akkuyksikköä, kukin 102,4 kWh (yhteensä 409,6 kWh).",
        de: "Montage von 4 KSTAR BC100DE Batterieeinheiten mit jeweils 102,4 kWh (insgesamt 409,6 kWh).",
      },
      {
        et: "Rajasime uued kaabliteed.",
        en: "Built new cable routes.",
        fi: "Rakensimme uudet kaapelireitit.",
        de: "Errichtung neuer Kabelwege.",
      },
      {
        et: "Paigaldasime ja ühendasime jõukaablid.",
        en: "Installed and connected power cables.",
        fi: "Asensimme ja kytkimme voimakaapelit.",
        de: "Verlegung und Anschluss der Leistungskabel.",
      },
      {
        et: "Ühendasime akuüksused inverteritega.",
        en: "Connected the battery units to the inverters.",
        fi: "Kytkimme akkuyksiköt inverttereihin.",
        de: "Anschluss der Batterieeinheiten an die Wechselrichter.",
      },
      {
        et: "Ühendasime BMS- ja EMS-süsteemid.",
        en: "Connected the BMS and EMS systems.",
        fi: "Kytkimme BMS- ja EMS-järjestelmät.",
        de: "Anschluss der BMS- und EMS-Systeme.",
      },
    ],
    photos: [
      {
        src: photo41.url,
        alt: {
          et: "Valga 409,6 kWh akupanga paigaldus – vaade 1",
          en: "Valga 409.6 kWh energy storage installation – view 1",
          fi: "Valga: 409,6 kWh:n akkuvaraston asennus – näkymä 1",
          de: "Valga: 409,6 kWh Batteriespeicherinstallation – Ansicht 1",
        },
      },
      {
        src: photo42.url,
        alt: {
          et: "Valga 409,6 kWh akupanga paigaldus – vaade 2",
          en: "Valga 409.6 kWh energy storage installation – view 2",
          fi: "Valga: 409,6 kWh:n akkuvaraston asennus – näkymä 2",
          de: "Valga: 409,6 kWh Batteriespeicherinstallation – Ansicht 2",
        },
      },
    ],
  },
  {
    slug: "marjamaa-bess-1260",
    title: {
      et: "Märjamaa hübriidelektrijaam ja akupank",
      en: "Märjamaa Hybrid Power Plant and Energy Storage",
      fi: "Märjamaan hybridivoimalaitos ja akkuvarasto",
      de: "Hybridkraftwerk und Energiespeicher Märjamaa",
    },
    description: {
      et: "Objektile rajati energiasalvestussüsteemiga hübriidelektrijaam.",
      en: "A hybrid power plant with an energy storage system was built on site.",
      fi: "Kohteeseen rakennettiin hybridivoimalaitos ja energianvarastointijärjestelmä.",
      de: "Am Standort wurde ein Hybridkraftwerk mit Energiespeichersystem errichtet.",
    },
    location: {
      et: "Märjamaa, Eesti",
      en: "Märjamaa, Estonia",
      fi: "Märjamaa, Viro",
      de: "Märjamaa, Estland",
    },
    storageKwh: 1260,
    inverterPowerKw: 600,
    inverterCount: 10,
    inverterUnitKw: 60,
    batteryCount: 10,
    batteryUnitKwh: 126,
    work: [
      {
        et: "Paigaldasime 10 Deye hübriidinverterit, igaüks 60 kW (kokku 600 kW).",
        en: "Installed 10 Deye hybrid inverters, 60 kW each (600 kW in total).",
        fi: "Asensimme 10 Deye-hybridi-invertteriä, kukin 60 kW (yhteensä 600 kW).",
        de: "Montage von 10 Deye-Hybridwechselrichtern mit jeweils 60 kW (insgesamt 600 kW).",
      },
      {
        et: "Paigaldasime 10 ESS-GRID akusüsteemi, igaüks 126 kWh (kokku 1260 kWh).",
        en: "Installed 10 ESS-GRID battery systems, 126 kWh each (1260 kWh in total).",
        fi: "Asensimme 10 ESS-GRID-akkujärjestelmää, kukin 126 kWh (yhteensä 1 260 kWh).",
        de: "Montage von 10 ESS-GRID Batteriesystemen mit jeweils 126 kWh (insgesamt 1260 kWh).",
      },
      {
        et: "Rajasime kaabliteed ja paigaldasime AXCHK-HF C-Pro 4×95/29 jõukaabli.",
        en: "Built cable routes and installed AXCHK-HF C-Pro 4×95/29 power cable.",
        fi: "Rakensimme kaapelireitit ja asensimme AXCHK-HF C-Pro 4×95/29 -voimakaapelin.",
        de: "Errichtung der Kabelwege und Verlegung des Leistungskabels AXCHK-HF C-Pro 4×95/29.",
      },
    ],
    photos: [
      {
        src: photo51.url,
        alt: {
          et: "Märjamaa 1260 kWh akupanga paigaldus – vaade 1",
          en: "Märjamaa 1260 kWh energy storage installation – view 1",
          fi: "Märjamaa: 1260 kWh:n akkuvaraston asennus – näkymä 1",
          de: "Märjamaa: 1260 kWh Batteriespeicherinstallation – Ansicht 1",
        },
      },
      {
        src: photo52.url,
        alt: {
          et: "Märjamaa 1260 kWh akupanga paigaldus – vaade 2",
          en: "Märjamaa 1260 kWh energy storage installation – view 2",
          fi: "Märjamaa: 1260 kWh:n akkuvaraston asennus – näkymä 2",
          de: "Märjamaa: 1260 kWh Batteriespeicherinstallation – Ansicht 2",
        },
      },
      {
        src: photo53.url,
        alt: {
          et: "Märjamaa 1260 kWh akupanga paigaldus – vaade 3",
          en: "Märjamaa 1260 kWh energy storage installation – view 3",
          fi: "Märjamaa: 1260 kWh:n akkuvaraston asennus – näkymä 3",
          de: "Märjamaa: 1260 kWh Batteriespeicherinstallation – Ansicht 3",
        },
      },
    ],
  },
];

export const formatStorage = (kwh: number, locale: string) =>
  `${new Intl.NumberFormat(locale, { useGrouping: false, maximumFractionDigits: 4 }).format(kwh)} kWh`;
export const formatStorageMwh = (kwh: number, locale: string) =>
  `${new Intl.NumberFormat(locale, { useGrouping: false, maximumFractionDigits: 4 }).format(kwh / 1000)} MWh`;
