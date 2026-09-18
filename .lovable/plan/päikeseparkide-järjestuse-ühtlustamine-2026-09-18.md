# Päikeseparkide järjestuse ühtlustamine

## Eesmärk
Rakendada kogu HeilAres.ee saidil ja kõigis neljas keeles üks kohustuslik järjestus:

1. Solar Tracker Park
2. Maapark / Ground-mounted Solar Park / Maapark / Freiflächen-Solarpark
3. Katusepark / Rooftop Solar Park / Katusepark / Dach-Solarpark

Muu sisu, kujundus, URL-id ja funktsionaalsus jäävad muutmata.

## Muudatused

- Muudan Päikesepargid lehe ühises tüübiloendis järjekorra `tracker → ground → roof`, mille tulemusel on sektsioonid ja nummerdus `01 / 02 / 03` õiges järjekorras kõigis keeltes.
- Kontrollin ja ühtlustan avalehe teenusekaardid; olemasolevat õiget `tracker → ground → roof` järjestust ei muudeta asjatult.
- Hoian projekti filtrid ja kontaktivormi valikud samas järjekorras; „Tehtud tööd” üldvaates järjestan päikeseprojektid kategooriate kaupa tracker → maa → katus, säilitades projektide andmed, pildid ja lingid.
- Muudan võrdlusartikli kuvatavate tüübiosade järjekorra Solar Tracker Park → maapark → katusepark kõigis neljas keeles, sisu ümber sõnastamata.
- Ühtlustan ainult need loetelulaused, pealkirjad ja metaandmed, kus kolm tüüpi on järjestusena välja toodud; kasutan kasutaja määratud nimetusi:
  - ET: Solar Tracker Park, Maapark, Katusepark
  - FI: Solar Tracker Park, Maapark, Katusepark
  - EN: Solar Tracker Park, Ground-mounted Solar Park, Rooftop Solar Park
  - DE: Solar Tracker Park, Freiflächen-Solarpark, Dach-Solarpark
- Ei muuda navigatsiooni ega jalust, kui seal kuvatakse ainult üldlink „Päikesepargid” ilma kolme alamtüübita.

## Tehniline teostus

- Teen järjestuse algallikates, mitte CSS-i või üksikute tõlkekoopiate abil.
- Säilitan iga tüübi olemasoleva võtme, pildi, ankru, projekti kategooria ja sihtlingi seose.
- Muudan ainult järjestust ning nõutud tüübinimetusi kohtades, kus kõik kolm on koos kuvatud.

## Kontroll

- Otsin pärast muudatust kogu projektist uuesti kõik kolme tüübi kuvamiskohad ja välistan vana järjekorra.
- Kontrollin ET/FI/EN/DE avalehte, Päikesepargid lehte, projekte, vormivalikut ja võrdlusartiklit.
- Kontrollin, et kaardid, pildid, numbrid, filtrid ja lingid vastavad jätkuvalt õigele kategooriale.
- Kontrollin vaateid laiustel 320, 375, 390, 430, 768, 1024, 1280, 1440 ja 1920 px ning jälgin ülekatteid ja horisontaalset ülevoolu.
- Käivitan projekti automaatsed kontrollid ning teen brauseris lingi- ja konsoolivigade kontrolli.
