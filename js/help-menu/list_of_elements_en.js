export const list_of_elements_en = [
    {
        "id":"getting-started-en",
        "title":"Getting Started",
        "description":"brief static html content with an overview on how to use BULS; links to direct to main BULS help page in WordPress, other pages, and/or other sections of the menu",
        "icon":{"code":"description","group":"action"},
        "template":`
      <p>KB Libraries Search contains articles, books, journals, databases, films, music, dissertations, and other scholarly materials for your research</p>
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
    {
        "id":"tutorials-en",
        "title":"Tutorials",
        "description":"at a minimum, links to individual videos and a playlist of existing BULS video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",
        "icon":{"code":"shop_two","group":"action"},
    },
    {}, // DIVIDER, // search-specific
    {
        "id":"whats-in-search-en",
        "title":"What's in Search?",
        "description":`brief description of material types, "scopes", and collections; may have submenus for each of the above; likely also link out to WordPress page with all PCI collections`,
        "icon":{"code":"toc","group":"action"}
    },
    {
        "id":"didnt-find-en",
        "title":"Didn't find it?",
        "description":`Korte forslag, evt link til færdig version af <a href="https://kub.kb.dk/c.php?g=675328">denne side</a> eller lignende`,
        "icon":{"code":"swap_horiz","group":"action"},
    },
    {}, //DIVIDER, // conceptual
    {
        "id":"guides-en",
        "title":"Guides",
        "description":`info about research, subject, course, and how to guides; how to find in BULS by way of search and related more info links; link out to LibGuides home`,
        "icon":{"code":"directions","group":"maps"}
    },
    {
        "id":"glossary-en",
        "title":"Glossary",
        "description":"list of common terms (jargon) and definitions",
        "icon":{"code":"view_list","group":"action"}
    },
    {}, //DIVIDER,
    {
        "id":"query-builder-en",
        "title":"Query Builder",
        "description":`placeholder for this, tbd functionality for future development; interim step may just be to have text demonstrating adv query syntax`,
        "icon":{"code":"find_in_page","group":"action"}
    },
    {}, //DIVIDER, Search Help
    {
        "id":"saving-results-en",
        "title":"Saving Results",
        "description":"information about My Favorites, exporting results, ref managers",
        "icon":{"code":"save","group":"content"}
    },
    {
        "id":"citing-sources-en",
        "title":"Citing Sources",
        "description":"likely, but may depend on if including saving results; would have info about ref managers",
        "icon":{"code":"create","group":"content"}
    },
    {
        "id":"account-en",
        "title":"Account",
        "description":"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",
        "icon":{"code":"account_box","group":"action"}
    },
    {}, //DIVIDER,
    {
        "id":"for-instructors-en",
        "title":"For Instructors",
        "description":`may be more "For" sections; will need considerable content work`,
        "icon":{"code":"info","group":"action"},
    },
    {}, //DIVIDER, communication
    {
        "id":"ask-us-en",
        "title":"Ask Us",
        "description":"needs definition; how to point to chat? link to ask a librarian?",
        "icon":{"code":"forum","group":"communication"}
    },
    {
        "id":"feedback-en",
        "title":"Feedback",
        "description":`directs to a new form to send feedback in the format of specific questions, e.g. "rate your experience", "did you find what you're looking for?", "send us your thoughts on improving search"; will want to clearly differentiate from Ask and reference help, so that patrons who need help soon can get it`,
        "icon":{"code":"chat","group":"communication"}
    }
];
