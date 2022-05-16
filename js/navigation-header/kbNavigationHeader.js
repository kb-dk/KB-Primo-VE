class KbNavigationHeaderController {
    constructor($element) {
        this.$element = $element;
    };

    $postLink() {
        // Find containers parent element
        let parentElement = this.$element.parent().parent().parent().parent();
        console.log(parentElement);
        // Move navigation header to the top
        let container = angular.element(parentElement.children()[0]);
        container.append(this.$element);
    };
}

KbNavigationHeaderController.$inject = ['$element'];

export let KbNavigationHeaderConfig = {
    name: 'kbNavigationHeader',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: KbNavigationHeaderController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/navigation-header/navigation-header.html';
        }],
    },
}