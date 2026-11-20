import type { Lang } from "@/i18n";
import epcPartnerCover from "@/assets/blog/epc-partner.jpg";
import parkTypesCover from "@/assets/blog/park-types.jpg";
import turnkeyCover from "@/assets/blog/turnkey.jpg";
import timelineCover from "@/assets/blog/timeline.jpg";
import tier1Cover from "@/assets/blog/tier1.jpg";
import maintenanceCover from "@/assets/blog/maintenance.jpg";
import electricalCover from "@/assets/blog/electrical-works.jpg";
import { workforceFactory, workforceShipbuilding } from "./blog-workforce";
import { bessStorage } from "./blog-bess";
import { autumnPosts } from "./blog-autumn";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogFAQ {
  question: string;
  lead: string;
  answer: string;
}

export interface BlogPostContent {
  title: string;
  summary: string;
  lead: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export type BlogCategory =
  | "epc"
  | "park_types"
  | "components"
  | "maintenance"
  | "electrical"
  | "storage"
  | "workforce";

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  date: string; // ISO
  readMinutes: number;
  cover: string;
  content: Record<Lang, BlogPostContent>;
}

// ─────────────────────────────────────────────────────────────────────────
// 1. EPC partner
// ─────────────────────────────────────────────────────────────────────────
const epcPartner: BlogPost = {
  slug: "kuidas-valida-paikesepargi-epc-partnerit",
  category: "epc",
  date: "2026-04-15",
  readMinutes: 6,
  cover: epcPartnerCover,
  content: {
    et: {
      title: "Kuidas valida päikesepargi EPC-partnerit?",
      summary:
        "Praktiline juhend arendajatele ja tööstustele EPC-partneri valikul — millised kriteeriumid loevad ja milliseid küsimusi küsida.",
      lead: "Päikesepargi EPC-partner (Engineering, Procurement, Construction) on ettevõte, kes vastutab kogu päikesepargi projekteerimise, komponentide hankimise ja ehituse eest võtmed kätte põhimõttel.",
      sections: [
        {
          heading: "Miks EPC-partneri valik on kriitiline?",
          paragraphs: [
            "Päikesepargi tootlikkus 25–30 aasta jooksul sõltub otseselt sellest, kui kvaliteetselt see on projekteeritud ja ehitatud. Vale EPC-partner võib põhjustada prognoositust väiksemat energiatoodangut, sagedasi rikkeid, kallimat hooldust ja halvimal juhul kogu vara väärtuse kaotust.",
            "Arendaja jaoks on EPC-partner ka finants- ja ajakavapartner — viivitused tähendavad tulu kaotust, alahinnatud BOM (bill of materials) tähendab eelarve ületamist. Investorid ja pangad hindavad projekti riski sageli läbi EPC-partneri varasema portfelli.",
          ],
        },
        {
          heading: "Millised kriteeriumid loevad?",
          paragraphs: [
            "Esmane kriteerium on referentsprojektide tegelik töömaht ja sarnaste tööpakettide kogemus. HeilArese dokumenteeritud tööde maht on 167,64 MW; suurtes parkides teostame kokkulepitud osi, mitte automaatselt kogu pargi paigaldust.",
            "Komponentide tarneahela puhul kontrollige tarnijaid, seadmete tehnilisi andmeid, tarneaegu ja garantiitingimusi. Tier 1 staatus ei taga kvaliteeti, soodsamat hinda ega garantii täitmist.",
            "Kontrollige, kes tööd teostab ning kuidas korraldatakse kvaliteedikontroll ja vastutus oma meeskondade või alltöövõtjate kasutamisel. HeilArese meeskonna koosseis ja vastutus kinnitatakse projektipõhiselt.",
          ],
        },
        {
          heading: "Millised küsimused küsida pakkumiste hindamisel?",
          paragraphs: [
            "Küsi pakkumise eelduste lahtikirjutust — milliseid paneele, invertereid ja kandekonstruktsioone on pakkumises arvestatud, milline on geoloogia eeldus, kas võrguühenduse kulud on sees. Pakkumised, mis on ainult €/W põhised ilma spetsifikatsioonita, ei ole võrreldavad.",
            "Küsi projekti graafikut nädalate kaupa ja viivituste eest vastutust. Tõsine EPC-partner annab konkreetsed vahe-eesmärgid ja leppetrahvid hilinemiste eest. Küsi ka, kuidas on projekti riskid kaetud, näiteks ilmast tulenev seisak.",
          ],
        },
      ],
      faqs: [
        {
          question: "Mille poolest erineb EPC-partner tavalisest paigaldajast?",
          lead: "EPC-partner vastutab kogu projekti elutsükli eest — projekteerimine, hankimine ja ehitus — samas kui tavaline paigaldaja teostab ainult füüsilise paigalduse.",
          answer:
            "EPC-mudel annab arendajale ühe vastutava partneri kogu lepingulisele ahelale, mis lihtsustab projekti juhtimist ja vähendab koordinatsiooniriski.",
        },
        {
          question: "Kui suur peab EPC-partneri portfell olema?",
          lead: "Portfelli jaoks ei ole universaalset MW-alampiiri. Hinnake sarnaste projektide tegelikku töömahtu, ettevõtte rolli, kvaliteeti ja ajakava täitmist.",
          answer:
            "Megavatt-skaala kogemus näitab, et meeskond on lahendanud reaalseid projektijuhtimise, võrguühenduse ja loogistika väljakutseid.",
        },
        {
          question: "Kas tasub valida kohalik või rahvusvaheline EPC?",
          lead: "Kohalik EPC-partner, kellel on rahvusvaheline kogemus, on tavaliselt parim valik, kuna kombineerib kohaliku regulatiivse kogemuse ja skaalavõime.",
          answer:
            "HeilAres kombineerib Eesti ja Läti kohaliku tugeva tegevuse Euroopa-üleste projektivõimekustega.",
        },
      ],
    },
    en: {
      title: "How to choose a solar park EPC partner?",
      summary:
        "A practical guide for developers and industrial clients on selecting an EPC partner — which criteria matter and what questions to ask.",
      lead: "A solar park EPC partner (Engineering, Procurement, Construction) is the company responsible for the full turnkey delivery of a solar park, covering design, component procurement and construction.",
      sections: [
        {
          heading: "Why is the EPC choice critical?",
          paragraphs: [
            "The performance of a solar park over 25–30 years depends directly on how well it has been engineered and built. The wrong EPC partner can cause underperformance, frequent failures, expensive maintenance and, in the worst case, total asset value loss.",
            "For the developer, the EPC partner is also a financial and schedule partner — delays mean lost revenue, an under-specified bill of materials means budget overruns. Investors and banks frequently assess project risk through the EPC partner's past portfolio.",
          ],
        },
        {
          heading: "Which criteria matter?",
          paragraphs: [
            "The first criterion is the actual scope delivered on reference projects and experience with comparable work packages. HeilAres has 167.64 MW of documented work; on large parks we deliver agreed scopes rather than automatically installing the entire park.",
            "Check suppliers, equipment specifications, delivery dates and warranty terms. Tier 1 status does not guarantee quality, lower prices or warranty fulfilment.",
            "Check who performs the work and how quality control and responsibility are organised for internal crews and subcontractors. HeilAres crew composition and responsibilities are confirmed for each project.",
          ],
        },
        {
          heading: "What questions to ask when evaluating bids?",
          paragraphs: [
            "Ask for the assumptions behind the bid — which panels, inverters and mounting systems are included, what soil conditions are assumed, whether grid-connection costs are inside. Bids quoted only as €/W without specifications are not comparable.",
            "Ask for the project schedule week by week and accountability for delays. A serious EPC partner gives concrete milestones and liquidated damages for late delivery. Ask also how weather-related downtime risk is allocated.",
          ],
        },
      ],
      faqs: [
        {
          question: "How is an EPC partner different from a regular installer?",
          lead: "An EPC partner is responsible for the entire project lifecycle — engineering, procurement and construction — while a regular installer only performs physical installation.",
          answer:
            "The EPC model gives the developer a single point of contractual accountability, which simplifies project management and reduces coordination risk.",
        },
        {
          question: "How large should an EPC partner's portfolio be?",
          lead: "There is no universal minimum portfolio in MW. Assess comparable delivered scopes, the company’s role, quality and schedule performance.",
          answer:
            "Megawatt-scale experience proves the team has solved real project management, grid interconnection and logistics challenges.",
        },
        {
          question: "Should you choose a local or international EPC?",
          lead: "A local EPC partner with international experience is usually the best choice as it combines local regulatory know-how with scalability.",
          answer:
            "HeilAres combines a strong local presence in Estonia and Latvia with pan-European project capabilities.",
        },
      ],
    },
    fi: {
      title: "Kuinka valita aurinkopuiston EPC-kumppani?",
      summary:
        "Käytännönopas kehittäjille ja teollisuusasiakkaille EPC-kumppanin valintaan — mitkä kriteerit merkitsevät ja mitä kysyä.",
      lead: "Aurinkopuiston EPC-kumppani (Engineering, Procurement, Construction) on yritys, joka vastaa aurinkopuiston koko avaimet käteen -toimituksesta — suunnittelusta, komponenttien hankinnasta ja rakentamisesta.",
      sections: [
        {
          heading: "Miksi EPC-kumppanin valinta on kriittinen?",
          paragraphs: [
            "Aurinkopuiston tuotanto 25–30 vuoden aikana riippuu suoraan siitä, kuinka hyvin se on suunniteltu ja rakennettu. Väärä EPC-kumppani voi aiheuttaa heikkoa tuotantoa, toistuvia vikoja, kalliita huoltoja ja pahimmillaan koko omaisuusarvon menettämisen.",
            "Kehittäjälle EPC-kumppani on myös talous- ja aikataulukumppani — viivästykset tarkoittavat tulojen menetystä ja aliarvioitu komponenttiluettelo budjetin ylitystä. Sijoittajat arvioivat hankkeen riskiä usein EPC-kumppanin aiemman portfolion kautta.",
          ],
        },
        {
          heading: "Mitkä kriteerit ratkaisevat?",
          paragraphs: [
            "Ensimmäinen kriteeri on referenssiprojektien toteutunut työmäärä ja kokemus vastaavista työpaketeista. HeilAresin dokumentoitu työmäärä on 167,64 MW; suurissa puistoissa toteutamme sovittuja osuuksia emmekä automaattisesti koko puiston asennusta.",
            "Tarkista toimittajat, laitteiden tekniset tiedot, toimitusajat ja takuuehdot. Tier 1 -asema ei takaa laatua, alempaa hintaa tai takuun toteutumista.",
            "Tarkista työn toteuttaja sekä laadunvalvonta ja vastuut omia tiimejä tai alihankkijoita käytettäessä. HeilAresin tiimikokoonpano ja vastuut vahvistetaan hankekohtaisesti.",
          ],
        },
        {
          heading: "Mitä kysyä tarjouksia vertailtaessa?",
          paragraphs: [
            "Pyydä tarjouksen oletukset auki kirjoitettuina — mitkä paneelit, invertterit ja kannakkeet on huomioitu, millaiset maaperäoletukset on tehty, onko verkkoliittymä mukana. Pelkkä €/W-hinta ilman spesifikaatiota ei ole vertailukelpoinen.",
            "Pyydä projektin aikataulu viikoittain ja vastuu viivästyksistä. Vakavasti otettava EPC-kumppani antaa konkreettiset välitavoitteet ja sopimussakot myöhästymisestä.",
          ],
        },
      ],
      faqs: [
        {
          question: "Miten EPC-kumppani eroaa tavallisesta asentajasta?",
          lead: "EPC-kumppani vastaa koko projektin elinkaaresta — suunnittelusta, hankinnasta ja rakentamisesta — kun tavallinen asentaja hoitaa vain fyysisen asennuksen.",
          answer:
            "EPC-malli antaa kehittäjälle yhden sopimusvastuullisen kumppanin, mikä yksinkertaistaa projektinhallintaa.",
        },
        {
          question: "Kuinka suuri EPC-kumppanin portfolion tulisi olla?",
          lead: "Portfoliolle ei ole yleispätevää MW-alarajaa. Arvioi vastaavien hankkeiden toteutettu työlaajuus, yrityksen rooli, laatu ja aikataulujen toteutuminen.",
          answer:
            "Megawattiluokan kokemus osoittaa, että tiimi on ratkaissut todellisia projektinhallinnan ja verkkoliitynnän haasteita.",
        },
        {
          question: "Pitäisikö valita paikallinen vai kansainvälinen EPC?",
          lead: "Paikallinen EPC-kumppani, jolla on kansainvälistä kokemusta, on yleensä paras valinta.",
          answer:
            "HeilAres yhdistää vahvan paikallisen läsnäolon Virossa ja Latviassa pan-eurooppalaisiin projektikykyihin.",
        },
      ],
    },
    de: {
      title: "Wie wählt man den richtigen EPC-Partner für einen Solarpark?",
      summary:
        "Ein praktischer Leitfaden für Entwickler und Industriekunden zur Auswahl eines EPC-Partners – welche Kriterien zählen und welche Fragen zu stellen sind.",
      lead: "Ein EPC-Partner (Engineering, Procurement, Construction) für Solarparks ist das Unternehmen, das für die vollständige schlüsselfertige Errichtung eines Solarparks verantwortlich ist – von Planung über Beschaffung bis zum Bau.",
      sections: [
        {
          heading: "Warum ist die Wahl des EPC-Partners entscheidend?",
          paragraphs: [
            "Die Leistung eines Solarparks über 25–30 Jahre hängt unmittelbar davon ab, wie gut er geplant und gebaut wurde. Der falsche EPC-Partner kann zu Minderertrag, häufigen Ausfällen, teurer Wartung und im schlimmsten Fall zum vollständigen Wertverlust der Anlage führen.",
            "Für den Entwickler ist der EPC-Partner zugleich Finanz- und Terminpartner – Verzögerungen bedeuten Einnahmeausfälle, eine unzureichend spezifizierte Stückliste bedeutet Budgetüberschreitungen. Investoren und Banken bewerten das Projektrisiko häufig anhand des bisherigen Portfolios des EPC-Partners.",
          ],
        },
        {
          heading: "Welche Kriterien sind entscheidend?",
          paragraphs: [
            "Das erste Kriterium ist der tatsächlich ausgeführte Arbeitsumfang in Referenzprojekten sowie Erfahrung mit vergleichbaren Arbeitspaketen. HeilAres weist 167,64 MW dokumentierte Arbeiten aus; bei großen Parks liefern wir vereinbarte Teilumfänge und nicht automatisch die gesamte Parkinstallation.",
            "Prüfen Sie Lieferanten, technische Daten, Liefertermine und Garantiebedingungen. Tier-1-Status garantiert weder Qualität noch niedrigere Preise oder die Erfüllung einer Garantie.",
            "Prüfen Sie, wer die Arbeiten ausführt und wie Qualitätssicherung und Verantwortung bei eigenen Teams oder Subunternehmern geregelt werden. Teamzusammensetzung und Zuständigkeiten von HeilAres werden projektbezogen bestätigt.",
          ],
        },
        {
          heading: "Welche Fragen sollten bei der Angebotsbewertung gestellt werden?",
          paragraphs: [
            "Fragen Sie nach den dem Angebot zugrunde liegenden Annahmen – welche Module, Wechselrichter und Unterkonstruktionen einkalkuliert sind, welche Bodenverhältnisse angenommen werden und ob die Netzanschlusskosten enthalten sind. Angebote, die nur als €/W ohne Spezifikation angegeben werden, sind nicht vergleichbar.",
            "Fragen Sie nach dem Projektzeitplan wochenweise und nach der Verantwortlichkeit bei Verzögerungen. Ein seriöser EPC-Partner nennt konkrete Meilensteine und Vertragsstrafen bei Verzug. Fragen Sie außerdem, wie wetterbedingte Stillstandsrisiken verteilt werden.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie unterscheidet sich ein EPC-Partner von einem gewöhnlichen Installateur?",
          lead: "Ein EPC-Partner verantwortet den gesamten Projektzyklus – Planung, Beschaffung und Bau –, während ein gewöhnlicher Installateur nur die physische Montage durchführt.",
          answer:
            "Das EPC-Modell gibt dem Entwickler einen einzigen vertraglich verantwortlichen Partner für die gesamte Lieferkette, was das Projektmanagement vereinfacht und das Koordinationsrisiko verringert.",
        },
        {
          question: "Wie groß sollte das Portfolio eines EPC-Partners sein?",
          lead: "Es gibt keine universelle Mindestleistung in MW für ein Portfolio. Bewerten Sie vergleichbare ausgeführte Umfänge, die Unternehmensrolle, Qualität und Termintreue.",
          answer:
            "Erfahrung im Megawatt-Maßstab zeigt, dass das Team reale Herausforderungen im Projektmanagement, bei der Netzanbindung und der Logistik gelöst hat.",
        },
        {
          question: "Sollte man einen lokalen oder internationalen EPC-Partner wählen?",
          lead: "Ein lokaler EPC-Partner mit internationaler Erfahrung ist meist die beste Wahl, da er lokale regulatorische Kenntnisse mit Skalierbarkeit verbindet.",
          answer:
            "HeilAres verbindet eine starke lokale Präsenz in Estland und Lettland mit europaweiten Projektkapazitäten.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 2. Park type comparison
// ─────────────────────────────────────────────────────────────────────────
const parkTypes: BlogPost = {
  slug: "maapark-katusepark-tracker-vordlus",
  category: "park_types",
  date: "2026-04-08",
  readMinutes: 7,
  cover: parkTypesCover,
  content: {
    et: {
      title: "Solar Tracker Park, maapark või katusepark — milline sobib teie projektile?",
      summary:
        "Kolm peamist päikesepargi tüüpi B2B kontekstis — millised on iga tüübi tugevused, kulustruktuur ja kuhu need sobivad kõige paremini.",
      lead: "Solar Tracker Park, maapargi ja katusepargi vahel valimisel sõltub õige lahendus eelkõige maa-ala saadavusest, võrguühenduse võimsusest ja oodatavast tootlikkusest, mitte ainult investeeringu suurusest.",
      sections: [
        {
          heading: "Maapark — suurim mastaabivõime",
          paragraphs: [
            "Maapark on fikseeritud kaldega maapealne päikesepark. Maa vajadus ja investeering sõltuvad paneelide paigutusest, reavahedest, maastikust, juurdepääsust ja piirangutest; universaalset hektarite arvu MW kohta ei ole.",
            "Maaparki eelistavad arendajad, kellel on juurdepääs põllumajandusmaale või tööstusalale ja kes vajavad suurt tootmismahtu kindla eelarve sees. Hooldus on lihtne, ligipääs hea ja paneelide vahetus rikke korral kiire.",
          ],
        },
        {
          heading: "Katusepark — pinna kasutamine ilma uut maad võtmata",
          paragraphs: [
            "Katusepark kasutab olemasolevaid tööstushoonete, ladude või tehaste pindu. Vajalik kasutatav katusepind sõltub moodulite võimsusest, katuse geomeetriast, varjudest, ohutusvahedest ja kandevõimest.",
            "Omatarve võib vähendada võrgust ostetavat energiat. Tasuvus sõltub tarbimisprofiilist, elektrihinnast, müügitingimustest, võrgutasudest ja investeeringust; katuse kandevõime tuleb kontrollida.",
          ],
        },
        {
          heading: "Solar Tracker Park — maksimaalne tootlikkus pinnaühiku kohta",
          paragraphs: [
            "Üheteljelised päikesejälgijad suunavad paneele päikese näiva liikumise järgi. Aastane elektritoodang võib fikseeritud kaldega lahendusega võrreldes suureneda, kuid mõju sõltub asukohast, varjutusest, ilmast ja juhtimisest ning tuleb hinnata energiamudelis.",
            "Solar Tracker Park sobib eelkõige suurte, tasase pinnasega maa-alade jaoks, kus võrgupiirang ei limiteeri tootmismahtu. HeilArese tööde maht Risti 244 MW Solar Tracker Pargis on 80 MW.",
          ],
        },
        {
          heading: "Kuidas valida õige tüüp?",
          paragraphs: [
            "Võrrelge lahendusi maa- ja katusepinna, võrguühenduse, tootmisprognoosi, omatarbe ning elutsüklikulude järgi. Ükski lahendus ei ole igas projektis kõige tootlikum või odavam.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kas Solar Tracker Park on alati parem kui fikseeritud maapark?",
          lead: "Mitte alati. Toodang, investeering ja hoolduskulu tuleb võrrelda konkreetse asukoha energiamudeli ja kasutusviisi põhjal.",
          answer:
            "Põhja-Euroopa tingimustes on Solar Tracker Park sageli mõistlik valik suurte maa-alade jaoks, kus võrguühendus võimaldab täisvõimsust kasutada.",
        },
        {
          question: "Millise tüübi tasuvusaeg on lühim?",
          lead: "Universaalset lühima tasuvusajaga pargitüüpi ei ole. Tulemus sõltub omatarbest, müügitingimustest, investeeringust, võrgutasudest ja elektrihinnast.",
          answer:
            "Maa- ja Solar Tracker Park tasuvus sõltub müügihinnast (PPA või spot), mis on tavaliselt madalam kui jaehind.",
        },
      ],
    },
    en: {
      title: "Solar Tracker Park, Ground-mounted Solar Park or Rooftop Solar Park — which suits your project?",
      summary:
        "The three main solar park types in a B2B context — strengths, cost structure and best use cases for each.",
      lead: "Choosing between a Solar Tracker Park, Ground-mounted Solar Park and Rooftop Solar Park depends primarily on land availability, grid connection capacity and expected yield, not just investment size.",
      sections: [
        {
          heading: "Ground-mount — maximum scalability",
          paragraphs: [
            "A ground-mounted solar park uses fixed-tilt modules. Land needs and investment depend on layout, row spacing, terrain, access and restrictions; there is no universal hectare requirement per MW.",
            "Ground-mount is preferred by developers with access to agricultural or industrial land who need large generation volumes within a fixed budget. Maintenance is simple, access is good and panel replacement is fast.",
          ],
        },
        {
          heading: "Rooftop — using existing surfaces without occupying new land",
          paragraphs: [
            "Rooftop solar uses existing industrial buildings, warehouses or factories. Usable roof area depends on module ratings, roof geometry, shading, safety clearances and structural capacity.",
            "Self-consumption may reduce grid purchases. Payback depends on the demand profile, electricity prices, export terms, grid charges and investment; roof structural capacity must be checked.",
          ],
        },
        {
          heading: "Solar Tracker Park — maximum yield per area",
          paragraphs: [
            "Single-axis solar trackers follow the sun’s apparent movement. Annual generation may increase compared with fixed tilt, but the effect depends on location, shading, weather and controls and must be assessed in an energy model. HeilAres’ documented scope at the 244 MW Risti park is 80 MW.",
            "Trackers suit large, flat sites where grid capacity does not limit output.",
          ],
        },
        {
          heading: "How to choose the right type?",
          paragraphs: [
            "Compare land and roof availability, grid connection, generation forecasts, self-consumption and lifecycle costs. No solution is the most productive or cheapest for every project.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is a Solar Tracker Park always better than fixed-tilt ground-mount?",
          lead: "Not always. Generation, investment and maintenance costs must be compared using the site-specific energy model and operating strategy.",
          answer:
            "In Northern European conditions, trackers are often a sensible choice for large sites where grid capacity can absorb peak output.",
        },
        {
          question: "Which type has the shortest payback?",
          lead: "No park type universally has the shortest payback. It depends on self-consumption, export terms, investment, grid charges and electricity prices.",
          answer:
            "Ground-mount and tracker payback depends on PPA or spot price, usually lower than retail.",
        },
      ],
    },
    fi: {
      title: "Solar Tracker Park, Maapark vai Katusepark — mikä sopii hankkeellesi?",
      summary:
        "Kolme aurinkopuistotyyppiä B2B-näkökulmasta — vahvuudet, kustannusrakenne ja parhaat käyttötapaukset.",
      lead: "Solar Tracker Park, Maapark ja Katusepark välillä valinta riippuu ensisijaisesti maa-alasta, verkkoliitynnän kapasiteetista ja odotetusta tuotosta, ei vain investoinnin koosta.",
      sections: [
        {
          heading: "Maapuisto — suurin skaalautuvuus",
          paragraphs: [
            "Maahan asennettu aurinkopuisto käyttää kiinteästi kallistettuja moduuleja. Maantarve ja investointi riippuvat sijoittelusta, riviväleistä, maastosta, pääsystä ja rajoituksista; yleispätevää hehtaarimäärää MW:ta kohti ei ole.",
            "Maapuiston valitsee kehittäjä, jolla on pääsy maatalous- tai teollisuusmaalle ja joka tarvitsee suurta tuotantoa kiinteällä budjetilla.",
          ],
        },
        {
          heading: "Kattopuisto — käytä olemassa olevia pintoja",
          paragraphs: [
            "Katolle asennettu aurinkosähköjärjestelmä käyttää olemassa olevia teollisuus-, varasto- tai tehdasrakennuksia. Käytettävä kattopinta riippuu moduulien tehosta, katon geometriasta, varjostuksesta, turvaetäisyyksistä ja kantavuudesta.",
            "Omakäyttö voi vähentää verkkosähkön ostoa. Kannattavuus riippuu kulutusprofiilista, sähkön hinnasta, myyntiehdoista, verkkokuluista ja investoinnista; katon kantavuus on tarkistettava.",
          ],
        },
        {
          heading: "Seurantapuisto — maksimituotto pinta-alaa kohti",
          paragraphs: [
            "Yksiakseliset seurantajärjestelmät seuraavat auringon näennäistä liikettä. Vuosituotto voi kasvaa kiinteään kallistukseen verrattuna, mutta vaikutus riippuu sijainnista, varjostuksesta, säästä ja ohjauksesta ja arvioidaan energiantuottomallilla. HeilAresin työosuus Ristin 244 MW:n puistossa on 80 MW.",
            "Sopii erityisesti suurille, tasaisille alueille.",
          ],
        },
        {
          heading: "Miten valita oikea tyyppi?",
          paragraphs: [
            "Vertaa maa- ja kattopintaa, verkkoliittymää, tuotantoennustetta, omakäyttöä ja elinkaarikustannuksia. Mikään ratkaisu ei ole jokaisessa hankkeessa tuottavin tai halvin.",
          ],
        },
      ],
      faqs: [
        {
          question: "Onko seurantapuisto aina parempi kuin kiinteä maapuisto?",
          lead: "Ei aina. Tuottoa, investointia ja huoltokuluja verrataan kohdekohtaisen energiantuottomallin ja käyttötavan perusteella.",
          answer:
            "Pohjois-Euroopassa seuranta on usein järkevä valinta suurille kohteille, joissa verkkoliityntä sallii huipputuotannon.",
        },
        {
          question: "Millä tyypillä takaisinmaksuaika on lyhin?",
          lead: "Mikään puistotyyppi ei aina maksa itseään nopeimmin takaisin. Tulos riippuu omakäytöstä, myyntiehdoista, investoinnista, verkkokuluista ja sähkön hinnasta.",
          answer: "Maa- ja seurantapuistojen takaisinmaksu riippuu PPA- tai spot-hinnasta.",
        },
      ],
    },
    de: {
      title: "Solar Tracker Park, Freiflächen-Solarpark oder Dach-PV-Anlage – was passt zu Ihrem Projekt?",
      summary:
        "Die drei wichtigsten Solarpark-Typen im B2B-Kontext – Stärken, Kostenstruktur und die besten Einsatzbereiche für jeden Typ.",
      lead: "Die Wahl zwischen Solar Tracker Park, Freiflächen-Solarpark und Dach-PV-Anlage hängt in erster Linie von der verfügbaren Fläche, der Netzanschlusskapazität und dem erwarteten Ertrag ab, nicht nur von der Investitionshöhe.",
      sections: [
        {
          heading: "Freiflächenanlage – maximale Skalierbarkeit",
          paragraphs: [
            "Ein Freiflächen-Solarpark nutzt fest geneigte Module. Flächenbedarf und Investition hängen von Layout, Reihenabständen, Gelände, Zugang und Einschränkungen ab; einen universellen Hektarbedarf je MW gibt es nicht.",
            "Freiflächenanlagen werden von Entwicklern bevorzugt, die Zugang zu landwirtschaftlichen oder industriellen Flächen haben und ein großes Erzeugungsvolumen innerhalb eines festen Budgets benötigen. Die Wartung ist einfach, der Zugang gut und der Modulaustausch bei Ausfall schnell.",
          ],
        },
        {
          heading: "Dachanlage – Nutzung vorhandener Flächen ohne neuen Landverbrauch",
          paragraphs: [
            "Dach-PV nutzt bestehende Industriegebäude, Lagerhallen oder Fabriken. Die nutzbare Dachfläche hängt von Modulleistung, Dachgeometrie, Verschattung, Sicherheitsabständen und Tragfähigkeit ab.",
            "Eigenverbrauch kann den Netzbezug reduzieren. Die Wirtschaftlichkeit hängt von Verbrauchsprofil, Strompreisen, Einspeisebedingungen, Netzentgelten und Investition ab; die Dachtragfähigkeit ist zu prüfen.",
          ],
        },
        {
          heading: "Solar Tracker Park – maximaler Ertrag pro Flächeneinheit",
          paragraphs: [
            "Einachsige Nachführsysteme folgen der scheinbaren Bewegung der Sonne. Der Jahresertrag kann gegenüber fester Neigung steigen; die Wirkung hängt jedoch von Standort, Verschattung, Wetter und Steuerung ab und ist im Ertragsmodell zu prüfen. HeilAres’ dokumentierter Arbeitsumfang im 244-MW-Park Risti beträgt 80 MW.",
            "Tracker-Anlagen eignen sich vor allem für große, ebene Flächen, bei denen die Netzkapazität die Erzeugung nicht limitiert.",
          ],
        },
        {
          heading: "Wie wählt man den richtigen Typ?",
          paragraphs: [
            "Vergleichen Sie verfügbare Boden- und Dachflächen, Netzanschluss, Ertragsprognose, Eigenverbrauch und Lebenszykluskosten. Keine Lösung ist in jedem Projekt am ertragreichsten oder günstigsten.",
          ],
        },
      ],
      faqs: [
        {
          question:
            "Ist ein Solar Tracker Park immer besser als eine fest aufgeständerte Freiflächenanlage?",
          lead: "Nicht immer. Ertrag, Investition und Wartungskosten müssen anhand des standortspezifischen Ertragsmodells und der Betriebsstrategie verglichen werden.",
          answer:
            "Unter nordeuropäischen Bedingungen sind Tracker oft eine sinnvolle Wahl für große Flächen, bei denen der Netzanschluss die Spitzenleistung aufnehmen kann.",
        },
        {
          question: "Welcher Typ hat die kürzeste Amortisationszeit?",
          lead: "Kein Anlagentyp hat grundsätzlich die kürzeste Amortisationszeit. Sie hängt von Eigenverbrauch, Einspeisebedingungen, Investition, Netzentgelten und Strompreisen ab.",
          answer:
            "Bei Freiflächen- und Tracker-Anlagen hängt die Amortisation vom Verkaufspreis (PPA oder Spotmarkt) ab, der in der Regel niedriger ist als der Endkundenpreis.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 3. Turnkey
// ─────────────────────────────────────────────────────────────────────────
const turnkey: BlogPost = {
  slug: "votmed-katte-paikesepargi-ehitus",
  category: "epc",
  date: "2026-03-30",
  readMinutes: 5,
  cover: turnkeyCover,
  content: {
    et: {
      title: "Mis on võtmed-kätte päikesepargi ehitus ja mida see hõlmab?",
      summary:
        "Detailne ülevaade võtmed-kätte EPC-mudelist — kõik tööetapid, vastutusalad ja mida arendaja saab ühelt partnerilt.",
      lead: "Võtmed-kätte päikesepargi ehituse korral vastutab EPC-partner lepingus kokkulepitud tööde tervikliku elluviimise eest. Ulatus võib hõlmata projekteerimist, hanget, ehitust, elektritöid, katsetamist ja üleandmist. Load, maaõigused ja võrguühendus kuuluvad teenusesse ainult kokkulepitud ulatuses.",
      sections: [
        {
          heading: "Mida võtmed-kätte hõlmab?",
          paragraphs: [
            "Tööpakett võib hõlmata asukoha analüüsi, toodanguanalüüsi ja energiatoodangu prognoosi, projekteerimist, hanget, konstruktsioonide ja moodulite paigaldust, DC- ja AC-töid, katsetamist ning üleandmist. Lubade ja võrguühenduse ülesanded tuleb eraldi määratleda.",
            "Erinevalt multi-contractor mudelist, kus arendaja tellib iga etapi eraldi alltöövõtjalt, on võtmed-kätte EPC-l üks lepinguline vastutus kogu objekti tootmisvalmiduse ees.",
          ],
        },
        {
          heading: "Miks arendajad eelistavad võtmed-kätte mudelit?",
          paragraphs: [
            "Esimene põhjus on selge vastutus. Kui midagi läheb valesti — paneelide tootlikkus on madalam kui projekteeritud, kaabel rikkis, inverter ei käivitu — on üks partner, kes peab probleemi lahendama. Multi-contractor projektides kulub vastutuse selgitamisele sageli kuid.",
            "EPC-partner saab koordineerida tarneid, meeskondi ja tööetappe kokkulepitud ulatuses. Viivituste mõju tulule sõltub projektist, elektrihinnast ja lepingu riskijaotusest.",
            "Hinnamudel, hinnamuutuse tingimused ning tarne- ja teostusriskide jaotus lepitakse kokku lepingus. Fikseeritud koguhind ei välista kokkulepitud lisatöid ega muudatusi.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kas võtmed-kätte mudel on alati kallim kui ise koordineerimine?",
          lead: "Võtmed-kätte mudel ei ole alati kallim ega odavam. Võrrelge kogu töömahtu, juhtimiskulu, riskijaotust ja lepingu eeldusi.",
          answer:
            "Suurte projektide puhul kompenseerib EPC mahuallahindlus tarnijate juures sageli täiendava marginaali.",
        },
        {
          question: "Kas EPC võtab vastutuse tootmise eest peale paigaldustööde lõppu?",
          lead: "Töö- ja seadmegarantiide kestus, ulatus ja välistused määratakse lepingus ning tootja tingimustes; Tier 1 staatus ei ole garantii.",
          answer:
            "Tootlikkuse garantii (performance guarantee) saab kokku leppida eraldi, eriti suuremate projektide puhul.",
        },
        {
          question: "Kas HeilAres pakub võtmed-kätte teenust väljaspool Eestit?",
          lead: "Väljaspool Eestit hinnatakse teenuse ulatust ja saadavust konkreetse projekti järgi.",
          answer: "Riigi nõuded, vastutus, tarned ja meeskondade saadavus kinnitatakse enne kokkulepet.",
        },
      ],
    },
    en: {
      title: "What is turnkey solar park construction and what does it cover?",
      summary:
        "A detailed view of the turnkey EPC model — every work phase, responsibilities and what a developer gets from a single partner.",
      lead: "Turnkey solar construction makes the EPC partner responsible for the work agreed in the contract, potentially including design, procurement, construction, electrical works, testing and handover. Permits, land rights and grid connection are included only where agreed.",
      sections: [
        {
          heading: "What does turnkey cover?",
          paragraphs: [
            "The package may include site analysis, energy yield assessment, design, procurement, structures and modules, DC and AC works, testing and handover. Permitting and grid connection tasks must be defined separately.",
            "Unlike a multi-contractor model where the developer sources each phase from separate subcontractors, turnkey EPC carries a single contractual responsibility for full site commissioning.",
          ],
        },
        {
          heading: "Why developers prefer turnkey?",
          paragraphs: [
            "First reason: clear accountability. If something goes wrong — panel output below model, faulty cable, inverter not starting — there is one partner to fix it. In multi-contractor projects, clarifying liability often takes months.",
            "The EPC partner can coordinate deliveries, crews and work phases within the agreed scope. Revenue effects of delays depend on the project, electricity prices and contractual risk allocation.",
            "The pricing model, price adjustments and allocation of supply and execution risks are agreed in the contract. A fixed total price does not exclude agreed variations or additional work.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is turnkey always more expensive than self-coordination?",
          lead: "Turnkey is not always more or less expensive. Compare full scope, management cost, risk allocation and contractual assumptions.",
          answer:
            "For large projects, EPC volume discounts with suppliers often offset the additional margin.",
        },
        {
          question: "Does the EPC take responsibility for production after handover?",
          lead: "Workmanship and equipment warranty duration, scope and exclusions are defined in the contract and manufacturer terms; Tier 1 status is not a warranty.",
          answer:
            "A performance guarantee can be negotiated separately, especially for larger projects.",
        },
        {
          question: "Does HeilAres offer turnkey outside Estonia?",
          lead: "Outside Estonia, service scope and availability are assessed for the specific project.",
          answer: "Country requirements, responsibilities, deliveries and crew availability are confirmed before agreement.",
        },
      ],
    },
    fi: {
      title: "Mitä on aurinkopuiston avaimet käteen -rakentaminen ja mitä se sisältää?",
      summary:
        "Yksityiskohtainen katsaus avaimet käteen -EPC-malliin — kaikki työvaiheet ja vastuut.",
      lead: "Avaimet käteen -rakentamisessa EPC-kumppani vastaa sopimuksessa sovituista töistä, joihin voivat kuulua suunnittelu, hankinta, rakentaminen, sähkötyöt, testaus ja luovutus. Luvat, maaoikeudet ja verkkoliittymä sisältyvät vain sovitussa laajuudessa.",
      sections: [
        {
          heading: "Mitä avaimet käteen kattaa?",
          paragraphs: [
            "Työpaketti voi sisältää kohdeanalyysin, energiantuottoarvion, suunnittelun, hankinnan, rakenteiden ja moduulien asennuksen, DC- ja AC-työt, testauksen ja luovutuksen. Lupa- ja verkkoliittymätehtävät määritetään erikseen.",
            "Toisin kuin monitoimittajamallissa, jossa kehittäjä hankkii jokaisen vaiheen erikseen, avaimet käteen -EPC kantaa yhden sopimusvastuun koko kohteen käyttöönotosta.",
          ],
        },
        {
          heading: "Miksi kehittäjät suosivat avaimet käteen -mallia?",
          paragraphs: [
            "Ensiksi: selkeä vastuu. Jos jokin menee pieleen, on yksi kumppani, joka korjaa ongelman.",
            "EPC-kumppani voi koordinoida toimituksia, tiimejä ja työvaiheita sovitussa laajuudessa. Viivästysten tulovaikutus riippuu hankkeesta, sähkön hinnasta ja sopimuksen riskijaosta.",
            "Hinnoittelumalli, hinnanmuutosehdot sekä toimitus- ja toteutusriskien jako sovitaan sopimuksessa. Kiinteä kokonaishinta ei sulje pois sovittuja lisätöitä tai muutoksia.",
          ],
        },
      ],
      faqs: [
        {
          question: "Onko avaimet käteen aina kalliimpi?",
          lead: "Avaimet käteen ei aina ole kalliimpi tai halvempi. Vertaa koko työlaajuutta, johtamiskuluja, riskijakoa ja sopimusoletuksia.",
          answer: "Suurissa hankkeissa EPC:n volyymialennukset usein kompensoivat lisämarginaalin.",
        },
        {
          question: "Vastaako EPC tuotannosta luovutuksen jälkeen?",
          lead: "Työn ja laitteiden takuun kesto, laajuus ja rajaukset määritetään sopimuksessa ja valmistajan ehdoissa; Tier 1 -asema ei ole takuu.",
          answer: "Tuottotakuu voidaan neuvotella erikseen.",
        },
        {
          question: "Tarjoaako HeilAres avaimet käteen -palvelua Viron ulkopuolella?",
          lead: "Viron ulkopuolella palvelun laajuus ja saatavuus arvioidaan hankekohtaisesti.",
          answer: "Maan vaatimukset, vastuut, toimitukset ja tiimien saatavuus vahvistetaan ennen sopimista.",
        },
      ],
    },
    de: {
      title: "Was bedeutet ein schlüsselfertiger Solarpark-Bau und was umfasst er?",
      summary:
        "Ein detaillierter Überblick über das schlüsselfertige EPC-Modell – alle Arbeitsphasen, Zuständigkeiten und was ein Entwickler von einem einzigen Partner erhält.",
      lead: "Bei schlüsselfertiger Errichtung verantwortet der EPC-Partner die vertraglich vereinbarten Arbeiten, etwa Planung, Beschaffung, Bau, Elektroarbeiten, Prüfung und Übergabe. Genehmigungen, Grundstücksrechte und Netzanschluss sind nur im vereinbarten Umfang enthalten.",
      sections: [
        {
          heading: "Was umfasst schlüsselfertig?",
          paragraphs: [
            "Das Paket kann Standortanalyse, Ertragsprognose, Planung, Beschaffung, Unterkonstruktions- und Modulmontage, DC- und AC-Arbeiten, Prüfung und Übergabe umfassen. Genehmigungs- und Netzanschlussaufgaben sind separat festzulegen.",
            "Anders als beim Multi-Contractor-Modell, bei dem der Entwickler jede Phase separat vergibt, trägt der schlüsselfertige EPC-Partner eine einzige vertragliche Verantwortung für die vollständige Inbetriebnahme der Anlage.",
          ],
        },
        {
          heading: "Warum bevorzugen Entwickler das schlüsselfertige Modell?",
          paragraphs: [
            "Erster Grund: klare Verantwortlichkeit. Wenn etwas schiefgeht – Modulleistung unter Planwert, defektes Kabel, Wechselrichter startet nicht – gibt es einen Partner, der das Problem lösen muss. Bei Multi-Contractor-Projekten dauert die Klärung der Haftung oft Monate.",
            "Der EPC-Partner kann Lieferungen, Teams und Arbeitsphasen im vereinbarten Umfang koordinieren. Einnahmeauswirkungen von Verzögerungen hängen von Projekt, Strompreisen und vertraglicher Risikoverteilung ab.",
            "Preismodell, Preisänderungen sowie Liefer- und Ausführungsrisiken werden vertraglich geregelt. Ein Festpreis schließt vereinbarte Änderungen oder Zusatzarbeiten nicht aus.",
          ],
        },
      ],
      faqs: [
        {
          question: "Ist das schlüsselfertige Modell immer teurer als die Eigenkoordination?",
          lead: "Schlüsselfertig ist nicht grundsätzlich teurer oder günstiger. Vergleichen Sie Gesamtumfang, Managementkosten, Risikoverteilung und Vertragsannahmen.",
          answer:
            "Bei großen Projekten gleichen die Mengenrabatte des EPC-Partners bei Lieferanten die zusätzliche Marge oft aus.",
        },
        {
          question:
            "Übernimmt der EPC-Partner die Verantwortung für die Produktion nach der Übergabe?",
          lead: "Dauer, Umfang und Ausschlüsse von Ausführungs- und Gerätegarantien werden im Vertrag und in Herstellerbedingungen festgelegt; Tier-1-Status ist keine Garantie.",
          answer:
            "Eine Leistungsgarantie (Performance Guarantee) kann separat vereinbart werden, insbesondere bei größeren Projekten.",
        },
        {
          question: "Bietet HeilAres schlüsselfertige Leistungen außerhalb Estlands an?",
          lead: "Außerhalb Estlands werden Leistungsumfang und Verfügbarkeit projektbezogen bewertet.",
          answer: "Länderspezifische Anforderungen, Zuständigkeiten, Lieferungen und Teamverfügbarkeit werden vor der Vereinbarung bestätigt.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 4. Construction timeline
// ─────────────────────────────────────────────────────────────────────────
const timeline: BlogPost = {
  slug: "kui-kaua-votab-paikesepargi-ehitus",
  category: "epc",
  date: "2026-03-22",
  readMinutes: 5,
  cover: timelineCover,
  content: {
    et: {
      title: "Kui kaua võtab suuremahulise päikesepargi ehitus aega?",
      summary:
        "Realistlik ajakava suuremahulise päikesepargi ehitusele — etapid, kestus ja peamised viivituste põhjused.",
      lead: "Suuremahulise päikesepargi ajakava võib ulatuda mitme kuuni. Kestus sõltub lubadest, võrguühendusest, hankest, ilmast ja kokkulepitud töömahust; lepingu sõlmimine ei tähenda alati ehituse algust.",
      sections: [
        {
          heading: "Etapid ja nende tüüpiline kestus",
          paragraphs: [
            "Projekteerimise ja loamenetluse kestus sõltub lähteandmetest, uuringutest ja menetlusest.",
            "Hanke kestus sõltub seadmetest ja tarnijate kinnitatud tarneaegadest. Etapid võivad toimuda paralleelselt ning nende kestusi ei saa automaatselt kokku liita.",
            "Paigaldusaeg sõltub töömahust, pinnasest, ilmast, meeskondadest ja võrguühendusest. Kindel MW-arv ei määra universaalset ehituskestust.",
            "Katsetamine, käikulaskmine ja üleandmine planeeritakse projekti ning võrguettevõtja tingimuste järgi.",
          ],
        },
        {
          heading: "Peamised viivituste põhjused",
          paragraphs: [
            "Tarneviivitused võivad mõjutada ajakava. Riski saab projektipõhiselt maandada kinnitatud tarneaegade, võimalike alternatiivsete tarnijate ja ajapuhvritega.",
            "Loamenetluse pikenemine ja halb ilm pikaajaliselt on järgmised peamised riskid. Realistlik ajakava ja varuvarude hoidmine vähendavad neid riske oluliselt.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui kaua võtab 100 MW päikesepargi ehitus?",
          lead: "100 MW pargi jaoks ei ole universaalset ehitusaega. Ajakava tuleb hinnata konkreetse projekti, lubade, tarnete ja tööde ulatuse järgi.",
          answer:
            "HeilArese üks suurimaid referentse on 244 MW Risti päikesepark Eestis, kus meie teostatud tööde maht on 80 MW ja mitmed meeskonnad töötasid paralleelselt.",
        },
        {
          question: "Kas talvel saab päikesepargi ehitusega jätkata?",
          lead: "Jah, HeilAres jätkab paigaldustöödega ka talvel, eriti vundamentide ja kandekonstruktsioonide osas.",
          answer:
            "Paneelide ja DC-tööde puhul on temperatuuri- ja niiskusepiirangud, mida arvestatakse graafikus.",
        },
      ],
    },
    en: {
      title: "How long does utility-scale solar park construction take?",
      summary:
        "A realistic timeline for utility-scale solar park construction — phases, durations and the main causes of delay.",
      lead: "A utility-scale solar project can span several months. Duration depends on permits, grid connection, procurement, weather and agreed scope; signing the contract does not always mark the start of construction.",
      sections: [
        {
          heading: "Phases and their typical duration",
          paragraphs: [
            "Engineering and permitting duration depends on site data, studies and approvals.",
            "Procurement depends on equipment and confirmed supplier lead times. Phases may overlap and their durations cannot simply be added together.",
            "Installation time depends on scope, soil, weather, crews and grid connection. A capacity in MW does not determine a universal construction duration.",
            "Testing, commissioning and handover are scheduled according to project and grid operator requirements.",
          ],
        },
        {
          heading: "Main causes of delay",
          paragraphs: [
            "Supply delays may affect schedules. Depending on the project, confirmed lead times, potential alternative suppliers and time buffers can mitigate risk.",
            "Extended permitting, persistent bad weather and grid interconnection slippage are the next main risks. A realistic schedule and clear communication with the local grid operator reduce these substantially.",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does a 100 MW solar park take to build?",
          lead: "There is no universal construction duration for a 100 MW park. Assess the specific project, permits, deliveries and scope.",
          answer:
            "One of HeilAres' largest references is the 244 MW Risti park in Estonia, where our documented scope is 80 MW and multiple crews worked in parallel.",
        },
        {
          question: "Can construction continue through winter?",
          lead: "Yes, HeilAres continues installation work through winter, especially foundations and mounting structures.",
          answer:
            "Panels and DC work have temperature and humidity limits factored into the schedule.",
        },
      ],
    },
    fi: {
      title: "Kuinka kauan suuren mittakaavan aurinkopuiston rakentaminen kestää?",
      summary:
        "Realistinen aikataulu suuren mittakaavan aurinkopuiston rakentamiseen — vaiheet, kestot ja viivästysten syyt.",
      lead: "Suuren aurinkopuiston hanke voi kestää useita kuukausia. Kesto riippuu luvista, verkkoliittymästä, hankinnoista, säästä ja sovitusta työlaajuudesta; sopimuksen allekirjoitus ei aina tarkoita rakentamisen alkua.",
      sections: [
        {
          heading: "Vaiheet ja niiden kesto",
          paragraphs: [
            "Suunnittelun ja lupamenettelyn kesto riippuu lähtötiedoista, tutkimuksista ja viranomaiskäsittelystä.",
            "Hankinta riippuu laitteista ja vahvistetuista toimitusajoista. Vaiheet voivat olla rinnakkaisia, eikä niiden kestoja voi suoraan laskea yhteen.",
            "Asennusaika riippuu työlaajuudesta, maaperästä, säästä, tiimeistä ja verkkoliittymästä. MW-määrä ei määritä yleispätevää rakennusaikaa.",
            "Testaus, käyttöönotto ja luovutus suunnitellaan hankkeen ja verkkoyhtiön vaatimusten mukaan.",
          ],
        },
        {
          heading: "Tärkeimmät viivästysten syyt",
          paragraphs: [
            "Toimitusviiveet voivat vaikuttaa aikatauluun. Vahvistetut toimitusajat, mahdolliset vaihtoehtoiset toimittajat ja aikapuskurit voivat pienentää hankekohtaista riskiä.",
            "Lupamenettelyn pidentyminen, huono sää ja verkkoliitynnän viivästykset ovat seuraavia riskejä.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuinka kauan 100 MW aurinkopuiston rakentaminen kestää?",
          lead: "100 MW:n puistolle ei ole yleispätevää rakennusaikaa. Arvio perustuu hankkeeseen, lupiin, toimituksiin ja työlaajuuteen.",
          answer: "Yksi HeilAresin suurimmista referensseistä on Ristin 244 MW:n puisto Virossa, jossa yrityksen dokumentoitu työmäärä on 80 MW.",
        },
        {
          question: "Voiko rakentaminen jatkua talvella?",
          lead: "Kyllä, HeilAres jatkaa asennustöitä talvella, erityisesti perustusten ja rakenteiden osalta.",
          answer:
            "Paneeli- ja DC-töille on lämpötila- ja kosteusrajoja, jotka huomioidaan aikataulussa.",
        },
      ],
    },
    de: {
      title: "Wie lange dauert der Bau eines großmaßstäblichen Solarparks?",
      summary:
        "Ein realistischer Zeitplan für den Bau großmaßstäblicher Solarparks – Phasen, Dauer und die wichtigsten Verzögerungsursachen.",
      lead: "Ein großer Solarpark kann mehrere Monate beanspruchen. Die Dauer hängt von Genehmigungen, Netzanschluss, Beschaffung, Wetter und vereinbartem Umfang ab; die Vertragsunterzeichnung bedeutet nicht immer Baubeginn.",
      sections: [
        {
          heading: "Phasen und ihre typische Dauer",
          paragraphs: [
            "Planung und Genehmigung hängen von Standortdaten, Untersuchungen und Verfahren ab.",
            "Die Beschaffung hängt von Geräten und bestätigten Lieferzeiten ab. Phasen können parallel laufen und ihre Dauern lassen sich nicht einfach addieren.",
            "Die Montagezeit hängt von Umfang, Boden, Wetter, Teams und Netzanschluss ab. Eine MW-Leistung bestimmt keine universelle Bauzeit.",
            "Prüfung, Inbetriebnahme und Übergabe werden nach Projekt- und Netzbetreiberanforderungen geplant.",
          ],
        },
        {
          heading: "Wichtigste Verzögerungsursachen",
          paragraphs: [
            "Lieferverzögerungen können den Zeitplan beeinflussen. Bestätigte Lieferzeiten, mögliche alternative Lieferanten und Zeitpuffer können projektbezogen Risiken mindern.",
            "Verlängerte Genehmigungsverfahren, anhaltend schlechtes Wetter und Verzögerungen bei der Netzanbindung sind die nächsten wesentlichen Risiken. Ein realistischer Zeitplan und eine klare Abstimmung mit dem lokalen Netzbetreiber verringern diese Risiken erheblich.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie lange dauert der Bau eines 100-MW-Solarparks?",
          lead: "Für einen 100-MW-Park gibt es keine universelle Bauzeit. Maßgeblich sind das konkrete Projekt, Genehmigungen, Lieferungen und Arbeitsumfang.",
          answer:
            "Eine der größten Referenzen von HeilAres ist der 244-MW-Solarpark Risti in Estland, bei dem der dokumentierte Arbeitsumfang des Unternehmens 80 MW beträgt und mehrere Teams parallel arbeiteten.",
        },
        {
          question: "Kann der Bau eines Solarparks im Winter fortgesetzt werden?",
          lead: "Ja, HeilAres führt Montagearbeiten auch im Winter fort, insbesondere bei Fundamenten und Unterkonstruktionen.",
          answer:
            "Bei Modulen und DC-Arbeiten gibt es Temperatur- und Feuchtigkeitsgrenzen, die im Zeitplan berücksichtigt werden.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 5. Tier-1
// ─────────────────────────────────────────────────────────────────────────
const tier1: BlogPost = {
  slug: "mis-on-tier-1-paikesepaneel",
  category: "components",
  date: "2026-03-15",
  readMinutes: 5,
  cover: tier1Cover,
  content: {
    et: {
      title: "Mida tähendab Tier 1 päikesemoodulite tootjate puhul?",
      summary:
        "Tier-1 mõiste lahtiseletus B2B kontekstis — mille alusel BloombergNEF tootjaid hindab ja miks see arendaja jaoks oluline on.",
      lead: "BloombergNEF-i Tier 1 klassifikatsioon puudutab päikesemoodulite tootjaid, mitte üksikute moodulite tehnilist kvaliteeti. See põhineb nõuetele vastavates pankade rahastatud projektides osalemisel ega asenda tootja ja konkreetse seadme hindamist.",
      sections: [
        {
          heading: "Mida Tier-1 päriselt mõõdab?",
          paragraphs: [
            "BNEF hindab oma kaubamärgi all ise toodetud moodulite tarnimist nõuetele vastavatele projektidele ja nende regressiõiguseta finantseerimist. Kriteeriumid võivad muutuda; kasutada tuleb kehtivat metoodikat ja viimase kvartali nimekirja.",
            "Tier 1 ei ole kvaliteedisertifikaat, finantsstabiilsuse garantii ega lubadus pikaajaliste garantiide täitmise kohta.",
          ],
        },
        {
          heading: "Miks arendaja peaks Tier-1 nõudma?",
          paragraphs: [
            "Rahastaja võib kasutada Tier 1 staatust ühe hindamiskriteeriumina; tegelikud rahastamise tingimused tuleb kontrollida projektipõhiselt.",
            "Degradatsiooni, temperatuurikoefitsienti ja mehaanilist vastupidavust tuleb hinnata mudeli andmelehe, katsete ja garantiitingimuste järgi. HeilArese tarnijavalik kinnitatakse konkreetse projekti pakkumises.",
          ],
        },
        {
          heading: "Levinud väärarusaamad",
          paragraphs: [
            "Nimekirjast puudumine ei tõenda halba tehnilist kvaliteeti. Tootja ja mooduli sobivust tuleb hinnata eraldi; Tier 2 ja Tier 3 ei ole selle metoodika ametlikud kvaliteediklassid.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuidas kontrollida, kas tootja on Tier-1?",
          lead: "Kontrollige BNEF-i viimase kvartali ametlikku nimekirja. Ligipääs on tellimuspõhine.",
          answer: "Tootja pressiteade ega varasema kvartali staatus ei kinnita praegust staatust.",
        },
        {
          question: "Kas Tier-1 paneelid on alati kallimad?",
          lead: "Tier 1 staatusest ei saa tuletada kindlat hinnalisa ega soodsamat elutsüklikulu.",
          answer: "Võrrelge konkreetsete mudelite hinda, tehnilisi omadusi, garantiid ja projekti tingimusi.",
        },
      ],
    },
    en: {
      title: "What does Tier 1 mean for solar module manufacturers?",
      summary:
        "Tier-1 explained in a B2B context — how BloombergNEF rates manufacturers and why it matters for developers.",
      lead: "BloombergNEF Tier 1 classifies solar module manufacturers, not the technical quality of individual modules. It is based on participation in qualifying bank-financed projects and does not replace manufacturer and product due diligence.",
      sections: [
        {
          heading: "What does Tier-1 actually measure?",
          paragraphs: [
            "BNEF considers supplies of own-brand, self-manufactured modules to qualifying projects and their non-recourse financing. Criteria can change; use the current methodology and latest quarterly list.",
            "Tier 1 is not a quality certificate, a guarantee of financial stability or a promise that long-term warranties will be honoured.",
          ],
        },
        {
          heading: "Why should a developer require Tier-1?",
          paragraphs: [
            "A financier may use Tier 1 status as one assessment criterion; actual financing requirements must be checked for each project.",
            "Assess degradation, temperature coefficients and mechanical durability using model datasheets, tests and warranty terms. HeilAres supplier selection is confirmed in the project quotation.",
          ],
        },
        {
          heading: "Common misconceptions",
          paragraphs: [
            "Absence from the list does not prove poor technical quality. Assess manufacturer and module suitability separately; Tier 2 and Tier 3 are not official quality classes in this methodology.",
          ],
        },
      ],
      faqs: [
        {
          question: "How can I verify a manufacturer is Tier-1?",
          lead: "Check BNEF’s official latest-quarter list. Access requires a subscription.",
          answer: "A manufacturer press release or previous-quarter status does not establish current status.",
        },
        {
          question: "Are Tier-1 panels always more expensive?",
          lead: "Tier 1 status does not imply a fixed price premium or lower lifecycle cost.",
          answer: "Compare specific model prices, technical characteristics, warranties and project conditions.",
        },
      ],
    },
    fi: {
      title: "Mitä Tier 1 tarkoittaa aurinkomoduulien valmistajille?",
      summary:
        "Tier-1 selitettynä B2B-kontekstissa — miten BloombergNEF arvioi valmistajia ja miksi se on tärkeää kehittäjälle.",
      lead: "BloombergNEF:n Tier 1 luokittelee aurinkomoduulien valmistajia, ei yksittäisten moduulien teknistä laatua. Se perustuu osallistumiseen ehdot täyttäviin pankkirahoitettuihin hankkeisiin eikä korvaa valmistajan ja tuotteen arviointia.",
      sections: [
        {
          heading: "Mitä Tier-1 oikeasti mittaa?",
          paragraphs: [
            "BNEF arvioi omalla tuotemerkillä itse valmistettujen moduulien toimituksia ehdot täyttäviin hankkeisiin ja niiden regressitöntä rahoitusta. Kriteerit voivat muuttua; käytä voimassa olevaa menetelmää ja uusinta neljännesvuosilistaa.",
            "Tier 1 ei ole laatusertifikaatti, taloudellisen vakauden takuu tai lupaus pitkäaikaisten takuiden toteutumisesta.",
          ],
        },
        {
          heading: "Miksi kehittäjän pitäisi vaatia Tier-1?",
          paragraphs: [
            "Rahoittaja voi käyttää Tier 1 -asemaa yhtenä arviointikriteerinä; rahoituksen ehdot tarkistetaan hankekohtaisesti.",
            "Arvioi tehon heikkenemistä, lämpötilakerrointa ja mekaanista kestävyyttä mallin tietolehden, testien ja takuuehtojen perusteella. HeilAresin toimittajavalinta vahvistetaan hankkeen tarjouksessa.",
          ],
        },
        {
          heading: "Yleisiä väärinkäsityksiä",
          paragraphs: ["Tier-1 ei ole sertifikaatti vaan neljännesvuosittain päivitettävä lista."],
        },
      ],
      faqs: [
        {
          question: "Miten varmistan, että valmistaja on Tier-1?",
          lead: "Tarkista BNEF:n uusimman neljänneksen virallinen lista. Pääsy vaatii tilauksen.",
          answer: "Valmistajan tiedote tai aiemman neljänneksen asema ei vahvista nykyistä asemaa.",
        },
        {
          question: "Ovatko Tier-1-paneelit aina kalliimpia?",
          lead: "Tier 1 -asemasta ei voi päätellä tiettyä hintalisää tai pienempää elinkaarikustannusta.",
          answer: "Vertaa mallien hintaa, teknisiä ominaisuuksia, takuita ja hankkeen ehtoja.",
        },
      ],
    },
    de: {
      title: "Was bedeutet Tier 1 für Solarmodulhersteller?",
      summary:
        "Der Begriff Tier-1 im B2B-Kontext erklärt – wonach BloombergNEF Hersteller bewertet und warum das für Entwickler wichtig ist.",
      lead: "BloombergNEF Tier 1 klassifiziert Solarmodulhersteller, nicht die technische Qualität einzelner Module. Grundlage sind qualifizierende bankfinanzierte Projekte; eine Prüfung von Hersteller und Produkt wird dadurch nicht ersetzt.",
      sections: [
        {
          heading: "Was misst Tier-1 tatsächlich?",
          paragraphs: [
            "BNEF bewertet Lieferungen selbst hergestellter Module unter eigener Marke an qualifizierende Projekte und deren regresslose Finanzierung. Kriterien können sich ändern; maßgeblich sind aktuelle Methodik und jüngste Quartalsliste.",
            "Tier 1 ist kein Qualitätszertifikat, keine Garantie finanzieller Stabilität und keine Zusage zur Erfüllung langfristiger Garantien.",
          ],
        },
        {
          heading: "Warum sollte ein Entwickler Tier-1 verlangen?",
          paragraphs: [
            "Finanzierer können Tier-1-Status als eines von mehreren Kriterien nutzen; die tatsächlichen Finanzierungsbedingungen sind projektbezogen zu prüfen.",
            "Degradation, Temperaturkoeffizient und mechanische Beständigkeit sind anhand von Datenblättern, Prüfungen und Garantiebedingungen zu beurteilen. HeilAres bestätigt die Lieferantenauswahl im Projektangebot.",
          ],
        },
        {
          heading: "Verbreitete Missverständnisse",
          paragraphs: [
            "Das Fehlen auf der Liste belegt keine schlechte technische Qualität. Hersteller und Module sind getrennt zu prüfen; Tier 2 und Tier 3 sind keine offiziellen Qualitätsklassen dieser Methodik.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie überprüft man, ob ein Hersteller Tier-1 ist?",
          lead: "Prüfen Sie die offizielle BNEF-Liste des jüngsten Quartals. Der Zugang erfordert ein Abonnement.",
          answer: "Eine Herstellerpressemitteilung oder ein früherer Quartalsstatus belegt den aktuellen Status nicht.",
        },
        {
          question: "Sind Tier-1-Module immer teurer?",
          lead: "Tier-1-Status erlaubt keine Aussage über einen festen Preisaufschlag oder geringere Lebenszykluskosten.",
          answer: "Vergleichen Sie Preise konkreter Modelle, technische Eigenschaften, Garantien und Projektbedingungen.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 6. Maintenance
// ─────────────────────────────────────────────────────────────────────────
const maintenance: BlogPost = {
  slug: "paikesepargi-hooldus",
  category: "maintenance",
  date: "2026-03-08",
  readMinutes: 6,
  cover: maintenanceCover,
  content: {
    et: {
      title: "Päikesepargi hooldus — mida arendaja peaks teadma?",
      summary:
        "Praktiline ülevaade päikesepargi O&M-st (Operations and Maintenance) arendaja perspektiivist — mida hooldus hõlmab ja milline on tüüpiline kuluefekt.",
      lead: "Päikesepargi O&M (Operations and Maintenance) sisaldab nii ennetavat kui ka tõrkest tingitud hooldust ning monitooringut, mille eesmärk on hoida pargi tootlikkust 25–30 aasta jooksul võimalikult lähedal projekteeritud tasemele.",
      sections: [
        {
          heading: "Mida päikesepargi hooldus sisaldab?",
          paragraphs: [
            "Seire jälgib tootmist, invertereid, stringide elektrilisi näitajaid ja keskkonnaandurite näite. Reaalajas teavitused sõltuvad SCADA võimalustest ja seadistusest.",
            "Ennetav hooldus võib hõlmata visuaalseid kontrolle, kuumkohtade termograafiat, kinnitusdetailide kontrolli ja vajadusel pingutamist, korrosioonikontrolli ning filtrite vahetust. Sagedus sõltub tootja nõuetest, keskkonnast ja lepingust.",
            "Rikke korral lepitakse diagnoosimine ja remont kokku hoolduslepingus. Reageerimisaeg sõltub kokkulepitud teenusetasemest, ligipääsust, varuosadest ja meeskonna saadavusest.",
          ],
        },
        {
          heading: "Mis mõjutab hoolduskulu?",
          paragraphs: [
            "Hoolduskulu sõltub pargi suurusest, asukohast, tehnoloogiast ja teenuse ulatusest. Universaalset €/kW aastahinda ei ole; puhastus, varuosad ja reageerimistingimused tuleb pakkumises eristada.",
            "Asukoht mõjutab puhastamise sagedust (tolm, lumi, linnusõnnik), kandekonstruktsioonide korrosiooniriski (rannikualad) ja meeskonna reageerimisaega. Päikest jälgivad süsteemid vajavad mehaaniliste osade hooldust, mida fikseeritud pargid ei vaja.",
          ],
        },
        {
          heading: "Mida lepingusse panna?",
          paragraphs: [
            "Leppige kokku seire, hooldusgraafik, reageerimisaeg ja varuosad. Võimaliku tootmisgarantii mõõtmine, võrdlusbaas, ilmastiku mõju, välistused ja hüvitis määratakse eraldi; kogu tootmisvahe automaatset hüvitamist ei saa eeldada.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui palju maksab 10 MW päikesepargi aastane hooldus?",
          lead: "10 MW pargi aastane hooldushind selgub objekti ja teenuse ulatuse põhjal koostatud pakkumisest.",
          answer:
            "Täpne kulu sõltub sellest, kas hooldus sisaldab puhastust, varuosi ja garanteeritud reageerimisaega.",
        },
        {
          question: "Kas peaks O&M-i tellima EPC-partnerilt?",
          lead: "Sama EPC-partneri valimine O&M-iks lihtsustab garantiivastutust ja annab kiirema reageerimise kogu projekti elutsükli jooksul.",
          answer: "HeilArese hooldusteenuse ulatus, asukoht ja saadavus tuleb kinnitada projektipõhiselt.",
        },
      ],
    },
    en: {
      title: "Solar park maintenance — what developers should know",
      summary:
        "A practical overview of solar park O&M from the developer perspective — what maintenance covers and typical cost impact.",
      lead: "Solar park O&M (Operations and Maintenance) covers preventive and corrective maintenance plus monitoring, aimed at keeping output close to design level over 25–30 years.",
      sections: [
        {
          heading: "What does maintenance include?",
          paragraphs: [
            "Monitoring tracks generation, inverters, string electrical values and environmental sensor readings. Real-time alerts depend on SCADA capabilities and configuration.",
            "Preventive maintenance may include inspections, hot-spot thermography, fastener checks and retightening where required, corrosion checks and filter replacement. Frequency depends on manufacturer requirements, environment and contract.",
            "Fault diagnosis and repair are defined in the maintenance contract. Response time depends on agreed service level, access, spare parts and crew availability.",
          ],
        },
        {
          heading: "What drives maintenance cost?",
          paragraphs: [
            "Maintenance cost depends on size, location, technology and service scope. There is no universal annual price per kW; distinguish cleaning, spare parts and response terms in the quotation.",
            "Location affects cleaning frequency (dust, snow, bird droppings), corrosion risk (coastal areas) and crew response time. Solar Tracker Parks need mechanical maintenance that fixed parks do not.",
          ],
        },
        {
          heading: "What to put in the contract?",
          paragraphs: [
            "Agree monitoring, maintenance schedules, response time and spares. Any performance guarantee needs defined measurement, baseline, weather adjustment, exclusions and compensation; automatic compensation for all lost production cannot be assumed.",
          ],
        },
      ],
      faqs: [
        {
          question: "How much does annual maintenance cost for a 10 MW park?",
          lead: "Annual maintenance pricing for a 10 MW park requires a quotation based on the site and service scope.",
          answer:
            "Exact cost depends on whether cleaning, spares and guaranteed response are included.",
        },
        {
          question: "Should I contract O&M with the EPC partner?",
          lead: "Choosing the same partner for EPC and O&M simplifies warranty accountability and gives faster response throughout the project lifecycle.",
          answer: "HeilAres maintenance scope, location and availability require project-specific confirmation.",
        },
      ],
    },
    fi: {
      title: "Aurinkopuiston huolto — mitä kehittäjän tulisi tietää?",
      summary:
        "Käytännönkatsaus aurinkopuiston O&M:ään kehittäjän näkökulmasta — mitä huolto sisältää ja tyypillinen kustannusvaikutus.",
      lead: "Aurinkopuiston O&M (Operations and Maintenance) sisältää ennaltaehkäisevän ja korjaavan huollon sekä monitoroinnin, joiden tavoitteena on pitää tuotanto lähellä suunnittelutasoa 25–30 vuoden ajan.",
      sections: [
        {
          heading: "Mitä huolto sisältää?",
          paragraphs: [
            "Valvonta seuraa tuotantoa, inverttereitä, paneeliketjujen sähköisiä arvoja ja ympäristöanturien lukemia. Reaaliaikaiset hälytykset riippuvat SCADA-järjestelmän ominaisuuksista ja asetuksista.",
            "Ennakoiva kunnossapito voi sisältää tarkastuksia, kuumakohtien lämpökuvausta, kiinnikkeiden tarkastusta ja tarvittaessa kiristystä, korroosiotarkastuksia ja suodattimien vaihtoa. Tiheys riippuu valmistajan ohjeista, ympäristöstä ja sopimuksesta.",
            "Vian diagnostiikka ja korjaus määritetään huoltosopimuksessa. Reagointiaika riippuu palvelutasosta, pääsystä kohteeseen, varaosista ja tiimin saatavuudesta.",
          ],
        },
        {
          heading: "Mikä vaikuttaa huoltokustannukseen?",
          paragraphs: [
            "Huoltokustannus riippuu koosta, sijainnista, tekniikasta ja palvelulaajuudesta. Yleispätevää vuotuista kW-hintaa ei ole; erittele puhdistus, varaosat ja reagointiehdot tarjouksessa.",
            "Sijainti vaikuttaa puhdistustiheyteen ja korroosioriskiin. Seurantapuistot vaativat mekaanista huoltoa, jota kiinteät puistot eivät tarvitse.",
          ],
        },
        {
          heading: "Mitä sopimukseen kannattaa kirjata?",
          paragraphs: [
            "Sovi valvonnasta, huoltoaikataulusta, reagointiajasta ja varaosista. Mahdollinen tuottotakuu tarvitsee mittauksen, vertailutason, sääkorjauksen, rajaukset ja korvausehdot; kaikkea tuotantovajetta ei automaattisesti korvata.",
          ],
        },
      ],
      faqs: [
        {
          question: "Paljonko maksaa 10 MW puiston vuosihuolto?",
          lead: "10 MW:n puiston vuosihuollon hinta määritetään kohteen ja palvelulaajuuden mukaisella tarjouksella.",
          answer: "Tarkka kustannus riippuu siitä, sisältääkö huolto puhdistuksen ja varaosat.",
        },
        {
          question: "Kannattaako O&M tilata EPC-kumppanilta?",
          lead: "Saman kumppanin valinta EPC:hen ja O&M:ään yksinkertaistaa takuuvastuuta.",
          answer: "HeilAresin huoltopalvelun laajuus, sijainti ja saatavuus vahvistetaan hankekohtaisesti.",
        },
      ],
    },
    de: {
      title: "Wartung von Solarparks – was Entwickler wissen sollten",
      summary:
        "Ein praktischer Überblick über O&M (Operations and Maintenance) von Solarparks aus Entwicklersicht – was die Wartung umfasst und welche typischen Kostenauswirkungen bestehen.",
      lead: "Das O&M (Operations and Maintenance) eines Solarparks umfasst sowohl vorbeugende als auch störungsbedingte Wartung sowie Monitoring, mit dem Ziel, den Ertrag des Parks über 25–30 Jahre möglichst nahe am geplanten Niveau zu halten.",
      sections: [
        {
          heading: "Was umfasst die Wartung eines Solarparks?",
          paragraphs: [
            "Das Monitoring überwacht Erzeugung, Wechselrichter, elektrische Stringwerte und Umweltsensoren. Echtzeitmeldungen hängen von SCADA-Funktionen und Konfiguration ab.",
            "Vorbeugende Wartung kann Sichtprüfungen, Thermografie von Hotspots, Befestigungsprüfungen und bei Bedarf Nachziehen, Korrosionskontrollen und Filterwechsel umfassen. Die Häufigkeit richtet sich nach Herstelleranforderungen, Umgebung und Vertrag.",
            "Diagnose und Reparatur werden im Wartungsvertrag geregelt. Reaktionszeiten hängen von Servicelevel, Zugang, Ersatzteilen und Teamverfügbarkeit ab.",
          ],
        },
        {
          heading: "Was beeinflusst die Wartungskosten?",
          paragraphs: [
            "Wartungskosten hängen von Größe, Standort, Technik und Leistungsumfang ab. Es gibt keinen universellen Jahrespreis je kW; Reinigung, Ersatzteile und Reaktionsbedingungen sind im Angebot zu trennen.",
            "Der Standort beeinflusst die Reinigungshäufigkeit (Staub, Schnee, Vogelkot), das Korrosionsrisiko der Unterkonstruktion (Küstengebiete) und die Reaktionszeit des Teams. Solar Tracker Parks benötigen mechanische Wartung, die fest aufgeständerte Parks nicht erfordern.",
          ],
        },
        {
          heading: "Was sollte im Vertrag geregelt werden?",
          paragraphs: [
            "Vereinbaren Sie Monitoring, Wartungsplan, Reaktionszeit und Ersatzteile. Eine mögliche Ertragsgarantie erfordert Messung, Vergleichsbasis, Wetterkorrektur, Ausschlüsse und Entschädigungsregeln; ein automatischer Ausgleich aller Ertragsverluste ist nicht vorauszusetzen.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie viel kostet die jährliche Wartung eines 10-MW-Solarparks?",
          lead: "Der jährliche Wartungspreis für einen 10-MW-Park ergibt sich aus einem standort- und leistungsbezogenen Angebot.",
          answer:
            "Die genauen Kosten hängen davon ab, ob Reinigung, Ersatzteile und eine garantierte Reaktionszeit enthalten sind.",
        },
        {
          question: "Sollte man O&M beim EPC-Partner beauftragen?",
          lead: "Die Wahl desselben Partners für EPC und O&M vereinfacht die Garantieverantwortung und ermöglicht eine schnellere Reaktion über den gesamten Projektlebenszyklus.",
          answer: "Umfang, Standort und Verfügbarkeit von HeilAres-Wartungsleistungen sind projektbezogen zu bestätigen.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 7. Electrical works
// ─────────────────────────────────────────────────────────────────────────
const electricalWorks: BlogPost = {
  slug: "elektritood-paikeseparkides-ja-toostuses",
  category: "electrical",
  date: "2026-08-24",
  readMinutes: 7,
  cover: electricalCover,
  content: {
    et: {
      title: "Elektritööd päikeseparkides ja tööstuses — mida peab teadma",
      summary:
        "Praktiline ülevaade elektritööde ulatusest päikeseparkides ja tööstusobjektidel: MTR-pädevus, kesk- ja madalpinge, käikulaskmine ja kasutuselevõtukatsed ja lepingu tingimused.",
      lead: "Elektritööd on päikesepargi ja tööstusobjekti südameks — mitte ainult paneelide ja inverterite ühendamine, vaid kogu kesk- ja madalpinge infrastruktuuri projekteerimine, ehitus, testimine ja käikulaskmine ja kasutuselevõtukatsed vastavalt kehtivatele standarditele.",
      sections: [
        {
          heading: "Miks elektritööd määravad projekti kvaliteedi?",
          paragraphs: [
            "Päikesepargi tootlikkus ja ohutus sõltuvad otseselt elektritööde kvaliteedist. Halbade ühenduste, alamõõdetud kaablite või vigase kaitseloogika tõttu tekivad kaod, rikked ja ohutusohud, mis võivad maksta korda mitu korda rohkem kui kvaliteetne esmane lahendus.",
            "Tööstusobjektidel lisandub katkestusteta toite ja protsessiautomaatika nõue — elektritööd peavad arvestama olemasoleva jaotusvõrgu, varutoite ja juhtimissüsteemidega. Vigane liitumine võib peatada tootmise või kahjustada seadmeid.",
          ],
        },
        {
          heading: "Millist pädevust elektritööd eeldavad?",
          paragraphs: [
            "Elektritööde pädevus, vastutav isik ning registreerimis- ja teatamiskohustused tuleb kontrollida tööliigi ja kehtiva õiguse järgi. HeilArese MTR-registreering on TEL005181; see ei tõenda automaatselt iga tööliigi pädevust ega õigust töötada teises riigis.",
          ],
        },
        {
          heading: "Millised tööd kuuluvad päikesepargi elektriosasse?",
          paragraphs: [
            "DC-poolel hõlmavad tööd moodulite ühendamist stringideks, stringikaablite paigaldamist ja ühendamist inverteritega ning kaitse- ja lahutusvahendeid. AC-poolel ühendatakse inverterid jaotusseadmetega, trafod ja keskpingeseadmed; vajaduse korral seadistatakse ja katsetatakse releekaitset. Täpne ulatus sõltub elektriskeemist ja liitumistingimustest.",
            "SCADA võib anda tootmise, rikete ja hooldusvajaduste ülevaate ning reaalajas teavitusi vastavalt süsteemi võimalustele ja seadistusele.",
          ],
        },
        {
          heading: "Kuidas vormistada elektritööde leping?",
          paragraphs: [
            "Lepingus peavad olema kirjas ulatus (DC, AC, keskpinge, monitooring), vastavad standardid (EVS-HD, IEC), testimiskavand ja vastuvõtuprotokoll. Nõudke dokumenteeritud kasutus- ja hooldusjuhendit ning mõõte- ja katsetusprotokolle.",
            "Garantii, hoolduse ja reageerimisaja tingimused määratakse projektipõhises lepingus.",
          ],
        },
      ],
      faqs: [
        {
          question: "Mis on MTR-registreering ja miks see on oluline?",
          lead: "MTR on Eesti majandustegevuse register. Tegevusala, registreeringu kehtivus ja konkreetse töö pädevus tuleb kontrollida eraldi.",
          answer:
            "HeilAresi elektritööde MTR-registreering on TEL005181. Projekti täpne tööulatus ja nõuded lepitakse kokku lähteandmete põhjal.",
        },
        {
          question: "Kas elektritööd saab tellida eraldi, ilma EPC-ta?",
          lead: "Jah — HeilAres pakub elektritöid ka eraldiseisva teenusena, kui klient on ise ehituse või paneelide paigalduse organiseerinud.",
          answer:
            "Eraldi tellimisel hindame olemasoleva paigalduse üle, teostame puuduva elektriosa ja võtame kasutusele ja katsetame süsteemi vastavalt standarditele.",
        },
        {
          question: "Kui kiiresti saab elektritööd tellida?",
          lead: "Alustamise aeg kinnitatakse pärast töömahu, meeskonna saadavuse, võrguühenduse ja tarneaegade hindamist. Kindlat vastamis- ega alustamistähtaega ei saa enne kokkulepet lubada.",
          answer:
            "Suurte päikeseparkide ja tööstusobjektide puhul koostame graafiku koos kliendiga, arvestades võrguühenduse ja komponentide saadavust.",
        },
      ],
    },
    en: {
      title: "Electrical works in solar parks and industry — what you need to know",
      summary:
        "A practical overview of the scope of electrical works in solar parks and industrial sites: MTR competence, medium and low voltage, commissioning and contract terms.",
      lead: "Electrical works are the heart of a solar park or industrial facility — not just connecting panels and inverters, but engineering, building, testing and commissioning the entire medium- and low-voltage infrastructure to applicable standards.",
      sections: [
        {
          heading: "Why do electrical works determine project quality?",
          paragraphs: [
            "A solar park's yield and safety depend directly on the quality of its electrical works. Poor connections, undersized cables or faulty protection logic create losses, failures and safety hazards that can cost several times more to fix than a quality initial solution.",
            "On industrial sites there is the additional requirement of uninterrupted power and process automation — electrical works must integrate with the existing distribution grid, backup power and control systems. A faulty interconnection can halt production or damage equipment.",
          ],
        },
        {
          heading: "What competence do electrical works require?",
          paragraphs: [
            "Competence, responsible persons and registration or notification duties must be checked for the work type and applicable law. HeilAres MTR registration is TEL005181; it does not automatically establish competence for every task or authorisation in another country.",
          ],
        },
        {
          heading: "Which works belong to the electrical scope of a solar park?",
          paragraphs: [
            "DC works cover module strings, string cabling and inverter connections with protection and isolation devices. AC works connect inverters to switchgear, transformers and medium-voltage equipment, with protection relay settings and tests where required. Scope depends on the electrical design and grid conditions.",
            "SCADA can provide generation, fault and maintenance information and real-time alerts according to system capabilities and configuration.",
          ],
        },
        {
          heading: "How to formalise the electrical works contract?",
          paragraphs: [
            "The contract must specify the scope (DC, AC, medium voltage, monitoring), the applicable standards (EVS-HD, IEC), the test plan and the acceptance protocol. Demand a documented operation and maintenance manual and an initial measurement protocol.",
            "Warranty, maintenance and response-time terms are defined in the project-specific contract.",
          ],
        },
      ],
      faqs: [
        {
          question: "What is MTR registration and why does it matter?",
          lead: "MTR is Estonia’s Economic Activities Register. Activity scope, registration validity and competence for the particular work must be checked separately.",
          answer:
            "HeilAres' electrical works MTR registration is TEL005181. The exact scope and project requirements are agreed based on the project information.",
        },
        {
          question: "Can electrical works be ordered separately, without EPC?",
          lead: "Yes — HeilAres offers electrical works as a standalone service when the client has organised construction or panel installation themselves.",
          answer:
            "When ordered separately, we review the existing installation, complete the missing electrical part and commission the system to standards.",
        },
        {
          question: "How quickly can electrical works be ordered?",
          lead: "A start date is confirmed after assessing scope, crew availability, grid connection and deliveries. No fixed response or start deadline is promised before agreement.",
          answer:
            "For large solar parks and industrial sites, we build a schedule together with the client, accounting for grid connection and component availability.",
        },
      ],
    },
    fi: {
      title: "Sähkötöitä aurinkopuistoissa ja teollisuudessa — mitä on tiedettävä",
      summary:
        "Käytännön katsaus sähkötöiden laajuuteen aurinkopuistoissa ja teollisuuskohteissa: MTR-pätevyys, keski- ja pienjännite, käyttöönotto ja sopimusehdot.",
      lead: "Sähkötyöt ovat aurinkopuiston tai teollisuuskohteen sydän — ei vain paneelien ja invertterien liittämistä, vaan koko keski- ja pienjänniteinfrastruktuurin suunnittelu, rakentaminen, testaus ja käyttöönotto vaatimusten mukaisesti.",
      sections: [
        {
          heading: "Miksi sähkötyöt määrittävät projektin laadun?",
          paragraphs: [
            "Aurinkopuiston tuotto ja turvallisuus riippuvat suoraan sähkötöiden laadusta. Huonot liitokset, alimitatut kaapelit tai virheellinen suojauslogiikka aiheuttavat tappioita, vikoja ja turvallisuusriskejä, joiden korjaaminen voi maksaa moninkertaisesti laadukkaaseen alkuperäiseen ratkaisuun verrattuna.",
            "Teollisuuskohteissa lisätään keskeytymättömän virransyötön ja prosessiautomaation vaatimus — sähkötöiden on integroiduttava olemassa olevaan jakeluverkkoon, varavirtaan ja ohjausjärjestelmiin. Virheellinen liityntä voi pysäyttää tuotannon tai vahingoittaa laitteita.",
          ],
        },
        {
          heading: "Mitä pätevyyttä sähkötyöt edellyttävät?",
          paragraphs: [
            "Pätevyys, vastuuhenkilöt sekä rekisteröinti- ja ilmoitusvelvollisuudet tarkistetaan työn ja sovellettavan lain mukaan. HeilAresin MTR-rekisteröinti on TEL005181; se ei automaattisesti osoita pätevyyttä kaikkiin töihin tai oikeutta toimia toisessa maassa.",
          ],
        },
        {
          heading: "Mitkä työt kuuluvat aurinkopuiston sähköosaan?",
          paragraphs: [
            "DC-työt kattavat moduulien paneeliketjut, ketjukaapeloinnin ja invertteriliitännät sekä suojaus- ja erotuslaitteet. AC-työt yhdistävät invertterit kojeistoihin, muuntajiin ja keskijännitelaitteisiin; suojareleet asetellaan ja testataan tarvittaessa. Laajuus riippuu sähkökaaviosta ja liittymisehdoista.",
            "SCADA voi antaa tietoja tuotannosta, vioista ja huoltotarpeista sekä reaaliaikaisia hälytyksiä järjestelmän ominaisuuksien ja asetusten mukaan.",
          ],
        },
        {
          heading: "Miten sähkötöiden sopimus muodostetaan?",
          paragraphs: [
            "Sopimuksessa on määriteltävä laajuus (DC, AC, keskijännite, valvonta), sovellettavat standardit (EVS-HD, IEC), testaussuunnitelma ja vastaanottopöytäkirja. Vaadi dokumentoitu käyttö- ja huolto-ohje sekä alkuperäinen mittauspöytäkirja.",
            "Takuu-, huolto- ja vasteaikaehdot määritellään projektikohtaisessa sopimuksessa.",
          ],
        },
      ],
      faqs: [
        {
          question: "Mitä MTR-rekisteröinti on ja miksi se on tärkeää?",
          lead: "MTR on Viron elinkeinotoiminnan rekisteri. Toimiala, rekisteröinnin voimassaolo ja työn edellyttämä pätevyys tarkistetaan erikseen.",
          answer:
            "HeilAreksen sähkötöiden MTR-rekisteröinti on TEL005181. Tarkka työn laajuus ja projektivaatimukset sovitaan lähtötietojen perusteella.",
        },
        {
          question: "Voiko sähkötöitä tilata erillisenä, ilman EPC:tä?",
          lead: "Kyllä — HeilAres tarjoaa sähkötöitä erillisenä palveluna, kun asiakas on itse järjestänyt rakentamisen tai paneelien asennuksen.",
          answer:
            "Erillisessä tilauksessa arvioimme olemassa olevan asennuksen, täydennämme puuttuvan sähköosan ja otamme järjestelmän käyttöön vaatimusten mukaisesti.",
        },
        {
          question: "Kuinka nopeasti sähkötöitä voi tilata?",
          lead: "Aloitus vahvistetaan työlaajuuden, tiimin saatavuuden, verkkoliittymän ja toimitusten arvioinnin jälkeen. Kiinteää vastaus- tai aloitusaikaa ei luvata ennen sopimista.",
          answer:
            "Suurten aurinkopuistojen ja teollisuuskohteiden osalta rakennamme aikataulun yhdessä asiakkaan kanssa, ottaen huomioon verkkoliitynnän ja komponenttien saatavuuden.",
        },
      ],
    },
    de: {
      title: "Elektroarbeiten in Solarparks und der Industrie – was Sie wissen müssen",
      summary:
        "Ein praktischer Überblick über den Umfang von Elektroarbeiten in Solarparks und Industrieanlagen: MTR-Zulassung, Mittel- und Niederspannung, Inbetriebnahme und Vertragsbedingungen.",
      lead: "Elektroarbeiten sind das Herzstück eines Solarparks oder einer Industrieanlage – nicht nur das Verbinden von Modulen und Wechselrichtern, sondern die Planung, der Bau, die Prüfung und die Inbetriebnahme der gesamten Mittel- und Niederspannungsinfrastruktur nach den geltenden Normen.",
      sections: [
        {
          heading: "Warum bestimmen Elektroarbeiten die Projektqualität?",
          paragraphs: [
            "Ertrag und Sicherheit eines Solarparks hängen unmittelbar von der Qualität der Elektroarbeiten ab. Schlechte Verbindungen, unterdimensionierte Kabel oder fehlerhafte Schutzlogik verursachen Verluste, Störungen und Sicherheitsrisiken, deren Behebung ein Vielfaches einer von Anfang an hochwertigen Lösung kosten kann.",
            "Bei Industrieanlagen kommt die Anforderung an unterbrechungsfreie Stromversorgung und Prozessautomatisierung hinzu – Elektroarbeiten müssen das bestehende Verteilnetz, die Notstromversorgung und die Leitsysteme berücksichtigen. Ein fehlerhafter Anschluss kann die Produktion stoppen oder Anlagen beschädigen.",
          ],
        },
        {
          heading: "Welche Qualifikation erfordern Elektroarbeiten?",
          paragraphs: [
            "Qualifikation, verantwortliche Personen sowie Registrierungs- und Meldepflichten sind nach Tätigkeit und geltendem Recht zu prüfen. HeilAres’ MTR-Registrierung lautet TEL005181; sie belegt nicht automatisch die Qualifikation für jede Tätigkeit oder eine Berechtigung in einem anderen Land.",
          ],
        },
        {
          heading: "Welche Arbeiten gehören zum elektrischen Teil eines Solarparks?",
          paragraphs: [
            "DC-Arbeiten umfassen Modulstrings, Stringverkabelung und Wechselrichteranschlüsse mit Schutz- und Trenneinrichtungen. AC-Arbeiten verbinden Wechselrichter mit Schaltanlagen, Transformatoren und Mittelspannungsanlagen; Schutzrelais werden bei Bedarf eingestellt und geprüft. Der Umfang hängt von Stromlaufplan und Anschlussbedingungen ab.",
            "SCADA kann entsprechend den Systemfunktionen und Einstellungen Informationen zu Erzeugung, Störungen und Wartungsbedarf sowie Echtzeitmeldungen liefern.",
          ],
        },
        {
          heading: "Wie sollte der Vertrag für Elektroarbeiten gestaltet werden?",
          paragraphs: [
            "Der Vertrag muss den Umfang (DC, AC, Mittelspannung, Monitoring), die geltenden Normen (EVS-HD, IEC), den Prüfplan und das Abnahmeprotokoll festlegen. Verlangen Sie eine dokumentierte Betriebs- und Wartungsanleitung sowie ein anfängliches Messprotokoll.",
            "Garantie-, Wartungs- und Reaktionszeitbedingungen werden im projektspezifischen Vertrag festgelegt.",
          ],
        },
      ],
      faqs: [
        {
          question: "Was ist die MTR-Registrierung und warum ist sie wichtig?",
          lead: "MTR ist Estlands Wirtschaftstätigkeitsregister. Tätigkeitsumfang, Gültigkeit und Qualifikation für konkrete Arbeiten sind getrennt zu prüfen.",
          answer:
            "Die MTR-Registrierung von HeilAres für Elektroarbeiten lautet TEL005181. Der genaue Arbeitsumfang und die Projektanforderungen werden anhand der Ausgangsdaten vereinbart.",
        },
        {
          question: "Können Elektroarbeiten separat, ohne EPC, beauftragt werden?",
          lead: "Ja – HeilAres bietet Elektroarbeiten auch als eigenständige Dienstleistung an, wenn der Kunde den Bau oder die Modulmontage selbst organisiert hat.",
          answer:
            "Bei separater Beauftragung prüfen wir die vorhandene Installation, führen den fehlenden elektrischen Teil aus und nehmen das System normgerecht in Betrieb.",
        },
        {
          question: "Wie schnell können Elektroarbeiten beauftragt werden?",
          lead: "Der Beginn wird nach Bewertung von Umfang, Teamverfügbarkeit, Netzanschluss und Lieferungen bestätigt. Vor einer Vereinbarung wird keine feste Antwort- oder Startfrist zugesagt.",
          answer:
            "Bei großen Solarparks und Industrieanlagen erstellen wir gemeinsam mit dem Kunden einen Zeitplan unter Berücksichtigung von Netzanschluss und Komponentenverfügbarkeit.",
        },
      ],
    },
  },
};

const allPosts: BlogPost[] = [
  ...autumnPosts,
  bessStorage,
  workforceFactory,
  workforceShipbuilding,
  epcPartner,
  parkTypes,
  turnkey,
  timeline,
  tier1,
  maintenance,
  electricalWorks,
];

export const blogPosts: BlogPost[] = [...allPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
