export const list_of_elements_da = [
    {
        "id":"getting-started-da",
        "title":"Kom godt i gang",
//      "description":"her er en kort intro-tekst til KBs Discovery, evt med links til mere udførlige søgevejledninger andre steder, eller til øvrige sektioner",
        "icon":{"code":"description","group":"action"},
        "template":`
      <h2>Søgetips</h2>
    	<tl>
      <li>Skriv OG, ELLER, IKKE mellem dine søgeord for at kombinere, udvide eller begrænse dit søgeresultat. Husk at skrive OG, ELLER, IKKE med store bogstaver.</li>
      <li>Brug * i din søgning, hvis du er usikker på, hvordan et ord staves, eller ønsker at din søgning skal omfatte varianter af et ord. F.eks. vil en søgning på <i>col*r</i> give hits på <i>colour</i> og <i>color</i>. En søgning på <i>child*</i> vil give hits på <i>child's</i>, <i>children</i>, <i>childhood</i> osv.</li>
      <li>Brug ? hvis du er usikker på et enkelt bogstav i dit søgeord. F.eks. vil en søgning på <i>su?anne</i> give hits på <i>susanne</i> og <i>suzanne</i>.</li>
      <li>Brug (...) parenteser hvis du vil være sikker på, at dine søgeord grupperes på den rigtige måde. F.eks. <i>Shakespeare OG (sonnet ELLER tragedy)</i>.</li>
      <li>Brug "..." anførselstegn hvis du søger på sammenhængende ord eller sætninger. F.eks. vil en søgning på <i>"climate change"</i> give dig hits, hvor disse ord står ved siden af hinanden i præcis denne rækkefølge.</li>
      </tl>
      <br />
      <h2>Får du for mange hits?</h2>
      <li>Du kan indsnævre søgeresultatet ved at bruge filtreringsmulighederne i venstre side af skærmen. Klikker du f.eks. på <i>Bøger</i> under <i>Materialetyper</i>, afgrænser du dit søgeresultat til kun at vise bøger.</li>
      <li>Se alle vores søgetips på siden <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">Hjælp til søgning</a>.</li>
    `
    },
//    {
//        "id":"tutorials-da",
//        "title":"Tutorials - skal vi have dem? kan fjernes midlertidigt",
//        "description":"at a minimum, links to individual videos and a playlist of existing KB video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",
//        "icon":{"code":"shop_two","group":"action"},
//   },
//    {}, // DIVIDER, // search-specific
    {
        "id":"whats-in-search-da",
        "title":"Hvad søger jeg i?",
 //       "description":`kort beskrivelse af materialetyper og samlinger, evt. også undermenuer. Nok også link ud til oversigt over CDI samlinger`,
        "template":`<p>Du søger i den samlede mængde af materialer fra Det Kgl. Bibliotek, inklusive universitetsbibliotekerne i København, Roskilde og Aarhus.  Det vil sige bøger (trykte og e-bøger), artikler, tidsskrifter, billeder, håndskrifter, noder, film og meget andet.</p>
        <p>I søgesystemet finder du også artikler, anmeldelser, m.m. fra store eksterne databaser som eksempelvis JSTOR, PsycInfo, SocIndex, Scopus, Web of Science osv. </p>
       <p><a href="https://kub.kb.dk/c.php?g=659327">Læs mere om, hvad bibliotekssystemet indeholder</a></p>
       <p>Se også den komplette liste over Det Kgl. Biblioteks <a href="https://www.kb.dk/find-materiale" target="_blank">særlige samlinger</a>.</p>`,
        "icon":{"code":"toc","group":"action"}
    },
        {
        "id":"feedback-da",
        "title":"Login, passwords, PIN-kode?",
        "template":`<p><a href="https://soeg.kb.dk/discovery/account?vid=45KBDK_KGL:KGL&section=personal_details">Skift password og PIN-kode her</a> </p>
        <tl>
        <li>Ansatte og studerende ved <b>AU, KU, RUC</b> skal logge ind via WAYF</li>
        <li>Ansatte ved <b>hospitaler</b> i Region Midtjylland og Region Hovedstaden skal også logge ind via WAYF</li>
        <li><b>Alle andre brugere</b> skal logge ind via NEM-ID første gang - derefter kan de logge ind med email og password.</li>
        <li>Din <b>PIN-kode</b> skal du bruge i udlånsautomaterne.</li>
        </tl>
        <br/>
        <p><a href="https://www.kb.dk/services/laan-og-aflevering" target="_blank">Udvidet vejledning til login.</a> </p>`,
        "icon":{"code":"info","group":"action"},
    },
    {}, //DIVIDER, // conceptual
    {
        "id":"didnt-find-da",
        "title":"Fandt du ikke det du søgte?",
        "template":`<p>Hvis du ikke fandt, det du søgte efter, har du flere muligheder:</p>
        <tl>
        <li>Vi kan forsøge at skaffe materialet til dig fra andre biblioteker </li>
        <li>Vi undersøger, om vi kan købe materialet til biblioteket</li>
        <li>Vi kan hjælpe dig, med at søge videre i andre systemer</li>
        </tl>
        <br/>
        <p><a href="https://kub.kb.dk/c.php?g=675327">Læs mere om mulighederne</a> </p>`,
        "icon":{"code":"swap_horiz","group":"action"},
    },
        {
        "id":"ask-us-da",
        "title":"Spørg biblioteket",
 //       "description":"needs definition; how to point to chat? link to ask a librarian?",
        "template": `<p>Du kan få hjælp til login, søgning, fjernadgang etc. ved at kontakte <a href="https://www.kb.dk/spoerg-biblioteket" target="_blank">Spørg Biblioteket.</a></p>`,
        "icon":{"code":"forum","group":"communication"}
    },
//    {}, //DIVIDER, // conceptual
//    {
//       "id":"guides-da",
//        "title":"Fagsider",
//        "description":`Skal vi have links til de forskellige universitetsbibliotekers fagsider her?`,
//        "icon":{"code":"directions","group":"maps"}
//    },
//    {
//        "id":"glossary-da",
//        "title":"Ordliste - giver det mening",
//        "description":"list of common terms (jargon) and definitions - måske bedre helt at undgå",
//        "icon":{"code":"view_list","group":"action"}
//    },
//    {}, //DIVIDER,
//    {
//        "id":"query-builder-da",
//        "title":"Query Builder - foreslår, at vi dropper denne",
//        "description":`placeholder for this, tbd functionality for future development; interim step may just be to have text //demonstrating adv query syntax`,
//        "icon":{"code":"find_in_page","group":"action"}
//    },
    {}, //DIVIDER, Search Help
    {
        "id":"account-da",
        "title":"Min konto",
        "description":"information om min konto  - reserverng, udlån, fornyelser, gebyrer evt link til kontoen",
    	"template": `<p>For at se din konto skal du være logget ind. Du finder din konto ved at klikke på dit navn i øverste højre hjørne af skærmen. </p>
    	<p>Her har du mulighed for at se dine lån og reservationer, forny hjemlån, betale gebyrer og ændre pinkode m.m.</p>
    	 <p><a href="" target="_blank">Hjælp til login.</a></p>`,
        "icon":{"code":"account_box","group":"action"}
    },
    {
        "id":"saving-results-da",
        "title":"Mine favoritter og gemte søgninger",
        "template":  `<p> Når du er logget ind, har du mulighed for at gemme søgninger og gemme enkeltresultater til senere brug i ’Mine favoritter’.</p>
			<p> Se mere under <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">Hjælp til søgning</a> </p> `,
        "icon":{"code":"save","group":"content"}
    },
    {
        "id":"citing-sources-da",
        "title":"Hjælp til referencehåndtering",
        "description":"kort oversigt over Primos muligheder, med links til flere informationer om ref managers",
        "template":  `<p> Bibliotekssystemet indeholder flere værktøjer til referencehåndtering, bl.a. Mendely, Endnote og Refworks. Du finder dem under de tre prikker ved hvert materiale i resultatlisten.</p>
           <p>Bruger du Zotero, ligger den ikke her, men i din browser. <a href="https://kub.kb.dk/zotero" target="_blank">Læs mere om Zotero</a>.</p>
			<p> Du kan læse mere om referencehåndtering på <a href="https://library.au.dk/studerende/referencehaandtering/" target="_blank">AU Librarys side om emnet</a>.</p> `,
        "icon":{"code":"create","group":"content"}
    },

//    {}, //DIVIDER,
//    {
//        "id":"for-instructors-da",
//        "title":"For Undervisere - ? ",
//        "description":`may be more "For" sections; will need considerable content work`,
//        "icon":{"code":"info","group":"action"},
//    },
//    {}, //DIVIDER, communication
//    {
//        "id":"ask-us-da",
//        "title":"Spørg biblioteket",
//        "description":"needs definition; how to point to chat? link to ask a librarian?",
//        "icon":{"code":"forum","group":"communication"}
//    },
//    {
//        "id":"feedback-da",
//        "title":"Feedback - behøver vi det?",
//        "description":`ved ikke om vi ønsker at linke til en særlige formular for dette`,
//        "icon":{"code":"chat","group":"communication"}
//    }
];
