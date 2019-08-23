import { viewName } from '../shared/viewName';

class PrmUserAreaExpandableAfterController {

    constructor($location, $window) {
        this.$location = $location;
        this.$window = $window;
    }

    changeLanguage() {
        let lang = this.$location.search().lang;
        if (lang === 'da'){
            this.$location.search('lang', 'en');
        } else {
            this.$location.search('lang', 'da');
        }
        this.$window.location.href = this.$location.absUrl();
    }
}

PrmUserAreaExpandableAfterController.$inject = ['$location', '$window'];

export let PrmUserAreaExpandableAfterConfig=  {
    name: 'prmUserAreaExpandableAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        }, reloadOnSearch: false,
        controller: PrmUserAreaExpandableAfterController,
        templateUrl: 'custom/' + viewName + '/html/language/language.html'
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
