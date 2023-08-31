// https://sbprojects.statsbiblioteket.dk/jira/browse/BSV-239
class KbEditPincodeController {
    constructor($location) {
        this.location = $location;
    };

    $onInit() {
        KbEditPincodeController.count = 0;
        if (!KbEditPincodeController.id) {
            KbEditPincodeController.id = setInterval(this.userSignedId, 500);
        }

    }

    userSignedId() {
        KbEditPincodeController.count += 1;
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
                    menuItem[0].parentNode.insertBefore(editPincodeItem[0], menuItem[0].nextSibling);
                });
            }
        }
    }
}

KbEditPincodeController.$inject = ['$location'];

export let KbEditPincodeConfig=  {
    name: 'kbEditPincode',
    config: {
        bindings: {
            parentCtrl: '<',
        },
        controller: KbEditPincodeController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/language-and-pincode/edit-pincode.html';
        }],
    }
};