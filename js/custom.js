!function i(a,l,c){function s(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=l[n]={exports:{}};a[n][0].call(r.exports,function(e){return s(a[n][1][e]||e)},r,r.exports,i,a,l,c)}return l[n].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.scriptIds={en:"b19d8ae41c784590fd84ba51114c29d2",da:"668df01b6f2cd836279a993a8fc944ec"}},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){angular.element(document.querySelector("md-card#personalDetails .md-toolbar-tools")).append(this.$element)}}]),i);function i(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=e}r.$inject=["$element"];t.KbEditProfileConfig={name:"kbEditProfile",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/edit-profile/edit-profile.html"}]}}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmPersonalInfoAfterConfig={name:"prmPersonalInfoAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-edit-profile></kb-edit-profile>"}}},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.KbFooterConfig={name:"kbFooter",config:{templateUrl:["viewName",function(e){return"custom/"+e+"/html/footer/footer.html"}]}}},{}],5:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$onInit",value:function(){this.getHelpTextFromAPI()}},{key:"getHelpTextFromAPI",value:function(){var n=this,e=this.location.search().vid;this._getTranslations(this.lang,e).then(function(e){n.help=n.createHelpJson(e.data)}).catch(function(e){return console.error(e),e})}},{key:"createHelpJson",value:function(e){var n={},t=Object.keys(e).filter(function(e){return e.startsWith("fulldisplay.help.subheader")});n.options=[],n.mainHeader=e["fulldisplay.help.mainheader"];for(var o=t?t.length:0,r=0;r<o;r++)"line"===e["fulldisplay.help.subheader"+(r+1)]?n.options.push({subheader:"line"}):n.options.push({subheader:e["fulldisplay.help.subheader"+(r+1)],submenu:e["fulldisplay.help.sub"+(r+1)],iconset:e["fulldisplay.help.iconset"+(r+1)],icondefinition:e["fulldisplay.help.icondefinition"+(r+1)]});return n}},{key:"_getTranslations",value:function(e,n){return this.getTranslationsService._getTranslations(e,n)}},{key:"openHelpMenu",value:function(){this.bodyContent="main-menu";var e=document.getElementById("helpMenu");angular.element(document.querySelectorAll("#helpMenu")).hasClass("md-dialog-container")||(e.classList.add("md-dialog-container"),this.$mdDialog.show({contentElement:"#helpMenu",parent:angular.element(document.getElementsByName("kb-help")[0]),hasBackdrop:!1,multiple:!0,clickOutsideToClose:!1,fullscreen:!0,focusOnOpen:!0}))}},{key:"hideHelpMenu",value:function(){this.$mdDialog.cancel(),document.getElementById("helpMenu").classList.remove("md-dialog-container")}},{key:"changeBodyContent",value:function(e){this.bodyContent=e}}]),i);function i(e,n,t,o,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.getTranslationsService=r,this.$http=e,this.$mdDialog=t,this.viewName=o,this.location=n,this.lang="da",this.bodyContent="main-menu",this.helpButtonTemplateUrl="custom/"+o+"/html/help-button/help-button.html",this.helpMenuTemplateUrl="custom/"+o+"/html/help-button/help-menu.html",this.helpMenuHeaderTemplateUrl="custom/"+o+"/html/help-button/help-menu-header.html",this.helpMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-menu-body.html",this.helpSubMenuBodyTemplateUrl="custom/"+o+"/html/help-button/help-sub-menu-body.html",this.help={}}r.$inject=["$http","$location","$mdDialog","viewName","getTranslationsService"];t.KbHelpConfig={name:"kbHelp",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help-button/help.html"}]}}},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmExploreFooterAfterConfig={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-footer></kb-footer>\n                   <kb-help parent-ctrl='$ctrl.parentCtrl'></kb-help>"}}},{}],7:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"showScrollButton",value:function(){0!==window.pageYOffset?document.getElementById("fixedButtonsHolder").style.visibility="visible":document.getElementById("fixedButtonsHolder").style.visibility="hidden"}},{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general",document.getElementById("fixedButtonsHolder").onclick=i.OnFixedButtonsHolderClick,window.addEventListener("scroll",this.showScrollButton)}}],[{key:"OnFixedButtonsHolderClick",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}]),i);function i(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i)}t.KbHelpPageConfig={name:"kbHelpPage",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page.html"}]}}},{}],8:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){var e=window.location.search.indexOf("SPEC");this.view=0<e?"special":"general"}}]),i);function i(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i)}t.KbHelpPageHeaderConfig={name:"kbHelpPageHeader",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/help/kb-help-page-header.html"}]}}},{}],9:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){this.vid=this.location.search().vid.replace(":","-");var e=this.vid.indexOf("SPEC");this.view=0<e?"special":"general"}}]),i);function i(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.location=e}r.$inject=["$location"];t.KbHomeConfig={name:"kbHome",config:{controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/homepage/kb-homepage.html"}]}}},{}],10:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$onInit",value:function(){i.count=0,i.id||(i.id=setInterval(this.userSignedId,500))}},{key:"userSignedId",value:function(){i.count+=1,console.log(i.id+" "+i.count),5<=i.count&&(clearInterval(i.id),i.id=void 0),null==document.getElementById("signInBtn")&&function(){clearInterval(i.id),i.id=void 0;for(var e=angular.element(document.querySelectorAll("prm-user-area-expandable button.user-button")),n=angular.element(document.querySelector("kb-edit-pincode")),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=angular.element(document.querySelector("md-menu-item.my-library-card-ctm"));e[0].parentNode.insertBefore(n[0].firstChild,e[0].nextSibling)})}()}},{key:"goToEditUserinfo",value:function(){var e=this.location.search().vid,n=this.location.search().lang||"da";this.getTranslationsService._getTranslations(n,e).then(function(e){window.open(e.data["nui.details.editProfileUrl"],"_blank")}).catch(function(e){return console.error(e),e})}}]),i);function i(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.location=e,this.getTranslationsService=n}r.$inject=["$location","getTranslationsService"];t.KbEditPincodeConfig={name:"kbEditPincode",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/edit-pincode.html"}]}}},{}],11:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"changeLanguage",value:function(){var e="da"===this.lang?"en":"da";this.$location.search("lang",e),document.getElementsByTagName("html")[0].lang=e,this.$window.location.href=this.$location.absUrl()}}]),i);function i(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$window=e,this.$location=n,this.lang=this.parentCtrl.lang}r.$inject=["$window","$location"];t.KbLanguageConfig={name:"kbLanguage",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/language-and-pincode/language-and-pincode.html"}]}}},{}],12:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmUserAreaExpandableAfterConfig={name:"prmUserAreaExpandableAfter",config:{bindings:{parentCtrl:"<"},template:"<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language><kb-edit-pincode></kb-edit-pincode>"}}},{}],13:[function(e,n,t){"use strict";var o=e("./services/getTranslations.service"),r=e("./home/kbHome.component"),i=e("./special-view/prmPreFiltersAfter.component"),a=e("./edit-profile/prmPersonalInfoAfter.component"),l=e("./edit-profile/kbEditProfile.component"),c=e("./help-page/kbHelpPage.component"),s=e("./help-page/kbHelpPageHeader.component"),u=e("./footerAndHelp/prmExploreFooterAfter.component"),p=e("./footerAndHelp/kbFooter.component"),f=e("./footerAndHelp/kbHelp.component"),m=e("./navigation-header/prmTopBarBefore"),d=e("./navigation-header/kbNavigationHeader"),g=e("./language-and-pincode/prmUserAreaExpandableAfter.component"),h=e("./language-and-pincode/kbLanguage.component"),v=e("./language-and-pincode/kbEditPincode.component"),b=e("./chat-box/scriptIds.constant"),y=e("./open-items-location-filter/prmLocationItemsAfter.component"),k=e("./move-request-another-bin/prmServiceButtonAfter.component"),P=e("./pickup-numbers/pickUpNumbers.service"),w=e("./pickup-numbers/prmRequestsAfter.component");angular.module("viewCustom",["angularLoad"]).constant("viewName",function(){var e=window.location.search.substring(1),n=e.substring(e.indexOf("vid")+4);e||(n=(n=(e=window.location.pathname).substring(e.indexOf("/delivery/")+10)).substring(0,n.indexOf("/")));var t=(t=n.substring(0,n.indexOf("&"))?n.substring(0,n.indexOf("&")):n).replace("%3A","-");return console.log("vid:",t),t.replace(":","-")}()).constant("scriptIds",b.scriptIds).service("getTranslationsService",o.GetTranslationsService).component(s.KbHelpPageHeaderConfig.name,s.KbHelpPageHeaderConfig.config).component(c.KbHelpPageConfig.name,c.KbHelpPageConfig.config).component(r.KbHomeConfig.name,r.KbHomeConfig.config).component(i.PrmPreFiltersAfterConfig.name,i.PrmPreFiltersAfterConfig.config).component(a.PrmPersonalInfoAfterConfig.name,a.PrmPersonalInfoAfterConfig.config).component(l.KbEditProfileConfig.name,l.KbEditProfileConfig.config).component(u.PrmExploreFooterAfterConfig.name,u.PrmExploreFooterAfterConfig.config).component(p.KbFooterConfig.name,p.KbFooterConfig.config).component(f.KbHelpConfig.name,f.KbHelpConfig.config).component(m.PrmTopBarBeforeConfig.name,m.PrmTopBarBeforeConfig.config).component(d.KbNavigationHeaderConfig.name,d.KbNavigationHeaderConfig.config).component(y.PrmLocationItemsAfterConfig.name,y.PrmLocationItemsAfterConfig.config).component(k.PrmServiceButtonAfterConfig.name,k.PrmServiceButtonAfterConfig.config).component(g.PrmUserAreaExpandableAfterConfig.name,g.PrmUserAreaExpandableAfterConfig.config).component(h.KbLanguageConfig.name,h.KbLanguageConfig.config).component(v.KbEditPincodeConfig.name,v.KbEditPincodeConfig.config).service("pickUpNumbersService",P.PickUpNumbersService).component(w.PrmRequestsAfterConfig.name,w.PrmRequestsAfterConfig.config),e("kb-primo-ve-announcement"),e("kb-primo-ve-hide-new-user-if-loggedin")},{"./chat-box/scriptIds.constant":1,"./edit-profile/kbEditProfile.component":2,"./edit-profile/prmPersonalInfoAfter.component":3,"./footerAndHelp/kbFooter.component":4,"./footerAndHelp/kbHelp.component":5,"./footerAndHelp/prmExploreFooterAfter.component":6,"./help-page/kbHelpPage.component":7,"./help-page/kbHelpPageHeader.component":8,"./home/kbHome.component":9,"./language-and-pincode/kbEditPincode.component":10,"./language-and-pincode/kbLanguage.component":11,"./language-and-pincode/prmUserAreaExpandableAfter.component":12,"./move-request-another-bin/prmServiceButtonAfter.component":14,"./navigation-header/kbNavigationHeader":15,"./navigation-header/prmTopBarBefore":16,"./open-items-location-filter/prmLocationItemsAfter.component":17,"./pickup-numbers/pickUpNumbers.service":18,"./pickup-numbers/prmRequestsAfter.component":19,"./services/getTranslations.service":20,"./special-view/prmPreFiltersAfter.component":21,"kb-primo-ve-announcement":22,"kb-primo-ve-hide-new-user-if-loggedin":23}],14:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){var a=this;this.intervalId=this.$interval(function(){var e=angular.element(document.querySelector("span[translate='AlmaRequestOther']"));if(e.length&&(a.$interval.cancel(a.intervalId),(e=e.parent().parent())[0].textContent===angular.element(a.$element.parent())[0].textContent)){for(var n=e.parent();!n.hasClass("section-body")&&"BODY"!==n[0].tagName;)n=n.parent();n.append(e.parent()),e.parent().addClass("orderAtTheBottom"),e.parent().css("float","right");for(var t=angular.element(document.querySelectorAll("span[translate='AlmaItemRequest']")),o=0;o<t.length;o++)t[o].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&(console.log("hej"),e.css("display","none"))});for(var r=angular.element(document.querySelectorAll("prm-opac-back-button button")),i=0;i<r.length;i++)r[i].addEventListener("click",function(){document.getElementsByClassName("orderAtTheBottom")&&document.getElementsByClassName("orderAtTheBottom").length&&(document.getElementsByClassName("orderAtTheBottom")[0].remove(),e.css("display","inline-block"))})}},500,5)}}]),i);function i(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=e,this.$interval=n}r.$inject=["$element","$interval"];t.PrmServiceButtonAfterConfig={name:"prmServiceButtonAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],15:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){var e=this.$element.parent().parent().parent().parent();angular.element(e.children()[0]).append(this.$element)}}]),i);function i(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=e}r.$inject=["$element"];t.KbNavigationHeaderConfig={name:"kbNavigationHeader",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/navigation-header/navigation-header.html"}]}}},{}],16:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PrmTopBarBeforeConfig={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},template:"<kb-navigation-header parent-ctrl='$ctrl.parentCtrl'></kb-navigation-header>"}}},{}],17:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"activateFilter",value:function(e){var n=angular.element(document.querySelectorAll("prm-locations > div > button.md-icon-button.md-ink-ripple")),t=angular.element(document.querySelectorAll("prm-location-items  div  button.md-icon-button.md-ink-ripple")),o=angular.element(document.querySelectorAll("prm-locations-filter md-input-container"));!n.length&&!t.length||o.length?o.length&&this.$interval.cancel(e):(this.$interval.cancel(e),n.length&&n.triggerHandler("click"),t.length&&t.triggerHandler("click"))}},{key:"$postLink",value:function(){var e=this;this.$intervalId=this.$interval(function(){e.activateFilter(e.$intervalId)},500,10)}}]),i);function i(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$interval=e}r.$inject=["$interval"];t.PrmLocationItemsAfterConfig={name:"prmLocationItemsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],18:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$http=e,this.location=n,this._pickUpNumbersForIds={},this._runningPromise,this._ongoingInsertions=0}(t.PickUpNumbersService=(o(i,[{key:"waitForIdsAndInsertPickUpNumbers",value:function(t){var o=this;t.$scope.$watch(function(){return t.selector(t.parentElement).length},function(e,n){e&&e!==n&&o.retrieveAndInsertPickUpNumbers(t.parentCtrl,t.parentElement,t.parentCtrl.requestsService.requestsDisplay,t.selector)})}},{key:"retrieveAndInsertPickUpNumbers",value:function(e,n,t,o){var r=this;return this._runningPromise?this._runningPromise.then(function(){return r._insert(e,n,t,o)}):this._insert(e,n,t,o)}},{key:"getPickupLabel",value:function(){return"en"===this.location.search().lang?"Pickup number: ":"Ventehyldenummer: "}},{key:"getServiceBaseUrl",value:function(){var e=this.location.$$absUrl;return e.includes("kbdk-kgl-psb.primo.exlibrisgroup")?"https://public-stage.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/":e.includes("soeg.kb.dk")?"https://webservice.kb.dk/alma-pickupnumbers/services/public/pickupnumber/":"https://developer.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/"}},{key:"insertPickUpNumber",value:function(e,n){var t;-1===n.innerHTML.indexOf('<span class="pickupnumber">')&&(t="<br/><span class='pickupnumber'>"+this.getPickupLabel()+"</span>"+e+"<br/>",angular.element(n.querySelectorAll("p.request-location")).append(t))}},{key:"insertPickupnumbersToOverview",value:function(t){var o=this,r=document.querySelectorAll("prm-requests-overview");0<r.length?this.addPickupnumbersToOverview(r,t):ctrl.$scope.$watch(function(){return r.length},function(e,n){r.length&&o.addPickupnumbersToOverview(r,t)})}},{key:"addPickupnumbersToOverview",value:function(e,n){for(var t,o=angular.element(document.querySelectorAll('prm-requests-overview div[class="md-list-item-text layout-fill"]')),r=0;r<Object.keys(o).length-1;r++){this._pickUpNumbersForIds[n[r].requestId]&&-1===o[r].innerHTML.indexOf('<span class="pickupnumber">')&&(t='<p class="weak-text"><span class="pickupnumber">'+this.getPickupLabel()+"</span><span>"+this._pickUpNumbersForIds[n[r].requestId]+"</span></p>",angular.element(o[r]).append(t))}}},{key:"_insert",value:function(i,a,l,c){var s=this,u=this;return u._runningPromise=new Promise(function(t,e){var n=c(a),o=u._composeRequestObjects(n,l);u._ongoingInsertions=o.length;var r=[];o.forEach(function(e,n){r[n]=u._insertForRequest(i.requestsDisplay[n],e),r[n].then(function(){u._ongoingInsertions=u._ongoingInsertions-1,0===u._ongoingInsertions&&(s.insertPickupnumbersToOverview(l),t())}).catch(function(){u._ongoingInsertions=u._ongoingInsertions-1,0===u._ongoingInsertions&&(s.insertPickupnumbersToOverview(l),t())})})}),this._runningPromise}},{key:"_composeRequestObjects",value:function(t,e){return e.map(function(e,n){return{element:t[n],id:e.requestId,expandedDisplay:e.expandedDisplay,isAlert:e.isAlert}})}},{key:"_insertForRequest",value:function(e,o){var r=this,i=this;return new Promise(function(t,n){o.element?i._pickUpNumbersForIds[o.id]?(r.insertPickUpNumber(i._pickUpNumbersForIds[o.id],o.element),t()):o.isAlert?i._retrievePickUpNumber(o.id).then(function(e){var n=e.data.number;i._pickUpNumbersForIds[o.id]=n,r.insertPickUpNumber(n,o.element),t()}).catch(function(e){return console.log("Could not retrieve the pick up number."),n(e),e}):t():n()})}},{key:"_retrievePickUpNumber",value:function(e){return this.$http.get(this.getServiceBaseUrl()+e)}}]),i)).$inject=["$http","$location"]},{}],19:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$onInit",value:function(){this.parentElement=this.$element.parent()[0],this.pickUpNumbersService.waitForIdsAndInsertPickUpNumbers(this)}},{key:"selector",value:function(e){return e.querySelectorAll("md-list-item")}}]),i);function i(e,n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$scope=e,this.$element=n,this.pickUpNumbersService=t}r.$inject=["$scope","$element","pickUpNumbersService"];t.PrmRequestsAfterConfig={name:"prmRequestsAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],20:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$http=e}(t.GetTranslationsService=(o(i,[{key:"_getTranslations",value:function(e,n){return this.$http.get("/primaws/rest/pub/translations/"+n+"?lang="+e)}}]),i)).$inject=["$http"]},{}],21:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(i,[{key:"$postLink",value:function(){var e,n;(this.location.search().vid.indexOf("SPEC")||this.location.search().vid.indexOf("spec"))&&(angular.element(document.querySelector("prm-search-bar form > div > div")).prepend(document.getElementById("specialViewSearchScope")),angular.element(document.getElementById("searchBar")).addClass("hidePlaceholder"),e=this.location.search().lang||"da",n=this.location.search().vid,console.log("viewName:",n),this.changeSearchBarPlaceholder(e,n))}},{key:"changeSearchBarPlaceholder",value:function(e,n){this.getTranslationsService._getTranslations(e,n).then(function(e){var n=e.data["fulldisplay.homepage.special.search.placeholder"];setTimeout(function(){angular.element(document.getElementById("searchBar")).removeClass("hidePlaceholder"),angular.element(document.getElementById("searchBar")).attr("placeholder",n)},500)}).catch(function(e){return console.log(e),e})}}]),i);function i(e,n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=e,this.getTranslationsService=n,this.location=t}r.$inject=["$element","getTranslationsService","$location"];t.PrmPreFiltersAfterConfig={name:"prmPreFiltersAfter",config:{bindings:{parentCtrl:"<"},controller:r,templateUrl:["viewName",function(e){return"custom/"+e+"/html/special-view/search-scope.html"}]}}},{}],22:[function(p,e,n){!function i(a,l,c){function s(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof p&&p;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=l[n]={exports:{}};a[n][0].call(r.exports,function(e){return s(a[n][1][e]||e)},r,r.exports,i,a,l,c)}return l[n].exports}for(var u="function"==typeof p&&p,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i;function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n,t,o){var r=this;!function(e){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this),this.$translate=e,this.$mdToast=n,this.$rootScope=t,this.$cookies=o,this._dismissed=!1,this.$rootScope.$on("$translateChangeSuccess",function(){r._dismissed=!1})}(t.AnnouncementService=(o=l,(r=[{key:"_dismiss",value:function(){this._dismissed=!0,this._toastPromise=null}},{key:"display",value:function(o){var r=this;return new Promise(function(n,t){!0!==r._dismissed?r.$translate("nui.message.announcement").then(function(e){if(r.$cookies.get("announcement")!==e){if(!e||["announcement","&nbsp;",""].includes(e))return r._toastPromise&&!r._dismissed&&r.$mdToast.hide(),void t("No announcement found.");r._toastPromise=r._toastPromise||r.$mdToast.show({hideDelay:!1,position:"top",controller:function(){return{close:function(){r.$mdToast.hide(),r.$translate("nui.message.announcement").then(function(e){return r.$cookies.put("announcement",e)})}}},controllerAs:"$ctrl",template:'\n<md-toast class="page-notification" style="top: 0px; position: sticky !important;">\n    <div class="md-toast-content" style="box-shadow:none; width: 100%;">\n        <span class=\'md-toast-text\' flex translate=\'nui.message.announcement\'>\n  </span>\n    </div>\n    <a class="close" ng-click=\'$ctrl.close()\' aria-label="{{\'nui.message.dismiss\' | translate}}"\n       style="position: absolute; right: 1.5rem; top: 1.5rem;">\n        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close">\n        </prm-icon>\n    </a>\n</md-toast>\n          '}),r._toastPromise.then(o).catch(o).then(function(){return r._dismiss()}),n()}else t("The announcement has been dismissed before.")}):t("The announcement has been dismissed.")})}}])&&a(o.prototype,r),i&&a(o,i),l)).$inject=["$translate","$mdToast","$rootScope","$cookies"]},{}],2:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(o(i.prototype,[{key:"$onInit",value:function(){this.announcementService.display().catch(function(e){e&&console.log(e)})}}]),i);function i(e,n,t,o){!function(e){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this),this.announcementService=e,this.$scope=n,this.$element=t,this.$translate=o}r.$inject=["announcementService","$scope","$element","$translate"],t.PrmTopbarAfterConfig={name:"prmTopbarAfter",config:{controller:r,require:{primoExploreCtrl:"^primoExplore"}}}},{}],3:[function(e,n,t){"use strict";var o=e("./announcement/announcement.service"),r=e("./announcement/prmTopbarAfter.component");angular.module("viewCustom").service("announcementService",o.AnnouncementService).component(r.PrmTopbarAfterConfig.name,r.PrmTopbarAfterConfig.config)},{"./announcement/announcement.service":1,"./announcement/prmTopbarAfter.component":2}]},{},[3])},{}],23:[function(p,e,n){!function i(a,l,c){function s(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof p&&p;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=l[n]={exports:{}};a[n][0].call(r.exports,function(e){return s(a[n][1][e]||e)},r,r.exports,i,a,l,c)}return l[n].exports}for(var u="function"==typeof p&&p,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=(o(i.prototype,[{key:"$postLink",value:function(){this.isLoggedIn&&angular.element(document).ready(function(){var e=angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));e&&0!==e.length&&e.css("display","none")})}}]),i);function i(){!function(e){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this),this.isLoggedIn=this.parentCtrl.isLoggedIn}t.PrmTopNavBarLinksAfterConfig={name:"prmTopNavBarLinksAfter",config:{bindings:{parentCtrl:"<"},controller:r}}},{}],2:[function(e,n,t){"use strict";var o=e("./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component");angular.module("viewCustom").component(o.PrmTopNavBarLinksAfterConfig.name,o.PrmTopNavBarLinksAfterConfig.config)},{"./hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component":1}]},{},[2])},{}]},{},[13]);
//# sourceMappingURL=custom.js.map
