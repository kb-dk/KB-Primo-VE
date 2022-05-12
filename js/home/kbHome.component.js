class KbHomeController {

    constructor() {
    };

    $postLink() {
        let url = window.location.search;
        let index = url.indexOf('45KBDK_KGL:SPEC');
        this.view = index > 0 ? 'special' : 'general';
        console.log(index);
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