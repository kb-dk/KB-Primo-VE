class KbHomeController {

    constructor($location) {
        this.location = $location;
    };

    $postLink() {
        this.vid = this.location.search().vid.replace(":", "-");
        let index = this.vid.indexOf('SPEC');
        this.view = index > 0 ? 'special' : 'general';
    };
}

KbHomeController.$inject = ['$location'];


export let KbHomeConfig = {
    name: 'kbHome',
    config: {
        controller: KbHomeController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/homepage/kb-homepage.html';
        }],
    }
};