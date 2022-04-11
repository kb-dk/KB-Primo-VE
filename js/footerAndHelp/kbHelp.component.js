
class KbHelpController {

    constructor($http, $location, $mdDialog, viewName) {
        this.$http = $http;
        this.$mdDialog = $mdDialog;
        this.lang = "da";
        this.bodyContent = 'main-menu';
        this.helpButtonTemplateUrl = 'custom/' + viewName + '/html/help-button/help-button.html';
        this.helpMenuTemplateUrl = 'custom/' + viewName + '/html/help-button/help-menu.html';
        this.helpMenuHeaderTemplateUrl = 'custom/' + viewName + '/html/help-button/help-menu-header.html';
        this.helpMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help-button/help-menu-body.html';
        this.helpSubMenuBodyTemplateUrl = 'custom/' + viewName + '/html/help-button/help-sub-menu-body.html';
        this.help = {};
    };

        $onInit() {
            console.log('lang:',this.lang);
            this.getHelpTextFromAPI();
        }

        getHelpTextFromAPI(){
            this._getTranslations()
                .then(response => {
                    this.help = this.createHelpJson(response.data);
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
            let subheadersLength =  subheaders ? subheaders.length : 0;

            for (let i = 0; i < subheadersLength; i++) {
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
        let helpMenu = document.getElementById('helpMenu');
        // Remove and add md-dialog-container to the helpMenu so it doesn't interfere with Primo's
        if (!angular.element(document.querySelectorAll('#helpMenu')).hasClass('md-dialog-container')) {
            helpMenu.classList.add('md-dialog-container');
            this.$mdDialog.show({
                contentElement: '#helpMenu',
                parent: angular.element(document.getElementsByName('kb-help')[0]),
                // Not using standard backdrop because it is interfering with Primo's
                hasBackdrop: false,
                multiple: true,
                clickOutsideToClose: false,
                fullscreen: true,
                focusOnOpen: true,
            });
        }
    };

        hideHelpMenu(){
            this.$mdDialog.cancel();
            let helpMenu = document.getElementById('helpMenu');
            helpMenu.classList.remove('md-dialog-container');
        };

        changeBodyContent(id){
            this.bodyContent = id;
        };

}

KbHelpController.$inject = ['$http', '$location', '$mdDialog', 'viewName'];

export let KbHelpConfig = {
    name: 'kbHelp',
    config: {
        controller: KbHelpController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/help-button/help.html';
        }],
     },
};