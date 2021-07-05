
class KbHelpController {

    constructor($http, $mdDialog, $location, viewName) {
        this.$http = $http;
        this.$mdDialog = $mdDialog;
        this.$location = $location;
        this.bodyContent = 'main-menu';
        this.menuType = 'mainMenu';
        this.mainTitle = 'Hjælp til søgning';
        this.subTitle = 'sub title';
        this.helpButtonTemplateUrl = 'custom/' + viewName + '/html/help/help-button.html';
        this.helpMenuTemplateUrl = 'custom/' + viewName + '/html/help/help-menu.html';
        this.helpMenuHeaderTemplateUrl = 'custom/' + viewName + '/html/help/help-menu-header.html';
        this.helpMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help/help-menu-body.html';
        this.helpSubMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help/help-sub-menu-body.html';
        // this.start();
    };

    start(){
        this._getTexts()
            .then(response => {
                console.log('label:', response.data);
                resolve();
            })
            .catch(err => {
                // this._removeIdText(request);
                console.log('Could not retrieve the pick up number.');
                reject(err);
                return err;
            });
    }

    _getTexts(){
        return this.$http.get(`https://api-eu.hosted.exlibrisgroup.com/primo/v1/translations/45KBDK_KGL:KGL?lang=da&apikey=l8xx9dad8184bb0544f48c23c442bcfc0d3e`);
    }

    openHelpMenu() {
        this.bodyContent = 'main-menu';
        this.$mdDialog.show({
            contentElement: '#helpMenu',
            parent: angular.element(document.body),
            hasBackdrop: true,
            multiple: false,
            clickOutsideToClose:true,
            fullscreen: false,
            focusOnOpen: true
        });
    };

    hideHelpMenu(){
        this.$mdDialog.hide();
    };

    changeBodyContent(id){
        this.bodyContent = id;
    };

}

KbHelpController.$inject = ['$http', '$mdDialog', '$location', 'viewName'];

export let KbHelpConfig = {
    name: 'kbHelp',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: KbHelpController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/help/help.html';
        }],
     },
};