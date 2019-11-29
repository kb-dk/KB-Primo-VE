// Edit profile
import {PrmPersonalInfoAfterConfig} from './edit-profile/prmPersonalInfoAfter.component';
import {KbEditProfileConfig} from './edit-profile/kbEditProfile.component';

// Footer
import {PrmExploreFooterAfterConfig} from './footer/prmExploreFooterAfter.component';
import {KbFooterConfig} from './footer/kbFooter.component';

// Navigation header
import {PrmTopBarBeforeConfig} from './navigation-header/prmTopBarBefore';
import {KbNavigationHeaderConfig} from './navigation-header/kbNavigationHeader';

// Language switcher
import {PrmUserAreaExpandableAfterConfig} from './language/prmUserAreaExpandableAfter.component';
import {KbLanguageConfig} from './language/kbLanguage.component';

// Search tips (help-menu Visual studio addon - https://github.com/bulib/primo-explore-bu/tree/master/packages/help-menu)
import 'primo-explore-help-menu';

import {list_of_elements_en} from './help-menu/list_of_elements_en';
import {list_of_elements_da} from './help-menu/list_of_elements_da';

// ChatBox scriptId
import {scriptIds} from "./chat-box/scriptIds.constant";

angular.module('viewCustom', ['angularLoad', 'helpMenuTopbar'])

    .constant('viewName', (function () {
        let query = window.location.search.substring(1);
        query = query.substring(query.indexOf('vid') + 4);
        // If there are other parameters after vid, then remove them
        let vid = query.substring(0, query.indexOf('&')) ? query.substring(0, query.indexOf('&')) : query;
        vid = vid.replace("%3A", "-");
        return vid.replace(":", "-");
    })()
    )
        
    .constant(
        'helpMenuConfig', (function () {
            // Find the language from the url
            let query = window.location.search.substring(1);
            query = query.substring(query.indexOf('lang') + 5);
            let lang;
            if (query.length > 2) {
                lang = query.substring(0, query.indexOf('&'));
            } else {
                lang = query;
            }
            // Set the translations according to the language
            if (lang === 'en'){
                return {
                    "list_of_elements": list_of_elements_en ,
                    "helpMenuTitle": 'Search help'
                }
            } else{
                return {
                    "list_of_elements": list_of_elements_da,
                    "helpMenuTitle": 'Hjælp til søgning'
                }
            }
        })(),
)

    // ChatBox scriptId
    .constant('scriptIds' , scriptIds)


    // Edit profile
    .component(PrmPersonalInfoAfterConfig.name, PrmPersonalInfoAfterConfig.config)
    .component(KbEditProfileConfig.name, KbEditProfileConfig.config)

    // Footer
    .component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)
    .component(KbFooterConfig.name, KbFooterConfig.config)

    // Navigation header
    .component(PrmTopBarBeforeConfig.name, PrmTopBarBeforeConfig.config)
    .component(KbNavigationHeaderConfig.name, KbNavigationHeaderConfig.config)

    // Language switcher
    .component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config)
    .component(KbLanguageConfig.name, KbLanguageConfig.config)

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement
require('kb-primo-ve-announcement');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Hide-New-User-If-Loggedin.git
require('kb-primo-ve-hide-new-user-if-loggedin');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-libChat.git
// require('kb-primo-ve-libchat');
