class KbEditPincodeController {

    constructor($location,getTranslationsService) {
        this.location = $location;
        this.getTranslationsService = getTranslationsService;
    };

    $postLink() {
        let userButton = angular.element(document.querySelector('prm-user-area-expandable button.user-button'));
        let editPincodeItem = angular.element(document.querySelector('kb-edit-pincode'));

        userButton[0].addEventListener('click',function(){
            let menuItem=angular.element(document.querySelector('md-menu-item.my-library-card-ctm'));
           menuItem[0].parentNode.insertBefore(editPincodeItem[0].firstChild,menuItem[0].nextSibling);
        });
    }

    goToEditUserinfo() {
        let viewName = this.location.search().vid;
        let lang = this.location.search().lang || 'da';
        this.getTranslationsService._getTranslations(lang, viewName)
            .then(response => {
                window.location=response.data['nui.details.editProfileUrl']
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }
}

KbEditPincodeController.$inject = ['$location','getTranslationsService'];

export let KbEditPincodeConfig=  {
    name: 'kbEditPincode',
    config: {
        bindings: {
            parentCtrl: '<',
        },
        controller: KbEditPincodeController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/language/edit-pincode.html';
        }],
    }
};