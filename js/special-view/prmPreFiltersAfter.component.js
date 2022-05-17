class PrmPreFiltersAfterController {
    constructor($element, getTranslationsService, $location) {
        this.$element = $element;
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
    }

    $postLink() {
        // Do these operations only in Special view
        if (this.location.search().vid === '45KBDK_KGL:SPEC') {
            // 1- Move the yellow search scope element into the search bar
            // Find parent element
            let parentElement = angular.element(document.querySelectorAll('prm-search-bar form > div > div'));
            // Add the element as the first child of the parent
            parentElement.prepend(this.$element.find('div'));


            // 2- Change placeholder text in the search bar
            // First hide the placeholder so the default one won't appear
            // Get the translation from the API
            // Wait 500 milliseconds, so the default translation for placeholder comes first
            // And then overwrite the placeholder text and make it visible
            let lang = this.location.search().lang;
            angular.element(document.getElementById('searchBar')).addClass('hidePlaceholder');
            this.changeSearchBarPlaceholder(lang);
        }



    }

    changeSearchBarPlaceholder(lang){
        this.getTranslationsService._getTranslations(lang)
            .then(response => {
                let placeHolderText = response.data["fulldisplay.homepage.special.search.placeholder"];
                setTimeout(function(){
                    angular.element(document.getElementById('searchBar')).removeClass('hidePlaceholder');
                    angular.element(document.getElementById('searchBar')).attr('placeholder', placeHolderText);
                }, 500);
            })
            .catch(err => {
                console.log( err);
                return err;
            });
    }
}

PrmPreFiltersAfterController.$inject = ['$element', 'getTranslationsService', '$location'];

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