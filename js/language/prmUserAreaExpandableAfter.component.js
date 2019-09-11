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
        templateUrl: function(){
            let query = window.location.search.substring(1);
            let start = query.indexOf('vid')+4;
            query = query.substring(start);
            let end = query.indexOf('&');
            let vid = query.substring(0, end);
                vid = vid.replace(":", "-");
            let templateUrl = 'custom/' + vid + '/html/language/language.html';
            return templateUrl;
        },
    }
};