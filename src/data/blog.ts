import type { Lang } from "@/i18n";
import epcPartnerCover from "@/assets/blog/epc-partner.jpg";
import parkTypesCover from "@/assets/blog/park-types.jpg";
import turnkeyCover from "@/assets/blog/turnkey.jpg";
import timelineCover from "@/assets/blog/timeline.jpg";
import tier1Cover from "@/assets/blog/tier1.jpg";
import maintenanceCover from "@/assets/blog/maintenance.jpg";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
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
}

export interface BlogPost {
  slug: string;
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
  date: "2026-04-15",
  readMinutes: 6,
  cover: epcPartnerCover,
  content: {
    et: {
      title: "Kuidas valida päikesepargi EPC-partnerit?",
      summary:
        "Praktiline juhend arendajatele ja tööstustele EPC-partneri valikul — millised kriteeriumid loevad ja milliseid küsimusi küsida.",
      lead:
        "Päikesepargi EPC-partner (Engineering, Procurement, Construction) on ettevõte, kes vastutab kogu päikesepargi projekteerimise, komponentide hankimise ja ehituse eest võtmed kätte põhimõttel.",
      sections: [
        {
          heading: "Miks EPC-partneri valik on kriitiline?",
          paragraphs: [
            "Päikesepargi tootlikkus 25–30 aasta jooksul sõltub otseselt sellest, kui kvaliteetselt see on projekteeritud ja ehitatud. Vale EPC-partner võib põhjustada alavajunud tootmist, sagedasi rikkeid, kallimat hooldust ja halvimal juhul kogu vara väärtuse kaotust.",
            "Arendaja jaoks on EPC-partner ka rahandus- ja graafikupartner — viivitused tähendavad tulu kaotust, alahinnatud BOM (bill of materials) tähendab eelarve ületamist. Investorid ja pangad hindavad projekti riski sageli läbi EPC-partneri varasema portfelli.",
          ],
        },
        {
          heading: "Millised kriteeriumid loevad?",
          paragraphs: [
            "Esmane kriteerium on referentside maht megavattides. EPC-partner, kes on paigaldanud sadu MW, mõistab täismahus projektide spetsiifikat — alates substation-ühenduse projekteerimisest kuni DC-kaablite hoolduseni. HeilAres on paigaldanud üle 400 MW Eestis, Lätis ja Euroopas.",
            "Teine kriteerium on komponentide tarneahel. Tugevad EPC-partnerid on otselepingulistes suhetes Tier-1 paneelide ja inverterite tootjatega — see tähendab paremaid hindu, garantii usaldusväärsust ja stabiilset tarnegraafikut. Küsi konkreetseid tarnijaid ja garantiitingimusi.",
            "Kolmas kriteerium on oma paigaldusmeeskonnad. EPC, kes tellib kogu paigalduse alltöövõtjatelt, kaotab kontrolli kvaliteedi ja graafiku üle. HeilArese kõik meeskonnad on majasisesed, mis tagab ühtse kvaliteedistandardi kõikidel objektidel.",
          ],
        },
        {
          heading: "Millised küsimused küsida pakkumiste hindamisel?",
          paragraphs: [
            "Küsi pakkumise eelduste lahtikirjutust — milliseid paneele, invertereid ja kandekonstruktsioone on pakkumises arvestatud, milline on geoloogia eeldus, kas grid-connection kulud on sees. Pakkumised, mis on ainult €/W põhised ilma spetsifikatsioonita, ei ole võrreldavad.",
            "Küsi projekti graafikut nädalate kaupa ja viivituste eest vastutust. Tõsine EPC-partner annab konkreetsed milestone'id ja leppetrahvid hilinemiste eest. Küsi ka kuidas on katte projekti riskid, näiteks ilmast tulenev seisak.",
          ],
        },
      ],
      faqs: [
        {
          question: "Mille poolest erineb EPC-partner tavalisest paigaldajast?",
          lead:
            "EPC-partner vastutab kogu projekti elutsükli eest — projekteerimine, hankimine ja ehitus — samas kui tavaline paigaldaja teostab ainult füüsilise paigalduse.",
          answer:
            "EPC-mudel annab arendajale ühe vastutava partneri kogu lepingulisele ahelale, mis lihtsustab projekti juhtimist ja vähendab koordinatsiooniriski.",
        },
        {
          question: "Kui suur peab EPC-partneri portfell olema?",
          lead:
            "Suuremahuliste projektide jaoks on mõistlik valida EPC-partner, kelle portfellis on vähemalt 100 MW paigaldatud võimsust.",
          answer:
            "Megavatt-skaala kogemus näitab, et meeskond on lahendanud reaalseid projektijuhtimise, võrguühenduse ja loogistika väljakutseid.",
        },
        {
          question: "Kas tasub valida kohalik või rahvusvaheline EPC?",
          lead:
            "Kohalik EPC-partner, kellel on rahvusvaheline kogemus, on tavaliselt parim valik, kuna kombineerib kohaliku regulatiivse kogemuse ja skaalavõime.",
          answer:
            "HeilAres kombineerib Eesti ja Läti kohaliku tugeva tegevuse Euroopa-üleste projektivõimekustega.",
        },
      ],
    },
    en: {
      title: "How to choose a solar park EPC partner?",
      summary:
        "A practical guide for developers and industrial clients on selecting an EPC partner — which criteria matter and what questions to ask.",
      lead:
        "A solar park EPC partner (Engineering, Procurement, Construction) is the company responsible for the full turnkey delivery of a solar park, covering design, component procurement and construction.",
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
            "The first criterion is portfolio volume in megawatts. An EPC partner that has installed hundreds of MW understands the specifics of full-scale projects — from substation interconnection design to long-term DC cable maintenance. HeilAres has installed over 400 MW in Estonia, Latvia and Europe.",
            "The second criterion is supply chain. Strong EPC partners have direct contractual relationships with Tier-1 panel and inverter manufacturers — meaning better prices, reliable warranties and stable delivery schedules. Ask for specific suppliers and warranty terms.",
            "The third criterion is in-house installation crews. An EPC that subcontracts all installation loses control of quality and schedule. All of HeilAres' crews are in-house, ensuring a single quality standard across every site.",
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
          lead:
            "An EPC partner is responsible for the entire project lifecycle — engineering, procurement and construction — while a regular installer only performs physical installation.",
          answer:
            "The EPC model gives the developer a single point of contractual accountability, which simplifies project management and reduces coordination risk.",
        },
        {
          question: "How large should an EPC partner's portfolio be?",
          lead:
            "For large-scale projects it is reasonable to select an EPC partner with at least 100 MW of installed capacity in their portfolio.",
          answer:
            "Megawatt-scale experience proves the team has solved real project management, grid interconnection and logistics challenges.",
        },
        {
          question: "Should you choose a local or international EPC?",
          lead:
            "A local EPC partner with international experience is usually the best choice as it combines local regulatory know-how with scalability.",
          answer:
            "HeilAres combines a strong local presence in Estonia and Latvia with pan-European project capabilities.",
        },
      ],
    },
    fi: {
      title: "Kuinka valita aurinkopuiston EPC-kumppani?",
      summary:
        "Käytännönopas kehittäjille ja teollisuusasiakkaille EPC-kumppanin valintaan — mitkä kriteerit merkitsevät ja mitä kysyä.",
      lead:
        "Aurinkopuiston EPC-kumppani (Engineering, Procurement, Construction) on yritys, joka vastaa aurinkopuiston koko avaimet käteen -toimituksesta — suunnittelusta, komponenttien hankinnasta ja rakentamisesta.",
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
            "Ensimmäinen kriteeri on portfolion megawattimäärä. EPC, joka on asentanut satoja MW, ymmärtää täysimittaisten projektien erityispiirteet — sähköaseman liitynnästä DC-kaapeleiden huoltoon. HeilAres on asentanut yli 400 MW Virossa, Latviassa ja Euroopassa.",
            "Toinen kriteeri on toimitusketju. Vahvoilla EPC-kumppaneilla on suorat sopimukset Tier-1-paneelien ja -invertterien valmistajien kanssa — mikä tarkoittaa parempia hintoja, luotettavia takuita ja vakaita toimitusaikatauluja.",
            "Kolmas kriteeri on omat asennusryhmät. EPC, joka ulkoistaa kaiken asennuksen, menettää laadun ja aikataulun hallinnan. Kaikki Heilareksen asennusryhmät ovat talon sisäisiä, mikä takaa yhtenäisen laatustandardin kaikilla työmailla.",
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
          lead:
            "EPC-kumppani vastaa koko projektin elinkaaresta — suunnittelusta, hankinnasta ja rakentamisesta — kun tavallinen asentaja hoitaa vain fyysisen asennuksen.",
          answer:
            "EPC-malli antaa kehittäjälle yhden sopimusvastuullisen kumppanin, mikä yksinkertaistaa projektinhallintaa.",
        },
        {
          question: "Kuinka suuri EPC-kumppanin portfolion tulisi olla?",
          lead:
            "Suuren mittakaavan projekteissa on järkevää valita EPC-kumppani, jonka portfoliossa on vähintään 100 MW asennettua kapasiteettia.",
          answer:
            "Megawattiluokan kokemus osoittaa, että tiimi on ratkaissut todellisia projektinhallinnan ja verkkoliitynnän haasteita.",
        },
        {
          question: "Pitäisikö valita paikallinen vai kansainvälinen EPC?",
          lead:
            "Paikallinen EPC-kumppani, jolla on kansainvälistä kokemusta, on yleensä paras valinta.",
          answer:
            "HeilAres yhdistää vahvan paikallisen läsnäolon Virossa ja Latviassa pan-eurooppalaisiin projektikykyihin.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// 2. Park type comparison
// ─────────────────────────────────────────────────────────────────────────
const parkTypes: BlogPost = {
  slug: "maapark-katusepark-Solar Tracker Park-vordlus",
  date: "2026-04-08",
  readMinutes: 7,
  cover: parkTypesCover,
  content: {
    et: {
      title: "Maapark, katusepark või Solar Tracker Park — milline sobib teie projektile?",
      summary:
        "Kolm peamist päikesepargi tüüpi B2B kontekstis — millised on iga tüübi tugevused, kulustruktuur ja kuhu need sobivad kõige paremini.",
      lead:
        "Maaparkide, katuseparkide ja Solar Solar Tracker Park vahel valimisel sõltub õige lahendus eelkõige maa-ala saadavusest, võrguühenduse võimsusest ja oodatavast tootlikkusest, mitte ainult investeeringu suurusest.",
      sections: [
        {
          heading: "Maapark — suurim mastaabivõime",
          paragraphs: [
            "Maapark on maapealne fikseeritud nurgaga päikesepark, mis sobib suurtele kommerts- ja tööstusmastaabis projektidele. Tüüpiline 1 MW maapark vajab 1–1,5 hektarit avatud maad. CAPEX €/W on tavaliselt madalaim kõigi kolme tüübi seas.",
            "Maaparki eelistavad arendajad, kellel on juurdepääs põllumajandusmaale või tööstusalalele ja kes vajavad suurt tootmismahtu kindla eelarve sees. Hooldus on lihtne, ligipääs hea ja paneelide vahetus rikke korral kiire.",
          ],
        },
        {
          heading: "Katusepark — pinna kasutamine ilma uut maad võtmata",
          paragraphs: [
            "Katusepark sobib tööstushoonete, ladude, tehaste ja jaotuskeskuste omanikele, kes soovivad vähendada oma elektrikulusid ja CO2 jalajälge ilma maapinna kasutamise vajaduseta. Tüüpiline 1 MW katusepark katab umbes 6 000–8 000 m² katusepinda.",
            "Katuseparkide eelis on otse-omatarbe võimalus — toodetud energia tarbitakse kohapeal, mis annab eriti kiire investeeringu tasuvuse kõrgete elektrihindade tingimustes. Eeldus on, et katuse kandekonstruktsioon talub lisakoormust.",
          ],
        },
        {
          heading: "Solar Tracker Park — maksimaalne tootlikkus pinnaühiku kohta",
          paragraphs: [
            "Solar Tracker Park kasutab ühe-teljelisi (single-axis) jälgijaid, mis pööravad paneele ida-läänesuunaliselt päeva jooksul. Tootlikkus on 15–25% suurem kui sama suure fikseeritud maapargi puhul, mis kompenseerib kõrgemat CAPEX-i ja hoolduskulusid.",
            "Solar Tracker Park sobib eelkõige suurte, tasase pinnasega maa-alade jaoks, kus võrgupiirang ei limiteeri tootmismahtu. HeilAres on paigaldanud Lätis 72,5 MW Stelpe Solar Solar Tracker Park.",
          ],
        },
        {
          heading: "Kuidas valida õige tüüp?",
          paragraphs: [
            "Esimene küsimus: kas on saadaval suur avatud maa-ala? Kui jah ja võrguühendus võimaldab, on Solar Tracker Park kõige produktiivsem. Kui maa on piiratud või kalli, on katusepark loogiline. Maapark sobib siis, kui CAPEX on prioriteet ja maa-ala on saadaval mõõdukate kuludega.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kas Solar Tracker Park on alati parem kui fikseeritud maapark?",
          lead:
            "Solar Tracker Park annab keskmiselt 15–25% rohkem energiat, kuid CAPEX ja OPEX on kõrgemad, seega tasuvus sõltub asukohast ja elektrihinnast.",
          answer:
            "Põhja-Euroopa tingimustes on Solar Tracker Park sageli mõistlik valik suurte maa-alade jaoks, kus võrguühendus võimaldab täisvõimsust kasutada.",
        },
        {
          question: "Millise tüübi tasuvusaeg on lühim?",
          lead:
            "Katuseparkidel on tüüpiliselt lühim tasuvusaeg, kuna omatarbeline energia asendab võrgust ostmist täishinnaga.",
          answer:
            "Maa- ja Solar Solar Tracker Park tasuvus sõltub müügihinnast (PPA või spot), mis on tavaliselt madalam kui jaehind.",
        },
      ],
    },
    en: {
      title: "Ground-mount, rooftop or tracker — which solar park suits your project?",
      summary:
        "The three main solar park types in a B2B context — strengths, cost structure and best use cases for each.",
      lead:
        "Choosing between ground-mount, rooftop and Solar Tracker Parks depends primarily on land availability, grid connection capacity and expected yield, not just investment size.",
      sections: [
        {
          heading: "Ground-mount — maximum scalability",
          paragraphs: [
            "A ground-mount park is a fixed-tilt installation suited to large commercial and industrial-scale projects. A typical 1 MW ground-mount park requires 1–1.5 hectares of open land. CAPEX per watt is usually the lowest of the three types.",
            "Ground-mount is preferred by developers with access to agricultural or industrial land who need large generation volumes within a fixed budget. Maintenance is simple, access is good and panel replacement is fast.",
          ],
        },
        {
          heading: "Rooftop — using existing surfaces without occupying new land",
          paragraphs: [
            "Rooftop parks suit owners of industrial buildings, warehouses, factories and distribution centres who want to reduce electricity costs and CO2 footprint without using ground area. A typical 1 MW rooftop park covers about 6 000–8 000 m² of roof.",
            "Rooftop's advantage is on-site self-consumption — energy produced is used locally, giving especially fast payback in high-price environments. The prerequisite is that the load-bearing structure tolerates the added weight.",
          ],
        },
        {
          heading: "Solar Tracker Park — maximum yield per area",
          paragraphs: [
            "Solar Tracker Parks use single-axis trackers that rotate panels east–west across the day. Yield is 15–25% higher than an equivalent fixed-tilt park, compensating for higher CAPEX and maintenance. HeilAres has installed the 72.5 MW Stelpe Solar Tracker Park in Latvia.",
            "Trackers suit large, flat sites where grid capacity does not limit output.",
          ],
        },
        {
          heading: "How to choose the right type?",
          paragraphs: [
            "First: is there a large open site available? If yes and grid allows, tracker is most productive. If land is constrained or expensive, rooftop is logical. Ground-mount fits when CAPEX is the priority and land is reasonably priced.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is a Solar Tracker Park always better than fixed-tilt ground-mount?",
          lead:
            "Trackers produce 15–25% more energy on average, but CAPEX and OPEX are higher, so payback depends on location and electricity price.",
          answer:
            "In Northern European conditions, trackers are often a sensible choice for large sites where grid capacity can absorb peak output.",
        },
        {
          question: "Which type has the shortest payback?",
          lead:
            "Rooftop parks typically have the shortest payback because self-consumed energy displaces retail-priced grid purchases.",
          answer:
            "Ground-mount and tracker payback depends on PPA or spot price, usually lower than retail.",
        },
      ],
    },
    fi: {
      title: "Maa-, katto- vai seurantapuisto — mikä sopii hankkeellesi?",
      summary:
        "Kolme aurinkopuistotyyppiä B2B-näkökulmasta — vahvuudet, kustannusrakenne ja parhaat käyttötapaukset.",
      lead:
        "Maa-, katto- ja seurantapuiston välillä valinta riippuu ensisijaisesti maa-alasta, verkkoliitynnän kapasiteetista ja odotetusta tuotosta, ei vain investoinnin koosta.",
      sections: [
        {
          heading: "Maapuisto — suurin skaalautuvuus",
          paragraphs: [
            "Maapuisto on kiinteäkulmainen maa-asennus, joka sopii suuriin kaupallisiin ja teollisiin hankkeisiin. Tyypillinen 1 MW maapuisto tarvitsee 1–1,5 hehtaaria avointa maata. CAPEX per watti on yleensä alhaisin kolmesta tyypistä.",
            "Maapuiston valitsee kehittäjä, jolla on pääsy maatalous- tai teollisuusmaalle ja joka tarvitsee suurta tuotantoa kiinteällä budjetilla.",
          ],
        },
        {
          heading: "Kattopuisto — käytä olemassa olevia pintoja",
          paragraphs: [
            "Kattopuisto sopii teollisuusrakennusten, varastojen ja jakelukeskusten omistajille, jotka haluavat pienentää sähkökulujaan ilman maapinnan käyttöä. Tyypillinen 1 MW kattopuisto kattaa noin 6 000–8 000 m² kattoa.",
            "Etu on omakäyttö — paikallisesti tuotettu energia korvaa kalliimpaa verkkosähköä. Edellytys on, että kantorakenne kestää lisäkuorman.",
          ],
        },
        {
          heading: "Seurantapuisto — maksimituotto pinta-alaa kohti",
          paragraphs: [
            "Seurantapuisto käyttää yksiakselisia seuraajia, jotka kääntävät paneeleita itä-länsisuunnassa päivän aikana. Tuotto on 15–25% suurempi kuin vastaavalla kiinteällä asennuksella. HeilAres on asentanut 72,5 MW Stelpe-seurantapuiston Latviassa.",
            "Sopii erityisesti suurille, tasaisille alueille.",
          ],
        },
        {
          heading: "Miten valita oikea tyyppi?",
          paragraphs: [
            "Jos suuri avoin maa-ala on saatavilla ja verkkoliityntä sallii, seurantapuisto on tuottavin. Jos maa on rajallista, kattopuisto on järkevä. Maapuisto sopii, kun CAPEX on prioriteetti.",
          ],
        },
      ],
      faqs: [
        {
          question: "Onko seurantapuisto aina parempi kuin kiinteä maapuisto?",
          lead:
            "Seurantapuisto tuottaa keskimäärin 15–25% enemmän energiaa, mutta CAPEX ja OPEX ovat korkeammat.",
          answer:
            "Pohjois-Euroopassa seuranta on usein järkevä valinta suurille kohteille, joissa verkkoliityntä sallii huipputuotannon.",
        },
        {
          question: "Millä tyypillä takaisinmaksuaika on lyhin?",
          lead:
            "Kattopuistoilla on tyypillisesti lyhin takaisinmaksuaika omakäytön ansiosta.",
          answer:
            "Maa- ja seurantapuistojen takaisinmaksu riippuu PPA- tai spot-hinnasta.",
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
  date: "2026-03-30",
  readMinutes: 5,
  cover: turnkeyCover,
  content: {
    et: {
      title: "Mis on võtmed-kätte päikesepargi ehitus ja mida see hõlmab?",
      summary:
        "Detailne ülevaade võtmed-kätte EPC-mudelist — kõik tööetapid, vastutusalad ja mida arendaja saab ühelt partnerilt.",
      lead:
        "Võtmed-kätte päikesepargi ehitus tähendab, et üks EPC-partner vastutab kogu protsessi eest projekteerimisest kuni võrku ühendamise ja kasutusvalmis üleandmiseni.",
      sections: [
        {
          heading: "Mida võtmed-kätte hõlmab?",
          paragraphs: [
            "Võtmed-kätte mudel hõlmab esmast asukoha analüüsi ja energiamodelleerimist (yield assessment), tehnilist projekteerimist, ehituslubade taotlemist, kõigi komponentide hankimist (paneelid, inverterid, kandekonstruktsioonid, kaablid, transformaatorid), vundamentide ja kandekonstruktsioonide paigaldust, paneelide paigaldust, DC- ja AC-kaabeldust, inverterite ja substation-i ühendust, testimist ning lõplikku üleandmist arendajale.",
            "Erinevalt multi-contractor mudelist, kus arendaja tellib iga etapi eraldi alltöövõtjalt, on võtmed-kätte EPC-l üks lepinguline vastutus kogu objekti tootmisvalmiduse ees.",
          ],
        },
        {
          heading: "Miks arendajad eelistavad võtmed-kätte mudelit?",
          paragraphs: [
            "Esimene põhjus on selge vastutus. Kui midagi läheb valesti — paneelide tootlikkus on madalam kui projekteeritud, kaabel rikkis, inverter ei käivitu — on üks partner, kes peab probleemi lahendama. Multi-contractor projektides kulub vastutuse selgitamisele sageli kuid.",
            "Teine põhjus on graafiku usaldusväärsus. EPC-partner haldab sisemiselt komponentide saabumist, brigaadide mobiliseerimist ja töötsükleid, mis vähendab kalleid seisakuid. Suurte projektide puhul võib üks nädal viivitust tähendada kümneid tuhandeid eurosid kaotatud tulu.",
            "Kolmas põhjus on hinnakindlus. Võtmed-kätte leping on tavaliselt fikseeritud hinnaga (lump-sum), mille raames EPC kannab tarneahela ja täitmise riski. Arendaja teab ette täpset CAPEX-i.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kas võtmed-kätte mudel on alati kallim kui ise koordineerimine?",
          lead:
            "Võtmed-kätte CAPEX võib olla pisut kõrgem, kuid kogu projekti TCO on tavaliselt madalam tänu väiksematele viivituskuludele ja paremale komponendile.",
          answer:
            "Suurte projektide puhul kompenseerib EPC mahuallahindlus tarnijate juures sageli täiendava marginaali.",
        },
        {
          question: "Kas EPC võtab vastutuse tootmise eest peale üleandmist?",
          lead:
            "EPC garanteerib ehituskvaliteedi (workmanship warranty) tavaliselt 2–5 aastat, samas kui komponentide garantii tuleb otse Tier-1 tootjatelt.",
          answer:
            "Tootlikkuse garantii (performance guarantee) saab kokku leppida eraldi, eriti suuremate projektide puhul.",
        },
        {
          question: "Kas HeilAres pakub võtmed-kätte teenust väljaspool Eestit?",
          lead:
            "Jah, HeilAres pakub võtmed-kätte EPC teenust kogu Euroopas.",
          answer:
            "Meeskonnad on kiirelt mobiliseeritavad Lätti, Soome ja teistesse Euroopa riikidesse.",
        },
      ],
    },
    en: {
      title: "What is turnkey solar park construction and what does it cover?",
      summary:
        "A detailed view of the turnkey EPC model — every work phase, responsibilities and what a developer gets from a single partner.",
      lead:
        "Turnkey solar park construction means one EPC partner is responsible for the entire process from engineering to grid connection and ready-to-operate handover.",
      sections: [
        {
          heading: "What does turnkey cover?",
          paragraphs: [
            "The turnkey model covers initial site analysis and yield assessment, engineering design, permit applications, procurement of all components (panels, inverters, mounting structures, cables, transformers), foundation and mounting installation, panel installation, DC and AC cabling, inverter and substation interconnection, testing and final handover.",
            "Unlike a multi-contractor model where the developer sources each phase from separate subcontractors, turnkey EPC carries a single contractual responsibility for full site commissioning.",
          ],
        },
        {
          heading: "Why developers prefer turnkey?",
          paragraphs: [
            "First reason: clear accountability. If something goes wrong — panel output below model, faulty cable, inverter not starting — there is one partner to fix it. In multi-contractor projects, clarifying liability often takes months.",
            "Second reason: schedule reliability. The EPC partner internally manages component delivery, crew mobilisation and work cycles, reducing expensive downtime. For large projects, one week of delay can mean tens of thousands of euros of lost revenue.",
            "Third reason: price certainty. Turnkey contracts are typically lump-sum, with the EPC carrying the supply chain and execution risk. The developer knows the exact CAPEX upfront.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is turnkey always more expensive than self-coordination?",
          lead:
            "Turnkey CAPEX may be slightly higher, but total project TCO is usually lower thanks to fewer delay costs and better procurement.",
          answer:
            "For large projects, EPC volume discounts with suppliers often offset the additional margin.",
        },
        {
          question: "Does the EPC take responsibility for production after handover?",
          lead:
            "EPC typically guarantees workmanship for 2–5 years, while component warranties come directly from the Tier-1 manufacturers.",
          answer:
            "A performance guarantee can be negotiated separately, especially for larger projects.",
        },
        {
          question: "Does HeilAres offer turnkey outside Estonia?",
          lead:
            "Yes, HeilAres delivers turnkey EPC services across Europe.",
          answer:
            "Crews can be rapidly mobilised to Latvia, Finland and other European countries.",
        },
      ],
    },
    fi: {
      title: "Mitä on aurinkopuiston avaimet käteen -rakentaminen ja mitä se sisältää?",
      summary:
        "Yksityiskohtainen katsaus avaimet käteen -EPC-malliin — kaikki työvaiheet ja vastuut.",
      lead:
        "Avaimet käteen -aurinkopuiston rakentaminen tarkoittaa, että yksi EPC-kumppani vastaa koko prosessista suunnittelusta verkkoliityntään ja käyttövalmiiseen luovutukseen.",
      sections: [
        {
          heading: "Mitä avaimet käteen kattaa?",
          paragraphs: [
            "Malli kattaa sijainnin analyysin ja tuottoarvion, teknisen suunnittelun, lupahakemukset, kaikkien komponenttien hankinnan (paneelit, invertterit, kannakkeet, kaapelit, muuntajat), perustusten ja rakenteiden asennuksen, paneelien asennuksen, DC- ja AC-kaapeloinnit, invertterien ja sähköaseman liitynnän, testauksen sekä lopullisen luovutuksen.",
            "Toisin kuin monitoimittajamallissa, jossa kehittäjä hankkii jokaisen vaiheen erikseen, avaimet käteen -EPC kantaa yhden sopimusvastuun koko kohteen käyttöönotosta.",
          ],
        },
        {
          heading: "Miksi kehittäjät suosivat avaimet käteen -mallia?",
          paragraphs: [
            "Ensiksi: selkeä vastuu. Jos jokin menee pieleen, on yksi kumppani, joka korjaa ongelman.",
            "Toiseksi: aikataulun luotettavuus. EPC hallitsee sisäisesti komponenttitoimitukset ja työvaiheet.",
            "Kolmanneksi: hintavarmuus. Avaimet käteen on yleensä kiinteähintainen sopimus, jolloin kehittäjä tietää CAPEXin etukäteen.",
          ],
        },
      ],
      faqs: [
        {
          question: "Onko avaimet käteen aina kalliimpi?",
          lead:
            "Avaimet käteen -CAPEX voi olla hieman korkeampi, mutta hankkeen kokonaiskustannus on yleensä alhaisempi.",
          answer:
            "Suurissa hankkeissa EPC:n volyymialennukset usein kompensoivat lisämarginaalin.",
        },
        {
          question: "Vastaako EPC tuotannosta luovutuksen jälkeen?",
          lead:
            "EPC takaa työn laadun yleensä 2–5 vuotta; komponenttitakuut tulevat Tier-1-valmistajilta.",
          answer:
            "Tuottotakuu voidaan neuvotella erikseen.",
        },
        {
          question: "Tarjoaako HeilAres avaimet käteen -palvelua Viron ulkopuolella?",
          lead:
            "Kyllä, HeilAres toimittaa EPC-palveluita koko Euroopassa.",
          answer:
            "Ryhmät voidaan mobilisoida nopeasti Latviaan, Suomeen ja muihin maihin.",
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
  date: "2026-03-22",
  readMinutes: 5,
  cover: timelineCover,
  content: {
    et: {
      title: "Kui kaua võtab suuremahulise päikesepargi ehitus aega?",
      summary:
        "Realistlik ajakava suuremahulise päikesepargi ehitusele — etapid, kestus ja peamised viivituste põhjused.",
      lead:
        "Suuremahulise päikesepargi (10 MW ja suurem) ehitusaeg on tüüpiliselt 6–12 kuud alates lepingu sõlmimisest kuni võrku ühendamiseni, sõltudes peamiselt komponentide tarneajast ja loamenetlusest.",
      sections: [
        {
          heading: "Etapid ja nende tüüpiline kestus",
          paragraphs: [
            "Detailne projekteerimine ja loamenetlus võtab tavaliselt 2–4 kuud. See sisaldab geoloogilist uurimist, võrguühenduse projekti, ehitusprojekti koostamist ja vajalike lubade saamist. Suurtel objektidel võib loamenetlus pikeneda kohaliku omavalitsuse menetlustähtaegade tõttu.",
            "Komponentide hankimine kestab 2–6 kuud sõltuvalt globaalsest tarneolukorrast. Paneelid ja inverterid tulevad sageli Aasiast ja Euroopast paralleelselt. Tarneajad on viimastel aastatel olnud volatiilsemad kui varem.",
            "Füüsiline ehitus 10 MW pargi puhul kestab 2–4 kuud — vundamendid, kandekonstruktsioonid, paneelid, DC-kaabeldus, inverterite paigaldus ja substation-i ühendus. 100 MW pargi puhul võib aktiivne paigaldusperiood ulatuda 6–8 kuuni, sageli paralleelsete brigaadidega.",
            "Testimine, võrku ühendamine ja kasutuselevõtt võtab 2–6 nädalat sõltuvalt võrgu operaatori graafikust.",
          ],
        },
        {
          heading: "Peamised viivituste põhjused",
          paragraphs: [
            "Komponentide tarne viivitused on viimastel aastatel olnud kõige sagedasem põhjus. Tugev EPC-partner haldab varustusriski läbi mitme tarnija ja varuvarude.",
            "Loamenetluse pikenemine, halb ilm pikaajaliselt ja võrguliitumise graafiku libisemine on järgmised peamised riskid. Realistlik ajakava ja kommunikatsioon kohaliku võrguoperaatoriga vähendab neid riske oluliselt.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui kaua võtab 100 MW päikesepargi ehitus?",
          lead:
            "100 MW päikesepargi ehitus võtab tavaliselt 9–14 kuud alates lepingust kuni võrku ühendamiseni.",
          answer:
            "HeilArese suurim paigaldatud objekt on 244 MW Risti päikesepark Eestis, kus mitmed meeskonnad töötasid paralleelselt.",
        },
        {
          question: "Kas talvel saab päikesepargi ehitusega jätkata?",
          lead:
            "Jah, HeilAres jätkab paigaldustöödega ka talvel, eriti vundamentide ja kandekonstruktsioonide osas.",
          answer:
            "Paneelide ja DC-tööde puhul on temperatuuri- ja niiskusepiirangud, mida arvestatakse graafikus.",
        },
      ],
    },
    en: {
      title: "How long does utility-scale solar park construction take?",
      summary:
        "A realistic timeline for utility-scale solar park construction — phases, durations and the main causes of delay.",
      lead:
        "Utility-scale solar park construction (10 MW and above) typically takes 6–12 months from contract signing to grid connection, depending mainly on component lead times and permitting.",
      sections: [
        {
          heading: "Phases and their typical duration",
          paragraphs: [
            "Detailed engineering and permitting normally takes 2–4 months. This includes geotechnical study, grid connection design, construction project documentation and obtaining required permits.",
            "Component procurement takes 2–6 months depending on global supply conditions. Panels and inverters often come from Asia and Europe in parallel. Lead times have been more volatile in recent years.",
            "Physical construction of a 10 MW park takes 2–4 months — foundations, mounting structures, panels, DC cabling, inverter installation and substation connection. For a 100 MW park, the active installation period can stretch to 6–8 months, often with parallel crews.",
            "Testing, grid connection and commissioning take 2–6 weeks depending on the grid operator's schedule.",
          ],
        },
        {
          heading: "Main causes of delay",
          paragraphs: [
            "Component supply delays have been the most frequent cause in recent years. A strong EPC partner manages supply risk through multiple suppliers and inventory.",
            "Extended permitting, persistent bad weather and grid interconnection slippage are the next main risks. A realistic schedule and clear communication with the local grid operator reduce these substantially.",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does a 100 MW solar park take to build?",
          lead:
            "A 100 MW solar park typically takes 9–14 months from contract to grid connection.",
          answer:
            "HeilAres' largest installed site is the 244 MW Risti park in Estonia, where multiple crews worked in parallel.",
        },
        {
          question: "Can construction continue through winter?",
          lead:
            "Yes, HeilAres continues installation work through winter, especially foundations and mounting structures.",
          answer:
            "Panels and DC work have temperature and humidity limits factored into the schedule.",
        },
      ],
    },
    fi: {
      title: "Kuinka kauan suuren mittakaavan aurinkopuiston rakentaminen kestää?",
      summary:
        "Realistinen aikataulu suuren mittakaavan aurinkopuiston rakentamiseen — vaiheet, kestot ja viivästysten syyt.",
      lead:
        "Suuren mittakaavan aurinkopuiston (10 MW tai enemmän) rakentaminen kestää tyypillisesti 6–12 kuukautta sopimuksen allekirjoituksesta verkkoliityntään.",
      sections: [
        {
          heading: "Vaiheet ja niiden kesto",
          paragraphs: [
            "Yksityiskohtainen suunnittelu ja lupamenettely kestää tavallisesti 2–4 kuukautta.",
            "Komponenttien hankinta kestää 2–6 kuukautta globaalin toimitustilanteen mukaan.",
            "10 MW puiston fyysinen rakentaminen kestää 2–4 kuukautta; 100 MW puistossa aktiivinen asennusjakso voi olla 6–8 kuukautta rinnakkaisilla ryhmillä.",
            "Testaus ja käyttöönotto vie 2–6 viikkoa verkkoyhtiön aikataulun mukaan.",
          ],
        },
        {
          heading: "Tärkeimmät viivästysten syyt",
          paragraphs: [
            "Komponenttitoimitusten viiveet ovat olleet yleisin syy viime vuosina.",
            "Lupamenettelyn pidentyminen, huono sää ja verkkoliitynnän viivästykset ovat seuraavia riskejä.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuinka kauan 100 MW aurinkopuiston rakentaminen kestää?",
          lead:
            "100 MW aurinkopuisto kestää tyypillisesti 9–14 kuukautta sopimuksesta verkkoliityntään.",
          answer:
            "Heilareksen suurin kohde on 244 MW Risti-puisto Virossa.",
        },
        {
          question: "Voiko rakentaminen jatkua talvella?",
          lead:
            "Kyllä, HeilAres jatkaa asennustöitä talvella, erityisesti perustusten ja rakenteiden osalta.",
          answer:
            "Paneeli- ja DC-töille on lämpötila- ja kosteusrajoja, jotka huomioidaan aikataulussa.",
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
  date: "2026-03-15",
  readMinutes: 5,
  cover: tier1Cover,
  content: {
    et: {
      title: "Mida tähendab Tier-1 päikesepaneel ja miks see on oluline?",
      summary:
        "Tier-1 mõiste lahtiseletus B2B kontekstis — mille alusel BloombergNEF tootjaid hindab ja miks see arendaja jaoks oluline on.",
      lead:
        "Tier-1 päikesepaneel on paneel, mille tootja on BloombergNEF (BNEF) klassifikatsiooni järgi pankade poolt rahastatava (bankable) tasemel — see tähendab, et tootja on tarninud märkimisväärses mahus paneele rahaliselt sõltumatutele suurprojektidele.",
      sections: [
        {
          heading: "Mida Tier-1 päriselt mõõdab?",
          paragraphs: [
            "Tier-1 ei ole tehniline kvaliteediklass, vaid finantsstabiilsuse näitaja. BloombergNEF hindab tootjaid kvartaalselt selle alusel, kas vähemalt kuus erinevat pankade poolt rahastatavat päikeseparki on viimase kahe aasta jooksul kasutanud selle tootja paneele. See näitab, et tootja on usaldusväärne pikaajaline partner ja tema garantii on tõenäoliselt täidetav 25 aasta jooksul.",
            "Tier-1 list ei garanteeri, et iga konkreetne paneel on tehniliselt parim — see näitab tootja äristabiilsust, mis on kriitiline pikaajaliste garantiide jaoks.",
          ],
        },
        {
          heading: "Miks arendaja peaks Tier-1 nõudma?",
          paragraphs: [
            "Pangad ja investorid nõuavad sageli Tier-1 paneele projekti rahastamise eeltingimusena, kuna nad ei taha rahastada projekti, kus paneelide tootja võib enne garantii lõppu turult lahkuda. See on otseselt seotud projekti võimega saada pikaajalist võlafinantseeringut.",
            "Tehniliselt on Tier-1 tootjate paneelidel tüüpiliselt madalam degradatsioon (kuni 0,4% aastas), parem temperatuuri-koefitsient ja tugevam mehaaniline raamistik. HeilAres töötab ainult kontrollitud Tier-1 tarnijatega, et tagada arendaja vara väärtus 25+ aasta jooksul.",
          ],
        },
        {
          heading: "Levinud väärarusaamad",
          paragraphs: [
            "Tier-1 ei ole sertifikaat — see on regulaarselt uuendatav nimekiri. Tier-2 või Tier-3 paneel ei pruugi olla tehniliselt halvem, kuid finantsrisk garantii puhul on kõrgem. Suurte projektide puhul ei tasu seda riski võtta.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuidas kontrollida, kas tootja on Tier-1?",
          lead:
            "BloombergNEF avaldab kvartaalse Tier-1 list'i, mida saab kontrollida tootja Bloomberg'i raportist või HeilAres tellitud pakkumistest.",
          answer:
            "HeilAres lisab igale pakkumisele konkreetsete tootjate Tier-1 staatuse pakkumise hetkel.",
        },
        {
          question: "Kas Tier-1 paneelid on alati kallimad?",
          lead:
            "Tier-1 paneelid on tüüpiliselt 5–15% kallimad kui Tier-2, kuid maksumus pärineb tootmise mahust ja kvaliteedikontrollist.",
          answer:
            "Pikaajalise tootlikkuse ja garantii usaldusväärsuse arvestamisel on Tier-1 paneelid TCO-lt soodsamad.",
        },
      ],
    },
    en: {
      title: "What is a Tier-1 solar panel and why does it matter?",
      summary:
        "Tier-1 explained in a B2B context — how BloombergNEF rates manufacturers and why it matters for developers.",
      lead:
        "A Tier-1 solar panel is one whose manufacturer is classified as bankable by BloombergNEF (BNEF) — meaning the manufacturer has supplied panels in significant volume to non-recourse-financed utility-scale projects.",
      sections: [
        {
          heading: "What does Tier-1 actually measure?",
          paragraphs: [
            "Tier-1 is not a technical quality grade — it is a financial stability indicator. BloombergNEF rates manufacturers quarterly based on whether at least six different bank-financed solar parks have used the manufacturer's panels in the past two years. This indicates the manufacturer is a reliable long-term partner whose warranties are likely honourable over 25 years.",
            "The Tier-1 list does not guarantee that any specific panel is technically best — it indicates business stability, which is critical for long warranties.",
          ],
        },
        {
          heading: "Why should a developer require Tier-1?",
          paragraphs: [
            "Banks and investors frequently require Tier-1 panels as a prerequisite for project financing, because they do not want to fund a project where the panel manufacturer may exit the market before warranty expires.",
            "Technically, Tier-1 manufacturer panels typically have lower degradation (down to 0.4% per year), better temperature coefficients and stronger mechanical frames. HeilAres only works with verified Tier-1 suppliers to protect long-term asset value.",
          ],
        },
        {
          heading: "Common misconceptions",
          paragraphs: [
            "Tier-1 is not a certificate — it is a list updated quarterly. Tier-2 or Tier-3 panels may not be technically worse, but warranty financial risk is higher.",
          ],
        },
      ],
      faqs: [
        {
          question: "How can I verify a manufacturer is Tier-1?",
          lead:
            "BloombergNEF publishes a quarterly Tier-1 list that can be cross-checked with the manufacturer's Bloomberg report or with bids issued by HeilAres.",
          answer:
            "HeilAres includes manufacturer Tier-1 status at bid time on every offer.",
        },
        {
          question: "Are Tier-1 panels always more expensive?",
          lead:
            "Tier-1 panels are typically 5–15% more expensive than Tier-2, but the cost reflects manufacturing scale and quality control.",
          answer:
            "Considering long-term yield and warranty reliability, Tier-1 panels usually have a lower TCO.",
        },
      ],
    },
    fi: {
      title: "Mikä on Tier-1-aurinkopaneeli ja miksi se on tärkeää?",
      summary:
        "Tier-1 selitettynä B2B-kontekstissa — miten BloombergNEF arvioi valmistajia ja miksi se on tärkeää kehittäjälle.",
      lead:
        "Tier-1-aurinkopaneeli on paneeli, jonka valmistaja on BloombergNEF:n (BNEF) luokituksen mukaan pankkien rahoittama (bankable) — eli valmistaja on toimittanut merkittäviä määriä paneeleita itsenäisesti rahoitettuihin suuriin hankkeisiin.",
      sections: [
        {
          heading: "Mitä Tier-1 oikeasti mittaa?",
          paragraphs: [
            "Tier-1 ei ole tekninen laatuluokka vaan taloudellisen vakauden mittari. BNEF arvioi valmistajia neljännesvuosittain.",
            "Tier-1-lista ei takaa, että yksittäinen paneeli on teknisesti paras, vaan että valmistaja on taloudellisesti vakaa.",
          ],
        },
        {
          heading: "Miksi kehittäjän pitäisi vaatia Tier-1?",
          paragraphs: [
            "Pankit ja sijoittajat vaativat usein Tier-1-paneeleita rahoituksen ehtona.",
            "Teknisesti Tier-1-paneeleilla on tyypillisesti pienempi degradaatio (jopa 0,4% vuodessa). HeilAres käyttää vain varmennettuja Tier-1-toimittajia.",
          ],
        },
        {
          heading: "Yleisiä väärinkäsityksiä",
          paragraphs: [
            "Tier-1 ei ole sertifikaatti vaan neljännesvuosittain päivitettävä lista.",
          ],
        },
      ],
      faqs: [
        {
          question: "Miten varmistan, että valmistaja on Tier-1?",
          lead:
            "BloombergNEF julkaisee neljännesvuosittain Tier-1-listan.",
          answer:
            "HeilAres ilmoittaa valmistajan Tier-1-statuksen jokaisessa tarjouksessa.",
        },
        {
          question: "Ovatko Tier-1-paneelit aina kalliimpia?",
          lead:
            "Tier-1-paneelit ovat tyypillisesti 5–15% kalliimpia kuin Tier-2.",
          answer:
            "Pitkän aikavälin tuoton ja takuun luotettavuuden huomioiden Tier-1-paneeleilla on yleensä alhaisempi TCO.",
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
  date: "2026-03-08",
  readMinutes: 6,
  cover: maintenanceCover,
  content: {
    et: {
      title: "Päikesepargi hooldus — mida arendaja peaks teadma?",
      summary:
        "Praktiline ülevaade päikesepargi O&M-st (Operations and Maintenance) arendaja perspektiivist — mida hooldus hõlmab ja milline on tüüpiline kuluefekt.",
      lead:
        "Päikesepargi O&M (Operations and Maintenance) sisaldab nii ennetavat kui ka tõrkest tingitud hooldust ning monitooringut, mille eesmärk on hoida pargi tootlikkust 25–30 aasta jooksul võimalikult lähedal projekteeritud tasemele.",
      sections: [
        {
          heading: "Mida päikesepargi hooldus sisaldab?",
          paragraphs: [
            "Igapäevane monitooring jälgib paneelide tootlikkust, inverterite olekut, võrgustringide vooluvoogu ja keskkonnaandurite näitusid. Tüüpiline SCADA-süsteem teavitab anomaaliatest reaalajas ja võimaldab kiiret reageerimist.",
            "Ennetav hooldus hõlmab paneelide visuaalseid kontrolle, termokaameraga ülevaatusi (mis tuvastavad hot-spotid), kandekonstruktsioonide pingutust ja korrosioonikontrolli ning inverteri filtrite vahetust. Tavaliselt teostatakse 1–2 korda aastas.",
            "Korrigeeriv hooldus käivitub rikke korral — vigane paneel, inverteri tõrge, kaablikahjustus. Hea O&M-partner garanteerib reaktsiooniaja, näiteks 24 tunni sees suurte rikete korral.",
          ],
        },
        {
          heading: "Mis mõjutab hoolduskulu?",
          paragraphs: [
            "O&M aastane kulu on tüüpiliselt 8–15 €/kW paigaldatud võimsuse kohta, sõltudes pargi suurusest, asukohast ja teenuse tasemest. Suuremad pargid saavad mastaabiefekti — 100 MW pargi €/kW kulu on madalam kui 1 MW pargi puhul.",
            "Asukoht mõjutab puhastamise sagedust (tolm, lumi, linnusõnnik), kandekonstruktsioonide korrosiooniriski (rannikualad) ja meeskonna reageerimisaega. Solar Solar Tracker Park vajavad mehaaniliste osade hooldust, mida fikseeritud pargid ei vaja.",
          ],
        },
        {
          heading: "Mida lepingusse panna?",
          paragraphs: [
            "Hea O&M-leping sisaldab garanteeritud tootlikkust (performance guarantee) — kui park toodab vähem kui kokku lepitud %, hüvitab O&M-partner vahe. Lisaks reageerimisaeg rikkele, varuosade saadavus ja regulaarsete hoolduskäikude graafik.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui palju maksab 10 MW päikesepargi aastane hooldus?",
          lead:
            "10 MW päikesepargi tüüpiline O&M aastakulu on 80 000–150 000 €, sõltudes teenuse tasemest ja asukohast.",
          answer:
            "Täpne kulu sõltub sellest, kas hooldus sisaldab puhastust, varuosi ja garanteeritud reageerimisaega.",
        },
        {
          question: "Kas peaks O&M-i tellima EPC-partnerilt?",
          lead:
            "Sama EPC-partneri valimine O&M-iks lihtsustab garantiivastutust ja annab kiirema reageerimise kogu projekti elutsükli jooksul.",
          answer:
            "HeilAres pakub jätkuvat O&M-teenust kõikidele oma ehitatud projektidele Eestis, Lätis ja teistes Euroopa riikides.",
        },
      ],
    },
    en: {
      title: "Solar park maintenance — what developers should know",
      summary:
        "A practical overview of solar park O&M from the developer perspective — what maintenance covers and typical cost impact.",
      lead:
        "Solar park O&M (Operations and Maintenance) covers preventive and corrective maintenance plus monitoring, aimed at keeping output close to design level over 25–30 years.",
      sections: [
        {
          heading: "What does maintenance include?",
          paragraphs: [
            "Daily monitoring tracks panel output, inverter status, string currents and environmental sensor readings. A typical SCADA system flags anomalies in real time and enables fast response.",
            "Preventive maintenance includes visual panel inspections, thermal imaging (to detect hot spots), mounting structure torque and corrosion checks, and inverter filter replacement. Typically performed 1–2 times per year.",
            "Corrective maintenance is triggered by failure — defective panel, inverter fault, cable damage. A good O&M partner guarantees a response time, e.g. within 24 hours for major faults.",
          ],
        },
        {
          heading: "What drives maintenance cost?",
          paragraphs: [
            "Annual O&M cost is typically €8–15 per kW of installed capacity, depending on size, location and service level. Larger parks benefit from scale — €/kW cost for 100 MW is lower than for 1 MW.",
            "Location affects cleaning frequency (dust, snow, bird droppings), corrosion risk (coastal areas) and crew response time. Solar Tracker Parks need mechanical maintenance that fixed parks do not.",
          ],
        },
        {
          heading: "What to put in the contract?",
          paragraphs: [
            "A good O&M contract includes a performance guarantee — if the park produces below an agreed threshold, the O&M partner compensates the difference. Plus response times, spare parts availability and a regular maintenance schedule.",
          ],
        },
      ],
      faqs: [
        {
          question: "How much does annual maintenance cost for a 10 MW park?",
          lead:
            "A 10 MW park typically has annual O&M cost of €80,000–150,000, depending on service level and location.",
          answer:
            "Exact cost depends on whether cleaning, spares and guaranteed response are included.",
        },
        {
          question: "Should I contract O&M with the EPC partner?",
          lead:
            "Choosing the same partner for EPC and O&M simplifies warranty accountability and gives faster response throughout the project lifecycle.",
          answer:
            "HeilAres offers ongoing O&M for all projects it has built in Estonia, Latvia and Europe.",
        },
      ],
    },
    fi: {
      title: "Aurinkopuiston huolto — mitä kehittäjän tulisi tietää?",
      summary:
        "Käytännönkatsaus aurinkopuiston O&M:ään kehittäjän näkökulmasta — mitä huolto sisältää ja tyypillinen kustannusvaikutus.",
      lead:
        "Aurinkopuiston O&M (Operations and Maintenance) sisältää ennaltaehkäisevän ja korjaavan huollon sekä monitoroinnin, joiden tavoitteena on pitää tuotanto lähellä suunnittelutasoa 25–30 vuoden ajan.",
      sections: [
        {
          heading: "Mitä huolto sisältää?",
          paragraphs: [
            "Päivittäinen monitorointi seuraa paneeleiden tuottoa, invertterien tilaa, jonojen virtoja ja ympäristöantureita. SCADA-järjestelmä havaitsee poikkeamat reaaliajassa.",
            "Ennaltaehkäisevä huolto sisältää visuaaliset tarkastukset, lämpökuvauksen, kannakkeiden tarkastuksen ja invertterien suodattimien vaihdon. Tehdään tyypillisesti 1–2 kertaa vuodessa.",
            "Korjaava huolto käynnistyy vian sattuessa — viallinen paneeli, invertterin vika tai kaapelivaurio. Hyvä O&M-kumppani takaa reagointiajan.",
          ],
        },
        {
          heading: "Mikä vaikuttaa huoltokustannukseen?",
          paragraphs: [
            "Vuotuinen O&M-kustannus on tyypillisesti 8–15 €/kW asennettua kapasiteettia kohti.",
            "Sijainti vaikuttaa puhdistustiheyteen ja korroosioriskiin. Seurantapuistot vaativat mekaanista huoltoa, jota kiinteät puistot eivät tarvitse.",
          ],
        },
        {
          heading: "Mitä sopimukseen kannattaa kirjata?",
          paragraphs: [
            "Hyvä O&M-sopimus sisältää tuottotakuun, reagointiajat, varaosien saatavuuden ja säännöllisen huoltoaikataulun.",
          ],
        },
      ],
      faqs: [
        {
          question: "Paljonko maksaa 10 MW puiston vuosihuolto?",
          lead:
            "10 MW puiston tyypillinen O&M-vuosikustannus on 80 000–150 000 €.",
          answer:
            "Tarkka kustannus riippuu siitä, sisältääkö huolto puhdistuksen ja varaosat.",
        },
        {
          question: "Kannattaako O&M tilata EPC-kumppanilta?",
          lead:
            "Saman kumppanin valinta EPC:hen ja O&M:ään yksinkertaistaa takuuvastuuta.",
          answer:
            "HeilAres tarjoaa jatkuvaa O&M-palvelua kaikille rakentamilleen kohteille.",
        },
      ],
    },
  },
};

export const blogPosts: BlogPost[] = [
  epcPartner,
  parkTypes,
  turnkey,
  timeline,
  tier1,
  maintenance,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
