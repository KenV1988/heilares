# HeilAres kontaktide, tööaja ja saksa keele uuendus

## Tulemus
- Kõik isikupõhised telefoninumbrid eemaldatakse saidi nähtavast sisust ja avalikust ettevõtteinfo tööriistast.
- Kontaktikaartidel kuvatakse ainult nimi, ametinimetus ja e-post.
- Lisatakse Karl-Heinrich Raigo kontakt täpse ametinimetusega **Partnership Manager** ja e-postiga **karl@heilares.ee**.
- Tööajad ja nendega seotud kellade ikoonid eemaldatakse täielikult.
- Saksa keel lisatakse kogu saidile võrdväärse neljanda keelena.
- Eesti URL-id jäävad muutmata; Soome, inglise ja saksa versioonid saavad vastavalt `/fi`, `/en` ja `/de` prefiksi.

## Teostus
1. **Kontaktandmete keskne mudel**
   - Muudan ettevõtte kontaktandmed üheks keskseks nime, ametinimetuse ja e-posti mudeliks.
   - Eemaldan Kristjani ja Lauri telefonid ning lisan nende olemasolevad e-postid keskandmetesse.
   - Lisan Karl-Heinrichi samasse andmestikku ilma telefoni, foto või sotsiaalmeedia lingita.
   - Uuendan kontakti-, jaluse- ja mobiilivaateid ning avalikku ettevõtteinfo tööriista kasutama sama mudelit.
   - Kuna eraldi ettevõtte üldtelefon praegu puudub, ei kuvata pärast muudatust telefoninumbrit ega telefoninuppu.

2. **Tööaja eemaldamine**
   - Eemaldan tööaja ploki kontakti- ja jalusevaatest ning tööaja võtmed kõigist keeltest.
   - Kohandan kontaktinfo rea kahe võrdse kaardina: üldine e-post ja asukoht.
   - Kontrollin, et alles ei jääks tühje ridu, ikoone ega vahemikke.

3. **Täielik saksa lokaliseerimine**
   - Lisan professionaalse B2B-saksa tõlkefaili sama võtmestruktuuriga nagu ET/FI/EN.
   - Tõlgin kõik üldtekstid, aktiivsed teenuselehed, BESS-i, elektritööd, päikesepargid, tööjõurendi, projektid, KKK-d, vormid, olekuteated, CTA-d, jaluse, metaandmed ja alt-tekstid.
   - Lisan saksa sisu kõigile üheksale blogipostitusele ja viiele projektile.
   - `Partnership Manager` jääb kasutaja määratud kujul kõigis keeltes muutmata.

4. **Keelepõhised URL-id ja SEO**
   - Hoian Eesti lehed olemasolevatel URL-idel.
   - Lisan sama lehe säilitava keelevahetuse URL-idega `/fi/...`, `/en/...` ja `/de/...`, sealhulgas blogi- ja projektidetailid.
   - Iga indekseeritav leht saab keelepõhise title’i, description’i, Open Graphi, self-canonical’i ja alternatiivlingid `et`, `fi`, `en`, `de` ning `x-default`.
   - Uuendan saidikaardi kõigi avalike keele-URL-idega ja väldin dubleerivaid või valesse keelde jäävaid metaandmeid.

5. **Pikemate tekstide paigutus**
   - Säilitan praeguse disaini, kuid teen päise, keelevalija, kontaktikaardid, jaluse, pealkirjad ja vormid pikema saksa teksti suhtes paindlikuks.
   - Eemaldan teksti lõikavad minimaalsed/fikseeritud kõrgused ainult seal, kus audit kinnitab riski.
   - E-postidele lisan turvalise murdmise ning kontaktide ruudustik kohandub kolmele kontaktile.

6. **Kontroll**
   - Kontrollin võtmete võrdsust ET/FI/EN/DE vahel ning otsin telefoni-, tööaja-, tõlkimata teksti ja placeholderite jääke.
   - Testin kõik kasutaja kirjeldatud keelevahetuse järjestused samal lehel.
   - Teen automaatse läbikäigu kõigile avalikele põhi-, blogi- ja projektilehtedele neljas keeles.
   - Kontrollin 320, 375, 390, 430, 768, 1024, 1280, 1440 ja 1920 px laiuseid vaateid, horisontaalset overflow’d, kattumisi ja kontaktide paigutust.
   - Kontrollin vormi, FAQ akordione, CTA-sid, e-posti linke, navigeerimist, metaandmeid ja katkiseid linke.

## Tehnilised märkused
- Keelekood tuletatakse URL-ist enne lehe renderdamist; brauseri varasem keele-eelistus jääb abistavaks, kuid ei määra indekseeritava URL-i sisu.
- Uued prefiksiga lehed kasutavad samu olemasolevaid vaateid ja andmeid, mitte dubleeritud kujundust.
- Olemasolevaid Eesti URL-e ega kujundussüsteemi ei muudeta.
