import "@kb-dk/kb-footer/dist/index";

class KbPrimoFooterController {

    constructor($location) {
        this.location = $location;
        this.lang = this.location.search().lang;
        this.lang = this.lang ? this.lang : 'da';
    };

    $onInit() {
    }
}

KbPrimoFooterController.$inject = ['$location'];

export let KbPrimoFooterConfig = {
    name: 'kbPrimoFooter',
    config: {
        controller: KbPrimoFooterController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/footer/footer.html';
        }],
    }
};