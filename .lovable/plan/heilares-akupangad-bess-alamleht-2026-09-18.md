# HeilAres Akupangad / BESS alamleht

## Eesmärk
Luua uus professionaalne `/akupangad` leht ettevõtetele, tööstusele, päikeseparkidele ja suuremahulistele energiataristu projektidele. Leht kasutab olemasoleva Elektritööd lehe kujunduskeelt, komponente, animatsioone, värve ja paigutuspõhimõtteid.

## Teostatavad muudatused

### 1. Uus Akupangad leht
- Loon uue `/akupangad` lehe etteantud järjestuses: hero, BESS-i selgitus, eelised, kasutajarühmad, päikesepark + BESS, dimensioneerimine, terviklahenduse osad, elektritööd, ohutus, tulevikukindlus, tööprotsess, Miks HeilAres, KKK ja lõpu CTA.
- Kasutan sama tumedat premium B2B visuaalset süsteemi nagu Elektritööd lehel: Outfit/Jura, olemasolevad värvitokenid, kaardid, grid-taustad, Reveal-animatsioonid ja sticky „Miks HeilAres” paigutus.
- Skeemid ehitan selgete, mobiilis üheveeruliseks muutuvate sammudena; konkreetseid võimsusi, hindu, tasuvusaegu, tootjaid ega kontrollimata standardeid ei lisata.
- Lisan ainult kinnitatud pädevusinfo `MTR TEL005181`; „tase 6” jääb välja vastavalt kinnitatud valikule.

### 2. Visuaalid
- Genereerin professionaalse tööstusliku BESS-konteinerite ja energiataristu hero-pildi, vältides koduakusid ning klišeelikke roheenergia stock-visuaale.
- Pilt salvestatakse projekti varadesse, kuvatakse cover-stiilis ning saab kõigis keeltes sisule vastava alt-teksti.
- Kõik sisupildid kasutavad lazy loading’ut seal, kus need ei ole esimese vaate hero-pilt.

### 3. Navigatsioon ja avaleht
- Lisan päise navigatsiooni `Akupangad` lingi vahetult `Elektritööd` ette; sama järjestus rakendub desktop- ja mobiilimenüüs.
- Lisan avalehele Akupangad teenusesektsiooni vahetult Elektritööd sektsiooni ette, ilma teiste teenuste nimetusi või linke muutmata.
- Lisan asjakohase Akupangad lingi jaluse navigeerimisse olemasoleva süsteemi kaudu.

### 4. Keeled
- Teen kogu uue sisu identses struktuuris eesti, inglise ja soome keeles.
- Kõik navigeerimine, CTA-d, kaardid, skeemid, alt-tekstid ja KKK vastused tõlgitakse kõigis kolmes keeles.

### 5. SEO ja siselingid
- Lisan lehespetsiifilise title’i, meta description’i, OG title’i, OG description’i, OG type’i, Twitter cardi, korrektse canonicali ja `og:url` väärtuse domeenil `https://heilares.ee/akupangad`.
- Lisan nähtava sisuga kooskõlas oleva WebPage, Service ja FAQPage struktureeritud andmestiku.
- Lisan loomulikud siselingid Päikeseparkide, Elektritööde ja Kontakti lehtedele.
- Märksõnad põimitakse loomulikult sisusse, ilma märksõnade kuhjamiseta.

### 6. Kontroll
- Kontrollin route’i, ühe H1 olemasolu, accordion-FAQ tööd, CTA-sid ja siselinke.
- Kontrollin navigatsiooni ning avalehe järjestust `Akupangad → Elektritööd`.
- Kontrollin desktop-, tahvel- ja mobiilivaadet Playwrightiga, sh teksti sobivust, skeemide loetavust ja menüü kasutatavust.
- Käivitan valikulise tüübikontrolli ning kontrollin kõigi kolme tõlkefaili kehtivust.

## Tehnilised detailid
- Uus route: `src/routes/akupangad.tsx` koos `createFileRoute("/akupangad")` definitsiooniga.
- Eraldi BESS KKK ja avalehe teenusekomponent hoiavad route’i hallatavana ning järgivad olemasolevaid ElectricalFAQ/ElectricalSection mustreid.
- `src/routeTree.gen.ts` jääb generaatori hallata.
- Olemasolevate lehtede sisu ei muudeta peale nõutud navigatsiooni, avalehe ja jaluse lingi lisamise.
