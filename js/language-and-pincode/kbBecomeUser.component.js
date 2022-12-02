class KbBecomeUserController {

    constructor($window, $location) {
        this.$window = $window;
        this.$location = $location;
    };

    $onInit() {
    }
}

KbBecomeUserController.$inject = ['$window', '$location'];

export let KbBecomeUserConfig=  {
    name: 'kbBecomeUser',
    config: {
        controller: KbBecomeUserController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/language-and-pincode/become-user.html';
        }],
    }
};