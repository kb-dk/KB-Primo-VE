!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);var o="45KBDK_KGL:KGL_VU1";function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.$location=n,this.$window=t}var n,t,i;return n=e,(t=[{key:"navigateTo",value:function(e){void 0===e||""===e?this.navigateToHomePage():this.$window.open(e,"_blank")}},{key:"navigateToHomePage",value:function(){var e=this.$location.search(),n=e.vid||o,t=e.lang||"da",r=this.$location.absUrl().split("/discovery/");if(1===r.length)return console.log("Could not process the URL : "+r[0]),!1;var i=r[0];return this.$window.location.href=i+"/discovery/search?vid="+n+"&lang="+t,!0}}])&&r(n.prototype,t),i&&r(n,i),e}();i.$inject=["$location","$window"];var a={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},templateUrl:"custom/"+o+"/html/footer/footer.html"}};function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.navigationService=n}var n,t,o;return n=e,(t=[{key:"getIconLink",value:function(){return this.parentCtrl.iconLink}}])&&c(n.prototype,t),o&&c(n,o),e}();l.$inject=["navigationService"];var u={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},controller:l,templateUrl:"custom/"+o+"/html/logo/prmLogoAfter.component.html"}},f={name:"prmSearchBarAfter",config:{bindings:{parentCtrl:"<"},templateUrl:"custom/"+o+"/html/topcontainer/prmSearchBarAfter.component.html"}};angular.module("viewCustom",["angularLoad"]).run(["$rootScope",function(e){e.viewName=o}]),angular.module("viewCustom").service("navigationService",i).component(a.name,a.config).component(u.name,u.config).component(f.name,f.config)}]);