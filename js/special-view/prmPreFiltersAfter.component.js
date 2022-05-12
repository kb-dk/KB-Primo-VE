class PrmPreFiltersAfterController {
    constructor($element) {
        this.$element = $element;
    }

    $postLink() {
        // Add this element only in Special view
        if (window.location.search.indexOf('45KBDK_KGL:SPEC')){
            // Find parent element
            let parentElement = angular.element(document.querySelectorAll('prm-search-bar form > div > div'));
            // Add the element as the first child of the parent
            parentElement.prepend(this.$element.find('div'));
        }
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