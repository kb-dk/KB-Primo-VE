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

},{"../shared/viewName":4}],2:[function(require,module,exports){
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

},{"../shared/viewName":4}],3:[function(require,module,exports){
'use strict';

var _viewName = require('./shared/viewName');

var _prmExploreFooterAfter = require('./footer/prmExploreFooterAfter.component');

var _prmLogoAfter = require('./logo/prmLogoAfter.component');

var _prmSearchBarAfter = require('./topcontainer/prmSearchBarAfter.component');

// Logo
// // Shared
angular.module('viewCustom', ['angularLoad']).run(['$rootScope', function ($rootScope) {
    $rootScope.viewName = _viewName.viewName;
}]);

// Top container (design element)

// import { LocaleService } from './shared/locale.service';

// Footer


angular.module('viewCustom')

// Shared
//     .service('localeService', LocaleService)

// Footer
.component(_prmExploreFooterAfter.PrmExploreFooterAfterConfig.name, _prmExploreFooterAfter.PrmExploreFooterAfterConfig.config)
//Logo
.component(_prmLogoAfter.PrmLogoAfterConfig.name, _prmLogoAfter.PrmLogoAfterConfig.config)

// Top container (design element)
.component(_prmSearchBarAfter.PrmSearchBarAfterConfig.name, _prmSearchBarAfter.PrmSearchBarAfterConfig.config);

},{"./footer/prmExploreFooterAfter.component":1,"./logo/prmLogoAfter.component":2,"./shared/viewName":4,"./topcontainer/prmSearchBarAfter.component":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Define the view name here.
var viewName = exports.viewName = "45KBDK_KGL:KGL_VU1";

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrmSearchBarAfterConfig = undefined;

var _viewName = require('../shared/viewName');

var PrmSearchBarAfterConfig = exports.PrmSearchBarAfterConfig = {
  name: 'prmSearchBarAfter',
  config: {
    templateUrl: 'custom/' + _viewName.viewName + '/html/topcontainer/prmSearchBarAfter.component.html'
  }
};

},{"../shared/viewName":4}]},{},[3])


//# sourceMappingURL=custom.js.map
