class KbHelpPageController {

    constructor() {
    };

    $postLink() {
        let url = window.location.search;
        let index = url.indexOf('45KBDK_KGL:SPEC');
        this.view = index > 0 ? 'special' : 'general';
    };
}

export let KbHelpPageConfig = {
    name: 'kbHelpPage',
    config: {
        controller: KbHelpPageController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/help/kb-help-page.html';
        }],
    }
};