import type { BlogPost } from "./blog";
import shipbuildingCover from "@/assets/blog/workforce-shipbuilding.jpg";
import factoryCover from "@/assets/blog/workforce-factory.jpg";

// ─────────────────────────────────────────────────────────────────────────
// Workforce: shipbuilding
// ─────────────────────────────────────────────────────────────────────────
export const workforceShipbuilding: BlogPost = {
  slug: "toojou-rent-laevaehituses",
  category: "workforce",
  date: "2026-08-20",
  readMinutes: 6,
  cover: shipbuildingCover,
  content: {
    et: {
      title: "Tööjõu rent laevaehituses — kuidas mehitada laevatehase projekt",
      summary:
        "Kuidas laevatehased katavad tootmistippude tööjõuvajaduse renditud meeskondadega: kvalifikatsioon, dokumendid, logistika ja hinnamudel.",
      lead: "Laevaehitus töötab projektipõhises rütmis — plokkide koostamine, varustuse paigaldus ja lõppviimistlus nõuavad lühikese aja jooksul kordades rohkem käsi kui tehase põhikoosseis. Renditud meeskond katab selle tipu ilma püsikulu kasvatamata.",
      sections: [
        {
          heading: "Millist tööjõudu laevatehased tegelikult vajavad?",
          paragraphs: [
            "Kõige sagedasem nõudlus on keevitajate (MIG/MAG, TIG, 111), laevakoostajate, torulukkseppade, elektrikute ja isolatsioonipaigaldajate järele. Lisandub abitööjõud — materjali liigutamine, tellingud, puhastus ja tuleohutusvalve.",
            "Iga rolli juures loeb dokumenteeritud kvalifikatsioon: kehtivad keevituskatsetused, ohutuskoolitused, kõrgtöö- ja kinnises ruumis töötamise load. HeilAres kontrollib need enne meeskonna lähetamist üle, et objektil ei tekiks seisakut paberitöö tõttu.",
          ],
        },
        {
          heading: "Kuidas mehitamine praktikas käib?",
          paragraphs: [
            "Alustame vajaduse kaardistamisest: rollid, arv, vahetuste graafik, projekti kestus ja objekti asukoht. Sellest sünnib mehitusplaan koos ajakavaga, mis arvestab reisi-, majutus- ja väljaõppeaega.",
            "Meeskonnad saadetakse objektile koos brigadiriga, kes vastutab töö korralduse ja kliendipoolse tootmisjuhiga suhtluse eest. Nii ei pea tehas juhtima üksikuid inimesi, vaid tellib tulemuse.",
          ],
        },
        {
          heading: "Mida arvestada eelarves?",
          paragraphs: [
            "Tunnitasu kõrval mõjutavad kogumaksumust reisi- ja majutuskulud, ületunnid ja vahetustega töö lisatasud. Läbipaistev pakkumine näitab need eraldi ridadena, et võrdlus teiste pakkujatega oleks aus.",
            "Pikemate projektide puhul on mõistlik kokku leppida rullimismudel — meeskond vahetub tsüklitena, mis hoiab tootlikkuse ühtlase ja vähendab läbipõlemist.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui kiiresti saab meeskonna objektile?",
          lead: "Standardsete rollide puhul liigub esimene meeskond objektile tavaliselt 1–3 nädalaga.",
          answer:
            "Kiirus sõltub vajalikest sertifikaatidest, viisadest ja majutuse korraldusest — pakkumise vastuse anname 24 tunni jooksul.",
        },
        {
          question: "Kes vastutab tööohutuse eest?",
          lead: "Tööohutuse üldkorraldus jääb objekti valdajale, meeskonna väljaõppe ja isikukaitsevahendite eest vastutab HeilAres.",
          answer:
            "Iga töötaja läbib enne tööle asumist objekti sissejuhatava ohutusinstruktaaži ja kannab nõuetekohaseid kaitsevahendeid.",
        },
        {
          question: "Millistes riikides te tööjõudu pakute?",
          lead: "Teenindame laevatehaseid ja tööstusi Euroopas ja Skandinaavias.",
          answer:
            "Oleme mehitanud projekte muu hulgas Soomes, Saksamaal, Prantsusmaal ja Hispaanias.",
        },
      ],
    },
    en: {
      title: "Workforce rental in shipbuilding — how to staff a shipyard project",
      summary:
        "How shipyards cover peak labour demand with rented crews: qualifications, documents, logistics and the pricing model.",
      lead: "Shipbuilding runs in project cycles — block assembly, outfitting and final finishing require many times more hands over a short window than a yard's core staff can provide. A rented crew covers that peak without growing fixed costs.",
      sections: [
        {
          heading: "What labour do shipyards actually need?",
          paragraphs: [
            "The most common demand is for welders (MIG/MAG, TIG, 111), ship fitters, pipe fitters, electricians and insulation installers, plus support labour for material handling, scaffolding, cleaning and fire watch.",
            "Documented qualification matters in every role: valid welding qualifications, safety training, work-at-height and confined-space permits. HeilAres verifies these before deployment so paperwork never stalls the site.",
          ],
        },
        {
          heading: "How does staffing work in practice?",
          paragraphs: [
            "We start by mapping the need: roles, headcount, shift pattern, project duration and site location. That becomes a staffing plan with a schedule that accounts for travel, accommodation and onboarding time.",
            "Crews arrive with a team leader who runs the work and communicates with the client's production manager, so the yard orders an outcome rather than managing individuals.",
          ],
        },
        {
          heading: "What to budget for",
          paragraphs: [
            "Beyond the hourly rate, total cost is driven by travel and accommodation, overtime and shift premiums. A transparent quote lists these as separate lines so comparison stays honest.",
            "For longer projects a rotation model is sensible — crews change in cycles, which keeps productivity steady and reduces burnout.",
          ],
        },
      ],
      faqs: [
        {
          question: "How fast can a crew be on site?",
          lead: "For standard roles the first crew is usually on site within 1–3 weeks.",
          answer:
            "Speed depends on required certificates, visas and accommodation; we answer quote requests within 24 hours.",
        },
        {
          question: "Who is responsible for occupational safety?",
          lead: "Overall site safety stays with the site operator; HeilAres is responsible for crew training and personal protective equipment.",
          answer:
            "Every worker completes the site induction before starting and wears compliant protective equipment.",
        },
        {
          question: "Which countries do you supply workforce to?",
          lead: "We serve shipyards and industry across Europe and Scandinavia.",
          answer: "We have staffed projects in Finland, Germany, France and Spain, among others.",
        },
      ],
    },
    fi: {
      title: "Työvoiman vuokraus laivanrakennuksessa — näin miehität telakkaprojektin",
      summary:
        "Miten telakat kattavat huipputyövoimatarpeen vuokratiimeillä: pätevyydet, dokumentit, logistiikka ja hinnoittelumalli.",
      lead: "Laivanrakennus etenee projektisykleissä — lohkojen kokoonpano, varustelu ja viimeistely vaativat lyhyessä ajassa moninkertaisesti enemmän käsiä kuin telakan oma henkilöstö. Vuokratiimi kattaa huipun ilman kiinteiden kulujen kasvua.",
      sections: [
        {
          heading: "Millaista työvoimaa telakat todella tarvitsevat?",
          paragraphs: [
            "Yleisimmin kysytään hitsaajia (MIG/MAG, TIG, 111), laivakoostajia, putkiasentajia, sähköasentajia ja eristäjiä sekä aputyövoimaa materiaalinsiirtoon, telineisiin, siivoukseen ja tulityövartiointiin.",
            "Jokaisessa roolissa ratkaisee dokumentoitu pätevyys: voimassa olevat hitsauspätevyydet, turvallisuuskoulutukset sekä korkealla ja ahtaissa tiloissa työskentelyn luvat. HeilAres tarkistaa ne ennen lähetystä, jottei paperityö pysäytä työmaata.",
          ],
        },
        {
          heading: "Miten miehitys käytännössä toimii?",
          paragraphs: [
            "Aloitamme tarpeen kartoituksesta: roolit, määrä, vuorojärjestelmä, projektin kesto ja kohteen sijainti. Siitä syntyy miehityssuunnitelma aikatauluineen, joka huomioi matkat, majoituksen ja perehdytyksen.",
            "Tiimit saapuvat työnjohtajan kanssa, joka vastaa työn organisoinnista ja yhteydenpidosta asiakkaan tuotantopäällikköön. Telakka tilaa lopputuloksen, ei yksittäisiä henkilöitä.",
          ],
        },
        {
          heading: "Mitä budjetissa kannattaa huomioida?",
          paragraphs: [
            "Tuntihinnan lisäksi kokonaiskustannukseen vaikuttavat matka- ja majoituskulut, ylityöt ja vuorolisät. Läpinäkyvä tarjous erittelee nämä omina riveinään.",
            "Pidemmissä projekteissa kannattaa sopia rotaatiomalli — tiimit vaihtuvat sykleittäin, mikä pitää tuottavuuden tasaisena.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuinka nopeasti tiimi saadaan kohteeseen?",
          lead: "Vakiorooleissa ensimmäinen tiimi on kohteessa yleensä 1–3 viikossa.",
          answer:
            "Nopeus riippuu vaadituista sertifikaateista, viisumeista ja majoituksesta; tarjousvastaus 24 tunnissa.",
        },
        {
          question: "Kuka vastaa työturvallisuudesta?",
          lead: "Työmaan yleinen turvallisuus on kohteen haltijalla, tiimin koulutuksesta ja suojaimista vastaa HeilAres.",
          answer:
            "Jokainen työntekijä käy työmaaperehdytyksen ennen aloitusta ja käyttää vaatimusten mukaisia suojaimia.",
        },
        {
          question: "Mihin maihin toimitatte työvoimaa?",
          lead: "Palvelemme telakoita ja teollisuutta Euroopassa ja Skandinaviassa.",
          answer:
            "Olemme miehittäneet projekteja muun muassa Suomessa, Saksassa, Ranskassa ja Espanjassa.",
        },
      ],
    },
    de: {
      title: "Arbeitskräfteverleih im Schiffbau – so besetzen Sie ein Werftprojekt",
      summary:
        "Wie Werften Spitzenbedarf an Arbeitskräften mit angemieteten Teams decken: Qualifikationen, Dokumente, Logistik und Preismodell.",
      lead: "Der Schiffbau läuft in Projektzyklen ab – Sektionsbau, Ausrüstung und Endmontage erfordern in kurzer Zeit ein Vielfaches der Hände, die die Stammbelegschaft einer Werft leisten kann. Ein angemietetes Team deckt diese Spitze ab, ohne die Fixkosten zu erhöhen.",
      sections: [
        {
          heading: "Welche Arbeitskräfte benötigen Werften tatsächlich?",
          paragraphs: [
            "Am häufigsten gefragt sind Schweißer (MIG/MAG, WIG, 111), Schiffbauer, Rohrschlosser, Elektriker und Isolierer sowie Hilfskräfte für Materialtransport, Gerüstbau, Reinigung und Brandwache.",
            "Bei jeder Rolle zählt die dokumentierte Qualifikation: gültige Schweißerprüfungen, Sicherheitsschulungen sowie Erlaubnisse für Höhenarbeit und Arbeiten in engen Räumen. HeilAres prüft diese vor dem Einsatz, damit Papierkram die Baustelle nie ausbremst.",
          ],
        },
        {
          heading: "Wie läuft die Personalbesetzung in der Praxis ab?",
          paragraphs: [
            "Wir beginnen mit der Bedarfsermittlung: Rollen, Anzahl, Schichtplan, Projektdauer und Standort. Daraus entsteht ein Einsatzplan mit Zeitplan, der Reise-, Unterkunfts- und Einarbeitungszeit berücksichtigt.",
            "Die Teams reisen mit einem Vorarbeiter an, der die Arbeitsorganisation übernimmt und mit dem Produktionsleiter des Kunden kommuniziert. So bestellt die Werft ein Ergebnis, statt einzelne Personen zu führen.",
          ],
        },
        {
          heading: "Was ist bei der Budgetierung zu beachten?",
          paragraphs: [
            "Neben dem Stundensatz beeinflussen Reise- und Unterkunftskosten, Überstunden und Schichtzuschläge die Gesamtkosten. Ein transparentes Angebot weist diese als eigene Posten aus, damit der Vergleich mit anderen Anbietern fair bleibt.",
            "Bei längeren Projekten empfiehlt sich ein Rotationsmodell – Teams wechseln in Zyklen, was die Produktivität stabil hält und Erschöpfung vorbeugt.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie schnell kann ein Team vor Ort sein?",
          lead: "Bei Standardrollen ist das erste Team üblicherweise innerhalb von 1–3 Wochen vor Ort.",
          answer:
            "Die Geschwindigkeit hängt von erforderlichen Zertifikaten, Visa und der Unterkunftsorganisation ab – wir beantworten Angebotsanfragen innerhalb von 24 Stunden.",
        },
        {
          question: "Wer ist für die Arbeitssicherheit verantwortlich?",
          lead: "Die allgemeine Arbeitssicherheit auf der Baustelle verbleibt beim Betreiber; für die Schulung der Teams und die persönliche Schutzausrüstung ist HeilAres verantwortlich.",
          answer:
            "Jeder Mitarbeiter durchläuft vor Arbeitsbeginn eine Sicherheitseinweisung vor Ort und trägt vorschriftsmäßige Schutzausrüstung.",
        },
        {
          question: "In welchen Ländern stellen Sie Arbeitskräfte bereit?",
          lead: "Wir betreuen Werften und Industriebetriebe in Europa und Skandinavien.",
          answer:
            "Wir haben unter anderem Projekte in Finnland, Deutschland, Frankreich und Spanien besetzt.",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────
// Workforce: factories
// ─────────────────────────────────────────────────────────────────────────
export const workforceFactory: BlogPost = {
  slug: "toojou-rent-tehastes-ja-toostuses",
  category: "workforce",
  date: "2026-08-22",
  readMinutes: 6,
  cover: factoryCover,
  content: {
    et: {
      title: "Tööjõu rent tehastes — paindlik mehitus tootmistippudeks",
      summary:
        "Millal tasub tehasel kasutada renditud meeskonda, kuidas hoida kvaliteet ja tootlikkus ning millised on levinumad vead mehitamisel.",
      lead: "Tootmismahud kõiguvad, aga püsikoosseis mitte. Renditud meeskond annab tehasele võimaluse reageerida tellimuste tipule, seisakule või uue liini käivitamisele ilma pikaajalist tööjõukulu lukustamata.",
      sections: [
        {
          heading: "Millal tehas renditud tööjõudu vajab?",
          paragraphs: [
            "Tüüpilised olukorrad on hooajaline tellimustipp, uue tootmisliini käivitamine, plaaniline seisak ja hooldusaken ning suuremahuline metallitöö- või koosteprojekt, mille jaoks püsivat meeskonda ei tasu palgata.",
            "Sama kehtib ka olukorras, kus tehas kolib või laieneb: masinate demonteerimine, transport, ülespanek ja katsetamine nõuavad lühikeseks ajaks tugevat lisameeskonda.",
          ],
        },
        {
          heading: "Kuidas hoida kvaliteet renditud meeskonnaga?",
          paragraphs: [
            "Kvaliteet tuleb selgest töökirjeldusest ja mõõdetavatest ootustest — kuupäevad, kogused, tolerantsid ja vastuvõtukriteeriumid. Mida täpsem sisend, seda kiiremini jõuab meeskond täistootlikkusesse.",
            "Teine oluline tegur on järjepidevus: sama meeskonna hoidmine kogu projekti vältel on odavam kui pidev väljavahetamine ja uuesti väljaõpetamine. Brigadir tagab, et teadmine jääb meeskonda.",
          ],
        },
        {
          heading: "Levinumad vead mehitamisel",
          paragraphs: [
            "Kõige kallim viga on tellida inimesi liiga hilja — kiirustades leitud meeskond on kallim ja kvalifikatsioon juhuslikum. Teine viga on jätta majutus ja transport viimasele minutile, mis lööb graafiku paigast.",
            "Kolmas on ebaselge vastutuspiir: kes annab tööülesandeid, kes kontrollib kvaliteeti, kes vastutab tööriistade eest. Need kokkulepped tuleb kirja panna enne meeskonna saabumist.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kui väikest meeskonda saab rentida?",
          lead: "Alustame tavaliselt 3–5-liikmelisest brigaadist.",
          answer:
            "Väiksemate vajaduste puhul saame pakkuda üksikuid spetsialiste olemasoleva projekti raames.",
        },
        {
          question: "Kas meeskond tuleb oma tööriistadega?",
          lead: "Isikukaitsevahendid ja käsitööriistad tulevad meiega, suuremad seadmed lepitakse kokku eraldi.",
          answer:
            "Tavaliselt kasutatakse objektil olevaid tootmisseadmeid; erisused fikseerime lepingus.",
        },
        {
          question: "Kuidas toimub arveldus?",
          lead: "Arveldame tehtud tundide alusel kinnitatud töögraafiku järgi.",
          answer:
            "Reisi- ja majutuskulud ning ületunnid on pakkumises eraldi ridadena, et kulu oleks läbipaistev.",
        },
      ],
    },
    en: {
      title: "Workforce rental in factories — flexible staffing for production peaks",
      summary:
        "When a factory should use a rented crew, how to protect quality and output, and the most common staffing mistakes.",
      lead: "Production volumes fluctuate; permanent headcount does not. A rented crew lets a factory respond to an order peak, a shutdown or a new line start-up without locking in long-term labour cost.",
      sections: [
        {
          heading: "When does a factory need rented labour?",
          paragraphs: [
            "Typical cases are a seasonal order peak, a new production line start-up, a planned shutdown or maintenance window, and large metalwork or assembly projects that do not justify permanent hires.",
            "The same applies when a plant relocates or expands: dismantling, transport, installation and testing of machinery need a strong temporary crew.",
          ],
        },
        {
          heading: "How to protect quality with a rented crew",
          paragraphs: [
            "Quality comes from a clear scope and measurable expectations — dates, quantities, tolerances and acceptance criteria. The sharper the input, the faster the crew reaches full productivity.",
            "Continuity is the second factor: keeping the same crew for the whole project is cheaper than constant replacement and re-training. A team leader keeps the knowledge inside the crew.",
          ],
        },
        {
          heading: "Common staffing mistakes",
          paragraphs: [
            "The most expensive mistake is ordering people too late — a rushed crew costs more and its qualifications are more random. The second is leaving accommodation and transport to the last minute, which breaks the schedule.",
            "The third is an unclear responsibility line: who assigns tasks, who checks quality, who owns the tools. Agree on this before the crew arrives.",
          ],
        },
      ],
      faqs: [
        {
          question: "How small a crew can be rented?",
          lead: "We usually start from a crew of 3–5.",
          answer:
            "For smaller needs we can supply individual specialists within an ongoing project.",
        },
        {
          question: "Does the crew bring its own tools?",
          lead: "Personal protective equipment and hand tools come with us; larger equipment is agreed separately.",
          answer:
            "Site production equipment is normally used; exceptions are fixed in the contract.",
        },
        {
          question: "How is invoicing handled?",
          lead: "We invoice hours worked against an approved timesheet.",
          answer:
            "Travel, accommodation and overtime appear as separate lines in the quote so cost stays transparent.",
        },
      ],
    },
    fi: {
      title: "Työvoiman vuokraus tehtaissa — joustava miehitys tuotantohuippuihin",
      summary:
        "Milloin tehtaan kannattaa käyttää vuokratiimiä, miten laatu ja tuottavuus säilyvät ja mitkä ovat yleisimmät miehitysvirheet.",
      lead: "Tuotantomäärät vaihtelevat, vakituinen henkilöstö ei. Vuokratiimi antaa tehtaalle mahdollisuuden reagoida tilaushuippuun, seisokkiin tai uuden linjan käynnistykseen ilman pitkäaikaista työvoimakulua.",
      sections: [
        {
          heading: "Milloin tehdas tarvitsee vuokratyövoimaa?",
          paragraphs: [
            "Tyypillisiä tilanteita ovat kausiluonteinen tilaushuippu, uuden tuotantolinjan käynnistys, suunniteltu seisokki ja huoltoikkuna sekä laajat metallityö- tai kokoonpanoprojektit.",
            "Sama pätee tehtaan muuttoon tai laajennukseen: koneiden purku, kuljetus, asennus ja testaus vaativat lyhyeksi ajaksi vahvan lisätiimin.",
          ],
        },
        {
          heading: "Miten laatu varmistetaan vuokratiimillä?",
          paragraphs: [
            "Laatu syntyy selkeästä työnkuvauksesta ja mitattavista odotuksista — päivämäärät, määrät, toleranssit ja hyväksymiskriteerit. Mitä tarkempi lähtötieto, sitä nopeammin tiimi saavuttaa täyden tuottavuuden.",
            "Toinen tekijä on jatkuvuus: saman tiimin pitäminen koko projektin ajan on halvempaa kuin jatkuva vaihtuvuus ja uudelleenperehdytys.",
          ],
        },
        {
          heading: "Yleisimmät miehitysvirheet",
          paragraphs: [
            "Kallein virhe on tilata ihmiset liian myöhään — kiireellä koottu tiimi maksaa enemmän ja pätevyydet ovat sattumanvaraisempia. Toinen virhe on jättää majoitus ja kuljetus viime hetkeen.",
            "Kolmas on epäselvä vastuunjako: kuka antaa tehtävät, kuka valvoo laatua, kuka vastaa työkaluista. Nämä sovitaan ennen tiimin saapumista.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kuinka pienen tiimin voi vuokrata?",
          lead: "Aloitamme yleensä 3–5 hengen tiimistä.",
          answer:
            "Pienempiin tarpeisiin voimme tarjota yksittäisiä ammattilaisia käynnissä olevan projektin puitteissa.",
        },
        {
          question: "Tuoko tiimi omat työkalut?",
          lead: "Henkilönsuojaimet ja käsityökalut tulevat mukanamme, suuremmista laitteista sovitaan erikseen.",
          answer: "Yleensä käytetään kohteen tuotantolaitteita; poikkeukset kirjataan sopimukseen.",
        },
        {
          question: "Miten laskutus toimii?",
          lead: "Laskutamme tehtyjen tuntien mukaan hyväksytyn tuntikirjanpidon perusteella.",
          answer: "Matka- ja majoituskulut sekä ylityöt näkyvät tarjouksessa omina riveinään.",
        },
      ],
    },
    de: {
      title: "Arbeitskräfteverleih in Fabriken – flexible Personalbesetzung für Produktionsspitzen",
      summary:
        "Wann sich für eine Fabrik ein angemietetes Team lohnt, wie Qualität und Produktivität erhalten bleiben und welche die häufigsten Fehler bei der Personalbesetzung sind.",
      lead: "Produktionsmengen schwanken, die Stammbelegschaft nicht. Ein angemietetes Team ermöglicht es einer Fabrik, auf eine Auftragsspitze, einen Stillstand oder den Anlauf einer neuen Linie zu reagieren, ohne langfristige Personalkosten festzuschreiben.",
      sections: [
        {
          heading: "Wann benötigt eine Fabrik angemietete Arbeitskräfte?",
          paragraphs: [
            "Typische Situationen sind eine saisonale Auftragsspitze, der Anlauf einer neuen Produktionslinie, ein geplanter Stillstand mit Wartungsfenster sowie umfangreiche Metallbau- oder Montageprojekte, für die sich eine feste Belegschaft nicht lohnt.",
            "Gleiches gilt beim Umzug oder der Erweiterung einer Fabrik: Der Abbau von Maschinen, der Transport, die Aufstellung und das Testen erfordern für kurze Zeit ein starkes zusätzliches Team.",
          ],
        },
        {
          heading: "Wie bleibt die Qualität mit einem angemieteten Team erhalten?",
          paragraphs: [
            "Qualität entsteht durch eine klare Leistungsbeschreibung und messbare Erwartungen – Termine, Mengen, Toleranzen und Abnahmekriterien. Je präziser die Vorgaben, desto schneller erreicht das Team die volle Produktivität.",
            "Ein zweiter wichtiger Faktor ist Kontinuität: Dasselbe Team über das gesamte Projekt zu halten, ist günstiger als ständiger Austausch und erneute Einarbeitung. Der Vorarbeiter sorgt dafür, dass das Wissen im Team bleibt.",
          ],
        },
        {
          heading: "Häufige Fehler bei der Personalbesetzung",
          paragraphs: [
            "Der teuerste Fehler ist, Personal zu spät zu bestellen – ein hastig zusammengestelltes Team kostet mehr und die Qualifikation ist zufälliger. Ein weiterer Fehler ist, Unterkunft und Transport auf den letzten Moment zu verschieben, was den Zeitplan durcheinanderbringt.",
            "Der dritte Fehler ist eine unklare Verantwortungsgrenze: Wer erteilt Arbeitsaufträge, wer kontrolliert die Qualität, wer ist für die Werkzeuge verantwortlich? Diese Absprachen müssen vor der Ankunft des Teams schriftlich festgehalten werden.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie klein kann ein angemietetes Team sein?",
          lead: "Wir beginnen üblicherweise mit einer Brigade von 3–5 Personen.",
          answer:
            "Für kleinere Bedarfe können wir einzelne Fachkräfte im Rahmen eines laufenden Projekts bereitstellen.",
        },
        {
          question: "Bringt das Team eigenes Werkzeug mit?",
          lead: "Persönliche Schutzausrüstung und Handwerkzeuge bringen wir mit; größere Geräte werden separat vereinbart.",
          answer:
            "In der Regel werden die vor Ort vorhandenen Produktionsanlagen genutzt; Ausnahmen halten wir im Vertrag fest.",
        },
        {
          question: "Wie erfolgt die Abrechnung?",
          lead: "Wir rechnen die geleisteten Stunden auf Basis eines bestätigten Arbeitszeitnachweises ab.",
          answer:
            "Reise- und Unterkunftskosten sowie Überstunden sind im Angebot als eigene Posten ausgewiesen, damit die Kosten transparent bleiben.",
        },
      ],
    },
  },
};
