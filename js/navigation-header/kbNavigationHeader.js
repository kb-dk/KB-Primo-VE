class KbNavigationHeaderController {
    constructor($element, $location, getTranslationsService) {
        this.$element = $element;
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
    };

    $postLink() {
        this.getMenuPointsFromPI();
        // Find containers parent element
        let parentElement = this.$element.parent().parent().parent().parent();
        // Move navigation header to the top
        let container = angular.element(parentElement.children()[0]);
        container.append(this.$element);
    };

    showBackToMenu($event){
        document.getElementById('backToItems').style.display = 'block';
    }

    hideBackToMenu($event){
        document.getElementById('backToItems').style.display = 'none';
    }

    getMenuPointsFromPI(){
        let viewName = this.location.search().vid;
        this._getTranslations(this.lang, viewName)
            .then(response => {
                this.menu = this.createMenuJson(response.data);
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }

    _getTranslations(lang, view){
        return this.getTranslationsService._getTranslations(lang, view);
    }

    createMenuJson(translationObject) {
        let menu = {};
        menu.items = Object.keys(translationObject).filter(v => v.startsWith('fulldisplay.topnavigation.list.item'));
        menu.links = Object.keys(translationObject).filter(v => v.startsWith('fulldisplay.topnavigation.list.link'));
        return menu;
    }
}

KbNavigationHeaderController.$inject = ['$element', '$location', 'getTranslationsService'];

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