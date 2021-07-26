
class KbHelpController {

    constructor($http, $mdDialog, $location, viewName) {
        this.lang = this.parentCtrl.lang;
        this.$http = $http;
        this.$mdDialog = $mdDialog;
        this.lang = $location.search().lang;
        this.bodyContent = 'main-menu';
        this.helpButtonTemplateUrl = 'custom/' + viewName + '/html/help/help-button.html';
        this.helpMenuTemplateUrl = 'custom/' + viewName + '/html/help/help-menu.html';
        this.helpMenuHeaderTemplateUrl = 'custom/' + viewName + '/html/help/help-menu-header.html';
        this.helpMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help/help-menu-body.html';
        this.helpSubMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help/help-sub-menu-body.html';
        this.help = {};
    };

    $onInit() {
        console.log(this.lang);
        this.getHelpTextFromAPI();
    }

    getHelpTextFromAPI(){
        this._getTranslations()
            .then(response => {
                this.help = this.createHelpJson(response.data);
                console.log(this.help);
            })
            .catch(err => {
                console.log( err);
                return err;
            });
    }

    createHelpJson(translationObject) {
        let help = {};
        let subheaders = Object.keys(translationObject).filter(v => v.startsWith('fulldisplay.help.subheader'));
        help.options = [];
        help.mainHeader = translationObject["fulldisplay.help.mainheader"];

        for (let i = 0; i < subheaders.length; i++) {
            if (translationObject[`fulldisplay.help.subheader${i + 1}`] === 'line'){
                help.options.push({
                    subheader: 'line',
                });
            }else {
                help.options.push({
                    subheader: translationObject[`fulldisplay.help.subheader${i + 1}`],
                    submenu: translationObject[`fulldisplay.help.sub${i + 1}`],
                    iconset: translationObject[`fulldisplay.help.iconset${i + 1}`],
                    icondefinition: translationObject[`fulldisplay.help.icondefinition${i + 1}`],
                });
            }
        }
        return help;
    }


    _getTranslations(){
        return this.$http.get(`/primaws/rest/pub/translations/45KBDK_KGL:KGL?lang=${this.lang}`);
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