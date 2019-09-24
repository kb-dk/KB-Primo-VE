class PrmUserAreaExpandableAfterController {

    constructor($location, $window) {
        this.$location = $location;
        this.$window = $window;
    }

    changeLanguage() {
        let lang = this.$location.search().lang;
        if (lang === 'da'){
            this.$location.search('lang', 'en');
            document.getElementsByTagName("BODY")[0].lang = 'en';

        } else {
            this.$location.search('lang', 'da');
        }
        this.$window.location.href = this.$location.absUrl();
        document.getElementsByTagName("BODY")[0].lang = 'da';

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
        templateUrl: ["$rootScope", function($rootScope){
            return 'custom/' + $rootScope.viewName + '/html/language/language.html';
        }],
    }
};