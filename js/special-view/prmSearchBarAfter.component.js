class PrmSearchBarAfterController {
    constructor($element, getTranslationsService, $location) {
        this.$element = $element;
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
    }

    $onInit() {
        // Do these operations only in Special view
        if (this.location.search().vid.indexOf("SPEC") || this.location.search().vid.indexOf("spec")) {
            let _this = this;
            setTimeout(function () {
                // 1- Move the yellow search scope element into the search bar
                // Find parent element
                let parentElement = angular.element(document.querySelector('prm-search-bar form > div > div'))[0];
                // Add the element as the first child of the parent
                parentElement.prepend(document.getElementById('specialViewSearchScope'));

                // 2- Change placeholder text in the search bar
                // First hide the placeholder so the default one won't appear
                // Get the translation from the API
                // Wait 500 milliseconds, so the default translation for placeholder comes first
                // And then overwrite the placeholder text and make it visible
                angular.element(document.getElementById('searchBar')).addClass('hidePlaceholder');

                let lang = _this.location.search().lang || 'da';
                let viewName = _this.location.search().vid;
                _this.changeSearchBarPlaceholder(lang, viewName);
            }, 0);
        }
    }

    changeSearchBarPlaceholder(lang, viewName) {
        this.getTranslationsService._getTranslations(lang, viewName)
            .then(response => {
                let placeHolderText = response.data["fulldisplay.homepage.special.search.placeholder"];
                setTimeout(function () {
                    angular.element(document.getElementById('searchBar')).removeClass('hidePlaceholder');
                    angular.element(document.getElementById('searchBar')).attr('placeholder', placeHolderText);
                }, 500);
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }
}

PrmSearchBarAfterController.$inject = ['$element', 'getTranslationsService', '$location'];

export let PrmSearchBarAfterConfig = {
    name: 'prmSearchBarAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmSearchBarAfterController,
        templateUrl: ["viewName", function (viewName) {
            return 'custom/' + viewName + '/html/special-view/search-scope.html';
        }],
    }
};