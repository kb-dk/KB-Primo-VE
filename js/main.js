// General services
import {GetTranslationsService} from "./services/getTranslations.service";

// KB special view home for university thesis
import {KbHomeConfig} from './home/kbHome.component';

// Special view
import {PrmSearchBarAfterConfig} from './special-view/prmSearchBarAfter.component';

// Edit profile
import {PrmPersonalInfoAfterConfig} from './edit-profile/prmPersonalInfoAfter.component';
import {KbEditProfileConfig} from './edit-profile/kbEditProfile.component';

// Help page
import {KbHelpPageConfig} from './help-page/kbHelpPage.component';
import {KbHelpPageHeaderConfig} from './help-page/kbHelpPageHeader.component';

// Footer
import {PrmExploreFooterAfterConfig} from './footerAndHelp/prmExploreFooterAfter.component';
import {KbPrimoFooterConfig} from './footerAndHelp/kbPrimoFooter.component';

import {KbHelpConfig} from './footerAndHelp/kbHelp.component';

// Navigation header
import {PrmTopBarBeforeConfig} from './navigation-header/prmTopBarBefore';
import {KbNavigationHeaderConfig} from './navigation-header/kbNavigationHeader';

// Language switcher
import {PrmUserAreaExpandableAfterConfig} from './language-and-pincode/prmUserAreaExpandableAfter.component';
import {KbLanguageConfig} from './language-and-pincode/kbLanguage.component';
import {KbEditPincodeConfig} from './language-and-pincode/kbEditPincode.component';
import {KbMoveBecomeUserConfig} from './language-and-pincode/kbMoveBecomeUser.component';


// ChatBox scriptId
import {scriptIds} from "./chat-box/scriptIds.constant";

// Open items location filter
import {PrmLocationItemsAfterConfig} from "./open-items-location-filter/prmLocationItemsAfter.component";

// Move request-another-volume
import {PrmServiceButtonAfterConfig} from "./move-request-another-bin/prmServiceButtonAfter.component";

// Categorize pickup locations
import {KbPickupLocationsConfig} from "./categorize-pickup-locations/kbPickupLocations.component";
import {PrmRequestAfterConfig} from "./categorize-pickup-locations/prmRequestAfter.component";

// Add pickup numbers
import {PickUpNumbersService} from "./pickup-numbers/pickUpNumbers.service";
import {PrmRequestsAfterConfig} from "./pickup-numbers/prmRequestsAfter.component";

// Close broken link feedback
import {PrmReportProblemAfterConfig} from "./brokenLinkFeedback/prmReportProblemAfter";

// Resource recommender
import {PrmResourceRecommenderAfterConfig} from "./resource-recommender/prmResourceRecommenderAfter.component";

angular.module('viewCustom', ['angularLoad', 'ngMaterial'])
    // URL examples:
    // https://soeg.kb.dk/discovery/search?query=any,contains,topic%20maps&tab=Specialer&search_scope=Specialer&vid=45KBDK_KGL:SPECIALER&lang=da&offset=0
    // https://soeg.kb.dk/discovery/search?query=any,contains,english%20spoken%20n%C3%B8rrebros%20teater&tab=Everything&search_scope=MyInst_and_CI&vid=45KBDK_KGL:LEGANTO2&lang=da&offset=0
    // https://soeg.kb.dk/discovery/search?query=any,contains,english%20spoken%20n%C3%B8rrebros%20teater&tab=Everything&search_scope=MyInst_and_CI&vid=45KBDK_KGL:KGL&lang=da&offset=0
    // https://soeg.kb.dk/discovery/fulldisplay/alma99125390090005763/45KBDK_KGL:KGL
    .constant('viewName', (function () {
            let url = window.location.search.substring(1);
            let query = url.substring(url.indexOf('vid') + 4);
            // in 'Alma Viewer page'
            if (!url) {
                url = window.location.pathname;
                if (url.search("45KBDK_KGL:KGL") >= 0) {
                    console.log('vid:', "45KBDK_KGL:KGL");
                    return "45KBDK_KGL-KGL";
                }
                if (url.search("45KBDK_KGL:SPECIALER") >= 0) {
                    console.log('vid:', "45KBDK_KGL:SPECIALER");
                    return "45KBDK_KGL-SPECIALER";
                }
                if (url.search("45KBDK_KGL:LEGANTO2") >= 0) {
                    console.log('vid:', "45KBDK_KGL:LEGANTO2");
                    return "45KBDK_KGL-LEGANTO2";
                }
                console.log('View name error: None of the view names are found in the url. Default view name is used: "45KBDK_KGL:KGL".');
                return "45KBDK_KGL-KGL";
            }
            // If there are other parameters after vid, then remove them
            let vid = query.substring(0, query.indexOf('&')) ? query.substring(0, query.indexOf('&')) : query;
            vid = vid.replace("%3A", "-");
            console.log('vid:', vid);
            if (!vid) {
                vid = "45KBDK_KGL-KGL";
            }
            return vid.replace(":", "-");
        })()
    )

    // ChatBox scriptId
    .constant('scriptIds', scriptIds)

    // General services
    .service('getTranslationsService', GetTranslationsService)

    // Help page
    .component(KbHelpPageHeaderConfig.name, KbHelpPageHeaderConfig.config)
    .component(KbHelpPageConfig.name, KbHelpPageConfig.config)

    // KB special view home for university thesis
    .component(KbHomeConfig.name, KbHomeConfig.config)

    // Special view
    .component(PrmSearchBarAfterConfig.name, PrmSearchBarAfterConfig.config)

    // Edit profile
    .component(PrmPersonalInfoAfterConfig.name, PrmPersonalInfoAfterConfig.config)
    .component(KbEditProfileConfig.name, KbEditProfileConfig.config)

    // Footer and help
    .component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)
    .component(KbPrimoFooterConfig.name, KbPrimoFooterConfig.config)

    .component(KbHelpConfig.name, KbHelpConfig.config)

    // Navigation header
    .component(PrmTopBarBeforeConfig.name, PrmTopBarBeforeConfig.config)
    .component(KbNavigationHeaderConfig.name, KbNavigationHeaderConfig.config)

    // Open items location filter
    .component(PrmLocationItemsAfterConfig.name, PrmLocationItemsAfterConfig.config)

    // Move request-another-volume
    .component(PrmServiceButtonAfterConfig.name, PrmServiceButtonAfterConfig.config)

    // Language switcher and pincode and become user
    .component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config)
    .component(KbLanguageConfig.name, KbLanguageConfig.config)
    .component(KbEditPincodeConfig.name, KbEditPincodeConfig.config)
    .component(KbMoveBecomeUserConfig.name, KbMoveBecomeUserConfig.config)

    // Add pickup numbers
    .service('pickUpNumbersService', PickUpNumbersService)
    .component(PrmRequestsAfterConfig.name, PrmRequestsAfterConfig.config)

    // Categorize pickup locations
    .component(PrmRequestAfterConfig.name, PrmRequestAfterConfig.config)
    .component(KbPickupLocationsConfig.name, KbPickupLocationsConfig.config)

    // Close report broken link feedback
    .component(PrmReportProblemAfterConfig.name, PrmReportProblemAfterConfig.config)

    // Resource recommender
    .component(PrmResourceRecommenderAfterConfig.name, PrmResourceRecommenderAfterConfig.config)

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement
require('kb-primo-ve-announcement');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Hide-New-User-If-Loggedin.git
require('kb-primo-ve-hide-new-user-if-loggedin');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-libChat.git
// require('kb-primo-ve-libchat');
