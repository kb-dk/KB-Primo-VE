class KbLanguageController {

    constructor($window, $location, $rootScope) {
        this.$window = $window;
        this.$location = $location;
        this.$rootScope = $rootScope;
    };

    $onInit() {
        this.lang = this.parentCtrl.lang;
    }

    changeLanguage() {
        let newLang = this.lang === 'da'? 'en' : 'da';
        this.$location.search('lang', newLang);
        document.getElementsByTagName("html")[0].lang = newLang;
        this.$window.location.href = this.$location.absUrl();
    }

}

KbLanguageController.$inject = ['$window', '$location', '$rootScope'];

export let KbLanguageConfig=  {
    name: 'kbLanguage',
    config: {
        bindings: {
            parentCtrl: '<',
        },
        controller: KbLanguageController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/language-and-pincode/language.html';
        }],
    }
};