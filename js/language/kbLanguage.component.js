class KbLanguageController {

    constructor($window, $location) {
        this.$window = $window;
        this.$location = $location;
        this.lang = this.parentCtrl.lang;

    };

    changeLanguage() {
        let newLang = this.lang === 'da'? 'en' : 'da';
        this.$location.search('lang', newLang);
        document.getElementsByTagName("html")[0].lang = newLang;
        this.$window.location.href = this.$location.absUrl();
    }

}

KbLanguageController.$inject = ['$window', '$location'];

export let KbLanguageConfig=  {
    name: 'kbLanguage',
    config: {
        bindings: {
            parentCtrl: '<',
        },
        controller: KbLanguageController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/language/language.html';
        }],
    }
};