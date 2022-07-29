class KbNavigationHeaderController {
    constructor($element, $location, getTranslationsService) {
        this.$element = $element;
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
        this.viewName = this.location.search().vid;
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
        this._getTranslations(this.lang, this.viewName)
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
        this.view = this.viewName.indexOf('SPEC') > 0 ? '.special' : '.general';
        let menu = {};
        menu.items = Object.keys(translationObject).filter(v => v.startsWith('fulldisplay.topnavigation'+ this.view +'.list.item'));
        menu.links = Object.keys(translationObject).filter(v => v.startsWith('fulldisplay.topnavigation'+ this.view +'.list.link'));
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