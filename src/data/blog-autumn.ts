import type { BlogPost } from "./blog";
import storagePhoto from "@/assets/projects/bess/valga-1.webp.asset.json";
import electricalPhoto from "@/assets/blog/winter-electrical-planning.webp.asset.json";

export const autumnPosts: BlogPost[] = [
  {
    slug: "akupank-talvel-mida-ettevote-peab-planeerima",
    category: "storage", date: "2026-11-19", readMinutes: 4, cover: storagePhoto.url,
    content: {
      et: {
        title: "Akupank talvel: mida peab ettevõte enne investeeringut läbi mõtlema?",
        summary: "Novembri lühikesed päevad toovad esile tarbimise ja päikeseenergia tootmise erinevuse. Kuidas planeerida BESS-i realistlikult?",
        lead: "Talve eel ei ole õige küsimus ainult see, kui suur aku osta. Ettevõte peab esmalt selgitama, millal energiat vajatakse, kust tuleb laadimisenergia ja millistes tingimustes süsteem töötab. HeilArese projektipõhine lähenemine seob akupanga objekti elektritaristu ja tegeliku kasutusega.",
        sections: [
          { heading: "Alustage talvisest tarbimisprofiilist", paragraphs: ["Lühem päev tähendab Põhja-Euroopas üldiselt vähem päikeseenergiat. Akupank nihutab olemasoleva energia kasutusaega, kuid ei tekita juurde talvist tootmist. Vaadelge eraldi tööpäevi, nädalavahetusi ja tootmise käivitamise tippe.", "Võrrelge vähemalt terve aasta tarbimis- ja tootmisandmeid. Ainult suviste ülejääkide põhjal valitud lahendus ei pruugi täita talviseid eesmärke."] },
          { heading: "Võimsus ja salvestusmaht tuleb valida eraldi", paragraphs: ["kW näitab laadimise või tühjendamise võimsust; kWh salvestatava energia hulka. Seadmete nimivõimsuste summa ei pruugi võrduda objektil lubatud väljundvõimsusega: piirangud võivad tulla akudest, juhtimisest ja võrguühendusest.", "HeilArese Valga referentsis on neli 50 kW KSTAR inverterit (kokku 200 kW) ja neli 102,4 kWh akuüksust (kokku 409,6 kWh). Need on kaks erinevat näitajat, mitte lubadus kindla kestusega täisvõimsusel töö kohta."] },
          { heading: "Paigalduskeskkond ja juhtimine", paragraphs: ["Kontrollige tootja lubatud temperatuure, kütte ja ventilatsiooni vajadust, niiskust, ligipääsu ning elektri- ja tuleohutuse lahendust. Külmas laadimise piirangud sõltuvad konkreetsest akusüsteemist ja selle juhtimisest.", "BMS kaitseb ja jälgib akut; EMS juhib energiakasutust. Võrgu laadimise, tipukoormuse juhtimise või varutoite võimalus tuleb eraldi projekteerida ja kokku leppida. Akupank ei tähenda automaatselt varutoidet elektrikatkestuse ajal."] },
          { heading: "Mida saata HeilAresile?", paragraphs: ["Saatke tarbimisandmed, päikesepargi tootmisandmed, võrguühenduse tingimused, elektriskeem ja paigalduskoha kirjeldus. Lisage eesmärk: omatarve, koormuste juhtimine või eraldi kavandatav varutoide.", "HeilAres ühendab BESS-i vajadusel päikeseparkide ja elektritöödega. Tasuvust hinnatakse konkreetse kasutusviisi, kadude, tariifide ja investeeringu järgi; universaalset säästuprotsenti ei ole."] },
        ],
        faqs: [
          { question: "Kas akupank korvab talvel väikese päikesetootmise?", lead: "Akupank ei tooda energiat.", answer: "See salvestab saadaoleva energia hilisemaks kasutamiseks. Laadimisallikas ja töörežiim tuleb planeerida." },
          { question: "Kas BESS tagab elektrikatkestuse ajal toite?", lead: "Mitte automaatselt.", answer: "Varutoide vajab sobivat inverterit, kaitseid, ümberlülitust ja kriitiliste koormuste eraldi lahendust." },
        ], ctaTitle: "Planeerite ettevõttele akupanka?", ctaSubtitle: "Saatke HeilAresile tarbimisandmed ja objekti tehniline info, et hinnata sobivat BESS-lahendust.",
      },
      en: {
        title: "Battery storage in winter: what should a business plan before investing?",
        summary: "November's shorter days highlight the mismatch between demand and solar generation. How can a business plan BESS realistically?",
        lead: "Before winter, the question is not simply how large a battery to buy. A business needs to establish when energy is needed, where charging energy will come from and the operating conditions. HeilAres takes a project-specific approach that connects storage to the site's electrical infrastructure and actual use.",
        sections: [
          { heading: "Start with the winter demand profile", paragraphs: ["Shorter days generally mean less solar generation in Northern Europe. Storage shifts the use of available energy; it does not create additional winter generation. Examine working days, weekends and production start-up peaks separately.", "Compare at least a full year of consumption and generation data. A solution selected only around summer surplus may not achieve winter objectives."] },
          { heading: "Select power and energy capacity separately", paragraphs: ["kW describes charging or discharging power; kWh describes stored energy. The sum of equipment ratings may differ from permitted site output because batteries, controls and the grid connection can impose limits.", "HeilAres' Valga reference has four 50 kW KSTAR inverters (200 kW in total) and four 102.4 kWh battery units (409.6 kWh in total). These are different specifications, not a guarantee of a particular operating duration at full power."] },
          { heading: "Installation conditions and controls", paragraphs: ["Check the manufacturer's permitted temperatures, heating and ventilation needs, moisture, access and electrical and fire safety provisions. Cold-weather charging limits depend on the specific battery and its controls.", "BMS protects and monitors the battery; EMS manages energy use. Grid charging, peak management or backup operation must be designed and agreed separately. Storage does not automatically provide power during an outage."] },
          { heading: "What should you send HeilAres?", paragraphs: ["Provide consumption data, solar generation data, grid conditions, an electrical diagram and the installation location. State the objective: self-consumption, load management or separately designed backup power.", "HeilAres can integrate BESS with solar parks and electrical works. Economics depend on the operating strategy, losses, tariffs and investment; there is no universal savings percentage."] },
        ], faqs: [
          { question: "Can storage compensate for low winter solar production?", lead: "Storage does not generate energy.", answer: "It stores available energy for later use. The charging source and operating strategy must be planned." },
          { question: "Does BESS provide power during an outage?", lead: "Not automatically.", answer: "Backup requires a suitable inverter, protection, switching and a dedicated design for critical loads." },
        ], ctaTitle: "Planning battery storage for your business?", ctaSubtitle: "Send HeilAres your consumption data and site information to assess a suitable BESS solution.",
      },
      fi: {
        title: "Akkuvarasto talvella: mitä yrityksen kannattaa suunnitella ennen investointia?",
        summary: "Marraskuun lyhyet päivät korostavat kulutuksen ja aurinkotuotannon eroa. Miten BESS suunnitellaan realistisesti?",
        lead: "Talven alla ei riitä kysyä, kuinka suuri akku hankitaan. Ensin selvitetään, milloin energiaa tarvitaan, mistä latausenergia tulee ja millaisissa oloissa järjestelmä toimii. HeilAresin projektikohtainen lähestymistapa yhdistää varastoinnin kohteen sähköinfrastruktuuriin ja todelliseen käyttöön.",
        sections: [
          { heading: "Aloita talven kulutusprofiilista", paragraphs: ["Lyhyemmät päivät tarkoittavat Pohjois-Euroopassa yleensä vähäisempää aurinkotuotantoa. Akku siirtää saatavilla olevan energian käyttöä, mutta ei luo lisää talvituotantoa. Tarkastele erikseen työpäiviä, viikonloppuja ja tuotannon käynnistyshuippuja.", "Vertaa vähintään koko vuoden kulutus- ja tuotantotietoja. Pelkän kesäylijäämän perusteella valittu ratkaisu ei välttämättä täytä talven tavoitteita."] },
          { heading: "Valitse teho ja energiakapasiteetti erikseen", paragraphs: ["kW kuvaa lataus- tai purkutehoa, kWh varastoitavaa energiaa. Laitteiden nimellistehojen summa ei välttämättä vastaa kohteen sallittua lähtötehoa: akut, ohjaus ja verkkoliittymä voivat rajoittaa sitä.", "HeilAresin Valgan referenssissä on neljä 50 kW:n KSTAR-invertteriä (yhteensä 200 kW) ja neljä 102,4 kWh:n akkuyksikköä (yhteensä 409,6 kWh). Ne ovat eri tunnuslukuja, eivät lupaus tietystä käyttöajasta täydellä teholla."] },
          { heading: "Asennusolosuhteet ja ohjaus", paragraphs: ["Tarkista valmistajan lämpötilarajat, lämmitys, ilmanvaihto, kosteus, huoltopääsy sekä sähkö- ja paloturvallisuus. Kylmässä lataamisen rajoitukset riippuvat akusta ja sen ohjauksesta.", "BMS suojaa ja valvoo akkua; EMS ohjaa energiankäyttöä. Verkkolataus, huippukuormien hallinta ja varavoima suunnitellaan ja sovitaan erikseen. Akkuvarasto ei automaattisesti syötä sähköä sähkökatkon aikana."] },
          { heading: "Mitä tietoja HeilAres tarvitsee?", paragraphs: ["Lähetä kulutus- ja aurinkotuotantotiedot, verkkoliittymän ehdot, sähkökaavio ja asennuspaikan kuvaus. Kerro tavoite: omakäyttö, kuormanhallinta tai erikseen suunniteltava varavoima.", "HeilAres yhdistää BESS-ratkaisun tarvittaessa aurinkopuistoihin ja sähköasennuksiin. Kannattavuus riippuu käyttötavasta, häviöistä, tariffeista ja investoinnista; yleispätevää säästöprosenttia ei ole."] },
        ], faqs: [
          { question: "Korvaako akkuvarasto vähäisen talvituotannon?", lead: "Akku ei tuota energiaa.", answer: "Se varastoi saatavilla olevaa energiaa myöhempään käyttöön. Latauslähde ja käyttötapa suunnitellaan erikseen." },
          { question: "Antaako BESS sähköä sähkökatkon aikana?", lead: "Ei automaattisesti.", answer: "Varavoima vaatii sopivan invertterin, suojaukset, vaihtokytkennän ja kriittisten kuormien suunnittelun." },
        ], ctaTitle: "Suunnitteletko yritykselle akkuvarastoa?", ctaSubtitle: "Lähetä HeilAresille kulutustiedot ja kohteen tekniset tiedot sopivan BESS-ratkaisun arviointiin.",
      },
      de: {
        title: "Batteriespeicher im Winter: Was sollten Unternehmen vor der Investition planen?",
        summary: "Kurze Novembertage machen den Unterschied zwischen Verbrauch und Solarerzeugung sichtbar. Wie lässt sich BESS realistisch planen?",
        lead: "Vor dem Winter geht es nicht nur um die Größe einer Batterie. Ein Unternehmen muss klären, wann Energie benötigt wird, woher die Ladeenergie stammt und unter welchen Bedingungen die Anlage arbeitet. HeilAres verbindet Speicher projektbezogen mit der elektrischen Infrastruktur und der tatsächlichen Nutzung.",
        sections: [
          { heading: "Mit dem winterlichen Verbrauchsprofil beginnen", paragraphs: ["Kürzere Tage bedeuten in Nordeuropa meist weniger Solarerzeugung. Speicher verschieben die Nutzung verfügbarer Energie, erzeugen aber keinen zusätzlichen Winterstrom. Betrachten Sie Arbeitstage, Wochenenden und Anlaufspitzen getrennt.", "Vergleichen Sie mindestens ein ganzes Jahr an Verbrauchs- und Erzeugungsdaten. Eine nur auf sommerliche Überschüsse ausgelegte Lösung erfüllt möglicherweise nicht die Winterziele."] },
          { heading: "Leistung und Speicherkapazität getrennt wählen", paragraphs: ["kW beschreibt die Lade- oder Entladeleistung, kWh die gespeicherte Energie. Die Summe der Nennleistungen kann von der zulässigen Standortleistung abweichen: Batterien, Steuerung und Netzanschluss können begrenzen.", "Die HeilAres-Referenz in Valga umfasst vier KSTAR-Wechselrichter mit je 50 kW (insgesamt 200 kW) und vier Batterieeinheiten mit je 102,4 kWh (insgesamt 409,6 kWh). Das sind unterschiedliche Kennzahlen, keine Zusage einer bestimmten Laufzeit bei voller Leistung."] },
          { heading: "Aufstellbedingungen und Steuerung", paragraphs: ["Prüfen Sie die Temperaturgrenzen des Herstellers, Heizung, Lüftung, Feuchtigkeit, Zugänglichkeit sowie Elektro- und Brandschutz. Ladegrenzen bei Kälte hängen vom konkreten Batteriesystem und seiner Steuerung ab.", "Das BMS schützt und überwacht die Batterie; das EMS steuert den Energieeinsatz. Netzladung, Lastspitzenmanagement und Ersatzstrom müssen separat geplant und vereinbart werden. Ein Speicher liefert bei einem Stromausfall nicht automatisch Energie."] },
          { heading: "Welche Informationen benötigt HeilAres?", paragraphs: ["Übermitteln Sie Verbrauchs- und PV-Erzeugungsdaten, Netzanschlussbedingungen, einen Stromlaufplan und die Beschreibung des Aufstellorts. Nennen Sie das Ziel: Eigenverbrauch, Lastmanagement oder separat geplanter Ersatzstrom.", "HeilAres integriert BESS bei Bedarf in Solarparks und Elektroarbeiten. Die Wirtschaftlichkeit hängt von Betriebsstrategie, Verlusten, Tarifen und Investition ab; es gibt keinen universellen Einsparungsprozentsatz."] },
        ], faqs: [
          { question: "Gleicht ein Speicher geringe Solarerzeugung im Winter aus?", lead: "Ein Speicher erzeugt keine Energie.", answer: "Er speichert verfügbare Energie für später. Ladequelle und Betriebsstrategie müssen geplant werden." },
          { question: "Versorgt BESS den Standort bei Stromausfall?", lead: "Nicht automatisch.", answer: "Ersatzstrom erfordert einen geeigneten Wechselrichter, Schutz, Umschaltung und die Planung kritischer Lasten." },
        ], ctaTitle: "Sie planen einen Batteriespeicher?", ctaSubtitle: "Senden Sie HeilAres Verbrauchsdaten und technische Standortinformationen zur Bewertung einer geeigneten BESS-Lösung.",
      },
    },
  },
  {
    slug: "talvised-elektritood-ja-2027-projektide-ettevalmistus",
    category: "electrical", date: "2026-11-12", readMinutes: 4, cover: electricalPhoto.url,
    content: {
      et: {
        title: "Talvised elektritööd ja 2027. aasta projektid: ettevalmistus algab täna",
        summary: "Kuidas planeerida tööstusobjekti elektritöid ja päikesepargi ehitust enne uut hooaega: töömaht, ohutus, meeskonnad ja üleandmine.",
        lead: "Novembris tehtud ettevalmistus aitab järgmise aasta projekti alustada selgete lähteandmetega. Talvine töökorraldus nõuab realistlikku graafikut, läbimõeldud elektriohutust ja täpselt määratud vastutust. HeilArese teenused hõlmavad päikeseparke, elektritöid, BESS-i ja kvalifitseeritud tööjõu renti.",
        sections: [
          { heading: "Leppige kokku tegelik tööpakett", paragraphs: ["Eristage projekteerimine, tarne, konstruktsioonide ja moodulite paigaldus, DC- ja AC-tööd ning katsetamine. Suure pargi koguvõimsus ei ole sama mis ühe töövõtja teostatud töömaht.", "HeilArese Risti referentsis on pargi koguvõimsus 244 MW ja meie töömaht 80 MW. Sama läbipaistvus peab kajastuma uue objekti pakkumises: millised tööd kuuluvad hinna sisse ja millised on teiste osapoolte vastutada."] },
          { heading: "Planeerige ilmast sõltuvad ja sisetööd eraldi", paragraphs: ["Külm, niiskus, libedus ja lühike päev mõjutavad paigaldust. Kaablite käsitsemisel ja ühenduste tegemisel tuleb järgida tootja tingimusi; kõiki töid ei saa igas temperatuuris teha.", "Kilbitööd ja ettevalmistus võivad sobivate tingimuste korral jätkuda siseruumides. Välitööde graafikusse tuleb jätta ilmastikuvaru ning tagada ohutu ligipääs ja valgustus."] },
          { heading: "Elektriohutus ja meeskonna rollid", paragraphs: ["Enne tööd tuleb määrata väljalülitused, tööala, vastutajad ja objekti ohutuskorraldus. Pädevus, juhendamine ning tööde kontroll on olulised nii oma meeskonna kui renditud spetsialistide puhul.", "HeilArese elektritööde MTR registreering on TEL005181. Tööjõu rent aitab katta kokkulepitud tööpakette, kuid objekti juhtimine, elektritööde vastutus ja kontroll tuleb lepingus selgelt jaotada."] },
          { heading: "Valmistage üleandmine ette juba alguses", paragraphs: ["Leppige kokku teostusjoonised, tähistus, mõõteprotokollid, seadistused ja kasutusjuhised. Uue BESS-i või päikesepargi ühendamisel kontrollige ka olemasoleva elektritaristu sobivust.", "2027. aasta tööde planeerimiseks saatke HeilAresile objekti asukoht, tööde kirjeldus, olemasolevad skeemid ja soovitud ajakava. Tarned, võrgu tingimused ja meeskondade saadavus tuleb kinnitada projekti järgi, mitte eeldada universaalset valmimisaega."] },
        ], faqs: [
          { question: "Kas elektritöid saab teha talvel?", lead: "Jah, kui tingimused on sobivad.", answer: "Töömeetodid ja graafik peavad arvestama ohutust, ilma ning seadmete ja kaablite tootjanõudeid." },
          { question: "Kas elektritöid saab tellida eraldi?", lead: "Jah.", answer: "HeilAresiga saab kokku leppida eraldi elektritööde paketi või siduda selle päikesepargi ja BESS-projektiga." },
        ], ctaTitle: "Planeerite järgmise aasta töid?", ctaSubtitle: "Saatke HeilAresile objekti info ja tööde ulatus, et arutada realistlikku teostusplaani.",
      },
      en: {
        title: "Winter electrical works and 2027 projects: preparation starts now",
        summary: "Plan industrial electrical works and solar construction before the next season: scope, safety, crews and handover.",
        lead: "Preparation in November helps next year's project start with clear information. Winter work requires realistic scheduling, electrical safety and defined responsibilities. HeilAres' services cover solar parks, electrical works, BESS and qualified workforce rental.",
        sections: [
          { heading: "Agree the actual work package", paragraphs: ["Separate design, supply, structure and module installation, DC and AC works, and testing. A large park's total capacity is not the same as one contractor's delivered scope.", "At HeilAres' Risti reference, total park capacity is 244 MW and our scope is 80 MW. New quotations need the same transparency: which tasks are included and which remain other parties' responsibilities."] },
          { heading: "Separate weather-dependent and indoor work", paragraphs: ["Cold, moisture, slippery surfaces and short days affect installation. Cable handling and connections must follow manufacturer requirements; not every task can be performed at every temperature.", "Switchgear work and preparation can continue indoors where conditions allow. Outdoor schedules need weather contingency, safe access and lighting."] },
          { heading: "Electrical safety and crew responsibilities", paragraphs: ["Before work begins, establish isolation arrangements, the work area, responsible persons and site safety procedures. Competence, induction and checks matter for both internal crews and rented specialists.", "HeilAres' electrical works MTR registration is TEL005181. Workforce rental can support agreed packages, but site management, electrical responsibility and inspection must be clearly allocated in the contract."] },
          { heading: "Plan handover from the start", paragraphs: ["Agree as-built drawings, labelling, measurement records, settings and operating instructions. When connecting new BESS or solar generation, also assess the existing electrical infrastructure.", "To plan 2027 works, send HeilAres the location, scope, existing diagrams and target schedule. Deliveries, grid conditions and crew availability need project-specific confirmation rather than a universal completion promise."] },
        ], faqs: [
          { question: "Can electrical works take place in winter?", lead: "Yes, where conditions permit.", answer: "Methods and schedules must account for safety, weather and equipment and cable manufacturer requirements." },
          { question: "Can electrical works be ordered separately?", lead: "Yes.", answer: "A separate electrical work package can be agreed with HeilAres or combined with a solar park and BESS project." },
        ], ctaTitle: "Planning next year's works?", ctaSubtitle: "Send HeilAres your site information and scope to discuss a realistic delivery plan.",
      },
      fi: {
        title: "Talven sähkötyöt ja vuoden 2027 hankkeet: valmistelu alkaa nyt",
        summary: "Suunnittele teollisuuden sähkötyöt ja aurinkopuiston rakentaminen ennen uutta kautta: työlaajuus, turvallisuus, tiimit ja luovutus.",
        lead: "Marraskuun valmistelu auttaa aloittamaan ensi vuoden hankkeen selkeillä lähtötiedoilla. Talvityöt vaativat realistista aikataulua, sähköturvallisuutta ja määriteltyjä vastuita. HeilAresin palveluihin kuuluvat aurinkopuistot, sähkötyöt, BESS ja pätevän työvoiman vuokraus.",
        sections: [
          { heading: "Sopikaa todellinen työpaketti", paragraphs: ["Erota suunnittelu, toimitukset, rakenteiden ja moduulien asennus, DC- ja AC-työt sekä testaus. Suuren puiston kokonaisteho ei vastaa yksittäisen urakoitsijan työosuutta.", "HeilAresin Ristin referenssissä puiston kokonaisteho on 244 MW ja oma työosuutemme 80 MW. Uudessa tarjouksessa tarvitaan sama läpinäkyvyys: mitkä tehtävät sisältyvät ja mitkä kuuluvat muille osapuolille."] },
          { heading: "Erota sääriippuvaiset työt sisätöistä", paragraphs: ["Kylmyys, kosteus, liukkaus ja lyhyet päivät vaikuttavat asennukseen. Kaapeleiden käsittelyssä ja liitoksissa noudatetaan valmistajan ohjeita; kaikki työt eivät onnistu kaikissa lämpötiloissa.", "Keskustyöt ja valmistelu voivat jatkua sisätiloissa sopivissa oloissa. Ulkotöihin tarvitaan säävaraa, turvalliset kulkureitit ja valaistus."] },
          { heading: "Sähköturvallisuus ja tiimien vastuut", paragraphs: ["Määritä ennen töitä jännitteettömäksi tekeminen, työalue, vastuuhenkilöt ja työmaan turvallisuuskäytännöt. Pätevyys, perehdytys ja tarkastukset koskevat sekä omaa tiimiä että vuokrattuja asiantuntijoita.", "HeilAresin sähkötyörekisteröinti Viron MTR:ssä on TEL005181. Vuokratyövoima tukee sovittuja työpaketteja, mutta työmaan johto, sähkötyövastuu ja tarkastukset on jaettava selkeästi sopimuksessa."] },
          { heading: "Valmistele luovutus jo alussa", paragraphs: ["Sovi toteumapiirustuksista, merkinnöistä, mittauspöytäkirjoista, asetuksista ja käyttöohjeista. Uuden BESS:n tai aurinkopuiston liittämisessä arvioidaan myös nykyisen sähköinfrastruktuurin soveltuvuus.", "Lähetä vuoden 2027 suunnittelua varten HeilAresille sijainti, työkuvaus, nykyiset kaaviot ja tavoiteaikataulu. Toimitukset, verkkoliittymän ehdot ja tiimien saatavuus vahvistetaan hankekohtaisesti, ei yleisen valmistumislupauksen perusteella."] },
        ], faqs: [
          { question: "Voiko sähkötöitä tehdä talvella?", lead: "Kyllä, sopivissa olosuhteissa.", answer: "Työtavat ja aikataulu huomioivat turvallisuuden, sään sekä laitteiden ja kaapeleiden valmistajan vaatimukset." },
          { question: "Voiko sähkötyöt tilata erikseen?", lead: "Kyllä.", answer: "HeilAresin kanssa voi sopia erillisestä sähkötyöpaketista tai yhdistää sen aurinkopuisto- ja BESS-hankkeeseen." },
        ], ctaTitle: "Suunnitteletko ensi vuoden töitä?", ctaSubtitle: "Lähetä HeilAresille kohteen tiedot ja työlaajuus realistisen toteutussuunnitelman arviointiin.",
      },
      de: {
        title: "Elektroarbeiten im Winter und Projekte 2027: Die Vorbereitung beginnt jetzt",
        summary: "Elektroarbeiten in der Industrie und Solarpark-Bau vor der nächsten Saison planen: Umfang, Sicherheit, Teams und Übergabe.",
        lead: "Die Vorbereitung im November schafft klare Grundlagen für Projekte im nächsten Jahr. Winterarbeiten erfordern realistische Termine, elektrische Sicherheit und definierte Zuständigkeiten. HeilAres bietet Solarparks, Elektroarbeiten, BESS und qualifizierte Personalüberlassung.",
        sections: [
          { heading: "Den tatsächlichen Arbeitsumfang vereinbaren", paragraphs: ["Trennen Sie Planung, Lieferung, Unterkonstruktions- und Modulmontage, DC- und AC-Arbeiten sowie Prüfung. Die Gesamtleistung eines großen Parks entspricht nicht dem Arbeitsumfang eines einzelnen Auftragnehmers.", "Bei der HeilAres-Referenz Risti beträgt die Gesamtleistung 244 MW, unser Arbeitsumfang 80 MW. Neue Angebote benötigen dieselbe Transparenz: Welche Aufgaben sind enthalten und welche verantworten andere Beteiligte?"] },
          { heading: "Wetterabhängige Arbeiten und Innenarbeiten trennen", paragraphs: ["Kälte, Feuchtigkeit, Glätte und kurze Tage beeinflussen die Montage. Kabelhandhabung und Anschlüsse müssen Herstelleranforderungen folgen; nicht jede Arbeit ist bei jeder Temperatur möglich.", "Schaltanlagenarbeiten und Vorbereitung können bei geeigneten Bedingungen innen weitergehen. Außenarbeiten benötigen Wetterreserven, sichere Zugänge und Beleuchtung."] },
          { heading: "Elektrische Sicherheit und Zuständigkeiten", paragraphs: ["Legen Sie vor Beginn Freischaltung, Arbeitsbereich, Verantwortliche und Sicherheitsabläufe fest. Qualifikation, Einweisung und Kontrollen sind für eigene Teams und überlassene Fachkräfte gleichermaßen wichtig.", "Die MTR-Registrierung von HeilAres für Elektroarbeiten lautet TEL005181. Personalüberlassung unterstützt vereinbarte Arbeitspakete; Bauleitung, elektrische Verantwortung und Prüfung müssen im Vertrag eindeutig zugewiesen sein."] },
          { heading: "Die Übergabe von Anfang an planen", paragraphs: ["Vereinbaren Sie Bestandspläne, Kennzeichnung, Messprotokolle, Einstellungen und Betriebsanleitungen. Beim Anschluss neuer BESS- oder PV-Anlagen ist auch die bestehende elektrische Infrastruktur zu prüfen.", "Senden Sie HeilAres für die Planung 2027 Standort, Arbeitsbeschreibung, vorhandene Pläne und Zieltermine. Lieferungen, Netzbedingungen und Teamverfügbarkeit sind projektbezogen zu bestätigen, statt eine universelle Bauzeit anzunehmen."] },
        ], faqs: [
          { question: "Sind Elektroarbeiten im Winter möglich?", lead: "Ja, unter geeigneten Bedingungen.", answer: "Arbeitsmethoden und Zeitplan müssen Sicherheit, Wetter sowie Herstelleranforderungen an Geräte und Kabel berücksichtigen." },
          { question: "Können Elektroarbeiten separat beauftragt werden?", lead: "Ja.", answer: "Mit HeilAres kann ein separates Arbeitspaket oder die Kombination mit einem Solarpark- und BESS-Projekt vereinbart werden." },
        ], ctaTitle: "Sie planen Arbeiten für das nächste Jahr?", ctaSubtitle: "Senden Sie HeilAres Standortdaten und Arbeitsumfang für einen realistischen Umsetzungsplan.",
      },
    },
  },
];
