class KbHelpPageHeaderController {

    constructor() {
    };

    $postLink() {
        let url = window.location.search;
        let index = url.indexOf('SPEC');
        this.view = index > 0 ? 'special' : 'general';
    };
}

export let KbHelpPageHeaderConfig = {
    name: 'kbHelpPageHeader',
    config: {
        controller: KbHelpPageHeaderController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/help/kb-help-page-header.html';
        }],
    }
};