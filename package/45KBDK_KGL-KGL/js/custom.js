!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}},r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.scriptIds={en:"b19d8ae41c784590fd84ba51114c29d2",da:"668df01b6f2cd836279a993a8fc944ec"}},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){angular.element(document.querySelector("md-card#personalDetails .md-toolbar-tools")).append(this.$element)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e}r.$inject=["$element"];t.KbEditProfileConfig={name:"kbEditProfile",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/edit-profile/edit-profile.html"}]}}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmPersonalInfoAfterConfig={name:"prmPersonalInfoAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-edit-profile></kb-edit-profile>"}}},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.KbFooterConfig={name:"kbFooter",config:{templateUrl:["viewName",function(e){return"custom/"+e+"/html/footer/footer.html"}]}}},{}],5:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.getHelpTextFromAPI()}},{key:"getHelpTextFromAPI",value:function(){var n=this,e=this.location.search().vid;this._getTranslations(this.lang,e).then(function(e){n.help=n.createHelpJson(e.data)}).catch(function(e){return console.error(e),e})}},{key:"createHelpJson",value:function(e){for(var n={},t=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.help.subheader")}),o=(n.options=[],n.mainHeader=e["fulldisplay.help.mainheader"],t?t.length:0),r=0;r<o;r++)"line"===e["fulldisplay.help.subheader"+(r+1)]?n.options.push({subheader:"line"}):n.options.push({subheader:e["fulldisplay.help.subheader"+(r+1)],submenu:e["fulldisplay.help.sub"+(r+1)],iconset:e["fulldisplay.help.iconset"+(r+1)],icondefinition:e["fulldisplay.help.icondefinition"+(r+1)]});return n}},{key:"_getTranslations",value:function(e,n){return this.getTranslationsService._getTranslations(e,n)}},{key:"openHelpMenu",value:function(){this.bodyContent="main-menu";var e=document.getElementById("helpMenu");angular.element(document.querySelectorAll("#helpMenu")).hasClass("md-dialog-container")||(e.classList.add("md-dialog-container"),this.$mdDialog.show({contentElement:"#helpMenu",parent:angular.element(document.getElementsByName("kb-help")[0]),hasBackdrop:!1,multiple:!0,clickOutsideToClose:!1,fullscreen:!0,focusOnOpen:!0}))}},{key:"hideHelpMenu",value:function(){this.$mdDialog.cancel(),document.getElementById("helpMenu").classList.remove("md-dialog-container")}},{key:"changeBodyContent",value:function(e){this.bodyContent=e}}]);var r=i;function i(e,n,t,o,r){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.getTranslationsService=r,this.$http=e,this.$mdDialog=t,this.viewName=o,this.location=n,this.lang="da",this.bodyContent="main-menu",this.helpButtonTemplateUrl="custom/"+o+"/html/help-button/help-button.html",this.helpMenuTemplateUrl="custom/"+o+"/html/help-button/help-menu.html",this.helpMenuHeaderTemplateUrl="custom/"+o+"/html/help-button/help-menu-header.html",this.helpMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-menu-body.html",this.helpSubMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-sub-menu-body.html",this.help={}}r.$inject=["$http","$location","$mdDialog","viewName","getTranslationsService"];t.KbHelpConfig={name:"kbHelp",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help-button/help.html"}]}}},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmExploreFooterAfterConfig={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-footer></kb-footer>\n                   <kb-help parent-ctrl='$ctrl.parentCtrl'></kb-help>"}}},{}],7:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(r,[{key:"showScrollButton",value:function(){0!==window.pageYOffset?document.getElementById("fixedButtonsHolder").style.visibility="visible":document.getElementById("fixedButtonsHolder").style.visibility="hidden"}},{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general",document.getElementById("fixedButtonsHolder").onclick=r.OnFixedButtonsHolderClick,window.addEventListener("scroll",this.showScrollButton)}}],[{key:"OnFixedButtonsHolderClick",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}]);t.KbHelpPageConfig={name:"kbHelpPage",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page.html"}]}}},{}],8:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(r,[{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general"}}]);t.KbHelpPageHeaderConfig={name:"kbHelpPageHeader",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page-header.html"}]}}},{}],9:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){this.vid=this.location.search().vid.replace(":","-");var e=this.vid.indexOf("SPEC");this.view=0<e?"special":"general"}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.location=e}r.$inject=["$location"];t.KbHomeConfig={name:"kbHome",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/homepage/kb-homepage.html"}]}}},{}],10:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){i.count=0,i.id||(i.id=setInterval(this.userSignedId,500))}},{key:"userSignedId",value:function(){if(5<=(i.count+=1)&&(clearInterval(i.id),i.id=void 0),null==document.getElementById("signInBtn")){clearInterval(i.id),i.id=void 0;for(var e=angular.element(document.querySelectorAll("prm-user-area-expandable button.user-button")),n=angular.element(document.querySelector("kb-edit-pincode")),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=angular.element(document.querySelector("md-menu-item.my-library-card-ctm"));e[0].parentNode.insertBefore(n[0].firstChild,e[0].nextSibling)})}}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.location=e}r.$inject=["$location"];t.KbEditPincodeConfig={name:"kbEditPincode",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/edit-pincode.html"}]}}},{}],11:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.lang=this.parentCtrl.lang}},{key:"changeLanguage",value:function(){var e="da"===this.lang?"en":"da";this.$location.search("lang",e),document.getElementsByTagName("html")[0].lang=e,this.$window.location.href=this.$location.absUrl()}}]);var r=i;function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$window=e,this.$location=n}r.$inject=["$window","$location"];t.KbLanguageConfig={name:"kbLanguage",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/language.html"}]}}},{}],12:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.findBecomeUserDiv(e.$intervalId)},500,10)}},{key:"findBecomeUserDiv",value:function(e){var n=angular.element(document.querySelectorAll('div[data-main-menu-item="new_user"]'));n.length&&(this.$interval.cancel(e),this.moveBecomeUserDiv(n))}},{key:"moveBecomeUserDiv",value:function(e){this.$element.parent().append(e)}}]);var r=i;function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$interval=e,this.$element=n}r.$inject=["$interval","$element"];t.KbMoveBecomeUserConfig={name:"kbMoveBecomeUser",config:{controller:r}}},{}],13:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmUserAreaExpandableAfterConfig={name:"prmUserAreaExpandableAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language><kb-edit-pincode></kb-edit-pincode><kb-move-become-user></kb-move-become-user>"}}},{}],14:[function(e,n,t){"use strict";var o,r,i=e("./services/getTranslations.service"),a=e("./home/kbHome.component"),l=e("./special-view/prmPreFiltersAfter.component"),c=e("./edit-profile/prmPersonalInfoAfter.component"),s=e("./edit-profile/kbEditProfile.component"),u=e("./help-page/kbHelpPage.component"),m=e("./help-page/kbHelpPageHeader.component"),p=e("./footerAndHelp/prmExploreFooterAfter.component"),f=e("./footerAndHelp/kbFooter.component"),d=e("./footerAndHelp/kbHelp.component"),g=e("./navigation-header/prmTopBarBefore"),h=e("./navigation-header/kbNavigationHeader"),v=e("./language-and-pincode/prmUserAreaExpandableAfter.component"),b=e("./language-and-pincode/kbLanguage.component"),y=e("./language-and-pincode/kbEditPincode.component"),k=e("./language-and-pincode/kbMoveBecomeUser.component"),P=e("./chat-box/scriptIds.constant"),C=e("./open-items-location-filter/prmLocationItemsAfter.component"),w=e("./move-request-another-bin-and-categorize-pickup-location/prmServiceButtonAfter.component"),$=(e("./move-request-another-bin-and-categorize-pickup-location/kbPickupLocations.component"),e("./pickup-numbers/pickUpNumbers.service")),A=e("./pickup-numbers/prmRequestsAfter.component"),I=e("./resource-recommender/prmResourceRecommenderAfter.component");angular.module("viewCustom",["angularLoad","ngMaterial"]).constant("viewName",(o=window.location.search.substring(1),r=o.substring(o.indexOf("vid")+4),o=(o=(r=o?r:(r=(o=window.location.pathname).substring(o.indexOf("/delivery/")+10)).substring(0,r.indexOf("/"))).substring(0,r.indexOf("&"))?r.substring(0,r.indexOf("&")):r).replace("%3A","-"),console.log("vid:",o),o.replace(":","-"))).constant("scriptIds",P.scriptIds).service("getTranslationsService",i.GetTranslationsService).component(m.KbHelpPageHeaderConfig.name,m.KbHelpPageHeaderConfig.config).component(u.KbHelpPageConfig.name,u.KbHelpPageConfig.config).component(a.KbHomeConfig.name,a.KbHomeConfig.config).component(l.PrmPreFiltersAfterConfig.name,l.PrmPreFiltersAfterConfig.config).component(c.PrmPersonalInfoAfterConfig.name,c.PrmPersonalInfoAfterConfig.config).component(s.KbEditProfileConfig.name,s.KbEditProfileConfig.config).component(p.PrmExploreFooterAfterConfig.name,p.PrmExploreFooterAfterConfig.config).component(f.KbFooterConfig.name,f.KbFooterConfig.config).component(d.KbHelpConfig.name,d.KbHelpConfig.config).component(g.PrmTopBarBeforeConfig.name,g.PrmTopBarBeforeConfig.config).component(h.KbNavigationHeaderConfig.name,h.KbNavigationHeaderConfig.config).component(C.PrmLocationItemsAfterConfig.name,C.PrmLocationItemsAfterConfig.config).component(w.PrmServiceButtonAfterConfig.name,w.PrmServiceButtonAfterConfig.config).component(v.PrmUserAreaExpandableAfterConfig.name,v.PrmUserAreaExpandableAfterConfig.config).component(b.KbLanguageConfig.name,b.KbLanguageConfig.config).component(y.KbEditPincodeConfig.name,y.KbEditPincodeConfig.config).component(k.KbMoveBecomeUserConfig.name,k.KbMoveBecomeUserConfig.config).service("pickUpNumbersService",$.PickUpNumbersService).component(A.PrmRequestsAfterConfig.name,A.PrmRequestsAfterConfig.config).component(I.PrmResourceRecommenderAfterConfig.name,I.PrmResourceRecommenderAfterConfig.config),e("kb-primo-ve-announcement"),e("kb-primo-ve-hide-new-user-if-loggedin")},{"./chat-box/scriptIds.constant":1,"./edit-profile/kbEditProfile.component":2,"./edit-profile/prmPersonalInfoAfter.component":3,"./footerAndHelp/kbFooter.component":4,"./footerAndHelp/kbHelp.component":5,"./footerAndHelp/prmExploreFooterAfter.component":6,"./help-page/kbHelpPage.component":7,"./help-page/kbHelpPageHeader.component":8,"./home/kbHome.component":9,"./language-and-pincode/kbEditPincode.component":10,"./language-and-pincode/kbLanguage.component":11,"./language-and-pincode/kbMoveBecomeUser.component":12,"./language-and-pincode/prmUserAreaExpandableAfter.component":13,"./move-request-another-bin-and-categorize-pickup-location/kbPickupLocations.component":15,"./move-request-another-bin-and-categorize-pickup-location/prmServiceButtonAfter.component":16,"./navigation-header/kbNavigationHeader":17,"./navigation-header/prmTopBarBefore":18,"./open-items-location-filter/prmLocationItemsAfter.component":19,"./pickup-numbers/pickUpNumbers.service":20,"./pickup-numbers/prmRequestsAfter.component":21,"./resource-recommender/prmResourceRecommenderAfter.component":22,"./services/getTranslations.service":23,"./special-view/prmPreFiltersAfter.component":24,"kb-primo-ve-announcement":25,"kb-primo-ve-hide-new-user-if-loggedin":26}],15:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){void 0===i.intervalIdFindButton&&(i.timesRunIntervalIdFindButton=0,i.intervalIdFindButton=setInterval(i.findRequestButtonAndAttachJavascriptToIt,500))}}],[{key:"addCssAndJavascriptEventsToLabelsAndOptions",value:function(){document.querySelectorAll("md-select-menu md-optgroup md-option").forEach(function(e){e.style.display="none",e.addEventListener("click",function(){document.querySelector("body > .md-select-menu-container")&&(document.querySelector("body > .md-select-menu-container").style.display="none")})});var t=document.querySelectorAll("md-select-menu md-optgroup label");t.forEach(function(e,n){e.style.fontWeight="bold",e.classList.add("plus"),e.classList.remove("minus"),e.addEventListener("click",function(){i.openOrCloseALocationGroup(event,t,n)})})}},{key:"openOrCloseALocationGroup",value:function(e,n,t){e.stopImmediatePropagation();for(var o=e.currentTarget.parentNode.children,r=0;r<o.length;r++)o[r]!==e.target&&("none"===o[r].style.display?(o[r].style.display="flex",n[t].classList.add("minus"),n[t].classList.remove("plus")):(o[r].style.display="none",n[t].classList.add("plus"),n[t].classList.remove("minus")))}},{key:"startSearchingForPickupLocationField",value:function(){i.timesRunIntervalIdFindPickupLocationSelect=0,i.intervalIdFindPickupLocationSelect=setInterval(function(){i.timesRunIntervalIdFindPickupLocationSelect+=1;var e=angular.element(document.querySelectorAll("#form_field_pickupLocation md-select"));e.length?(e[0].addEventListener("click",i.addCssAndJavascriptEventsToLabelsAndOptions),clearInterval(i.intervalIdFindPickupLocationSelect)):10===i.timesRunIntervalIdFindPickupLocationSelect&&clearInterval(i.intervalIdFindPickupLocationSelect)},500)}},{key:"findRequestButtonAndAttachJavascriptToIt",value:function(){i.timesRunIntervalIdFindButton+=1;var e=angular.element(document.querySelectorAll("prm-service-button button"));10!==i.timesRunIntervalIdFindButton&&!e.length||clearInterval(i.intervalIdFindButton);for(var n=0;n<e.length;n++)e[n].addEventListener("click",i.startSearchingForPickupLocationField)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.getTranslationsService=e}r.$inject=["getTranslationsService"];t.KbPickupLocationsConfig={name:"kbPickupLocations",config:{controller:r,bindings:{parentCtrl:"<"}}}},{}],16:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){var a=this;this.intervalId=this.$interval(function(){var e=angular.element(document.querySelector("span[translate='AlmaRequestOther']"));if(e.length&&(a.$interval.cancel(a.intervalId),(e=e.parent().parent())[0].textContent===angular.element(a.$element.parent())[0].textContent)){for(var n=e.parent();!n.hasClass("section-body")&&"BODY"!==n[0].tagName;)n=n.parent();n.append(e.parent()),e.parent().addClass("orderAtTheBottom"),e.parent().css("float","right");for(var t=angular.element(document.querySelectorAll("span[translate='AlmaItemRequest']")),o=0;o<t.length;o++)t[o].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&e.css("display","none")});for(var r=angular.element(document.querySelectorAll("prm-opac-back-button button")),i=0;i<r.length;i++)r[i].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&(document.getElementsByClassName("orderAtTheBottom")[0].remove(),e.css("display","inline-block"))})}},500,5)}}]);var r=i;function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.$interval=n}r.$inject=["$element","$interval"];t.PrmServiceButtonAfterConfig={name:"prmServiceButtonAfter",config:{bindings:{parentCtrl:"<"},controller:r,template:"<kb-pickup-locations parent-ctrl='$ctrl.parentCtrl'></kb-pickup-locations>"}}},{}],17:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){this.getMenuPointsFromPI();var e=this.$element.parent().parent().parent().parent();angular.element(e.children()[0]).append(this.$element)}},{key:"showBackToMenu",value:function(e){document.getElementById("backToItems").style.display="block"}},{key:"hideBackToMenu",value:function(e){document.getElementById("backToItems").style.display="none"}},{key:"getMenuPointsFromPI",value:function(){var n=this;this._getTranslations(this.lang,this.viewName).then(function(e){n.menu=n.createMenuJson(e.data)}).catch(function(e){return console.error(e),e})}},{key:"_getTranslations",value:function(e,n){return this.getTranslationsService._getTranslations(e,n)}},{key:"createMenuJson",value:function(e){var n=this,t=(this.view=0<this.viewName.indexOf("SPEC")?".special":".general",{});return t.items=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.topnavigation"+n.view+".list.item")}),t.links=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.topnavigation"+n.view+".list.link")}),t}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.getTranslationsService=t,this.location=n,this.viewName=this.location.search().vid}r.$inject=["$element","$location","getTranslationsService"];t.KbNavigationHeaderConfig={name:"kbNavigationHeader",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/navigation-header/navigation-header.html"}]}}},{}],18:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmTopBarBeforeConfig={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},template:"<kb-navigation-header parent-ctrl='$ctrl.parentCtrl'></kb-navigation-header>"}}},{}],19:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"activateFilter",value:function(e){var n=angular.element(document.querySelectorAll("prm-locations > div > button.md-icon-button.md-ink-ripple")),t=angular.element(document.querySelectorAll("prm-location-items  div  button.md-icon-button.md-ink-ripple")),o=angular.element(document.querySelectorAll("prm-locations-filter md-input-container"));!n.length&&!t.length||o.length?o.length&&this.$interval.cancel(e):(this.$interval.cancel(e),n.length&&n.triggerHandler("click"),t.length&&t.triggerHandler("click"))}},{key:"$onInit",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.activateFilter(e.$intervalId)},500,10)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$interval=e}r.$inject=["$interval"];t.PrmLocationItemsAfterConfig={name:"prmLocationItemsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],20:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$http=e,this.location=n,this._pickUpNumbersForIds={},this._runningPromise,this._ongoingInsertions=0}(t.PickUpNumbersService=(o(i,[{key:"waitForIdsAndInsertPickUpNumbers",value:function(t){var o=this;t.$scope.$watch(function(){return t.selector(t.parentElement).length},function(e,n){e&&e!==n&&o.retrieveAndInsertPickUpNumbers(t.parentCtrl,t.parentElement,t.parentCtrl.requestsService.requestsDisplay,t.selector)})}},{key:"retrieveAndInsertPickUpNumbers",value:function(e,n,t,o){var r=this;return this._runningPromise?this._runningPromise.then(function(){return r._insert(e,n,t,o)}):this._insert(e,n,t,o)}},{key:"getPickupLabel",value:function(){return"en"===this.location.search().lang?"Pickup number: ":"Ventehyldenummer: "}},{key:"getServiceBaseUrl",value:function(){var e=this.location.$$absUrl;return e.includes("kbdk-kgl-psb.primo.exlibrisgroup")?"https://public-stage.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/":e.includes("soeg.kb.dk")?"https://webservice.kb.dk/alma-pickupnumbers/services/public/pickupnumber/":"https://developer.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/"}},{key:"insertPickUpNumber",value:function(e,n){-1===n.innerHTML.indexOf('<span class="pickupnumber">')&&(e="<br/><span class='pickupnumber'>"+this.getPickupLabel()+"</span>"+e+"<br/>",angular.element(n.querySelectorAll("p.request-location")).append(e))}},{key:"insertPickupnumbersToOverview",value:function(t){var o=this,r=document.querySelectorAll("prm-requests-overview");0<r.length?this.addPickupnumbersToOverview(r,t):ctrl.$scope.$watch(function(){return r.length},function(e,n){r.length&&o.addPickupnumbersToOverview(r,t)})}},{key:"addPickupnumbersToOverview",value:function(e,n){for(var t,o=angular.element(document.querySelectorAll('prm-requests-overview div[class="md-list-item-text layout-fill"]')),r=0;r<Object.keys(o).length-1;r++)this._pickUpNumbersForIds[n[r].requestId]&&-1===o[r].innerHTML.indexOf('<span class="pickupnumber">')&&(t='<p class="weak-text"><span class="pickupnumber">'+this.getPickupLabel()+"</span><span>"+this._pickUpNumbersForIds[n[r].requestId]+"</span></p>",angular.element(o[r]).append(t))}},{key:"_insert",value:function(r,i,a,l){var c=this,s=this;return s._runningPromise=new Promise(function(t,e){var n=l(i),n=s._composeRequestObjects(n,a),o=(s._ongoingInsertions=n.length,[]);n.forEach(function(e,n){o[n]=s._insertForRequest(r.requestsDisplay[n],e),o[n].then(function(){s._ongoingInsertions=s._ongoingInsertions-1,0===s._ongoingInsertions&&(c.insertPickupnumbersToOverview(a),t())}).catch(function(){s._ongoingInsertions=s._ongoingInsertions-1,0===s._ongoingInsertions&&(c.insertPickupnumbersToOverview(a),t())})})}),this._runningPromise}},{key:"_composeRequestObjects",value:function(t,e){return e.map(function(e,n){return{element:t[n],id:e.requestId,expandedDisplay:e.expandedDisplay,isAlert:e.isAlert}})}},{key:"_insertForRequest",value:function(e,o){var r=this,i=this;return new Promise(function(n,t){o.element?i._pickUpNumbersForIds[o.id]?(r.insertPickUpNumber(i._pickUpNumbersForIds[o.id],o.element),n()):o.isAlert?i._retrievePickUpNumber(o.id).then(function(e){e=e.data.number;i._pickUpNumbersForIds[o.id]=e,r.insertPickUpNumber(e,o.element),n()}).catch(function(e){return console.log("Could not retrieve the pick up number."),t(e),e}):n():t()})}},{key:"_retrievePickUpNumber",value:function(e){return this.$http.get(this.getServiceBaseUrl()+e)}}]),i)).$inject=["$http","$location"]},{}],21:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.parentElement=this.$element.parent()[0],this.pickUpNumbersService.waitForIdsAndInsertPickUpNumbers(this)}},{key:"selector",value:function(e){return e.querySelectorAll("md-list-item")}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$scope=e,this.$element=n,this.pickUpNumbersService=t}r.$inject=["$scope","$element","pickUpNumbersService"];t.PrmRequestsAfterConfig={name:"prmRequestsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],22:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){setTimeout(this.addCloseButtonAndOpenRecommenderIfNeeded,1e3,this.$element)}},{key:"addCloseButtonAndOpenRecommenderIfNeeded",value:function(e){var n=document.querySelectorAll("prm-resource-recommender > div:not(.main-banner-content)")[0],t=document.getElementById("closeRecommender");console.log(t.innerHTML),t&&n&&(angular.element(t).addClass("visible"),n.prepend(t),sessionStorage.hideRecommender||angular.element(t).parent().addClass("visible"))}},{key:"closeRecommender",value:function(){var e=document.getElementById("closeRecommender");console.log(angular.element(e).parent()),angular.element(e).parent().removeClass("visible"),sessionStorage.hideRecommender=!0}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e}r.$inject=["$element"];t.PrmResourceRecommenderAfterConfig={name:"prmResourceRecommenderAfter",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/resource-recommender/close-button.html"}]}}},{}],23:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$http=e}(t.GetTranslationsService=(o(i,[{key:"_getTranslations",value:function(e,n){return this.$http.get("/primaws/rest/pub/translations/"+n+"?lang="+e)}}]),i)).$inject=["$http"]},{}],24:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){var e,n;(this.location.search().vid.indexOf("SPEC")||this.location.search().vid.indexOf("spec"))&&(angular.element(document.querySelector("prm-search-bar form > div > div")).prepend(document.getElementById("specialViewSearchScope")),angular.element(document.getElementById("searchBar")).addClass("hidePlaceholder"),e=this.location.search().lang||"da",n=this.location.search().vid,this.changeSearchBarPlaceholder(e,n))}},{key:"changeSearchBarPlaceholder",value:function(e,n){this.getTranslationsService._getTranslations(e,n).then(function(e){var n=e.data["fulldisplay.homepage.special.search.placeholder"];setTimeout(function(){angular.element(document.getElementById("searchBar")).removeClass("hidePlaceholder"),angular.element(document.getElementById("searchBar")).attr("placeholder",n)},500)}).catch(function(e){return console.error(e),e})}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.getTranslationsService=n,this.location=t}r.$inject=["$element","getTranslationsService","$location"];t.PrmPreFiltersAfterConfig={name:"prmPreFiltersAfter",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/special-view/search-scope.html"}]}}},{}],25:[function(s,e,n){!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof s&&s;if(!e&&t)return t(n,!0);if(c)return c(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}};r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof s&&s,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r;function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,n,t,o){var r=this;if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");this.$translate=e,this.$mdToast=n,this.$rootScope=t,this.$cookies=o,this._dismissed=!1,this.$rootScope.$on("$translateChangeSuccess",function(){r._dismissed=!1})}(t.AnnouncementService=(t=a,(o=[{key:"_dismiss",value:function(){this._dismissed=!0,this._toastPromise=null}},{key:"display",value:function(o){var r=this;return new Promise(function(n,t){!0!==r._dismissed?r.$translate("nui.message.announcement").then(function(e){r.$cookies.get("announcement")!==e?!e||["announcement","&nbsp;",""].includes(e)?(r._toastPromise&&!r._dismissed&&r.$mdToast.hide(),t("No announcement found.")):(r._toastPromise=r._toastPromise||r.$mdToast.show({hideDelay:!1,position:"top",controller:function(){return{close:function(){r.$mdToast.hide(),r.$translate("nui.message.announcement").then(function(e){return r.$cookies.put("announcement",e)})}}},controllerAs:"$ctrl",template:'\n<md-toast class="page-notification" style="top: 0px; position: sticky !important;">\n    <div class="md-toast-content" style="box-shadow:none; width: 100%;">\n        <span class=\'md-toast-text\' flex translate=\'nui.message.announcement\'>\n  </span>\n    </div>\n    <a class="close" ng-click=\'$ctrl.close()\' aria-label="{{\'nui.message.dismiss\' | translate}}"\n       style="position: absolute; right: 1.5rem; top: 1.5rem;">\n        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close">\n        </prm-icon>\n    </a>\n</md-toast>\n          '}),r._toastPromise.then(o).catch(o).then(function(){return r._dismiss()}),n()):t("The announcement has been dismissed before.")}):t("The announcement has been dismissed.")})}}])&&i(t.prototype,o),r&&i(t,r),a)).$inject=["$translate","$mdToast","$rootScope","$cookies"]},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});o(i.prototype,[{key:"$onInit",value:function(){this.announcementService.display().catch(function(e){e&&console.log(e)})}}]);var r=i;function i(e,n,t,o){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.announcementService=e,this.$scope=n,this.$element=t,this.$translate=o}r.$inject=["announcementService","$scope","$element","$translate"],t.PrmTopbarAfterConfig={name:"prmTopbarAfter",config:{controller:r,require:{primoExploreCtrl:"^primoExplore"}}}},{}],3:[function(e,n,t){"use strict";var o=e("./announcement/announcement.service"),e=e("./announcement/prmTopbarAfter.component");angular.module("viewCustom").service("announcementService",o.AnnouncementService).component(e.PrmTopbarAfterConfig.name,e.PrmTopbarAfterConfig.config)},{"./announcement/announcement.service":1,"./announcement/prmTopbarAfter.component":2}]},{},[3])},{}],26:[function(s,e,n){!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof s&&s;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}},r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof s&&s,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),o(r.prototype,[{key:"$onInit",value:function(){this.isLoggedIn=this.parentCtrl.isLoggedIn,this.isLoggedIn&&angular.element(document).ready(function(){var e=angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));e&&0!==e.length&&e.css("display","none")})}}]),t.PrmTopNavBarLinksAfterConfig={name:"prmTopNavBarLinksAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],2:[function(e,n,t){"use strict";e=e("./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component"),angular.module("viewCustom").component(e.PrmTopNavBarLinksAfterConfig.name,e.PrmTopNavBarLinksAfterConfig.config)},{"./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component":1}]},{},[2])},{}]},{},[14]);
//# sourceMappingURL=custom.js.map
