// https://sbprojects.statsbiblioteket.dk/jira/browse/BSV-239
class KbEditPincodeController {
    constructor($location,getTranslationsService) {
        this.location = $location;
        this.getTranslationsService = getTranslationsService;
    };

    $onInit() {
        KbEditPincodeController.count = 0;
        if (!KbEditPincodeController.id) {
            KbEditPincodeController.id = setInterval(this.userSignedId, 500);
        }

    }

    userSignedId() {
        KbEditPincodeController.count += 1;
        console.log(KbEditPincodeController.id + " " + KbEditPincodeController.count);
        if (KbEditPincodeController.count >= 5){
            clearInterval(KbEditPincodeController.id);
            KbEditPincodeController.id = undefined;
        }
        let signInBtn = document.getElementById("signInBtn");
        if (signInBtn == null) {
            clearInterval(KbEditPincodeController.id);
            KbEditPincodeController.id = undefined;


            let userButtons = angular.element(document.querySelectorAll('prm-user-area-expandable button.user-button'));
            let editPincodeItem = angular.element(document.querySelector('kb-edit-pincode'));
            for (let i = 0; i < userButtons.length; i++) {
                userButtons[i].addEventListener('click', function () {
                    let menuItem = angular.element(document.querySelector('md-menu-item.my-library-card-ctm'));
                    menuItem[0].parentNode.insertBefore(editPincodeItem[0].firstChild, menuItem[0].nextSibling);
                });
            }
        }
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