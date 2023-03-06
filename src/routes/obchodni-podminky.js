import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import { Link } from "react-router-dom";
import file01 from "../files/formular-reklamace.pdf"
import file02 from "../files/formular-odstoupeni.pdf"
import { FilePdf } from "phosphor-react";
import { Helmet } from "react-helmet";

const Terms = () => {
  // Start the page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [revealPhone, setRevealPhone] = useState(false)

  return (
    <div className="layout">
      <Helmet>
        <title>Bunny & Bro - Obchodní podmínky</title>
        <meta name="description" content="Designové dětské hrací podložky Bunny & Bro - obchodní podmínky." />
        <meta property="og:title" content="Bunny & Bro - Obchodní podmínky" />
        <meta
          property="og:description"
          content="Designové dětské hrací podložky Bunny & Bro - obchodní podmínky"
        />
      </Helmet>
      <Navigation />
      <MobileNavigation />
      <section className="section-conditions">
        <h2 className="heading-secondary">Obchodní podmínky</h2>
        <div className="conditions-text-area">
          <p className="conditions-text">
          Tyto všeobecné obchodní podmínky (“Podmínky”) společnosti <span className="bold">Diama s.r.o., IČO: 25626442, se sídlem Kostelecká 439, 25063, Mratín, Česká republika., zapsaná v obchodním rejstříku vedeném u městského soudu v Praze, oddíl C, vložka 55957, e-mail info@bunnyandbro.cz („My” nebo „Prodávající”)</span> upravují v souladu s ustanovením § 1751 odst. 1 zákona č. 89/2012 Sb., občanský zákoník, ve znění pozdějších předpisů („Občanský zákoník“) vzájemná práva a povinnosti Vás, jakožto kupujících, a Nás, jakožto prodávajících, vzniklá v souvislosti nebo na základě kupní smlouvy („Smlouva“) uzavřené prostřednictvím E-shopu na webových stránkách <a href="https://www.eshop.bunnyandbro.cz" target="_blank" rel="noopener noopener noreferrer" className="simple-link">https://www.eshop.bunnyandbro.cz</a>.
          </p>
          <p className="conditions-text">
          Všechny informace o zpracování Vašich osobních údajů jsou obsaženy v Zásadách zpracování osobních údajů, která naleznete <a href="https://bunnyandbro.cz/ochrana-osobnich-udaju" target="_blank" rel="noopener noopener noreferrer" className="simple-link">zde</a>.
          </p>
          <p className="conditions-text">
          Ustanovení těchto Podmínek jsou nedílnou součástí Smlouvy. Smlouva a Podmínky jsou vyhotoveny v českém jazyce. Znění Podmínek můžeme jednostranně měnit či doplňovat. Tímto ustanovením nejsou dotčena práva a povinnosti vzniklá po dobu účinnosti předchozího znění Podmínek.
          </p>
          <p className="conditions-text">
          Jak jistě víte, tak komunikujeme primárně na dálku. Proto i pro naši Smlouvu platí, že jsou použity prostředky komunikace na dálku, které umožňují, abychom se spolu dohodli bez současné fyzické přítomnosti Nás a Vás, a Smlouva je tak uzavřena distančním způsobem v prostředí E-shopu, a to prostřednictvím rozhraní webové stránky („webové rozhraní E-shopu“).
          </p>
          <p className="conditions-text">
          Pokud některá část Podmínek odporuje tomu, co jsme si společně schválili v rámci procesu Vašeho nákupu na Našem E-shopu, bude mít tato konkrétní dohoda před Podmínkami přednost.
          </p>
          <p className="conditions-text">
          <span className="important">1.	NĚKTERÉ DEFINICE</span>
          </p>
          <p className="conditions-text">
          1.1.	Cena je finanční částka, kterou budete hradit za Zboží;
          </p>
          <p className="conditions-text">
          1.2.	Cena za dopravu je finanční částka, kterou budete hradit za doručení Zboží, a to včetně ceny za jeho zabalení;
          </p>
          <p className="conditions-text">
          1.3.	Celková cena je součet Ceny a Ceny za dopravu;
          </p>
          <p className="conditions-text">
          1.4.	DPH je daň z přidané hodnoty dle platných právních předpisů;
          </p>
          <p className="conditions-text">
          1.5.  Faktura je daňový doklad vystavený v souladu se zákonem o dani z přidané hodnoty na Celkovou cenu;
          </p>
          <p className="conditions-text">
          1.6.	Objednávka je Váš neodvolatelný návrh na uzavření Smlouvy o koupi Zboží s Námi;
          </p>
          <p className="conditions-text">
          1.7.	Uživatelský účet je účet zřízený na základě Vámi sdělených údajů, jež umožňuje uchování zadaných údajů a uchovávání historie objednaného Zboží a uzavřených Smluv;
          </p>
          <p className="conditions-text">
          1.8.	Vy jste osoba nakupující na Našem E-shopu, právními předpisy označovaná jako kupující;
          </p>
          <p className="conditions-text">
          1.9.	Zboží je vše, co můžete nakoupit na E-shopu.
          </p>
          <p className="conditions-text">
          <span className="important">2.	OBECNÁ USTANOVENÍ A POUČENÍ</span> 
          </p>
          <p className="conditions-text">
          2.1.	Koupě Zboží je možná jen přes webové rozhraní E-shopu.
          </p>
          <p className="conditions-text">
          2.2.	Při nákupu Zboží je Vaše povinnost poskytnout Nám všechny informace správně a pravdivě. Informace, které jste Nám poskytli při objednání Zboží budeme tedy považovat za správné a pravdivé.
          </p>
          <p className="conditions-text">
          <span className="important">3.	UZAVŘENÍ SMLOUVY</span>
          </p>
          <p className="conditions-text">
          3.1.	Smlouvu s Námi je možné uzavřít pouze v českém jazyce.
          </p>
          <p className="conditions-text">
          3.2.	Smlouva je uzavírána na dálku prostřednictvím E-shopu, přičemž náklady na použití komunikačních prostředků na dálku hradíte Vy. Tyto náklady se však nijak neliší od základní sazby, kterou hradíte za používání těchto prostředků (tedy zejména za přístup k internetu), žádné další náklady účtované Námi tedy nad rámec Celkové ceny nemusíte očekávat. Odesláním Objednávky souhlasíte s tím, že prostředky komunikace na dálku využíváme. 
          </p>
          <p className="conditions-text">
          3.3.	K tomu, abychom mohli Smlouvu uzavřít, je třeba, abyste na E-shopu vytvořili návrh Objednávky. V tomto návrhu musí být uvedeny následující údaje:
          </p>
          <p className="conditions-text padded">
          a)	Informace o nakupovaném Zboží (na E-shopu označujete Zboží, o jehož nákup máte zájem, tlačítkem „Do košíku“);
          </p>
          <p className="conditions-text padded">
          b)	Informace o Ceně, Ceně za dopravu, způsobu platby Celkové ceny a požadovaném způsobu doručení Zboží; tyto informace budou zadány v rámci tvorby návrhu Objednávky v rámci uživatelského prostředí E-shopu, přičemž informace o Ceně, Ceně za dopravu a Celkové ceně budou uvedeny automaticky na základě Vámi zvolného Zboží a způsobu jeho doručení;
          </p>
          <p className="conditions-text padded">
          c)	Své identifikační a kontaktní údaje sloužící k tomu, abychom mohli doručit Zboží, zejména tedy jméno, příjmení, doručovací adresu, telefonní číslo a e-mailovou adresu;
          </p>
          <p className="conditions-text">
          3.4.	V průběhu tvorby návrhu Objednávky může až do doby jejího vytvoření údaje měnit a kontrolovat. Po provedení kontroly prostřednictvím stisku tlačítka „Objednat a zaplatit“ Objednávku vytvoříte. Před stiskem tlačítka musíte ale ještě potvrdit Vaše seznámení se a souhlas s těmito Podmínkami, v opačném případě nebude možné Objednávku vytvořit. K potvrzení a souhlasu slouží zatrhávací políčko. Po stisku tlačítka „Objednat a zaplatit“ budou všechny vyplněné informace odeslány přímo Nám.
          </p>
          <p className="conditions-text">
          3.5.	Vaši Objednávku Vám v co nejkratší době poté, kdy Nám bude doručena, potvrdíme zprávou odeslanou na Vaši e-mailovou adresu zadanou v Objednávce. Součástí potvrzení bude shrnutí Objednávky a tyto Podmínky. Potvrzením Objednávky z naší strany dochází k uzavření Smlouvy mezi Námi a Vámi. Podmínky ve znění účinném ke dni Objednávky tvoří nedílnou součást Smlouvy.
          </p>
          <p className="conditions-text">
          3.6.	Mohou nastat i případy, kdy Vám nebudeme moci Objednávku potvrdit. Jedná se zejména o situace, kdy Zboží není dostupné nebo případy, kdy objednáte větší počet kusů Zboží, než kolik je z naší strany umožněno. Informaci o maximálním počtu Zboží Vám však vždy v rámci E-shopu předem poskytneme a neměla by pro Vás být tedy překvapivá. V případě, že nastane jakýkoli důvod, pro který nemůžeme Objednávku potvrdit, budeme Vás kontaktovat a zašleme Vám nabídku na uzavření Smlouvy v pozměněné podobě oproti Objednávce. Smlouva je v takovém případě uzavřena ve chvíli, kdy Naši nabídku potvrdíte. 
          </p>
          <p className="conditions-text">
          3.7.	V případě, že v rámci E-shopu nebo v návrhu Objednávky bude uvedena zjevně chybná Cena, nejsme povinni Vám Zboží za tuto Cenu dodat ani v případě, kdy jste obdrželi potvrzení Objednávky, a tedy došlo k uzavření Smlouvy. V takové situaci Vás budeme bezodkladně kontaktovat a zašleme Vám nabídku na uzavření nové Smlouvy v pozměněné podobě oproti Objednávce. Nová Smlouva je v takovém případě uzavřena ve chvíli, kdy Naši nabídku potvrdíte. V případě, že Naši nabídku nepotvrdíte ani ve lhůtě 3 dnů od jejího odeslání, jsme oprávněni od uzavřené Smlouvy odstoupit. Za zjevnou chybu v Ceně se považuje například situace, kdy Cena neodpovídá obvyklé ceně u jiných prodejců nebo chybí či přebývá cifra. 
          </p>
          <p className="conditions-text">
          3.8.	V případě, kdy dojde k uzavření Smlouvy, Vám vzniká závazek k zaplacení Celkové ceny. 
          </p>
          <p className="conditions-text">
          3.9.	V případě, že máte zřízen Uživatelský účet, můžete učinit Objednávku jeho prostřednictvím. I v takovém případě máte ale povinnost zkontrolovat správnost, pravdivost a úplnost předvyplněných údajů. Způsob tvorby Objednávky je však totožný, jako v případě kupujícího bez Uživatelského účtu, výhodou však je, že není třeba opakovaně vyplňovat Vaše identifikační údaje. 
          </p>
          <p className="conditions-text">
          3.10.	V některých případech umožňujeme na nákup Zboží využít slevu. Pro poskytnutí slevy je třeba, abyste v rámci návrhu Objednávky vyplnili údaje o této slevě do předem určeného pole. Pokud tak učiníte, bude Vám Zboží poskytnuto se slevou.
          </p>
          <p className="conditions-text">
          <span className="important">4.	UŽIVATELSKÝ ÚČET</span>
          </p>
          <p className="conditions-text">
          4.1.  Na základě Vaší registrace v rámci E-shopu můžete přistupovat do svého Uživatelského účtu.
          </p>
          <p className="conditions-text">
          4.2.	Při registraci Uživatelského účtu je Vaše povinnost uvést správně a pravdivě všechny zadávané údaje a v případě změny je aktualizovat. 
          </p>
          <p className="conditions-text">
          4.3.	Přístup k Uživatelskému účtu je zabezpečen uživatelským jménem a heslem. Ohledně těchto přístupových je Vaší povinností zachovávat mlčenlivost a nikomu tyto údaje neposkytovat. V případě, že dojde k jejich zneužití, neneseme za to žádnou odpovědnost.
          </p>
          <p className="conditions-text">
          4.4.	Uživatelský účet je osobní, a nejste tedy oprávněni umožnit jeho využívání třetím osobám.
          </p>
          <p className="conditions-text">
          4.5.	Váš Uživatelský účet můžeme zrušit, a to zejména v případě, když jej více, než 36 měsíců nevyužíváte, či v případě, kdy porušíte své povinnosti dle Smlouvy.
          </p>
          <p className="conditions-text">
          4.6.	Uživatelský účet nemusí být dostupný nepřetržitě, a to zejména s ohledem na nutnou údržbu hardwarového a softwarového vybavení.
          </p>
          <p className="conditions-text">
          <span className="important">5.	CENOVÉ A PLATEBNÍ PODMÍNKY, VÝHRADA VLASTNICKÉHO PRÁVA</span>
          </p>
          <p className="conditions-text">
          5.1.	Cena je vždy uvedena v rámci E-shopu, v návrhu Objednávky a samozřejmě ve Smlouvě. V případě rozporu mezi Cenou uvedenou u Zboží v rámci E-shopu a Cenou uvedenou v návrhu Objednávky se uplatní Cena uvedená v návrhu Objednávky, která bude vždy totožná s cenou ve Smlouvě. V rámci návrhu Objednávky je též uvedena Cena za dopravu, případně podmínky, kdy je doprava zdarma.
          </p>
          <p className="conditions-text">
          5.2.	Celková cena je uvedena včetně DPH včetně veškerých poplatků stanovených zákonem.
          </p>
          <p className="conditions-text">
          5.3.	Platbu Celkové ceny po Vás budeme požadovat po uzavření Smlouvy a před předáním Zboží. V případě bezhotovostní platby je závazek kupujícího uhradit kupní cenu splněn okamžikem připsání příslušné částky na účet prodávajícího. Úhradu Celkové ceny můžete provést následujícími způsoby:
          </p>
          <p className="conditions-text padded">
          a)	Bankovním převodem. Informace pro provedení platby Vám zašleme v rámci potvrzení Objednávky. V případě platby bankovním převodem je Celková cena splatná do splatná do 7 dnů od uzavření kupní smlouvy.
          </p>
          <p className="conditions-text padded">
          b)	Kartou online. V takovém případě probíhá platba přes platební bránu Shoptet Pay, přičemž platba se řídí podmínkami této platební brány, které jsou dostupné na adrese: <a href="https://www.shoptetpay.com/cs/vseobecne-obchodni-podminky-shoptet-pay/" target="_blank" rel="noopener noreferrer" className="simple-link">https://www.shoptetpay.com/cs/vseobecne-obchodni-podminky-shoptet-pay/</a>.
          </p>
          <p className="conditions-text">
          5.4.	Faktura bude vystavena v elektronické podobě po uhrazení Celkové ceny a bude zaslána na Vaši e-mailovou adresu. Faktura bude též fyzicky přiložena ke Zboží.
          </p>
          <p className="conditions-text">
          5.5.	Vlastnické právo ke Zboží na Vás přechází až poté, co zaplatíte Celkovou cenu a Zboží převezmete. V případě platby bankovním převodem je Celková cena zaplacena připsáním na Náš účet, v ostatních případech je zaplacena v okamžik provedení platby.
          </p>
          <p className="conditions-text">
          <span className="important">6.	DORUČENÍ ZBOŽÍ, PŘECHOD NEBEZPEČÍ ŠKODY NA VĚCI</span>
          </p>
          <p className="conditions-text">
          6.1.	Zboží Vám bude doručeno způsobem dle Vaší volby, přičemž můžete vybírat z následujících možností:
          </p>
          <p className="conditions-text padded">
          a)	Doručení prostřednictvím dopravních společností DPD nebo Zásilkovna;
          </p>
          <p className="conditions-text">
          6.2.	Zboží je možné doručit pouze v rámci České republiky.
          </p>
          <p className="conditions-text">
          6.3.	Doba doručení Zboží vždy závisí na jeho dostupnosti a na zvoleném způsobu doručení a platby. Předpokládaná doba doručení Zboží Vám bude sdělena v potvrzení Objednávky. Doba uvedená na E-shopu je pouze orientační a může se lišit od skutečné doby dodání. 
          </p>
          <p className="conditions-text">
          6.4.	Po převzetí Zboží od dopravce je Vaše povinnost zkontrolovat neporušenost obalu Zboží a v případě jakýchkoli závad tuto skutečnost neprodleně oznámit dopravci a Nám. V případě, že došlo k závadě na obalu, která svědčí o neoprávněné manipulaci a vstupu do zásilky, není Vaší povinností Zboží od dopravce převzít.
          </p>
          <p className="conditions-text">
          6.5.	V případě, kdy porušíte svoji povinnost převzít Zboží, s výjimkou případů dle čl. 6.4 Podmínek, nemá to za následek porušení Naší povinnosti Vám Zboží doručit. Zároveň to, že Zboží nepřevezmete, není odstoupení od Smlouvy mezi Námi a Vámi. Nám ale v takovém případě vzniká právo od Smlouvy odstoupit z důvodu Vašeho podstatného porušení Smlouvy. Pokud se rozhodneme tohoto práva využít, je odstoupení účinné v den, kdy Vám toto odstoupení doručíme. Odstoupení od Smlouvy nemá vliv na nárok na uhrazení Ceny za dopravu, případně na nárok na náhradu škody, pokud vznikla.
          </p>
          <p className="conditions-text">
          6.6.	Pokud je z důvodů vzniklých na Vaší straně Zboží doručováno opakovaně nebo jiným způsobem, než bylo ve Smlouvě dohodnuto, je Vaší povinností nahradit Nám náklady s tímto opakovaným doručením spojené. Platební údaje pro zaplacení těchto nákladů Vám zašleme na Vaši e-mailovou adresu uvedenou ve Smlouvě a jsou splatné 14 dnů od doručení e-mailu.
          </p>
          <p className="conditions-text">
          6.7.	Nebezpeční škody na Zboží na Vás přechází v okamžiku, kdy ho převezmete. V případě, kdy Zboží nepřevezmete, s výjimkou případů dle čl. 6.4 Podmínek, na Vás nebezpečí škody na Zboží přechází v okamžiku, kdy jste měli možnost ho převzít, ale z důvodů na Vaší straně k převzetí nedošlo. Přechod nebezpečí škody na Zboží pro Vás znamená, že od tohoto okamžiku nesete veškeré důsledky spojené se ztrátou, zničením, poškozením či jakýmkoli znehodnocením Zboží.
          </p>
          <p className="conditions-text">
          6.8.	V případě, že Zboží nebylo v E-shopu uvedeno jako skladem a byla uvedena orientační doba dostupnosti Vás budeme vždy informovat v případě:
          </p>
          <p className="conditions-text padded">
          a)	mimořádného výpadku výroby Zboží, přičemž Vám vždy sdělíme novou očekávanou dobu dostupnosti nebo informace o tom, že nebude možné Zboží dodat;
          </p>
          <p className="conditions-text padded">
          b)	prodlení s dodáním Zboží od Našeho dodavatele, přičemž Vám vždy sdělíme novou očekávanou dobu dodání.
          </p>
          <p className="conditions-text">
          6.9.	V případě, že nebudeme schopni Vám Zboží dodat ani do 30 dnů od uplynutí doby doručení Zboží uvedené v potvrzení Objednávky, a to z jakéhokoli důvodu, jsme My i Vy oprávněni od Smlouvy odstoupit.
          </p>
          <p className="conditions-text">
          <span className="important" id="conditions-return">7.  PRÁVA Z VADNÉHO PLNĚNÍ</span>
          </p>
          <p className="conditions-text">
          7.1.	Zaručujeme, že v době přechodu nebezpečí škody na Zboží podle čl. 6.7 Podmínek je Zboží bez vad, zejména pak, že:
          </p>
          <p className="conditions-text padded">
          a)	má vlastnosti, které jsme si s Vámi dohodnuli, a pokud nebyly výslovně dohodnuty, pak takové, které jsme u popisu Zboží uvedli, případně takové, které lze s ohledem na povahu Zboží očekávat;
          </p>
          <p className="conditions-text padded">
          b)	je vhodné pro účely, které jsme uvedli nebo pro účely, které jsou pro Zboží tohoto typu obvyklé;
          </p>
          <p className="conditions-text padded">
          c)	odpovídá jakosti nebo provedení dohodnutého vzorku, pakliže byla jakost nebo provedení stanovena podle vzorku;
          </p>
          <p className="conditions-text padded">
          d)	je v odpovídajícím množství a hmotnosti;
          </p>
          <p className="conditions-text padded">
          e)	splňuje požadavky na něj kladené právními předpisy;
          </p>
          <p className="conditions-text padded">
          f)	není zatíženo právy třetích stran.
          </p>
          <p className="conditions-text">
          7.2.	Práva a povinnosti ohledně práv z vadného plnění se řídí příslušnými obecně závaznými právními předpisy (zejména ustanoveními § 1914 až 1925, § 2099 až 2117 a § 2161 až 2174 Občanského zákoníku a zákonem č. 634/1992 Sb., o ochraně spotřebitele, ve znění pozdějších předpisů).
          </p>
          <p className="conditions-text">
          7.3.	V případě, že bude mít Zboží vadu, tedy zejména pokud nebude splněna některá z podmínek dle čl. 7.1, můžete Nám takovou vadu oznámit a uplatnit práva z vadného plnění (tedy Zboží reklamovat) zasláním e-mailu či dopisu na Naše adresy uvedené u Našich identifikačních údajů. Pro reklamaci můžete využít také vzorový formulář poskytovaný z Naší strany, který tvoří přílohu č. 1 Podmínek. V uplatnění práva z vadného plnění je třeba zvolit, jak chcete vadu vyřešit, přičemž tuto volbu nemůžete následně, s výjimkou případů dle čl. 7.4, bez Našeho souhlasu změnit. Reklamaci vyřídíme v souladu s Vámi uplatněným právem z vadného plnění. V případě, že si nezvolíte řešení vady, máte práva uvedená v čl. 7.5 i v situacích, kdy vadné plnění bylo podstatným porušením Smlouvy.
          </p>
          <p className="conditions-text">
          7.4.	Je-li vadné plnění podstatným porušením Smlouvy, máte následující práva:
          </p>
          <p className="conditions-text padded">
          a)	na odstranění vady dodáním nového Zboží bez vady, nebo dodáním chybějící části Zboží;
          </p>
          <p className="conditions-text padded">
          b)	na odstranění vady opravou Zboží;
          </p>
          <p className="conditions-text padded">
          c)	na přiměřenou slevu z Ceny;
          </p>
          <p className="conditions-text padded">
          d)	na odstoupení od Smlouvy.
          </p>
          <p className="conditions-text">
          V případě, že zvolíte vyřešení dle bodů a) nebo b) a My vadu takto neodstraníme v přiměřené lhůtě, kterou jsme uvedli, nebo Vám sdělíme, že tímto způsobem vadu neodstraníme vůbec, máte práva dle bodů c) a d), i když jste je v rámci reklamace původně nepožadovali. Zároveň pokud si zvolíte odstranění vady opravou Zboží a My zjistíme, že je vada neopravitelná, oznámíme Vám to a můžete si zvolit jiný způsob odstranění vady.
          </p>
          <p className="conditions-text">
          7.5.	Je-li vadné plnění nepodstatným porušením Smlouvy, máte následující práva:
          </p>
          <p className="conditions-text padded">
          a)	na odstranění vady dodáním nového Zboží bez vady, nebo dodáním chybějící části Zboží;
          </p>
          <p className="conditions-text padded">
          b)	na odstranění vady opravou Zboží;
          </p>
          <p className="conditions-text padded">
          c)	na přiměřenou slevu z Ceny.
          </p>
          <p className="conditions-text">
          Pokud však vadu neodstraníme včas nebo odmítneme vadu odstranit, vzniká Vám právo od Smlouvy odstoupit. Odstoupit můžete také v případě, kdy nemůžete Zboží řádně užívat pro opakovaný výskyt vad po opravě Zboží nebo při větším počtu vad Zboží.
          </p>
          <p className="conditions-text">
          7.6.	V případě podstatného i nepodstatného porušení nemůžete odstoupit od Smlouvy, ani požadovat dodání nové věci, pokud nemůžete vrátit Zboží ve stavu, v jakém jste ho obdrželi. To ale neplatí v následujících případech:
          </p>
          <p className="conditions-text padded">
          a)	došlo-li ke změně stavu Zboží v důsledku prohlídky za účelem zjištění vady;
          </p>
          <p className="conditions-text padded">
          b)	bylo-li Zboží použito ještě před objevením vady;
          </p>
          <p className="conditions-text padded">
          c)	nebyla-li nemožnost vrácení Zboží v nezměněném stavu způsobena Vaším jednáním anebo Vaším opomenutím,
          </p>
          <p className="conditions-text padded">
          d)	došlo-li z Vaší strany před objevením vady k prodeji, spotřebování nebo pozměnění Zboží při obvyklém použití; pokud k tomu však došlo jen částečně, je Vaší povinností tu část Zboží, kterou vrátit lze a v takovém případě Vám nebude vrácena část Cen odpovídající Vašemu prospěchu z užití části Zboží.
          </p>
          <p className="conditions-text">
          7.7.	Do 3 dnů od obdržení reklamace Vám na e-mailovou adresu potvrdíme, že jsme reklamaci obdrželi, kdy jsme ji obdrželi a předpokládanou dobu trvání vyřízení reklamace. Reklamaci vyřídíme bez zbytečného odkladu, nejpozději však do 30 dnů od jejího obdržení. Lhůta může být po naší vzájemné dohodě prodloužena. Pokud lhůta marně uplyne, můžete odstoupit od Smlouvy.
          </p>
          <p className="conditions-text">
          7.8.	O vyřízení reklamace Vás budeme informovat e-mailem. Pokud je reklamace oprávněná, náleží Vám náhrada účelně vynaložených nákladů. Tyto náklady jste povinni prokázat, např. účtenkami či potvrzeními o ceně za dopravu. V případě, že došlo k odstranění vady dodáním nového Zboží, je Vaší povinností Nám původní Zboží vrátit, náklady na toto vrácení však hradíme My.
          </p>
          <p className="conditions-text">
          7.9.	V případě, že jste podnikateli, je Vaší povinností oznámit a vytknout vadu bez zbytečného odkladu poté, co jste ji mohli zjistit, nejpozději však do tří dnů od převzetí Zboží.
          </p>
          <p className="conditions-text">
          7.10.	V případě, že jste spotřebitel, máte právo uplatit práva z vadného plnění u vady, která se vyskytne u spotřebního Zboží ve lhůtě 24 měsíců od převzetí Zboží.
          </p>
          <p className="conditions-text">
          7.11.	Ustanovení ohledně práva z vad se nepoužijí v případě:
          </p>
          <p className="conditions-text padded">
          a)	Zboží, které je prodávané za nižší Cenu, na vadu, pro kterou byla nižší Cena ujednána;
          </p>
          <p className="conditions-text padded">
          b)	opotřebení Zboží způsobeného jeho obvyklým užíváním;
          </p>
          <p className="conditions-text padded">
          c)	použitého Zboží na vadu odpovídající míře používání nebo opotřebení, kterou Zboží mělo, když jste jej převzali;
          </p>
          <p className="conditions-text padded">
          d)	kdy to vyplývá z povahy Zboží.
          </p>
          <p className="conditions-text">
          <span className="important">8.	ODSTOUPENÍ OD SMLOUVY</span>
          </p>
          <p className="conditions-text">
          8.1.	K odstoupení od Smlouvy, tedy k ukončení smluvního vztahu mezi Námi a Vámi od jeho počátku, může dojít z důvodů a způsoby uvedenými v tomto článku, případně v dalších ustanoveních Podmínek, ve kterých je možnost odstoupení výslovně uvedena.
          </p>
          <p className="conditions-text">
          8.2.	V případě, že jste spotřebitel, tedy osoba kupující Zboží mimo rámec své podnikatelské činnosti, máte v souladu s ustanovením §1829 občanského zákoníku právo odstoupit od Smlouvy bez udání důvodu ve lhůtě 14 dnů ode dne doručení Zboží. V případě, že jsme uzavřeli Smlouvu, jejímž předmětem je několik druhů Zboží nebo dodání několika částí Zboží, začíná tato lhůta běžet až dnem dodání poslední části Zboží, a v případě, že jsme uzavřeli Smlouvu, na základě které Vám budeme Zboží dodávat pravidelně a opakovaně, začíná běžet dnem dodání první dodávky. Od Smlouvy můžete odstoupit jakýmkoliv prokazatelným způsobem (zejména zasláním e-mailu nebo dopisu na Naše adresy uvedené u Našich identifikačních údajů). Pro odstoupení můžete využít také vzorový formulář poskytovaný z Naší strany, který tvoří přílohu č. 2 Podmínek.
          </p>
          <p className="conditions-text">
          8.3.	Ani jako spotřebitel však nemůžete od Smlouvy odstoupit v případech, kdy je předmětem Smlouvy:
          </p>
          <p className="conditions-text padded">
          a)	Zboží, jehož Cena závisí na výchylkách finančního trhu nezávisle na Naší vůli a může k nim dojít během lhůty pro odstoupení od Smlouvy;
          </p>
          <p className="conditions-text padded">
          b)	dodání alkoholických nápojů, které mohou být dodány až po uplynutí třiceti dnů a jejich Cena závisí na výchylkách finančního trhu nezávislých na Naší vůli;
          </p>
          <p className="conditions-text padded">
          c)	Zboží, které bylo upraveno podle Vašeho přání nebo pro Vaši osobu;
          </p>
          <p className="conditions-text padded">
          d)	Zboží, které podléhá rychlé zkáze a Zboží, které bylo po dodání nenávratně smíseno s jiným;
          </p>
          <p className="conditions-text padded">
          e)	Zboží v uzavřeném obalu, které bylo z obalu vyňato a z hygienických důvodů jej není možné vrátit;
          </p>
          <p className="conditions-text padded">
          f)	dodávka zvukové nebo obrazové nahrávky nebo počítačového programu, pokud došlo k porušení původního obalu;
          </p>
          <p className="conditions-text padded">
          g)	dodávka novin, periodik nebo časopisů;
          </p>
          <p className="conditions-text padded">
          h)	dodání digitálního obsahu, pokud nebyl dodán na hmotném nosiči a byl dodán s Vaším předchozím výslovným souhlasem před uplynutím lhůty pro odstoupení od Smlouvy a My jsme Vám sdělili, že nemáte právo na odstoupení od Smlouvy.
          </p>
          <p className="conditions-text">
          8.4.	Lhůta k odstoupení dle čl. 8.2 Podmínek se považuje za zachovanou, pokud Nám v jejím průběhu odešlete oznámení, že od Smlouvy odstupujete.
          </p>
          <p className="conditions-text">
          8.5.	V případě odstoupení od Smlouvy Vám bude Cena vrácena do 14 dnů ode dne účinnosti odstoupení na účet, ze kterého byla připsána, případně na účet zvolený odstoupení od Smlouvy. Částka však nebude vrácena dříve, než Nám Zboží vrátíte či než prokážete, že došlo k jeho zaslání zpět Nám. Zboží Nám prosím vracejte čisté, pokud možno včetně originálního obalu.
          </p>
          <p className="conditions-text">
          8.6.	V případě odstoupení od Smlouvy dle čl. 8.2 Podmínek jste povinní Nám Zboží zaslat do 14 dnů od odstoupení a nesete náklady spojené s navrácením zboží k Nám. Vy máte naopak nárok na to, abychom Vám vrátili Cenu za dopravu, avšak pouze ve výši odpovídající nejlevnějšímu nabízenému způsobu dodání Zboží, který jsme pro dodání Zboží nabízeli. V případě odstoupení z důvodu, že My porušíme uzavřenou Smlouvu, hradíme i náklady spojené s navrácením zboží k Nám, ovšem opět pouze do výše Ceny za dopravu ve výši odpovídající nejlevnějšímu nabízenému způsobu dodání Zboží, který jsme při dodání Zboží nabízeli.
          </p>
          <p className="conditions-text">
          8.7.	Odpovídáte Nám škodu v případech, kdy bude Zboží poškozeno v důsledku Vašeho nakládání s ním jinak, než je nutné s ním nakládat s ohledem na jeho povahu a vlastnosti. Způsobenou škodu Vám v takovém případě vyúčtujeme poté, co Nám Zboží bude vráceno a splatnost vyúčtované částky je 14 dní. V případě, že jsme Vám ještě nevrátili Cenu, jsme oprávněni pohledávku z titulu nákladů započíst na Vaši pohledávku na vrácení Ceny.
          </p>
          <p className="conditions-text">
          8.8.	My jsme oprávněni odstoupit od Smlouvy kdykoliv před tím, než Vám dodáme Zboží, pokud existují objektivní důvody, proč není možné Zboží dodat (zejména důvody na straně třetích osob nebo důvody spočívající v povaze Zboží), a to i před uplynutím doby uvedené v čl. 6.9. Podmínek. Můžeme také od Smlouvy odstoupit, pokud je zjevné, že jste uvedli v Objednávce záměrně nesprávné informace. V případě, že nakupujete zboží v rámci své podnikatelské činnosti, tedy jako podnikatel, jsme oprávněni od Smlouvy odstoupit kdykoli, i bez udání důvodu.
          </p>
          <p className="conditions-text">
          <span className="important">9.	ŘEŠENÍ SPORŮ SE SPOTŘEBITELI</span>
          </p>
          <p className="conditions-text">
          9.1.	Nejsme ve vztahu ke kupujícím vázáni žádnými kodexy chování ve smyslu ustanovení § 1826 odst. 1 písm. e) Občanského zákoníku.
          </p>
          <p className="conditions-text">
          9.2.	Vyřizování stížností spotřebitelů zajišťujeme prostřednictvím elektronické adresy info@bunnyandbro.cz či telefonicky - {!revealPhone ? (<span className="simple-link" onClick={() => {setRevealPhone(!revealPhone)}}>ukázat kontakt</span>) : (<span className="simple-link" onClick={() => {setRevealPhone(!revealPhone)}}>+420 777 713 718</span>)}. Informaci o vyřízení stížnosti zašleme na elektronickou adresu kupujícího.
          </p>
          <p className="conditions-text">
          9.3.	K mimosoudnímu řešení spotřebitelských sporů ze Smlouvy je příslušná Česká obchodní inspekce, se sídlem Štěpánská 567/15, 120 00 Praha 2, IČ: 000 20 869, internetová adresa: <a href="http://www.coi.cz" target="_blank" rel="noopener noreferrer" className="simple-link">http://www.coi.cz</a>. Platformu pro řešení sporů on-line nacházející se na internetové adrese <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="simple-link">http://ec.europa.eu/consumers/odr</a> je možné využít při řešení sporů mezi prodávajícím a kupujícím, který je spotřebitelem, z kupní smlouvy uzavřené elektronickými prostředky.
          </p>
          <p className="conditions-text">
          9.4.	Evropské spotřebitelské centrum Česká republika, se sídlem Štěpánská 567/15, 120 00 Praha 2, internetová adresa: <a href="http://www.evropskyspotrebitel.cz" target="_blank" rel="noopener noreferrer" className="simple-link">http://www.evropskyspotrebitel.cz</a> je kontaktním místem podle Nařízení Evropského parlamentu a Rady (EU) č. 524/2013 ze dne 21. května 2013, o řešení spotřebitelských sporů on-line a o změně nařízení (ES) č. 2006/2004 a směrnice 2009/22/ES (nařízení o řešení spotřebitelských sporů on-line).
          </p>
          <p className="conditions-text">
          <span className="important">10.	ZÁVĚREČNÁ USTANOVENÍ</span>
          </p>
          <p className="conditions-text">
          10.1.	Pokud Náš a Váš právní vztah obsahuje mezinárodní prvek (tedy například budeme zasílat zboží mimo území České republiky), bude se vztah vždy řádit právem České republiky. Pokud jste však spotřebitelé, nejsou tímto ujednáním dotčena Vaše práva plynoucí z právních předpisů.
          </p>
          <p className="conditions-text">
          10.2.	Veškerou písemnou korespondenci si s Vámi budeme doručovat elektronickou poštou. Naše e-mailová adresa je uvedena u Našich identifikačních údajů. My budeme doručovat korespondenci na Vaši e-mailovou adresu uvedenou ve Smlouvě, v Uživatelském účtu nebo přes kterou jste nás kontaktovali.
          </p>
          <p className="conditions-text">
          10.3.	Smlouvu je možné měnit pouze na základě naší písemné dohody. My jsme však oprávněni změnit a doplnit tyto Podmínky, tato změna se však nedotkne již uzavřených Smluv, ale pouze Smluv, které budou uzavřeny po účinnosti této změny.
          </p>
          <p className="conditions-text">
          10.4.	V případě vyšší moci nebo událostí, které nelze předvídat (přírodní katastrofa, pandemie, provozní poruchy, výpadky subdodavatelů apod.), neneseme odpovědnost za škodu způsobenou v důsledku nebo souvislosti s případy vyšší moci, a pokud stav vyšší moci trvá po dobu delší než 10 dnů, máme My i Vy právo od Smlouvy odstoupit.
          </p>
          <p className="conditions-text">
          10.5.	Přílohou Podmínek je vzorový formulář pro reklamaci a vzorový formulář pro odstoupení od Smlouvy.
          </p>
          <p className="conditions-text">
          10.6.	Smlouva včetně Podmínek je archivována v elektronické podobě u Nás, ale není Vám přístupná. Vždy však tyto Podmínky a potvrzení Objednávky se shrnutím Objednávky obdržíte e-mailem a budete tedy mít vždy přístup ke Smlouvě i bez Naší součinnosti. Doporučujeme vždy potvrzení Objednávky a Podmínky uložit.
          </p>
          <p className="conditions-text">
          10.7.	Tyto Podmínky nabývají účinnosti <span className="bold">01.08.2022</span>.
          </p>
          <div className="conditions-files">
            <FilePdf size={32} color="#304b4b" /><Link to={file01} className="conditions-link" target="_blank" download>Příloha č. 1 - Formulář pro reklamaci</Link>
          </div>
          <div className="conditions-files">
            <FilePdf size={32} color="#304b4b" /><Link to={file02} className="conditions-link" target="_blank" download> Příloha č. 2 - Formulář pro odstoupení od smlouvy</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
