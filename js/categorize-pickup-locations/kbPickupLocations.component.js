// Related to following Jira Issue:
// https://sbprojects.statsbiblioteket.dk/jira/browse/BSV-213
class KbPickupLocationsController {
    constructor() {
    };

    // Test here:
    // http://192.168.225.128:8003/discovery/fulldisplay?docid=alma99122559747705763&context=L&vid=45KBDK_KGL:KGL&lang=da&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,kvinde&offset=0
    // Login
    // Click on 'Bestil'
    // Afhentningssted
    $postLink() {
        // Because we hook to prmRequestAfter, and the button is not in that group
        // so we need to wait a bit so the button is there (hopefully).
        KbPickupLocationsController.timesRunIntervalIdFindButton = 0;
        KbPickupLocationsController.intervalIdFindButton = setInterval(KbPickupLocationsController.findRequestButtonAndAttachJavascriptToIt, 500);
    };


    static addCssAndJavascriptEventsToLabelsAndOptions() {
        const mdOptions = document.querySelectorAll('md-select-menu md-optgroup md-option');
        console.log('mdOptions:', mdOptions);
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
        console.log('labels:', labels);
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
            console.log('pickupLocationSelectInput', pickupLocationSelectInput, 'timesRunIntervalIdFindPickupLocationSelect:', KbPickupLocationsController.timesRunIntervalIdFindPickupLocationSelect);
            // When 'pickupLocation field' is found then attach the changes to its click event and stop the interval.
            if (pickupLocationSelectInput.length) {
                pickupLocationSelectInput[0].addEventListener("click", KbPickupLocationsController.addCssAndJavascriptEventsToLabelsAndOptions);
                clearInterval(KbPickupLocationsController.intervalIdFindPickupLocationSelect);
            } else {
                if(KbPickupLocationsController.timesRunIntervalIdFindPickupLocationSelect === 10){
                    clearInterval(KbPickupLocationsController.intervalIdFindPickupLocationSelect);
                }
            }

        }, 500);
    }

    static findRequestButtonAndAttachJavascriptToIt() {
        KbPickupLocationsController.timesRunIntervalIdFindButton += 1;
        const prmServiceButtons = angular.element(document.querySelectorAll('prm-service-button button'));
        console.log('prmServiceButtons:', prmServiceButtons, 'timesRunIntervalIdFindButton:', KbPickupLocationsController.timesRunIntervalIdFindButton);
        if (KbPickupLocationsController.timesRunIntervalIdFindButton === 10 || prmServiceButtons.length){
            clearInterval(KbPickupLocationsController.intervalIdFindButton);
        }
        for (let i = 0; i < prmServiceButtons.length; i++) {
            prmServiceButtons[i].addEventListener("click", KbPickupLocationsController.startSearchingForPickupLocationField);
        }
    }
}

export let KbPickupLocationsConfig = {
    name: 'kbPickupLocations',
    config: {
        controller: KbPickupLocationsController
    }
};