!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}},r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.changeHoverLabel(),angular.element(document.querySelectorAll("prm-report-problem .report-problem-btn"))[0].addEventListener("click",function(){var e=angular.element('<prm-icon svg-icon-set="navigation" icon-definition="ic_close_24px" id="closeReportBrokenLink" onclick="document.querySelectorAll(\'prm-report-problem .report-problem-btn\')[0].click();" id="closeReportBrokenLink"><svg width="100%" height="100%" viewBox="0 0 24 24" id="ic_close_24px_cache28" y="240" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></prm-icon>'),n=angular.element(document.querySelectorAll("prm-report-problem .report-header"));n&&e&&n.append(e)})}},{key:"changeHoverLabel",value:function(){var n=this;this.getTranslationsService._getTranslations(this.lang,this.viewName).then(function(e){e=e.data["fulldisplay.reportproblem"];n.addLabelAsStylingToButton(e)}).catch(function(e){return console.error(e),e})}},{key:"addLabelAsStylingToButton",value:function(e){var e='prm-report-problem .report-container .report-problem-btn:hover::before {\n                        content: "'+e+'";\n                     }',n=document.createElement("style");n.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(n)}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.getTranslationsService=t,this.location=n,this.viewName=this.location.search().vid,this.lang=this.location.search().lang,this.lang=this.lang||"da"}r.$inject=["$element","$location","getTranslationsService"];t.PrmReportProblemAfterConfig={name:"prmReportProblemAfter",config:{controller:r}}},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){void 0===i.intervalIdFindButton&&(i.timesRunIntervalIdFindButton=0,i.intervalIdFindButton=setInterval(i.findRequestButtonAndAttachJavascriptToIt,500))}},{key:"$onDestroy",value:function(){clearInterval(i.intervalIdFindButton)}}],[{key:"addCssAndJavascriptEventsToLabelsAndOptions",value:function(){document.querySelectorAll("md-select-menu md-optgroup md-option").forEach(function(e){e.style.display="none",e.addEventListener("click",function(){document.querySelector("body > .md-select-menu-container")&&(document.querySelector("body > .md-select-menu-container").style.display="none")})});var t=document.querySelectorAll("md-select-menu md-optgroup label");t.forEach(function(e,n){e.style.fontWeight="bold",e.classList.add("plus"),e.classList.remove("minus"),e.addEventListener("click",function(){i.openOrCloseALocationGroup(event,t,n)})})}},{key:"openOrCloseALocationGroup",value:function(e,n,t){e.stopImmediatePropagation();for(var o=e.currentTarget.parentNode.children,r=0;r<o.length;r++)o[r]!==e.target&&("none"===o[r].style.display?(o[r].style.display="flex",n[t].classList.add("minus"),n[t].classList.remove("plus")):(o[r].style.display="none",n[t].classList.add("plus"),n[t].classList.remove("minus")))}},{key:"startSearchingForPickupLocationField",value:function(){i.timesRunIntervalIdFindPickupLocationSelect=0,i.intervalIdFindPickupLocationSelect=setInterval(function(){i.timesRunIntervalIdFindPickupLocationSelect+=1;var e=angular.element(document.querySelectorAll("#form_field_pickupLocation md-select"));e.length&&(e[0].addEventListener("click",i.addCssAndJavascriptEventsToLabelsAndOptions),clearInterval(i.intervalIdFindButton))},1e3)}},{key:"findRequestButtonAndAttachJavascriptToIt",value:function(){i.timesRunIntervalIdFindButton+=1;var e=angular.element(document.querySelectorAll("prm-service-button button"));if((10===i.timesRunIntervalIdFindButton||e&&e.length)&&clearInterval(i.intervalIdFindButton),e)for(var n=0;n<e.length;n++)e[n].addEventListener("click",i.startSearchingForPickupLocationField)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.getTranslationsService=e}r.$inject=["getTranslationsService"];t.KbPickupLocationsConfig={name:"kbPickupLocations",config:{controller:r}}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmRequestAfterConfig={name:"prmRequestAfter",config:{template:"<kb-pickup-locations></kb-pickup-locations>"}}},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.scriptIds={en:"b19d8ae41c784590fd84ba51114c29d2",da:"668df01b6f2cd836279a993a8fc944ec"}},{}],5:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){angular.element(document.querySelector("md-card#personalDetails .md-toolbar-tools")).append(this.$element)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e}r.$inject=["$element"];t.KbEditProfileConfig={name:"kbEditProfile",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/edit-profile/edit-profile.html"}]}}},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmPersonalInfoAfterConfig={name:"prmPersonalInfoAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-edit-profile></kb-edit-profile>"}}},{}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.footerConfig={name:"footer",config:{templateUrl:["viewName",function(e){return"custom/"+e+"/html/footer/footer.html"}]}}},{}],8:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.getHelpTextFromAPI()}},{key:"getHelpTextFromAPI",value:function(){var n=this,e=this.location.search().vid;this._getTranslations(this.lang,e).then(function(e){n.help=n.createHelpJson(e.data)}).catch(function(e){return console.error(e),e})}},{key:"createHelpJson",value:function(e){for(var n={},t=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.help.subheader")}),o=(n.options=[],n.mainHeader=e["fulldisplay.help.mainheader"],t?t.length:0),r=0;r<o;r++)"line"===e["fulldisplay.help.subheader"+(r+1)]?n.options.push({subheader:"line"}):n.options.push({subheader:e["fulldisplay.help.subheader"+(r+1)],submenu:e["fulldisplay.help.sub"+(r+1)],iconset:e["fulldisplay.help.iconset"+(r+1)],icondefinition:e["fulldisplay.help.icondefinition"+(r+1)]});return n}},{key:"_getTranslations",value:function(e,n){return this.getTranslationsService._getTranslations(e,n)}},{key:"openHelpMenu",value:function(){this.bodyContent="main-menu";var e=document.getElementById("helpMenu");angular.element(document.querySelectorAll("#helpMenu")).hasClass("md-dialog-container")||(e.classList.add("md-dialog-container"),this.$mdDialog.show({contentElement:"#helpMenu",parent:angular.element(document.getElementsByName("kb-help")[0]),hasBackdrop:!1,multiple:!0,clickOutsideToClose:!1,fullscreen:!0,focusOnOpen:!0}))}},{key:"hideHelpMenu",value:function(){this.$mdDialog.cancel(),document.getElementById("helpMenu").classList.remove("md-dialog-container")}},{key:"changeBodyContent",value:function(e){this.bodyContent=e}}]);var r=i;function i(e,n,t,o,r){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.getTranslationsService=r,this.$http=e,this.$mdDialog=t,this.viewName=o,this.location=n,this.lang="da",this.bodyContent="main-menu",this.helpButtonTemplateUrl="custom/"+o+"/html/help-button/help-button.html",this.helpMenuTemplateUrl="custom/"+o+"/html/help-button/help-menu.html",this.helpMenuHeaderTemplateUrl="custom/"+o+"/html/help-button/help-menu-header.html",this.helpMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-menu-body.html",this.helpSubMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-sub-menu-body.html",this.help={}}r.$inject=["$http","$location","$mdDialog","viewName","getTranslationsService"];t.KbHelpConfig={name:"kbHelp",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help-button/help.html"}]}}},{}],9:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmExploreFooterAfterConfig={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-footer></kb-footer>\n                   <kb-help parent-ctrl='$ctrl.parentCtrl'></kb-help>"}}},{}],10:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(r,[{key:"showScrollButton",value:function(){0!==window.pageYOffset?document.getElementById("fixedButtonsHolder").style.visibility="visible":document.getElementById("fixedButtonsHolder").style.visibility="hidden"}},{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general",document.getElementById("fixedButtonsHolder").onclick=r.OnFixedButtonsHolderClick,window.addEventListener("scroll",this.showScrollButton)}}],[{key:"OnFixedButtonsHolderClick",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}]);t.KbHelpPageConfig={name:"kbHelpPage",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page.html"}]}}},{}],11:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(r,[{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general"}}]);t.KbHelpPageHeaderConfig={name:"kbHelpPageHeader",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page-header.html"}]}}},{}],12:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){this.vid=this.location.search().vid.replace(":","-");var e=this.vid.indexOf("SPEC");this.view=0<e?"special":"general"}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.location=e}r.$inject=["$location"];t.KbHomeConfig={name:"kbHome",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/homepage/kb-homepage.html"}]}}},{}],13:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){i.count=0,i.id||(i.id=setInterval(this.userSignedId,500))}},{key:"userSignedId",value:function(){if(5<=(i.count+=1)&&(clearInterval(i.id),i.id=void 0),null==document.getElementById("signInBtn")){clearInterval(i.id),i.id=void 0;for(var e=angular.element(document.querySelectorAll("prm-user-area-expandable button.user-button")),n=angular.element(document.querySelector("kb-edit-pincode")),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=angular.element(document.querySelector("md-menu-item.my-library-card-ctm"));e[0].parentNode.insertBefore(n[0].firstChild,e[0].nextSibling)})}}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.location=e}r.$inject=["$location"];t.KbEditPincodeConfig={name:"kbEditPincode",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/edit-pincode.html"}]}}},{}],14:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){this.lang=this.parentCtrl.lang}},{key:"changeLanguage",value:function(){var e="da"===this.lang?"en":"da";this.$location.search("lang",e),document.getElementsByTagName("html")[0].lang=e,this.$window.location.href=this.$location.absUrl()}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$window=e,this.$location=n,this.$rootScope=t}r.$inject=["$window","$location","$rootScope"];t.KbLanguageConfig={name:"kbLanguage",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/language.html"}]}}},{}],15:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.findBecomeUserDiv(e.$intervalId)},500,10)}},{key:"findBecomeUserDiv",value:function(e){var n=angular.element(document.querySelectorAll('div[data-main-menu-item="new_user"]'));n.length&&(this.$interval.cancel(e),this.moveBecomeUserDiv(n))}},{key:"moveBecomeUserDiv",value:function(e){this.$element.parent().append(e)}}]);var r=i;function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$interval=e,this.$element=n}r.$inject=["$interval","$element"];t.KbMoveBecomeUserConfig={name:"kbMoveBecomeUser",config:{controller:r}}},{}],16:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmUserAreaExpandableAfterConfig={name:"prmUserAreaExpandableAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language><kb-edit-pincode></kb-edit-pincode><kb-move-become-user></kb-move-become-user>"}}},{}],17:[function(e,n,t){"use strict";var o,r,i=e("./services/getTranslations.service"),a=e("./home/kbHome.component"),l=e("./special-view/prmSearchBarAfter.component"),c=e("./edit-profile/prmPersonalInfoAfter.component"),s=e("./edit-profile/kbEditProfile.component"),u=e("./help-page/kbHelpPage.component"),m=e("./help-page/kbHelpPageHeader.component"),f=e("./footerAndHelp/prmExploreFooterAfter.component"),p=e("./footerAndHelp/footer.component"),d=e("./footerAndHelp/kbHelp.component"),g=e("./navigation-header/prmTopBarBefore"),h=e("./navigation-header/kbNavigationHeader"),v=e("./language-and-pincode/prmUserAreaExpandableAfter.component"),b=e("./language-and-pincode/kbLanguage.component"),y=e("./language-and-pincode/kbEditPincode.component"),k=e("./language-and-pincode/kbMoveBecomeUser.component"),P=e("./chat-box/scriptIds.constant"),C=e("./open-items-location-filter/prmLocationItemsAfter.component"),w=e("./move-request-another-bin/prmServiceButtonAfter.component"),A=e("./categorize-pickup-locations/kbPickupLocations.component"),$=e("./categorize-pickup-locations/prmRequestAfter.component"),T=e("./pickup-numbers/pickUpNumbers.service"),B=e("./pickup-numbers/prmRequestsAfter.component"),I=e("./brokenLinkFeedback/prmReportProblemAfter"),S=e("./resource-recommender/prmResourceRecommenderAfter.component");angular.module("viewCustom",["angularLoad","ngMaterial"]).constant("viewName",(o=window.location.search.substring(1),r=o.substring(o.indexOf("vid")+4),o=(o=(r=o?r:(r=(o=window.location.pathname).substring(o.indexOf("/delivery/")+10)).substring(0,r.indexOf("/"))).substring(0,r.indexOf("&"))?r.substring(0,r.indexOf("&")):r).replace("%3A","-"),console.log("vid:",o),o.replace(":","-"))).constant("scriptIds",P.scriptIds).service("getTranslationsService",i.GetTranslationsService).component(m.KbHelpPageHeaderConfig.name,m.KbHelpPageHeaderConfig.config).component(u.KbHelpPageConfig.name,u.KbHelpPageConfig.config).component(a.KbHomeConfig.name,a.KbHomeConfig.config).component(l.PrmSearchBarAfterConfig.name,l.PrmSearchBarAfterConfig.config).component(c.PrmPersonalInfoAfterConfig.name,c.PrmPersonalInfoAfterConfig.config).component(s.KbEditProfileConfig.name,s.KbEditProfileConfig.config).component(f.PrmExploreFooterAfterConfig.name,f.PrmExploreFooterAfterConfig.config).component(p.footerConfig.name,p.footerConfig.config).component(d.KbHelpConfig.name,d.KbHelpConfig.config).component(g.PrmTopBarBeforeConfig.name,g.PrmTopBarBeforeConfig.config).component(h.KbNavigationHeaderConfig.name,h.KbNavigationHeaderConfig.config).component(C.PrmLocationItemsAfterConfig.name,C.PrmLocationItemsAfterConfig.config).component(w.PrmServiceButtonAfterConfig.name,w.PrmServiceButtonAfterConfig.config).component(v.PrmUserAreaExpandableAfterConfig.name,v.PrmUserAreaExpandableAfterConfig.config).component(b.KbLanguageConfig.name,b.KbLanguageConfig.config).component(y.KbEditPincodeConfig.name,y.KbEditPincodeConfig.config).component(k.KbMoveBecomeUserConfig.name,k.KbMoveBecomeUserConfig.config).service("pickUpNumbersService",T.PickUpNumbersService).component(B.PrmRequestsAfterConfig.name,B.PrmRequestsAfterConfig.config).component($.PrmRequestAfterConfig.name,$.PrmRequestAfterConfig.config).component(A.KbPickupLocationsConfig.name,A.KbPickupLocationsConfig.config).component(I.PrmReportProblemAfterConfig.name,I.PrmReportProblemAfterConfig.config).component(S.PrmResourceRecommenderAfterConfig.name,S.PrmResourceRecommenderAfterConfig.config),e("kb-primo-ve-announcement"),e("kb-primo-ve-hide-new-user-if-loggedin")},{"./brokenLinkFeedback/prmReportProblemAfter":1,"./categorize-pickup-locations/kbPickupLocations.component":2,"./categorize-pickup-locations/prmRequestAfter.component":3,"./chat-box/scriptIds.constant":4,"./edit-profile/kbEditProfile.component":5,"./edit-profile/prmPersonalInfoAfter.component":6,"./footerAndHelp/footer.component":7,"./footerAndHelp/kbHelp.component":8,"./footerAndHelp/prmExploreFooterAfter.component":9,"./help-page/kbHelpPage.component":10,"./help-page/kbHelpPageHeader.component":11,"./home/kbHome.component":12,"./language-and-pincode/kbEditPincode.component":13,"./language-and-pincode/kbLanguage.component":14,"./language-and-pincode/kbMoveBecomeUser.component":15,"./language-and-pincode/prmUserAreaExpandableAfter.component":16,"./move-request-another-bin/prmServiceButtonAfter.component":18,"./navigation-header/kbNavigationHeader":19,"./navigation-header/prmTopBarBefore":20,"./open-items-location-filter/prmLocationItemsAfter.component":21,"./pickup-numbers/pickUpNumbers.service":22,"./pickup-numbers/prmRequestsAfter.component":23,"./resource-recommender/prmResourceRecommenderAfter.component":24,"./services/getTranslations.service":25,"./special-view/prmSearchBarAfter.component":26,"kb-primo-ve-announcement":27,"kb-primo-ve-hide-new-user-if-loggedin":28}],18:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){var a=this;this.intervalId=this.$interval(function(){var e=angular.element(document.querySelector("span[translate='AlmaRequestOther']"));if(e.length&&(a.$interval.cancel(a.intervalId),(e=e.parent().parent())[0].textContent===angular.element(a.$element.parent())[0].textContent)){for(var n=e.parent();!n.hasClass("section-body")&&"BODY"!==n[0].tagName;)n=n.parent();n.append(e.parent()),e.parent().addClass("orderAtTheBottom"),e.parent().css("float","right");for(var t=angular.element(document.querySelectorAll("span[translate='AlmaItemRequest']")),o=0;o<t.length;o++)t[o].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&e.css("display","none")});for(var r=angular.element(document.querySelectorAll("prm-opac-back-button button")),i=0;i<r.length;i++)r[i].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&(document.getElementsByClassName("orderAtTheBottom")[0].remove(),e.css("display","inline-block"))})}},500,5)}}]);var r=i;function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.$interval=n}r.$inject=["$element","$interval"];t.PrmServiceButtonAfterConfig={name:"prmServiceButtonAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],19:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$postLink",value:function(){this.getMenuPointsFromPI();var e=this.$element.parent().parent().parent().parent();angular.element(e.children()[0]).append(this.$element)}},{key:"showBackToMenu",value:function(e){document.getElementById("backToItems").style.display="block"}},{key:"hideBackToMenu",value:function(e){document.getElementById("backToItems").style.display="none"}},{key:"getMenuPointsFromPI",value:function(){var n=this;this._getTranslations(this.lang,this.viewName).then(function(e){n.menu=n.createMenuJson(e.data)}).catch(function(e){return console.error(e),e})}},{key:"_getTranslations",value:function(e,n){return this.getTranslationsService._getTranslations(e,n)}},{key:"createMenuJson",value:function(e){var n=this,t=(this.view=0<this.viewName.indexOf("SPEC")?".special":".general",{});return t.items=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.topnavigation"+n.view+".list.item")}),t.links=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.topnavigation"+n.view+".list.link")}),t}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.getTranslationsService=t,this.location=n,this.viewName=this.location.search().vid}r.$inject=["$element","$location","getTranslationsService"];t.KbNavigationHeaderConfig={name:"kbNavigationHeader",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/navigation-header/navigation-header.html"}]}}},{}],20:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmTopBarBeforeConfig={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},template:"<kb-navigation-header parent-ctrl='$ctrl.parentCtrl'></kb-navigation-header>"}}},{}],21:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"activateFilter",value:function(e){var n=angular.element(document.querySelectorAll("prm-locations > div > button.md-icon-button.md-ink-ripple")),t=angular.element(document.querySelectorAll("prm-location-items  div  button.md-icon-button.md-ink-ripple")),o=angular.element(document.querySelectorAll("prm-locations-filter md-input-container"));(n&&n.length||t&&t.length)&&!o.length?(this.$interval.cancel(e),n&&n.length&&n.triggerHandler("click"),t&&t.length&&t.triggerHandler("click")):o&&o.length&&this.$interval.cancel(e)}},{key:"$onInit",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.activateFilter(e.$intervalId)},500,10)}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$interval=e}r.$inject=["$interval"];t.PrmLocationItemsAfterConfig={name:"prmLocationItemsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],22:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.getTranslationsService=n,this.location=e}(t.PickUpNumbersService=(o(i,[{key:"getPickupLabel",value:function(){var e=this.location.search().lang||"da",n=this.location.search().vid;return this.getTranslationsService._getTranslation(e,n,"fulldisplay.pickupnumber")}},{key:"insertPickUpNumber",value:function(n,t){var o=this;this.getPickupLabel().then(function(e){document.getElementById("pickup_number_"+t)||o.addPickupLineToReservation(e,n,t)})}},{key:"addPickupLineToReservation",value:function(e,n,t){var o="pickup_number_"+t,r="<br/><span id='"+o+"' class='pickup_number'>"+e+": </span>"+n+"<br/>",i=document.querySelectorAll("prm-requests md-list md-list-item")[t];if(i){e=i.querySelectorAll("p.request-location");angular.element(e)&&angular.element(e).append(r);for(var a,l=0;l<10;l++)document.getElementById(o)||(a=i.querySelectorAll("p.request-location"),angular.element(a)&&angular.element(a[0]).prepend(r))}}}]),i)).$inject=["$location","getTranslationsService"]},{}],23:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.createAndInsertPickupNumbers(e)},500)}},{key:"createAndInsertPickupNumbers",value:function(e){for(var n=e.$element.parent()[0].querySelectorAll("md-list-item"),t=0;t<n.length;t++)e.createAndInsertPickupNumber(t,n)}},{key:"createAndInsertPickupNumber",value:function(e,n){var t=this.getFirstLine(this.parentCtrl,e),t=this.getDay(t);this.isDay(t)&&(t=this.getPickupNumber(e,t),this.pickUpNumbersService.insertPickUpNumber(t,e))}},{key:"getPickupNumber",value:function(e,n){e=this.getRequestId(e),e=this.getFourDigits(e);return this.getShelfNr(n,e)}},{key:"getShelfNr",value:function(e,n){return e+"/"+n+" "}},{key:"getFourDigits",value:function(e){return e.substring(e.length-11,e.length-7)}},{key:"getRequestId",value:function(e){return this.parentCtrl.requestsDisplay[e].requestId}},{key:"getDay",value:function(e){return e.substring(e.length-8,e.length-10)}},{key:"getFirstLine",value:function(e,n){return e.requestsDisplay[n].firstLineRight}},{key:"isDay",value:function(e){return 1<=parseInt(e)&&parseInt(e)<=31}},{key:"$onDestroy",value:function(){this.$interval.cancel(this.$intervalId)}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.pickUpNumbersService=n,this.$interval=t}r.$inject=["$element","pickUpNumbersService","$interval"];t.PrmRequestsAfterConfig={name:"prmRequestsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],24:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){setTimeout(this.addCloseButtonAndOpenRecommenderIfNeeded,1e3,this.$element)}},{key:"addCloseButtonAndOpenRecommenderIfNeeded",value:function(e){var n=document.querySelectorAll("prm-resource-recommender > div:not(.main-banner-content)")[0],t=document.getElementById("closeRecommender");t&&n&&(angular.element(t).addClass("visible"),n.prepend(t),sessionStorage.hideRecommender||angular.element(t).parent().addClass("visible"))}},{key:"closeRecommender",value:function(){var e=document.getElementById("closeRecommender");angular.element(e).parent().removeClass("visible"),sessionStorage.hideRecommender=!0}}]);var r=i;function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e}r.$inject=["$element"];t.PrmResourceRecommenderAfterConfig={name:"prmResourceRecommenderAfter",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/resource-recommender/close-button.html"}]}}},{}],25:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$http=e}(t.GetTranslationsService=(o(i,[{key:"_getTranslations",value:function(e,n){return this.$http.get("/primaws/rest/pub/translations/"+n+"?lang="+e)}},{key:"_getTranslation",value:async function(e,n,t){return(await this._getTranslations(e,n)).data[t]}}]),i)).$inject=["$http"]},{}],26:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});(function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)})(i,[{key:"$onInit",value:function(){var t;-1!==this.location.search().vid.indexOf("SPECIALER")&&(t=this,setTimeout(function(){var e=angular.element(document.querySelector("prm-search-bar form > div > div"))[0],n=document.getElementById("specialViewSearchScope"),e=(n.style.display="flex",e.prepend(n),angular.element(document.getElementById("searchBar")).addClass("hidePlaceholder"),t.location.search().lang||"da"),n=t.location.search().vid;t.changeSearchBarPlaceholder(e,n)},0))}},{key:"changeSearchBarPlaceholder",value:function(e,n){this.getTranslationsService._getTranslations(e,n).then(function(e){var n=e.data["fulldisplay.homepage.special.search.placeholder"];setTimeout(function(){angular.element(document.getElementById("searchBar")).removeClass("hidePlaceholder"),angular.element(document.getElementById("searchBar")).attr("placeholder",n)},500)}).catch(function(e){return console.error(e),e})}}]);var r=i;function i(e,n,t){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.$element=e,this.getTranslationsService=n,this.location=t}r.$inject=["$element","getTranslationsService","$location"];t.PrmSearchBarAfterConfig={name:"prmSearchBarAfter",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/special-view/search-scope.html"}]}}},{}],27:[function(s,e,n){!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof s&&s;if(!e&&t)return t(n,!0);if(c)return c(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}};r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof s&&s,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r;function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,n,t,o){var r=this;if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");this.$translate=e,this.$mdToast=n,this.$rootScope=t,this.$cookies=o,this._dismissed=!1,this.$rootScope.$on("$translateChangeSuccess",function(){r._dismissed=!1})}(t.AnnouncementService=(t=a,(o=[{key:"_dismiss",value:function(){this._dismissed=!0,this._toastPromise=null}},{key:"display",value:function(o){var r=this;return new Promise(function(n,t){!0!==r._dismissed?r.$translate("nui.message.announcement").then(function(e){r.$cookies.get("announcement")!==e?!e||["announcement","&nbsp;",""].includes(e)?(r._toastPromise&&!r._dismissed&&r.$mdToast.hide(),t("No announcement found.")):(r._toastPromise=r._toastPromise||r.$mdToast.show({hideDelay:!1,position:"top",controller:function(){return{close:function(){r.$mdToast.hide(),r.$translate("nui.message.announcement").then(function(e){return r.$cookies.put("announcement",e)})}}},controllerAs:"$ctrl",template:'\n<md-toast class="page-notification" style="top: 0px; position: sticky !important;">\n    <div class="md-toast-content" style="box-shadow:none; width: 100%;">\n        <span class=\'md-toast-text\' flex translate=\'nui.message.announcement\'>\n  </span>\n    </div>\n    <a class="close" ng-click=\'$ctrl.close()\' aria-label="{{\'nui.message.dismiss\' | translate}}"\n       style="position: absolute; right: 1.5rem; top: 1.5rem;">\n        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close">\n        </prm-icon>\n    </a>\n</md-toast>\n          '}),r._toastPromise.then(o).catch(o).then(function(){return r._dismiss()}),n()):t("The announcement has been dismissed before.")}):t("The announcement has been dismissed.")})}}])&&i(t.prototype,o),r&&i(t,r),a)).$inject=["$translate","$mdToast","$rootScope","$cookies"]},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});o(i.prototype,[{key:"$onInit",value:function(){this.announcementService.display().catch(function(e){e&&console.log(e)})}}]);var r=i;function i(e,n,t,o){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.announcementService=e,this.$scope=n,this.$element=t,this.$translate=o}r.$inject=["announcementService","$scope","$element","$translate"],t.PrmTopbarAfterConfig={name:"prmTopbarAfter",config:{controller:r,require:{primoExploreCtrl:"^primoExplore"}}}},{}],3:[function(e,n,t){"use strict";var o=e("./announcement/announcement.service"),e=e("./announcement/prmTopbarAfter.component");angular.module("viewCustom").service("announcementService",o.AnnouncementService).component(e.PrmTopbarAfterConfig.name,e.PrmTopbarAfterConfig.config)},{"./announcement/announcement.service":1,"./announcement/prmTopbarAfter.component":2}]},{},[3])},{}],28:[function(s,e,n){!function o(r,i,a){function l(n,e){if(!i[n]){if(!r[n]){var t="function"==typeof s&&s;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=i[n]={exports:{}},r[n][0].call(t.exports,function(e){return l(r[n][1][e]||e)},t,t.exports,o,r,i,a)}return i[n].exports}for(var c="function"==typeof s&&s,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),o(r.prototype,[{key:"$onInit",value:function(){this.isLoggedIn=this.parentCtrl.isLoggedIn,this.isLoggedIn&&angular.element(document).ready(function(){var e=angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));e&&0!==e.length&&e.css("display","none")})}}]),t.PrmTopNavBarLinksAfterConfig={name:"prmTopNavBarLinksAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],2:[function(e,n,t){"use strict";e=e("./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component"),angular.module("viewCustom").component(e.PrmTopNavBarLinksAfterConfig.name,e.PrmTopNavBarLinksAfterConfig.config)},{"./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component":1}]},{},[2])},{}]},{},[17]);
//# sourceMappingURL=custom.js.map
