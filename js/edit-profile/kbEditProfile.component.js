class KbEditProfileController {
    constructor($element) {
        this.$element = $element;
    };

    $postLink() {
        // Move edit-profile button to the desired position
        let container = angular.element(document.querySelector('md-card#personalDetails .md-toolbar-tools'));
        container.append(this.$element);
    };
}

KbEditProfileController.$inject = ['$element'];
export let KbEditProfileConfig = {
    name: 'kbEditProfile',
    config: {
        controller: KbEditProfileController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/edit-profile/edit-profile.html';
        }],
    }
};