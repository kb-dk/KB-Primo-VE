class PrmPreFiltersAfterController {
    constructor($element) {
        this.$element = $element;
    }

    $postLink() {
        // Find containers parent element
        let parentElement = angular.element(document.querySelectorAll('prm-search-bar form > div > div'));

        parentElement.prepend(this.$element.find('div'));
    }
}

PrmPreFiltersAfterController.$inject = ['$element'];

export let PrmPreFiltersAfterConfig = {
    name: 'prmPreFiltersAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmPreFiltersAfterController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/special-view/search-scope.html';
        }],
    }
};