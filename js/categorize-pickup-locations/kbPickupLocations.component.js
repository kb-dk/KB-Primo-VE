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
        setTimeout(this.findRequestButtonAndAttachJavascriptToIt, 5000);
    };


    repeatUntilFormIsOpened() {

    }


    findRequestButtonAndAttachJavascriptToIt() {
        const prmServiceButtons = angular.element(document.querySelectorAll('prm-service-button button'));
        let _this = this;
        for (let i = 0; i < prmServiceButtons.length; i++) {
            prmServiceButtons[i].addEventListener("click", function () {
                var intervalId = setInterval(function () {
                    const pickupLocationSelectInput = angular.element(document.querySelectorAll('#form_field_pickupLocation md-select'));

                    // If 'pickupLocation field' is found then attach the changes to its click event.
                    if (pickupLocationSelectInput.length) {
                        pickupLocationSelectInput[0].addEventListener("click", function () {
                            const mdOptions = document.querySelectorAll('md-select-menu md-optgroup md-option');

                            for (let i = 0; i < mdOptions.length; i++) {
                                mdOptions[i].style.display = "none";
                                // It is a fix for the options which are further down the menu
                                // that is, for some weired reasons, menu won't get closed after choosing an option.
                                mdOptions[i].addEventListener("click", function () {
                                        if (document.querySelector('body > .md-select-menu-container')) {
                                            document.querySelector('body > .md-select-menu-container').style.display = 'none';
                                        }
                                    }
                                );
                            }
                            const labels = document.querySelectorAll('md-select-menu md-optgroup label');
                            for (let i = 0; i < labels.length; i++) {
                                labels[i].style.fontWeight = 'bold';
                                labels[i].classList.add('plus');
                                labels[i].classList.remove('minus');

                                labels[i].addEventListener("click", function (event) {
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
                                });
                            }
                            clearInterval(intervalId);
                        });
                    }

                }, 2000);
            });
        }
    }
}

export let KbPickupLocationsConfig = {
    name: 'kbPickupLocations',
    config: {
        controller: KbPickupLocationsController
    }
};