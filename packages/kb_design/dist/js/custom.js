(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrmExploreFooterAfterConfig = undefined;

var _viewName = require('../shared/viewName');

var PrmExploreFooterAfterConfig = exports.PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: { parentCtrl: '<' },
        templateUrl: 'custom/' + _viewName.viewName + '/html/footer/footer' + '.html'
    }
};

},{"../shared/viewName":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrmLogoAfterConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewName = require('../shared/viewName');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Clickable logo.
var PrmLogoAfterController = function () {
  function PrmLogoAfterController(navigationService) {
    _classCallCheck(this, PrmLogoAfterController);

    this.navigationService = navigationService;
  }

  _createClass(PrmLogoAfterController, [{
    key: 'getIconLink',
    value: function getIconLink() {
      return this.parentCtrl.iconLink;
    }
  }]);

  return PrmLogoAfterController;
}();

PrmLogoAfterController.$inject = ['navigationService'];

var PrmLogoAfterConfig = exports.PrmLogoAfterConfig = {
  name: 'prmTopBarBefore',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: PrmLogoAfterController,
    templateUrl: 'custom/' + _viewName.viewName + '/html/logo/prmLogoAfter.component.html'
  }
};

},{"../shared/viewName":5}],3:[function(require,module,exports){
'use strict';

var _viewName = require('../../src/js/shared/viewName');

var _navigation = require('../../src/js/shared/navigation.service');

var _prmExploreFooterAfter = require('../../src/js/footer/prmExploreFooterAfter.component');

var _prmLogoAfter = require('../../src/js/logo/prmLogoAfter.component');

var _prmSearchBarAfter = require('../../src/js/topcontainer/prmSearchBarAfter.component');

// Logo
angular.module('viewCustom', ['angularLoad']).run(['$rootScope', function ($rootScope) {
    $rootScope.viewName = _viewName.viewName;
}]);

// Top container (design element)


// Footer
// // Shared


angular.module('viewCustom')

// Shared
.service('navigationService', _navigation.NavigationService)

// Footer
.component(_prmExploreFooterAfter.PrmExploreFooterAfterConfig.name, _prmExploreFooterAfter.PrmExploreFooterAfterConfig.config)
//Logo
.component(_prmLogoAfter.PrmLogoAfterConfig.name, _prmLogoAfter.PrmLogoAfterConfig.config)

// Top container (design element)
.component(_prmSearchBarAfter.PrmSearchBarAfterConfig.name, _prmSearchBarAfter.PrmSearchBarAfterConfig.config);

},{"./footer/prmExploreFooterAfter.component":1,"./logo/prmLogoAfter.component":2,"./shared/navigation.service":4,"./shared/viewName":5,"./topcontainer/prmSearchBarAfter.component":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewName = require('./viewName');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A service handling navigation logic. 
 */
var NavigationService = exports.NavigationService = function () {
  function NavigationService($location, $window) {
    _classCallCheck(this, NavigationService);

    this.$location = $location;
    this.$window = $window;
  }

  /**
   * Opens the given url in a new tab, 
   * or navigates to the home page if the url is blank.
   * @param {string} url- The URL to be navigated to.
   */


  _createClass(NavigationService, [{
    key: 'navigateTo',
    value: function navigateTo(url) {
      if (typeof url === 'undefined' || url === "") this.navigateToHomePage();else this.$window.open(url, '_blank');
    }
  }, {
    key: 'navigateToHomePage',


    /**
     * Navigates to the home page with a reload.
     * @return {boolean} Booelan value indicating if the navigation was successful.
     */
    value: function navigateToHomePage() {
      var params = this.$location.search();
      var vid = params.vid || _viewName.viewName;
      var lang = params.lang || "da";
      var split = this.$location.absUrl().split('/discovery/');

      if (split.length === 1) {
        console.log('Could not process the URL : ' + split[0]);
        return false;
      }

      var baseUrl = split[0];
      this.$window.location.href = baseUrl + '/discovery/search?vid=' + vid + '&lang=' + lang;
      return true;
    }
  }]);

  return NavigationService;
}();

NavigationService.$inject = ['$location', '$window'];

},{"./viewName":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Define the view name here.
var viewName = exports.viewName = "45KBDK_KGL:KGL_VU1";

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrmSearchBarAfterConfig = undefined;

var _viewName = require('../shared/viewName');

var PrmSearchBarAfterConfig = exports.PrmSearchBarAfterConfig = {
  name: 'prmSearchBarAfter',
  config: {
    bindings: { parentCtrl: '<' },
    templateUrl: 'custom/' + _viewName.viewName + '/html/topcontainer/prmSearchBarAfter.component.html'
  }
};

},{"../shared/viewName":5}]},{},[3])


//# sourceMappingURL=custom.js.map
