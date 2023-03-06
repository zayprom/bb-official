import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  // Start the page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
       <Helmet>
        <title>Bunny & Bro - Ochrana osobních údajů</title>
        <meta name="description" content="Designové dětské hrací podložky Bunny & Bro -  ochrana osobních údajů." />
        <meta property="og:title" content="Bunny & Bro -  Ochrana osobních údajů" />
        <meta
          property="og:description"
          content="Designové dětské hrací podložky Bunny & Bro -  ochrana osobních údajů"
        />
      </Helmet>
      <Navigation />
      <MobileNavigation />
      <section className="section-conditions">
        <h2 className="heading-secondary">Ochrana osobních údajů</h2>
          <div className="conditions-text-area">
            <p className="conditions-text important">1. Správce osobních údajů
            </p>
            <p className="conditions-text">1.1 Správce osobních údajů <span className="bold">Diama s.r.o., IČ 25626442, se sídlem Kostelecká 439, Mratín, 25063, zapsaná v obchodním rejstříku vedeném u městského soudu v Praze, oddíl C, vložka 55957 (dále jen „správce“),</span> prohlašuje, že veškeré osobní údaje zpracovávané správcem jsou přísně důvěrné. Správce s nimi nakládá v souladu s vnitrostátními právními předpisy i předpisy Evropské unie platnými v oblasti ochrany osobních údajů.
            </p>
            <p className="conditions-text">1.2 Správce shromažďuje, uchovává a využívá Vaše osobní údaje ve smyslu § 6 zák. č. 101/2000 Sb., o ochraně osobních údajů a o změně některých zákonů, ve znění pozdějších předpisů (dále jen zákon o ochraně osobních údajů), resp. čl. 28 nařízení nařízení Evropského parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016, o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (dále jen „nařízení GDPR“). Jednotlivé účely, pro které správce osobní údaje zpracovává, jsou dále vymezeny.
            </p>
            <p className="conditions-text">1.3 Správce tyto osobní údaje shromažďuje i prostřednictvím svých internetových stránek na adrese <a href="https://www.eshop.bunnyandbro.cz" target="_blank" rel="noopener noreferrer" className="simple-link">https://www.bunnyandbro.cz</a> (dále jen „internetové stránky“).
            </p>
            <p className="conditions-text">1.4 Tyto zásady vydává správce proto, abyste byli dostatečně informováni o tom, jaké Vaše osobní údaje správce zpracovává, za jakým účelem, po jakou dobu, kdo k Vašim osobním údajům bude mít přístup a jaká máte práva. Tyto zásady se vztahují na všechny osobní údaje shromážděné správcem, ať už byly shromážděny za účelem plnění smluvního vztahu, právní povinnosti, oprávněného zájmu, nebo uděleného souhlasu.
            </p>
            <p className="conditions-text important">2. Zpracovávané údaje
            </p>
            <p className="conditions-text">2.1 Správce je oprávněn zpracovávat následující osobní údaje dle účelu, dle kategorií osobních údajů, dle kategorií subjektu údajů, dle kategorií příjemců a dle doby uchování následovně.
            </p>
            <table className="conditions-table">
              <thead>
                <tr className="conditions-text important">
                  <th>Č.</th>
                  <th>Účel zpracování</th>
                  <th>Kategorie osobních údajů</th>
                  <th>Kategorie subjektu údajů</th>
                  <th>Kategorie příjemců</th>
                  <th>Doba uchování</th>
                </tr>
              </thead>
              <tbody>
                <tr className="conditions-text">
                  <td>1</td>
                  <td>plnění smluvního vztahu</td>
                  <td>jméno, příjmení, adresa, e-mailová adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>24 měsíců po ukončení smluvního vztahu</td>
                </tr>
                <tr className="conditions-text">
                  <td>2</td>
                  <td>účetní a daňové účely</td>
                  <td>jméno, příjmení, adresa, e-mailová adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>5 let po ukončení smluvního vztahu</td>
                </tr>
                <tr className="conditions-text">
                  <td>3</td>
                  <td>statistické účely</td>
                  <td>IP adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>24 měsíců po navštívení internetové stránky</td>
                </tr>
                <tr className="conditions-text">
                  <td>4</td>
                  <td>zasílání obchodních sdělení a nabídka produktů a služeb</td>
                  <td>e-mailová adresa, telefonní číslo</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>24 měsíců po ukončení smluvního vztahu</td>
                </tr>
                <tr className="conditions-text">
                  <td>5</td>
                  <td>zobrazování reklam</td>
                  <td>e-mailová adresa, IP adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>24 měsíce po navštívení internetové stránky</td>
                </tr>
                <tr className="conditions-text">
                  <td>6</td>
                  <td>oprávněný zájem</td>
                  <td>jméno, příjmení, adresa, e-mailová adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>4 roky po ukončení smluvního vztahu</td>
                </tr>
                <tr className="conditions-text">
                  <td>7</td>
                  <td>plnění dalších zákonných povinností</td>
                  <td>jméno, příjmení, adresa, e-mailová adresa</td>
                  <td>klient</td>
                  <td>správce</td>
                  <td>4 roky po ukončení smluvního vztahu</td>
                </tr>
              </tbody>
            </table>
            <p className="conditions-text">2.2 Jednotlivými účely zpracování se míní následující:</p>
            <p className="conditions-text padded">2.2.1 plnění smluvního vztahu znamená: vztah mezi Vámi a správcem vzniklý na základě objednávky, registrace, na základě uzavřené smlouvy, na základě přihlášky a účasti v soutěži a podobně;
            </p>
            <p className="conditions-text padded">2.2.2 zasílání obchodních sdělení a nabídka produktů a služeb znamená: zasílání obchodních nabídek, a to prostřednictvím elektronické pošty (e-mailem), prostřednictvím krátkých textových zpráv nebo prostřednictvím telefonního hovoru;
            </p>
            <p className="conditions-text padded">2.2.3 účetní a daňové účely znamená: evidence účetnictví ve smyslu účetní a daňové legislativy;
            </p>
            <p className="conditions-text padded">2.2.4 statistické účely znamená: anonymizované zjišťování návštěvnosti internetových stránek, dále monitoring počtu zhlédnutí stránek, času stráveného na internetových stránkách, typ zařízení, ze kterého přicházíte na internetové stránky. Data sbíráme proto, abychom mohli zkvalitňovat poskytované služby a nabízet klientům relevantní obsah;
            </p>
            <p className="conditions-text padded">2.2.5 zobrazování reklam znamená: zobrazování reklam na internetových stránkách na základě statisticky zjištěných preferencí zákazníka;
            </p>
            <p className="conditions-text padded">2.2.6 oprávněný zájem znamená: účinná obhajoba v případě sporu; doba zpracování osobních údajů v takovém případě činí 4 roky od uplynutí záruční doby na zboží a prodlužuje se o dobu, po kterou je veden spor. Chceme stále zkvalitňovat své služby a případně poskytovat služby nové a lepší; chceme se bránit maření takové činnosti; proto činnosti, které přispívají k naplnění tohoto cíle, jsou naším oprávněným zájmem. Oprávněným zájmem je také zpracování pro účely zamezení podvodům (např. posuzování rizikovosti uzavření smlouvy), přímý marketing (např. nabízení relevantních služeb stávajícím zákazníkům), předávání osobních údajů v rámci skupiny podniků pro vnitřní administrativní účely, oznámení trestných činů a předání osobních údajů příslušnému orgánu, zajištění bezpečnosti sítě a informací. Tento výčet je pouze příkladný;
            </p>
            <p className="conditions-text padded">2.2.7 plnění dalších zákonných povinností znamená: poskytování informací orgánům činným v trestním řízení, poskytování informací jiným orgánům veřejné moci a podobně.
            </p>
            <p className="conditions-text">2.3 Vaše osobní údaje zpracováváme po dobu nezbytně nutnou k zajištění všech práv a povinností plynoucí ze vzájemného právního jednání, to minimálně po dobu vyřízení objednávky, provedení obchodu, zařízení služby apod., dále po dobu, kterou je správce povinen osobní údaje uchovávat podle obecně závazných právních předpisů nebo po dobu, na kterou jste správci případně udělili souhlas. Jinak doba zpracování vyplývá z účelu, pro které jsou osobní údaje zpracovány, nebo je dána právními předpisy.
            </p>
            <p className="conditions-text">2.4 Osobní údaje jsou správcem zpracovány manuálně i automatizovaně . Správce je oprávněn zpracovávat některé informace automatizovaně například pro vytvoření statistických informací o návštěvnosti svých internetových stránek.
            </p>
            <p className="conditions-text important">3. Osobní údaje zpracovávané na základě souhlasu
            </p>
            <p className="conditions-text">3.1 Pokud jsme od Vás získali souhlas ke zpracování osobních údajů, stalo se tak pro některý z následujících účelů:
            </p>
            <p className="conditions-text padded">3.1.1 Plnění smluvního vztahu
            </p>
            <p className="conditions-text padded">3.1.2 Zasílání obchodních sdělení a nabídka produktů a služeb
            </p>
            <p className="conditions-text padded">3.1.3 Účetní a daňové účely
            </p>
            <p className="conditions-text padded">3.1.4 Statistické účely
            </p>
            <p className="conditions-text padded">3.1.5 Zobrazování reklam
            </p>
            <p className="conditions-text padded">3.1.6 Oprávněný zájem
            </p>
            <p className="conditions-text padded">3.1.7 Plnění dalších zákonných povinností
            </p>
            <p className="conditions-text important">4. Práva subjektu údajů
            </p>
            <p className="conditions-text">4.1 Jako subjekt údajů máte uvedená práva, která pro Vás z právních předpisů vyplývají a která můžete kdykoliv uplatnit. Jedná se o:
            </p>
            <p className="conditions-text padded">4.1.1 právo na přístup k osobním údajům, podle kterého máte právo získat od správce informace o tom, jestli správce zpracovává Vaše osobní údaje. Tuto informaci je správce povinen Vám bez zbytečného odkladu předat. Obsah informace je dán ustanovením § 12 odst. 2 zákona č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů. Správce má právo za poskytnutí informace požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace;
            </p>
            <p className="conditions-text padded">4.1.2 právo na opravu nebo výmaz osobních údajů, popřípadě omezení zpracování, podle kterého máte právo na to, nechat opravit osobní údaje, které jsou nepřesné nebo nesprávné. Pokud již Vaše osobní údaje nejsou potřebné pro účely, ke kterým byly shromážděny, nebo jsou zpracovávány protiprávně, máte právo požadovat jejich výmaz. Pokud nechcete žádat výmaz osobních údajů, ale pouze dočasně omezit jejich zpracování, můžete žádat omezení zpracování;
            </p>
            <p className="conditions-text padded">4.1.3 právo požadovat vysvětlení v případě, že máte podezření, že zpracování osobních údajů správcem je v rozporu s právními předpisy;
            </p>
            <p className="conditions-text padded">4.1.4 právo obrátit se na Úřad pro ochranu osobních údajů v případě pochybností o dodržování povinností souvisejících se zpracováním osobních údajů;
            </p>
            <p className="conditions-text padded">4.1.5 právo na přenositelnost údajů, tj. právo získat osobní údaje, které se Vás týkají, které jste poskytl správci, ve strukturovaném, běžně používaném a strojově čitelném formátu, blíže viz. čl. 20 GDPR;
            </p>
            <p className="conditions-text padded">4.1.6 právo vznést námitku proti zpracování osobních údajů, které jsou zpracovávány pro účely splnění úkolu prováděného ve veřejném zájmu nebo při výkonu veřejné moci nebo pro účely ochrany oprávněných zájmů správce. Správce zpracování ukončí bez zbytečného odkladu pokud neprokáže, že existuje oprávněný zájem/důvod pro zpracování, který převažuje nad Vaším zájmem, právy nebo svobodami;
            </p>
            <p className="conditions-text padded">4.1.7 právo souhlas se zpracováním osobních údajů kdykoliv odvolat, pokud jste udělili správci souhlas se zpracováním osobních údajů.
            </p>
            <p className="conditions-text important">5. Cookies</p>
            <p className="conditions-text">5.1 Soubory cookies jsou krátké textové soubory, které internetová stránka odešle do Vašeho prohlížeče. Umožňují internetové stránce zaznamenat informace o Vaší návštěvě, například zvolený jazyk a podobně, následující návštěva stránek tak pro Vás může být snazší a příjemnější. Soubory cookies jsou důležité, neboť bez nich by procházení sítě Internet bylo mnohem složitější. Soubory cookies umožňují lepší využití naší internetové stránky a přizpůsobení jejího obsahu Vašim potřebám; používá je téměř každá internetová stránka na světě. Soubory cookies jsou užitečné, protože zvyšují uživatelskou přívětivost opakovaně navštívené internetové stránky.
            </p>
            <p className="conditions-text">5.2 Na internetových stránkách správce může využívat tyto druhy cookies:
            </p>
            <p className="conditions-text padded">5.2.1 Relační (tedy dočasné) soubory cookies nám umožňují propojovat Vaše jednotlivé aktivity po dobu prohlížení těchto internetových stránek. V okamžiku otevření okna Vašeho prohlížeče se tyto soubory aktivují a deaktivují se po zavření okna Vašeho prohlížeče. Relační cookies jsou dočasné a po zavření prohlížeče se všechny tyto soubory vymažou.
            </p>
            <p className="conditions-text padded">5.2.2 Trvalé soubory cookies nám pomáhají Váš počítač identifikovat, jestliže opětovně navštívíte naši internetovou stránku. Další výhodou trvalých cookies je to, že nám umožňují přizpůsobit naše internetové stránky Vašim potřebám.
            </p>
            <p className="conditions-text">5.3 V souladu s ustanovením § 89 odst. 3 zák. č. 127/2005 Sb., o elektronických komunikacích, v účinném znění, si Vás tímto dovolujeme informovat, že naše internetové stránky využívají pro svoji činnost soubory cookies, tedy že Vaše soubory cookies, včetně trvalých, zpracováváme.
            </p>
            <p className="conditions-text">5.4 Internetové prohlížeče obvykle obsahují správu souborů cookies. V rámci nastavení Vašeho prohlížeče tak pravděpodobně můžete jednotlivé soubory cookies ručně mazat, blokovat či zcela zakázat jejich používání. Pro více informací použijte nápovědu svého internetového prohlížeče. Pokud použití souborů cookies nepovolíte, některé funkce a stránky nemusí fungovat, jak by měly.
            </p>
            <p className="conditions-text">5.5 K personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze naší návštěvnosti využíváme soubory cookies. Informace o tom, jak náš web používáte, sdílíme se svými partnery působícími v oblasti sociálních médií, inzerce a analýz. Používáním internetových stránek vyjadřujete souhlas propojením následujících služeb:
            </p>
            <p className="conditions-text padded">5.5.1 Google
            </p>
            <p className="conditions-text padded">5.5.2 Facebook
            </p>
            <p className="conditions-text padded">5.5.3 Instagram
            </p>
            <p className="conditions-text">5.6 Kvůli zobrazení cílené reklamy v rámci reklamních a sociálních sítí na jiných internetových stránkách předáváme těmto reklamním a sociálním sítím údaje o vašem chování na webu; nepředáváme jim však vaše identifikační údaje.
            </p>
            <p className="conditions-text important">6 Předávání do třetích zemí
            </p>
            <p className="conditions-text">6.1 Vaše osobní údaje nebudou předávány do třetích zemí. 
            </p>
            <p className="conditions-text">7. Informace a otázky
            </p>
            <p className="conditions-text">7.1 Další informace o právech a povinnostech při ochraně osobních údajů může subjekt údajů získat na webových stránkách <a href="https://www.bunnyandbro.cz" target="_blank" rel="noopener noreferrer" className="simple-link">https://www.bunnyandbro.cz</a> nebo prostřednictvím e-mailu na <a href="mailto:soukromi@bunnyandbro.cz" target="_blank" rel="noopener noreferrer" className="simple-link">soukromi@bunnyandbro.cz</a>.
            </p>
            <p className="conditions-text">Tyto Podmínky nabývají účinnosti <span className="bold">01.08.2022</span>.
            </p>


          </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
