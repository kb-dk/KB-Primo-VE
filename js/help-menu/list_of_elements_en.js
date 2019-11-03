export const list_of_elements_en = [
    {
        "id":"getting-started-en",
        "title":"Getting Started",
        "description":"brief static html content with an overview on how to use BULS; links to direct to main BULS help page in WordPress, other pages, and/or other sections of the menu",
        "icon":{"code":"description","group":"action"},
        "template":`
      <h2>Search Tips</h2>
      <tl>
      <li>Combine, expand, or limit your search through the operators AND, OR, NOT. Please remember to write the operators with capital letters.</li>
      <li>Use * as a wildcard character to search for variants of a word, for instance pest* (pester, pesticide, pestilence, etc.)</li>
      <li>Use ? as a wildcard to replace a single letter, for instance wom?n (woman and women). You must use ?? to replace æ, ø, and å.</li>
      <li>Use (...) parenthesis to group query words, for instance Government AND (democracy OR cabinet responsibility).</li>
      <li>Use "..." quotation marks, if you want to search for a compound term, for instance "global warming".</li>
      </tl>
      <br />
      <h2>Filtering</h2>
      <li>Use the filtering features after the search to limit for type of material, author, subject, year, library, etc.</li>
      <li>You find the filter options to the left of the results list - or at the bottom of the screen, if you use a telephone or tablet.</li>
    `
    },
//   {
//        "id":"tutorials-en",
//        "title":"Tutorials",
//        "description":"at a minimum, links to individual videos and a playlist of existing BULS video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",
//        "icon":{"code":"shop_two","group":"action"},
//    },
//    {}, // DIVIDER, // search-specific

    {
        "id":"whats-in-search-en",
        "title":"What's in Search?",
//        "description":`brief description of material types, "scopes", and collections; may have submenus for each of the above; likely also link out to WordPress page with all PCI collections`,
        "template":`<p>Du søger i den samlede mængde af materialer fra Det Kgl. Bibliotek, inklusive universitetsbibliotekerne i København, Roskilde og Aarhus.  Det vil sige bøger (trykte og e-bøger), artikler, tidsskrifter, billeder, håndskrifter, noder, film, online materialer og meget andet.</p>
        <p>I søgesystemet finder du også artikler, anmeldelser, m.m. fra store eksterne databaser som eksempelvis JSTOR, PsycInfo, SocIndex, Scopus, Web of Science, Infomedia osv. </p>
       <p><a href="https://kub.kb.dk/c.php?g=659327">Læs mere om, hvad søgesystemet indeholder</a></p>
       <p>Se også den komplette liste over Det Kgl. Biblioteks <a href= >særlige samlinger</a>.</p>`,
        "icon":{"code":"toc","group":"action"}
    },
    {}, //DIVIDER, communication
    {
        "id":"didnt-find-en",
        "title":"Didn't find it?",
        "template":`<p>Hvis du ikke fandt, det du søgte efter, har du flere muligheder.</p>
        <tl>
        <li>Vi kan forsøge skaffe materialet til dig fra andre biblioteket </li>
        <li>Vi undersøger, om vi kan købe materialet til biblioteket</li>
        <li>Du kan selv søge videre i andre systemer</li>
        </tl>
        <p><a href="https://kub.kb.dk/c.php?g=675327">Læs mere her</a> </p>`,
        "icon":{"code":"swap_horiz","group":"action"},
    },
    {
        "id":"ask-us-en",
        "title":"Ask Us",
        "description":"needs definition; how to point to chat? link to ask a librarian?",
        "template": `<p>Du kan få hjælp til login, søgning, fjernadgang etc. ved at kontakte <a href="https://www.kb.dk/spoerg" target="_blank">Spørg Biblioteket.</a></p>`,
        "icon":{"code":"forum","group":"communication"}
    },

//   {}, //DIVIDER, // conceptual
//    {
//        "id":"guides-en",
//        "title":"Guides",
//        "description":`info about research, subject, course, and how to guides; how to find in BULS by way of search and related more info links; link out to LibGuides home`,
//        "icon":{"code":"directions","group":"maps"}
//   },
//   {
//        "id":"glossary-en",
//       "title":"Glossary",
//       "description":"list of common terms (jargon) and definitions",
//        "icon":{"code":"view_list","group":"action"}
//    },
//    {}, //DIVIDER,
//    {
//        "id":"query-builder-en",
//        "title":"Query Builder",
//        "description":`placeholder for this, tbd functionality for future development; interim step may just be to have text demonstrating adv query syntax`,
//       "icon":{"code":"find_in_page","group":"action"}
//   },
    {}, //DIVIDER, Search Help
     {
        "id":"account-en",
        "title":"Account",
        "description":"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",
        "template": `<p>For at se din konto skal du være logget ind. Du finder din konto ved at klikke på dit navn i øverste højre hjørne af skærmen. </p>
    	<p>Her har du mulighed for at se dine lån og reservationer, forny hjemlån, betale gebyrer og ændre pinkode m.m.</p>
    	 <p><a href="" target="_blank">Hjælp til login.</a></p>`,
        "icon":{"code":"account_box","group":"action"}
    },
    {
        "id":"saving-results-en",
        "title":"Saving Results",
        "description":"information about My Favorites, exporting results, ref managers",
        "template":  `<p> Når du er logget ind til biblioteket, har du mulighed for at gemme søgninger og gemme links til materialer i ’Mine favoritter’.</p>
			<p> Se mere under <a href="" target="_blank">Hjælp til søgning</a> </p> `,
        "icon":{"code":"save","group":"content"}
    },
    {
        "id":"citing-sources-en",
        "title":"Citing Sources",
        "description":"likely, but may depend on if including saving results; would have info about ref managers",
        "template":  `<p> Søgesystemet indeholder flere værktøjer til referencehåndtering, bl.a. Mendely, Endnote og Refworks. Du finder dem under de tre prikker ved hvert materiale i resultatlisten.</p>
           <p>Bruger du Zotero, ligger den ikke her, men i din browser. <a href="https://kub.kb.dk/zotero" target="_blank">Læs mere om Zotero</a>.</p>
			<p> Du kan læse mere om referencehåndtering på <a href="https://library.au.dk/studerende/referencehaandtering/" target="_blank">AU Librarys side om emnet</a>.</p> `,
        "icon":{"code":"create","group":"content"}
    },
//    {}, //DIVIDER,
//    {
//        "id":"for-instructors-en",
//        "title":"For Instructors",
//        "description":`may be more "For" sections; will need considerable content work`,
//        "icon":{"code":"info","group":"action"},
//    },

//    {
//        "id":"feedback-en",
//        "title":"Feedback",
//        "description":`directs to a new form to send feedback in the format of specific questions, e.g. "rate your experience", "did you find what you're looking for?", "send us your thoughts on improving search"; will want to clearly differentiate from Ask and reference help, so that patrons who need help soon can get it`,
//        "icon":{"code":"chat","group":"communication"}
//    }
];
