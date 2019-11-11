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
      <li>Use * as a wildcard character to search for variants of a word, for instance <i>pest*</i> (pester, pesticide, pestilence, etc.)</li>
      <li>Use ? as a wildcard to replace a single letter, for instance <i>wom?n</i> for <i>woman</i> and <i>women</i>.</li>
      <li>Use (...) parenthesis to group query words, for instance <i>Government AND (democracy OR cabinet responsibility)</i>.</li>
      <li>Use "..." quotation marks, if you want to search for a compound term, for instance <i>"global warming"</i>.</li>
      </tl>
      <br />
      <h2>Too many results?</h2>
      <li>Use the filtering features to the left of the results list to limit your results by type of material, author, subject, year, library, etc.</li>
      <li>Find more search tips on our <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">general services page</a>.</li>
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
        "title":"What am I searching?",
//        "description":`brief description of material types, "scopes", and collections; may have submenus for each of the above; likely also link out to WordPress page with all PCI collections`,
        "template":`<p>Your search will cover the full collections of the Royal Danish Library, including the library collections of Copenhagen, Roskilde and Aarhus universities. These include books (print and electronic), articles, journals, images, manuscripts, scores, film, and more.</p>
        <p>You will also find articles, reviews, etc., from major external databases like JSTOR, PsycInfo, SocIndex, Scopus, Web of Science, and more. </p>
       <p><a href="https://kub.kb.dk/c.php?g=659333&p=4653941">Learn more about what the search system covers</a></p>
       <p>Additionally, see the full list of the Royal Danish Library <a href= >special collections</a>.</p>`,
        "icon":{"code":"toc","group":"action"}
    },
            {
        "id":"feedback-en",
        "title":"Login, passwords, PIN code?",
        "template":`<p><a href="https://soeg.kb.dk/discovery/account?vid=45KBDK_KGL:KGL&section=personal_details">Change password and PIN code</a> </p>
        <tl>
        <li><b>AU, KU, RUC</b> students and faculty log in using WAYF and their institution credentials.</li>
        <li><b>Hospital</b> employees in Region Midtjylland and Region Hovedstaden also use WAYF to log in.</li>
        <li><b>All other users</b> need to log in using NEM-ID the first time - then email and password can be used to log in.</li>
        <li>Your <b>PIN code</b> is for use in the self-service lending machines.</li>
        </tl>
        <br/>
        <p><a href="https://kub.kb.dk/c.php?g=">Need more help?</a> </p>`,
        "icon":{"code":"info","group":"action"},
    },
    {}, //DIVIDER, communication
    {
        "id":"didnt-find-en",
        "title":"Didn't find it?",
        "template":`<p>If you could not find what you were looking for, we provide several service options.</p>
        <tl>
        <li>We will try to retrieve the item from a different library. </li>
        <li>We might be able to purchase the item, and make it available to library users.</li>
        <li>We can guide you to other search systems</li>
        </tl>
        <br/>
        <p><a href="https://kub.kb.dk/c.php?g=675328">Learn more about these options.</a> </p>`,
        "icon":{"code":"swap_horiz","group":"action"},
    },
    {
        "id":"ask-us-en",
        "title":"Ask the library",
        "description":"needs definition; how to point to chat? link to ask a librarian?",
        "template": `<p>For help with login, search, remote access, etc, please <a href="https://www.kb.dk/spoerg" target="_blank">Ask the Library.</a></p>`,
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
        "title":"My account",
        "description":"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",
        "template": `<p>You need to log in to see your account. You can access your account under your name in the top right corner.</p>
    	<p>Your account provides information on your loans and requestes. You can renew your loans, pay your fines, and change your password and PIN code.</p>
    	 <p><a href="" target="_blank">Get help on login.</a></p>`,
        "icon":{"code":"account_box","group":"action"}
    },
    {
        "id":"saving-results-en",
        "title":"My Favorites, and Saved searches",
        "description":"information about My Favorites, exporting results, ref managers",
        "template":  `<p>You can save searches and individual results in <i>My Favourites</i> if you are logged in.</p>
			<p>You can get more help on our <a href="" target="_blank">Search Help page</a> </p> `,
        "icon":{"code":"save","group":"content"}
    },
    {
        "id":"citing-sources-en",
        "title":"Reference management",
        "description":"likely, but may depend on if including saving results; would have info about ref managers",
        "template":  `<p> There are several reference management tools integrated with the search system, e.g., Mendeley, Endnote, and Refworks. They are located beneath the three dots by each item in the results list.</p>
           <p>If you use Zotero, you won't find it here, as it operates in your browser. <a href="https://kub.kb.dk/zoteroeng" target="_blank">Learn more about Zotero</a>.</p>
			<p>You can learn more about reference management on <a href="https://library.au.dk/en/students/reference-management/" target="_blank">AU Library's help page</a>.</p> `,
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
