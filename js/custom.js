!function r(a,l,s){function c(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=l[n]={exports:{}};a[n][0].call(o.exports,function(e){return c(a[n][1][e]||e)},o,o.exports,r,a,l,s)}return l[n].exports}for(var d="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.scriptIds={en:"b19d8ae41c784590fd84ba51114c29d2",da:"668df01b6f2cd836279a993a8fc944ec"}},{}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();var o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.$element=e}return i(n,[{key:"$postLink",value:function(){angular.element(document.querySelector("md-card#personalDetails .md-toolbar-tools")).append(this.$element)}}]),n}();o.$inject=["$element"];t.KbEditProfileConfig={name:"kbEditProfile",config:{controller:o,templateUrl:["viewName",function(e){return"custom/"+e+"/html/edit-profile/edit-profile.html"}]}}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmPersonalInfoAfterConfig={name:"prmPersonalInfoAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-edit-profile></kb-edit-profile>"}}},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.KbFooterConfig={name:"kbFooter",config:{templateUrl:["viewName",function(e){return"custom/"+e+"/html/footer/footer.html"}]}}},{}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmExploreFooterAfterConfig={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-footer></kb-footer>"}}},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.list_of_elements_da=[{id:"getting-started-da",title:"Kom godt i gang",icon:{code:"description",group:"action"},template:'\n      <h2>Søgetips</h2>\n    \t<tl>\n      <li>Skriv OG, ELLER, IKKE mellem dine søgeord for at kombinere, udvide eller begrænse dit søgeresultat. Husk at skrive OG, ELLER, IKKE med store bogstaver.</li>\n      <li>Brug * i din søgning, hvis du er usikker på, hvordan et ord staves, eller ønsker at din søgning skal omfatte varianter af et ord. F.eks. vil en søgning på <i>col*r</i> give hits på <i>colour</i> og <i>color</i>. En søgning på <i>child*</i> vil give hits på <i>child\'s</i>, <i>children</i>, <i>childhood</i> osv.</li>\n      <li>Brug ? hvis du er usikker på et enkelt bogstav i dit søgeord. F.eks. vil en søgning på <i>su?anne</i> give hits på <i>susanne</i> og <i>suzanne</i>.</li>\n      <li>Brug (...) parenteser hvis du vil være sikker på, at dine søgeord grupperes på den rigtige måde. F.eks. <i>Shakespeare OG (sonnet ELLER tragedy)</i>.</li>\n      <li>Brug "..." anførselstegn hvis du søger på sammenhængende ord eller sætninger. F.eks. vil en søgning på <i>"climate change"</i> give dig hits, hvor disse ord står ved siden af hinanden i præcis denne rækkefølge.</li>\n      </tl>\n      <br />\n      <h2>Får du for mange hits?</h2>\n      <li>Du kan indsnævre søgeresultatet ved at bruge filtreringsmulighederne i venstre side af skærmen. Klikker du f.eks. på <i>Bøger</i> under <i>Materialetyper</i>, afgrænser du dit søgeresultat til kun at vise bøger.</li>\n      <li>Se alle vores søgetips på siden <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">Hjælp til søgning</a>.</li>\n    '},{id:"whats-in-search-da",title:"Hvad søger jeg i?",template:'<p>Du søger i den samlede mængde af materialer fra Det Kgl. Bibliotek, inklusive universitetsbibliotekerne i København, Roskilde og Aarhus.  Det vil sige bøger (trykte og e-bøger), artikler, tidsskrifter, billeder, håndskrifter, noder, film og meget andet.</p>\n        <p>I søgesystemet finder du også artikler, anmeldelser, m.m. fra store eksterne databaser som eksempelvis JSTOR, PsycInfo, SocIndex, Scopus, Web of Science osv. </p>\n       <p><a href="https://kub.kb.dk/c.php?g=659327">Læs mere om, hvad bibliotekssystemet indeholder</a></p>\n       <p>Se også den komplette liste over Det Kgl. Biblioteks <a href="https://www.kb.dk/find-materiale" target="_blank">særlige samlinger</a>.</p>',icon:{code:"toc",group:"action"}},{id:"feedback-da",title:"Login, passwords, PIN-kode?",template:'<p><a href="https://soeg.kb.dk/discovery/account?vid=45KBDK_KGL:KGL&section=personal_details">Skift password og PIN-kode her</a> </p>\n        <tl>\n        <li>Ansatte og studerende ved <b>AU, KU, RUC</b> skal logge ind via WAYF</li>\n        <li>Ansatte ved <b>hospitaler</b> i Region Midtjylland og Region Hovedstaden skal også logge ind via WAYF</li>\n        <li><b>Alle andre brugere</b> skal logge ind via NEM-ID første gang - derefter kan de logge ind med email og password.</li>\n        <li>Din <b>PIN-kode</b> skal du bruge i udlånsautomaterne.</li>\n        </tl>\n        <br/>\n        <p><a href="https://www.kb.dk/services/laan-og-aflevering" target="_blank">Udvidet vejledning til login.</a> </p>',icon:{code:"info",group:"action"}},{},{id:"didnt-find-da",title:"Fandt du ikke det du søgte?",template:'<p>Hvis du ikke fandt, det du søgte efter, har du flere muligheder:</p>\n        <tl>\n        <li>Vi kan forsøge at skaffe materialet til dig fra andre biblioteker </li>\n        <li>Vi undersøger, om vi kan købe materialet til biblioteket</li>\n        <li>Vi kan hjælpe dig, med at søge videre i andre systemer</li>\n        </tl>\n        <br/>\n        <p><a href="https://kub.kb.dk/c.php?g=675327">Læs mere om mulighederne</a> </p>',icon:{code:"swap_horiz",group:"action"}},{id:"ask-us-da",title:"Spørg biblioteket",template:'<p>Du kan få hjælp til login, søgning, fjernadgang etc. ved at kontakte <a href="https://www.kb.dk/spoerg-biblioteket" target="_blank">Spørg Biblioteket.</a></p>',icon:{code:"forum",group:"communication"}},{},{id:"account-da",title:"Min konto",description:"information om min konto  - reserverng, udlån, fornyelser, gebyrer evt link til kontoen",template:'<p>For at se din konto skal du være logget ind. Du finder din konto ved at klikke på dit navn i øverste højre hjørne af skærmen. </p>\n    \t<p>Her har du mulighed for at se dine lån og reservationer, forny hjemlån, betale gebyrer og ændre pinkode m.m.</p>\n    \t <p><a href="" target="_blank">Hjælp til login.</a></p>',icon:{code:"account_box",group:"action"}},{id:"saving-results-da",title:"Mine favoritter og gemte søgninger",template:'<p> Når du er logget ind, har du mulighed for at gemme søgninger og gemme enkeltresultater til senere brug i ’Mine favoritter’.</p>\n\t\t\t<p> Se mere under <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">Hjælp til søgning</a> </p> ',icon:{code:"save",group:"content"}},{id:"citing-sources-da",title:"Hjælp til referencehåndtering",description:"kort oversigt over Primos muligheder, med links til flere informationer om ref managers",template:'<p> Bibliotekssystemet indeholder flere værktøjer til referencehåndtering, bl.a. Mendely, Endnote og Refworks. Du finder dem under de tre prikker ved hvert materiale i resultatlisten.</p>\n           <p>Bruger du Zotero, ligger den ikke her, men i din browser. <a href="https://kub.kb.dk/zotero" target="_blank">Læs mere om Zotero</a>.</p>\n\t\t\t<p> Du kan læse mere om referencehåndtering på <a href="https://library.au.dk/studerende/referencehaandtering/" target="_blank">AU Librarys side om emnet</a>.</p> ',icon:{code:"create",group:"content"}}]},{}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.list_of_elements_en=[{id:"getting-started-en",title:"Getting Started",description:"brief static html content with an overview on how to use BULS; links to direct to main BULS help page in WordPress, other pages, and/or other sections of the menu",icon:{code:"description",group:"action"},template:'\n      <h2>Search Tips</h2>\n      <tl>\n      <li>Combine, expand, or limit your search through the operators AND, OR, NOT. Please remember to write the operators with capital letters.</li>\n      <li>Use * as a wildcard character to search for variants of a word, for instance <i>pest*</i> (pester, pesticide, pestilence, etc.)</li>\n      <li>Use ? as a wildcard to replace a single letter, for instance <i>wom?n</i> for <i>woman</i> and <i>women</i>.</li>\n      <li>Use (...) parenthesis to group query words, for instance <i>Government AND (democracy OR cabinet responsibility)</i>.</li>\n      <li>Use "..." quotation marks, if you want to search for a compound term, for instance <i>"global warming"</i>.</li>\n      </tl>\n      <br />\n      <h2>Too many results?</h2>\n      <li>Use the filtering features to the left of the results list to limit your results by type of material, author, subject, year, library, etc.</li>\n      <li>Find more search tips on our <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">general services page</a>.</li>\n    '},{id:"whats-in-search-en",title:"What am I searching?",template:'<p>Your search will cover the full collections of the Royal Danish Library, including the library collections of Copenhagen, Roskilde and Aarhus universities. These include books (print and electronic), articles, journals, images, manuscripts, scores, film, and more.</p>\n        <p>You will also find articles, reviews, etc., from major external databases like JSTOR, PsycInfo, SocIndex, Scopus, Web of Science, and more. </p>\n       <p><a href="https://kub.kb.dk/c.php?g=659333&p=4653941">Learn more about what the search system covers</a></p>\n       <p>Additionally, see the full list of the Royal Danish Library <a href="https://www.kb.dk/find-materiale" target="_blank">special collections</a>.</p>',icon:{code:"toc",group:"action"}},{id:"feedback-en",title:"Login, passwords, PIN code?",template:'<p><a href="https://soeg.kb.dk/discovery/account?vid=45KBDK_KGL:KGL&section=personal_details">Change password and PIN code</a> </p>\n        <tl>\n        <li><b>AU, KU, RUC</b> students and faculty log in using WAYF and their institution credentials.</li>\n        <li><b>Hospital</b> employees in Region Midtjylland and Region Hovedstaden also use WAYF to log in.</li>\n        <li><b>All other users</b> need to log in using NEM-ID the first time - then email and password can be used to log in.</li>\n        <li>Your <b>PIN code</b> is for use in the self-service lending machines.</li>\n        </tl>\n        <br/>\n        <p><a href="https://www.kb.dk/services/laan-og-aflevering">Need more help?</a> </p>',icon:{code:"info",group:"action"}},{},{id:"didnt-find-en",title:"Didn't find it?",template:'<p>If you could not find what you were looking for, we provide several service options.</p>\n        <tl>\n        <li>We will try to retrieve the item from a different library. </li>\n        <li>We might be able to purchase the item, and make it available to library users.</li>\n        <li>We can guide you to other search systems</li>\n        </tl>\n        <br/>\n        <p><a href="https://kub.kb.dk/c.php?g=675328">Learn more about these options.</a> </p>',icon:{code:"swap_horiz",group:"action"}},{id:"ask-us-en",title:"Ask the library",description:"needs definition; how to point to chat? link to ask a librarian?",template:'<p>For help with login, search, remote access, etc, please <a href="https://www.kb.dk/spoerg-biblioteket" target="_blank">Ask the Library.</a></p>',icon:{code:"forum",group:"communication"}},{},{id:"account-en",title:"My account",description:"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",template:'<p>You need to log in to see your account. You can access your account under your name in the top right corner.</p>\n    \t<p>Your account provides information on your loans and requestes. You can renew your loans, pay your fines, and change your password and PIN code.</p>\n    \t <p><a href="https://www.kb.dk/services/laan-og-aflevering" target="_blank">Get help on login.</a></p>',icon:{code:"account_box",group:"action"}},{id:"saving-results-en",title:"My Favorites, and Saved searches",description:"information about My Favorites, exporting results, ref managers",template:'<p>You can save searches and individual results in <i>My Favourites</i> if you are logged in.</p>\n\t\t\t<p>You can get more help on our <a href="https://www.kb.dk/services/laan-og-aflevering/hjaelp-til-soegning" target="_blank">Search Help page</a> </p> ',icon:{code:"save",group:"content"}},{id:"citing-sources-en",title:"Reference management",description:"likely, but may depend on if including saving results; would have info about ref managers",template:'<p> There are several reference management tools integrated with the search system, e.g., Mendeley, Endnote, and Refworks. They are located beneath the three dots by each item in the results list.</p>\n           <p>If you use Zotero, you won\'t find it here, as it operates in your browser. <a href="https://kub.kb.dk/zoteroeng" target="_blank">Learn more about Zotero</a>.</p>\n\t\t\t<p>You can learn more about reference management on <a href="https://library.au.dk/en/students/reference-management/" target="_blank">AU Library\'s help page</a>.</p> ',icon:{code:"create",group:"content"}}]},{}],8:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();var o=function(){function t(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.$window=e,this.$location=n,this.lang=this.parentCtrl.lang}return i(t,[{key:"changeLanguage",value:function(){var e="da"===this.lang?"en":"da";this.$location.search("lang",e),document.getElementsByTagName("html")[0].lang=e,this.$window.location.href=this.$location.absUrl()}}]),t}();o.$inject=["$window","$location"];t.KbLanguageConfig={name:"kbLanguage",config:{bindings:{parentCtrl:"<"},controller:o,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language/language.html"}]}}},{}],9:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmUserAreaExpandableAfterConfig={name:"prmUserAreaExpandableAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language>"}}},{}],10:[function(e,n,t){"use strict";var i=e("./edit-profile/prmPersonalInfoAfter.component"),o=e("./edit-profile/kbEditProfile.component"),r=e("./footer/prmExploreFooterAfter.component"),a=e("./footer/kbFooter.component"),l=e("./navigation-header/prmTopBarBefore"),s=e("./navigation-header/kbNavigationHeader"),c=e("./language/prmUserAreaExpandableAfter.component"),d=e("./language/kbLanguage.component");e("primo-explore-help-menu");var u,p,g,f=e("./help-menu/list_of_elements_en"),m=e("./help-menu/list_of_elements_da"),h=e("./chat-box/scriptIds.constant"),b=e("./open-items-location-filter/prmLocationItemsAfter.component");angular.module("viewCustom",["angularLoad","helpMenuTopbar"]).constant("viewName",(p=window.location.search.substring(1),g=(p=p.substring(p.indexOf("vid")+4)).substring(0,p.indexOf("&"))?p.substring(0,p.indexOf("&")):p,(g=g.replace("%3A","-")).replace(":","-"))).constant("helpMenuConfig",(u=window.location.search.substring(1),"en"===(2<(u=u.substring(u.indexOf("lang")+5)).length?u.substring(0,u.indexOf("&")):u)?{list_of_elements:f.list_of_elements_en,helpMenuTitle:"Search help"}:{list_of_elements:m.list_of_elements_da,helpMenuTitle:"Hjælp til søgning"})).constant("scriptIds",h.scriptIds).component(i.PrmPersonalInfoAfterConfig.name,i.PrmPersonalInfoAfterConfig.config).component(o.KbEditProfileConfig.name,o.KbEditProfileConfig.config).component(r.PrmExploreFooterAfterConfig.name,r.PrmExploreFooterAfterConfig.config).component(a.KbFooterConfig.name,a.KbFooterConfig.config).component(l.PrmTopBarBeforeConfig.name,l.PrmTopBarBeforeConfig.config).component(s.KbNavigationHeaderConfig.name,s.KbNavigationHeaderConfig.config).component(b.PrmLocationItemsAfterConfig.name,b.PrmLocationItemsAfterConfig.config).component(c.PrmUserAreaExpandableAfterConfig.name,c.PrmUserAreaExpandableAfterConfig.config).component(d.KbLanguageConfig.name,d.KbLanguageConfig.config),e("kb-primo-ve-announcement"),e("kb-primo-ve-hide-new-user-if-loggedin")},{"./chat-box/scriptIds.constant":1,"./edit-profile/kbEditProfile.component":2,"./edit-profile/prmPersonalInfoAfter.component":3,"./footer/kbFooter.component":4,"./footer/prmExploreFooterAfter.component":5,"./help-menu/list_of_elements_da":6,"./help-menu/list_of_elements_en":7,"./language/kbLanguage.component":8,"./language/prmUserAreaExpandableAfter.component":9,"./navigation-header/kbNavigationHeader":11,"./navigation-header/prmTopBarBefore":12,"./open-items-location-filter/prmLocationItemsAfter.component":13,"kb-primo-ve-announcement":14,"kb-primo-ve-hide-new-user-if-loggedin":15,"primo-explore-help-menu":16}],11:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();var o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.$element=e}return i(n,[{key:"$postLink",value:function(){var e=this.$element.parent().parent().parent().parent();angular.element(e.children()[0]).append(this.$element)}}]),n}();o.$inject=["$element"];t.KbNavigationHeaderConfig={name:"kbNavigationHeader",config:{bindings:{parentCtrl:"<"},controller:o,templateUrl:["viewName",function(e){return"custom/"+e+"/html/navigation-header/navigation-header.html"}]}}},{}],12:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmTopBarBeforeConfig={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},template:"<kb-navigation-header parent-ctrl='$ctrl.parentCtrl'></kb-navigation-header>"}}},{}],13:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();var o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.$interval=e}return i(n,[{key:"activateFilter",value:function(e){var n=angular.element(document.querySelectorAll("prm-locations > div > button")),t=angular.element(document.querySelectorAll("prm-locations-filter"));n.length&&!t.length?(this.$interval.cancel(e),n.triggerHandler("click"),console.log("found")):console.log("not found or already open")}},{key:"$postLink",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.activateFilter(e.$intervalId)},500,10)}}]),n}();o.$inject=["$interval"];t.PrmLocationItemsAfterConfig={name:"prmLocationItemsAfter",config:{bindings:{parentCtrl:"<"},controller:o}}},{}],14:[function(u,e,n){!function r(a,l,s){function c(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof u&&u;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=l[n]={exports:{}};a[n][0].call(o.exports,function(e){return c(a[n][1][e]||e)},o,o.exports,r,a,l,s)}return l[n].exports}for(var d="function"==typeof u&&u,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,r;function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,n,t,i){var o=this;!function(e,n){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this),this.$translate=e,this.$mdToast=n,this.$rootScope=t,this.$cookies=i,this._dismissed=!1,this.$rootScope.$on("$translateChangeSuccess",function(){o._dismissed=!1})}(t.AnnouncementService=(i=l,o=[{key:"_dismiss",value:function(){this._dismissed=!0,this._toastPromise=null}},{key:"display",value:function(i){var o=this;return new Promise(function(n,t){!0!==o._dismissed?o.$translate("nui.message.announcement").then(function(e){if(o.$cookies.get("announcement")!==e){if(!e||["announcement","&nbsp;",""].includes(e))return o._toastPromise&&!o._dismissed&&o.$mdToast.hide(),void t("No announcement found.");o._toastPromise=o._toastPromise||o.$mdToast.show({hideDelay:!1,position:"top",controller:function(){return{close:function(){o.$mdToast.hide(),o.$translate("nui.message.announcement").then(function(e){return o.$cookies.put("announcement",e)})}}},controllerAs:"$ctrl",template:'<md-toast class="page-notification" style="top: 0px; position: sticky !important;">\n    <div class="md-toast-content" style="box-shadow:none; width: 100%;">\n        <span class=\'md-toast-text\' flex translate=\'nui.message.announcement\'>\n  </span>\n    </div>\n    <a class="close" ng-click=\'$ctrl.close()\' aria-label="{{\'nui.message.dismiss\' | translate}}" style="position: absolute; right: 1.5rem; top: 1.5rem;">\n<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close">\x3c!----\x3e<md-icon ng-if="!$ctrl.isCustom" md-svg-icon="primo-ui:close" alt="" class="md-primoExplore-theme" aria-hidden="true"><svg id="close" width="100%" height="100%" viewBox="0 0 24 24" y="240" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>\n    </svg></md-icon>\x3c!----\x3e\x3c!----\x3e<prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon></a>\n</md-toast>'}),o._toastPromise.then(i).catch(i).then(function(){return o._dismiss()}),n()}else t("The announcement has been dismissed before.")}):t("The announcement has been dismissed.")})}}],o&&a(i.prototype,o),r&&a(i,r),l)).$inject=["$translate","$mdToast","$rootScope","$cookies"]},{}],2:[function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0});var o=(i(r.prototype,[{key:"$onInit",value:function(){this.announcementService.display().catch(function(e){e&&console.log(e)})}}]),r);function r(e,n,t,i){!function(e,n){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),this.announcementService=e,this.$scope=n,this.$element=t,this.$translate=i}o.$inject=["announcementService","$scope","$element","$translate"],t.PrmTopbarAfterConfig={name:"prmTopbarAfter",config:{controller:o,require:{primoExploreCtrl:"^primoExplore"}}}},{}],3:[function(e,n,t){"use strict";var i=e("./announcement/announcement.service"),o=e("./announcement/prmTopbarAfter.component");angular.module("viewCustom").service("announcementService",i.AnnouncementService).component(o.PrmTopbarAfterConfig.name,o.PrmTopbarAfterConfig.config)},{"./announcement/announcement.service":1,"./announcement/prmTopbarAfter.component":2}]},{},[3])},{}],15:[function(u,e,n){!function r(a,l,s){function c(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof u&&u;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=l[n]={exports:{}};a[n][0].call(o.exports,function(e){return c(a[n][1][e]||e)},o,o.exports,r,a,l,s)}return l[n].exports}for(var d="function"==typeof u&&u,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0});var o=(i(r.prototype,[{key:"$onInit",value:function(){this.isLoggedIn=this.parentCtrl.isLoggedIn,this.isLoggedIn&&angular.element(document).ready(function(){var e=angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));e&&0!==e.length&&e.css("display","none")})}}]),r);function r(){!function(e,n){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this)}t.PrmTopNavBarLinksAfterConfig={name:"prmTopNavBarLinksAfter",config:{bindings:{parentCtrl:"<"},controller:o}}},{}],2:[function(e,n,t){"use strict";var i=e("./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component");angular.module("viewCustom").component(i.PrmTopNavBarLinksAfterConfig.name,i.PrmTopNavBarLinksAfterConfig.config)},{"./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component":1}]},{},[2])},{}],16:[function(e,n,t){!function(t){var i={};function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);var o='\n  <md-button ng-hide="!entry" class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" ng-click="back()">\n    <prm-icon icon-type="svg" svg-icon-set="navigation" icon-definition="ic_arrow_back_24px"\n              aria-label="return to help content list" ></prm-icon>\n  </md-button>\n  <h2>\n    <strong ng-if="helpMenuTitle">{{helpMenuTitle}}</strong>\n    <strong ng-hide="helpMenuTitle">Search Help</strong>\n    <span ng-hide="!entry"> - {{entry.title}}</span>\n  </h2>',r='\n  <div ng-if="entry" id="search-help-menu-content" tabindex="-1">\n    <br />\n    <p ng-if="!entry.template"><em>{{entry.description}}</em></p>\n    <div ng-bind-html="entry.template"></div>\n  </div>\n  <ul ng-hide="entry" style="list-style: none; width: 100%; padding-left: 0px;">\n    <hr aria-hidden="true" />\n    <li ng-repeat="item in helpContentList" class="row">\n      <a ng-if="item.id" href="#{{item.id}}">\n        <prm-icon svg-icon-set="{{item.icon.group}}" icon-definition="ic_{{item.icon.code}}_24px"\n                  icon-type="svg" style="padding-right: 10px;"></prm-icon>\n        {{item.title}}\n      </a>\n      <hr ng-if="!item.id" aria-hidden="true" />\n    </li>\n    <hr aria-hidden="true" />\n  </ul>',i='\n  <style>\n    help-menu-content-display { font-size: 140%; margin-bottom: 5px;}\n    #help-header { background-color: lightgrey; }\n    #help-content { padding: 0px 25px; }\n    prm-static-page > prm-static > div { display: none; }\n  </style>\n  <div id="help-header" class="md-toolbar-tools">'.concat(o,'</div>\n  <div id="help-content">').concat(r,"</div>"),s="primoExploreHelpMenuStudioConfig",a={logToConsole:!1,publishEvents:!1,helpMenuWidth:500,list_of_elements:[{id:"getting-started",title:"Getting Started",description:"brief static html content with an overview on how to use BULS; links to direct to main BULS help page in WordPress, other pages, and/or other sections of the menu",icon:{code:"description",group:"action"},template:"\n      <p>BU Libraries Search contains articles, books, journals, databases, films, music, dissertations, and other scholarly materials for your research</p>\n      <h2>Search Tips</h2>\n      <code>brief info about title or subject keyword searches</code>\n      <br /><br />\n      <h2>Filtering</h2>\n      <p>Use the filters to limit to one or more material types (books, articles)</p>\n      <p>Use Peer-Reviewed Articles to quickly limit to only these results...</p>\n    "},{id:"tutorials",title:"Tutorials",description:"at a minimum, links to individual videos and a playlist of existing BULS video tutorials (tbd if in Kaltura, WordPress, or youtube); if possible and desired, embed using Kaltura embed code",icon:{code:"shop_two",group:"action"}},{},{id:"whats-in-search",title:"What's in Search?",description:'brief description of material types, "scopes", and collections; may have submenus for each of the above; likely also link out to WordPress page with all PCI collections',icon:{code:"toc",group:"action"}},{id:"didnt-find",title:"Didn't find it?",description:"TBD info about ILL, scope of collections, and problem cases",icon:{code:"swap_horiz",group:"action"}},{},{id:"guides",title:"Guides",description:"info about research, subject, course, and how to guides; how to find in BULS by way of search and related more info links; link out to LibGuides home",icon:{code:"directions",group:"maps"}},{id:"glossary",title:"Glossary",description:"list of common terms (jargon) and definitions",icon:{code:"view_list",group:"action"}},{},{id:"query-builder",title:"Query Builder",description:"placeholder for this, tbd functionality for future development; interim step may just be to have text demonstrating adv query syntax",icon:{code:"find_in_page",group:"action"}},{},{id:"saving-results",title:"Saving Results",description:"information about My Favorites, exporting results, ref managers",icon:{code:"save",group:"content"}},{id:"citing-sources",title:"Citing Sources",description:"likely, but may depend on if including saving results; would have info about ref managers",icon:{code:"create",group:"content"}},{id:"account",title:"Account",description:"information about My Library Account functionality- loans, renewals, policies?; may also highlight or link to My Library Account",icon:{code:"account_box",group:"action"}},{},{id:"for-instructors",title:"For Instructors",description:'may be more "For" sections; will need considerable content work',icon:{code:"info",group:"action"}},{},{id:"ask-us",title:"Ask Us",description:"needs definition; how to point to chat? link to ask a librarian?",icon:{code:"forum",group:"communication"}},{id:"feedback",title:"Feedback",description:'directs to a new form to send feedback in the format of specific questions, e.g. "rate your experience", "did you find what you\'re looking for?", "send us your thoughts on improving search"; will want to clearly differentiate from Ask and reference help, so that patrons who need help soon can get it',icon:{code:"chat",group:"communication"}}],logMessage:function(e){this.logToConsole&&console.log("bulib-help-menu) "+e)},logEventToAnalytics:function(e,n,t){var i,o,r;i=e,o=n,r=t,window.ga&&window.ga("send","event",i,o,r)},logHelpEvent:function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window.location.pathname,t="help-menu";this.logMessage("logging '".concat(t,"' event with action: '").concat(e,"', label:'").concat(n,"'. [publish: ").concat(this.publishEvents,"]")),this.publishEvents&&this.logEventToAnalytics(t,e,n)},get_entry_by_id:function(e){for(var n=0;n<this.list_of_elements.length;n++)if(this.list_of_elements[n].id===e)return this.list_of_elements[n];return{}},override_with_config:function(e){e&&Object.keys(e)&&(Object.keys(e).includes("logToConsole")&&(this.logToConsole=e.logToConsole),Object.keys(e).includes("publishEvents")&&(this.publishEvents=e.publishEvents),Object.keys(e).includes("helpMenuWidth")&&(this.helpMenuWidth=e.helpMenuWidth),Object.keys(e).includes("helpMenuTitle")&&(this.helpMenuTitle=e.helpMenuTitle),Object.keys(e).includes("logEventToAnalytics")&&(this.logEventToAnalytics=e.logEventToAnalytics),Object.keys(e).includes("list_of_elements")&&(this.list_of_elements=e.list_of_elements))}},l=function(a,e,l,n,t){var i={};e.has("helpMenuConfig")&&(i=e.get("helpMenuConfig")),e.has(s)&&(i=e.get(s)),a.override_with_config(i),l.helpContentList=a.list_of_elements,l.helpMenuTitle=a.helpMenuTitle,l.hide=function(){t.hide()},l.back=function(){l.entry=null,window.top.location.hash=""},l.openItem=function(e){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];l.entry=a.get_entry_by_id(e),n&&a.logHelpEvent("select-item",e)},l.setEntryIdFromHash=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],n=window.location.hash.substring(1);n&&l.openItem(n,e)},l.openHelpInNewWindow=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=window.location.pathname,t="/primo-explore/static-file/help"+window.location.search;e&&(t+="#"+e,n=e);var i=a.helpMenuTitle||"Search Help Menu",o="width=".concat(a.helpMenuWidth,",height=800,resizable=0,location=0,menubar=0,scrollbars=yes");a.logHelpEvent("open-window",n);var r=open(t,i,o);r.onload=function(){this.document.title=i},r.addEventListener("hashchange",l.setEntryIdFromHash,!0),l.hide()},n(l.setEntryIdFromHash(!1),10),window.addEventListener("hashchange",l.setEntryIdFromHash,!0)};angular.module("helpMenuContentDisplay",[]).constant("helpMenuHelper",a).controller("helpMenuPopupController",["helpMenuHelper","$injector","$scope","$timeout","$mdDialog",l]).component("prmExploreFooterAfter",{template:'\n      <help-menu-content-display>\n        <div ng-if="'.concat(window.location.pathname.includes("/static-file/help"),'">').concat(i,"</div>\n      </help-menu-content-display>"),controller:"helpMenuPopupController"}),angular.module("helpMenuTopbar",["ngMaterial"]).constant("helpMenuHelper",a).controller("helpMenuDialogController",["helpMenuHelper","$injector","$scope","$timeout","$mdDialog",l]).controller("helpMenuTopbarController",["helpMenuHelper","$injector","$mdDialog",function(t,e,i){var n={};e.has("helpMenuConfig")&&(n=e.get("helpMenuConfig")),e.has(s)&&(n=e.get(s)),t.override_with_config(n),this.openHelpMenu=function(e){var n;t.logHelpEvent("open-dialog",window.location.pathname),i.show({controller:"helpMenuDialogController",template:(n=t.helpMenuWidth,'\n  <md-dialog id="search-help-dialog" aria-label="Search Help Menu Dialog" style="width: '.concat(n,'px;">\n    <form>\n      <md-toolbar>\n        <div class="md-toolbar-tools">\n          ').concat(o,'\n          <span flex></span>\n          <md-button class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" ng-click="hide()">\n            <prm-icon aria-label="Close dialog" icon-type="svg" svg-icon-set="navigation" icon-definition="ic_close_24px"></prm-icon>\n          </md-button>\n        </div>\n      </md-toolbar>\n      <md-dialog-content>\n        <div class="md-dialog-content">').concat(r,'</div>\n      </md-dialog-content>\n      <md-dialog-actions layout="row">\n        <md-button ng-click="openHelpInNewWindow(entry.id)">Open in New Window</md-button>\n      </md-dialog-actions>\n    </form>\n  </md-dialog>')),targetEvent:e,hasBackdrop:!0,multiple:!1,clickOutsideToClose:!0,fullscreen:!1,focusOnOpen:!0})}}]).component("prmSearchBookmarkFilterAfter",{template:'\n      <help-menu-topbar>\n        <div class="layout-align-center layout-row">\n          <a class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple"\n                    aria-label="Open Search Help Menu" ng-click="$ctrl.openHelpMenu($event)"\n                    href="#" title="open help menu">\n            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_help_24px"></prm-icon>\n          </a>\n        </div>\n      </help-menu-topbar>',controller:"helpMenuTopbarController"})}])},{}]},{},[10]);
//# sourceMappingURL=custom.js.map
