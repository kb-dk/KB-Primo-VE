// Related to following Jira Issue:
// https://sbprojects.statsbiblioteket.dk/jira/browse/BSV-213
class KbPickupLocationsController {
    constructor(getTranslationsService) {
        this.getTranslationsService = getTranslationsService;
    };

    // Test here:
    // /discovery/fulldisplay?docid=alma99122559747705763&context=L&vid=45KBDK_KGL:KGL&lang=da&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,kvinde&offset=0
    // Login
    // Click on 'Bestil'
    // Afhentningssted
    $onInit() {
        // prmServiceButtonAfter is called two times
        if (KbPickupLocationsController.intervalIdFindButton === undefined) {
            KbPickupLocationsController.timesRunIntervalIdFindButton = 0;
            // We hook to prmServiceButtonAfter, and the button is not there in the beginning,
            // so we need to wait a bit so the button is there.
            KbPickupLocationsController.intervalIdFindButton = setInterval(KbPickupLocationsController.findRequestButtonAndAttachJavascriptToIt, 500);
        }
    }

    $onDestroy(){
        clearInterval(KbPickupLocationsController.intervalIdFindButton);
    }

    static addCssAndJavascriptEventsToLabelsAndOptions() {
        const mdOptions = document.querySelectorAll('md-select-menu md-optgroup md-option');
        mdOptions.forEach(mdOption => {
            mdOption.style.display = "none";
            // It is a fix for the options which are further down the menu
            // that is, for some weired reasons, menu won't get closed after choosing an option.
            mdOption.addEventListener("click", function () {
                    if (document.querySelector('body > .md-select-menu-container')) {
                        document.querySelector('body > .md-select-menu-container').style.display = 'none';
                    }
                }
            );
        });

        const labels = document.querySelectorAll('md-select-menu md-optgroup label');
        labels.forEach((label, index) => {
            label.style.fontWeight = 'bold';
            label.classList.add('plus');
            label.classList.remove('minus');

            label.addEventListener("click", function () {
                KbPickupLocationsController.openOrCloseALocationGroup(event, labels, index);
            });
        });
    }

    static openOrCloseALocationGroup(event, labels, i) {
        event.stopImmediatePropagation();
        let children = event.currentTarget.parentNode.children;
        for (let j = 0; j < children.length; j++) {
            if (children[j] !== event.target) {
                if (children[j].style.display === "none") {
                    children[j].style.display = "flex";
                    labels[i].classList.add('minus');
                    labels[i].classList.remove('plus');
                } else {
                    children[j].style.display = "none";
                    labels[i].classList.add('plus');
                    labels[i].classList.remove('minus');
                }
            }
        }
    }

    static startSearchingForPickupLocationField() {
        KbPickupLocationsController.timesRunIntervalIdFindPickupLocationSelect = 0;
        KbPickupLocationsController.intervalIdFindPickupLocationSelect = setInterval(function () {
            KbPickupLocationsController.timesRunIntervalIdFindPickupLocationSelect += 1;
            const pickupLocationSelectInput = angular.element(document.querySelectorAll('#form_field_pickupLocation md-select'));
            // When 'pickupLocation field' is found then attach the changes to its click event.
            if (pickupLocationSelectInput.length) {
                pickupLocationSelectInput[0].addEventListener("click", KbPickupLocationsController.addCssAndJavascriptEventsToLabelsAndOptions);
                clearInterval(KbPickupLocationsController.intervalIdFindButton);
            }

        }, 1000);
    }

    static findRequestButtonAndAttachJavascriptToIt() {
        KbPickupLocationsController.timesRunIntervalIdFindButton += 1;
        const prmServiceButtons = angular.element(document.querySelectorAll('prm-service-button button'));
        if (KbPickupLocationsController.timesRunIntervalIdFindButton === 10 || (prmServiceButtons && prmServiceButtons.length)) {
            clearInterval(KbPickupLocationsController.intervalIdFindButton);
        }
        if(prmServiceButtons){
            for (let i = 0; i < prmServiceButtons.length; i++) {
                prmServiceButtons[i].addEventListener("click", KbPickupLocationsController.startSearchingForPickupLocationField);
            }
        }
    }
}

KbPickupLocationsController.$inject = ['getTranslationsService'];

export let KbPickupLocationsConfig = {
    name: 'kbPickupLocations',
    config: {
        controller: KbPickupLocationsController,
    }
};