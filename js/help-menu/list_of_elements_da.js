export const list_of_elements_da = [
    {
        "id":"getting-started-da",
        "title":"Kom i gang",
        "description":"her er en kort intro-tekst til KBs Discovery, evt med links til mere udførlige søgevejledninger andre steder, eller til øvrige sektioner",
        "icon":{"code":"description","group":"action"},
        "template":`
      <p>KB Dsicovery indeholder artiker, bøger, tidsskrifter, databaser, film, musik, afhandlinger og andet mateiriale til dine studier og forskning</p>
      <h2>Søgetips</h2>
    	<tl>
      <li>Kombiner, udvid eller afgræns din søgning med operatorerne OG, ELLER, IKKE. Husk at skrive operatorerne med store bogstaver.</li>
      <li>Brug * til at søge på varianter af et ord, f.eks. ungdom* (ungdommen, ungdomsinstitution, ungdomskriminalitet osv.).</li>
      <li>Brug ? for at erstatte et enkelt bogstav, f.eks. wom?n (woman og women). Du skal bruge ?? for at erstatte æ, ø og å.</li>
      <li>Brug (...) parentes til at gruppere søgeord, f.eks. Regering OR (demokrati ELLER parlamentarisme).</li>
      <li>Brug "..." citationstegn hvis du vil søge på et sammensat begreb, f.eks. "global warming".</li>
      </tl>
      <br />
      <h2>Filtrering</h2>
      <li>Brug filtreringsmuligheder efter søgning til at afgrænse til materialetype - forfatter, emne, årstal, bibliotek m.v.</li>
      <li>Du finder filtrene i højre side - eller i bunden hvis du benytter en telefon eller tablet.</li>
    `
    },
    {
        "id":"tutorials-da",
        "title":"Tutorials - skal vi have det? kan fjernes midlertidigt",
        "description":"at a minimum, links to individual videos and a playlist of existing KB video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",
        "icon":{"code":"shop_two","group":"action"},
    },
    {}, // DIVIDER, // search-specific
    {
        "id":"whats-in-search-da",
        "title":"Hvad søger jeg i?",
        "description":`kort beskrivelse af materialetyper og samlinger, evt. også undermenuer. Nok også link ud til oversigt over CDI samlinger`,
        "icon":{"code":"toc","group":"action"}
    },
    {
        "id":"didnt-find-da",
        "title":"Fandt du ikke det du søgte?",
        "template":`<p>Korte forslag, evt link til færdig version af <a href="https://kub.kb.dk/c.php?g=675327">denne side</a> eller lignende</p>`,
        "icon":{"code":"swap_horiz","group":"action"},
    },
    {}, //DIVIDER, // conceptual
    {
        "id":"guides-da",
        "title":"Fagsider",
        "description":`Skal vi have links til de forskellige universitetsbibliotekers fagsider her?`,
        "icon":{"code":"directions","group":"maps"}
    },
    {
        "id":"glossary-da",
        "title":"Ordliste - giver det mening",
        "description":"list of common terms (jargon) and definitions - måske bedre helt at undgå",
        "icon":{"code":"view_list","group":"action"}
    },
    {}, //DIVIDER,
    {
        "id":"query-builder-da",
        "title":"Query Builder - foreslår, at vi dropper denne",
        "description":`placeholder for this, tbd functionality for future development; interim step may just be to have text demonstrating adv query syntax`,
        "icon":{"code":"find_in_page","group":"action"}
    },
    {}, //DIVIDER, Search Help
    {
        "id":"saving-results-da",
        "title":"Favoritlister og gemte søgninger",
        "description":"information om Mine Favoritter, og hvad vi kan gøre dem, gemte søgninger, søgeagenter",
        "icon":{"code":"save","group":"content"}
    },
    {
        "id":"citing-sources-da",
        "title":"Styr på kilderne",
        "description":"kort oversigt over Primos muligheder, med links til flere informationer om ref managers",
        "icon":{"code":"create","group":"content"}
    },
    {
        "id":"account-da",
        "title":"Min konto",
        "description":"information om min konto  - reserverng, udlån, fornyelser, gebyrer evt link til kontoen",
        "icon":{"code":"account_box","group":"action"}
    },
    {}, //DIVIDER,
    {
        "id":"for-instructors-da",
        "title":"For Undervisere - ? ",
        "description":`may be more "For" sections; will need considerable content work`,
        "icon":{"code":"info","group":"action"},
    },
    {}, //DIVIDER, communication
    {
        "id":"ask-us-da",
        "title":"Spørg biblioteket",
        "description":"needs definition; how to point to chat? link to ask a librarian?",
        "icon":{"code":"forum","group":"communication"}
    },
    {
        "id":"feedback-da",
        "title":"Feedback - behøver vi det?",
        "description":`ved ikke om vi ønsker at linke til en særlige formular for dette`,
        "icon":{"code":"chat","group":"communication"}
    }
];
