class PrmTopBarBeforeController {
    constructor($element) {
        this.$element = $element;
    };

    $postLink() {

        let parentElement = this.$element.parent().parent().parent();
        // Move the header.
        let container = angular.element(parentElement.children()[0]);
        container.append(this.$element.children()[0]);
    };
}

PrmTopBarBeforeController.$inject = ['$element'];

export let PrmTopBarBeforeConfig = {
    name: 'prmTopBarBefore',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmTopBarBeforeController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/navigation-header/navigation-header.html';
        }],
    },
}