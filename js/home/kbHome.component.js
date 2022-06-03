class KbHomeController {

    constructor() {
    };

    $postLink() {
        let url = window.location.search;
        let index = url.indexOf('SPEC');
        this.view = index > 0 ? 'special' : 'general';
    };
}

export let KbHomeConfig = {
    name: 'kbHome',
    config: {
        controller: KbHomeController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/homepage/kb-homepage.html';
        }],
    }
};