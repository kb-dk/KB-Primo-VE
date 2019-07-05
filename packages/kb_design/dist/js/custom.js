(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrmExploreFooterAfterConfig = undefined;

var _viewName = require('../shared/viewName');

// import {PrmExploreFooterAfterController} from './prmExploreFooterAfter.component';

// class PrmExploreFooterAfterController {
//     constructor() {
//         // this.iconLink = 'hi';
//     }
//
//     iconLink () {
//         return 'Hi';
//     };
//
// }

var PrmExploreFooterAfterConfig = exports.PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: { parentCtrl: '<' },
        // controller: PrmExploreFooterAfterController,
        templateUrl: 'custom/' + _viewName.viewName + '/html/footer/footer' + '.html'
    }
};

},{"../shared/viewName":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrmUserAreaExpandableAfterConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewName = require('../shared/viewName');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrmUserAreaExpandableAfterController = function () {
    function PrmUserAreaExpandableAfterController($location, $window) {
        _classCallCheck(this, PrmUserAreaExpandableAfterController);

        this.$location = $location;
        this.$window = $window;
    }

    _createClass(PrmUserAreaExpandableAfterController, [{
        key: 'changeLanguage',
        value: function changeLanguage() {
            var lang = this.$location.search().lang;
            if (lang === 'da') {
                this.$location.search('lang', 'en');
            } else {
                this.$location.search('lang', 'da');
            }
            this.$window.location.href = this.$location.absUrl();
        }
    }]);

    return PrmUserAreaExpandableAfterController;
}();

PrmUserAreaExpandableAfterController.$inject = ['$location', '$window'];

var PrmUserAreaExpandableAfterConfig = exports.PrmUserAreaExpandableAfterConfig = {
    name: 'prmUserAreaExpandableAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        }, reloadOnSearch: false,
        controller: PrmUserAreaExpandableAfterController,
        templateUrl: 'custom/' + _viewName.viewName + '/html/language/language.html'
    }
};

/*
let app = angular.module('viewCustom', ['angularLoad']);

app.component('prmUserAreaExpandableAfter', {
    bindings: { parentCtrl: '<' },
    reloadOnSearch: false,
    controller: 'prmUserAreaExpandableAfterController',
    template: `<button class="md-no-style md-button md-ink-ripple width-100" ng-click="$ctrl.changeLanguage()" aria-label="">{{'nui.menu.language' | translate}}</button>`
});

app.controller('prmUserAreaExpandableAfterController', ['$location', '$window', function ($location, $window) {
    let vm = this;
    vm.changeLanguage = changeLanguage;

    function changeLanguage() {
        console.log($location.search().lang);
        let lang = $location.search().lang;
        if (lang === 'da'){
            $location.search('lang', 'en');
        } else {
            $location.search('lang', 'da');
        }
        console.log($location.absUrl());
        $window.location.href = $location.absUrl();
    }
}]);*/

},{"../shared/viewName":4}],3:[function(require,module,exports){
'use strict';

var _prmExploreFooterAfter = require('./footer/prmExploreFooterAfter.component');

var _prmUserAreaExpandableAfter = require('./language/prmUserAreaExpandableAfter.component');

// Footer
angular.module('viewCustom', ['angularLoad']);

// Language switcher


angular.module('viewCustom')

// Footer
.component(_prmExploreFooterAfter.PrmExploreFooterAfterConfig.name, _prmExploreFooterAfter.PrmExploreFooterAfterConfig.config)

// Language switcher
.component(_prmUserAreaExpandableAfter.PrmUserAreaExpandableAfterConfig.name, _prmUserAreaExpandableAfter.PrmUserAreaExpandableAfterConfig.config);

},{"./footer/prmExploreFooterAfter.component":1,"./language/prmUserAreaExpandableAfter.component":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Define the view name here.
var viewName = exports.viewName = "45KBDK_KGL:KGL_VU1";

},{}]},{},[3])


//# sourceMappingURL=custom.js.map
