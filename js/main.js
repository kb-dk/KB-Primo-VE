// Footer
import {PrmExploreFooterAfterConfig} from './footer/prmExploreFooterAfter.component';
import {KbFooterConfig} from './footer/kbFooter.component';

// Navigation header
import {PrmTopBarBeforeConfig} from './navigation-header/navigation-header';

// Language switcher
import {PrmUserAreaExpandableAfterConfig} from './language/prmUserAreaExpandableAfter.component';

// Search tips (help-menu Visual studio addon - https://github.com/bulib/primo-explore-bu/tree/master/packages/help-menu)
//import 'primo-explore-help-menu';

// Localized version of Search tips (help-menu Visual studio addon - https://github.com/bulib/primo-explore-bu/tree/master/packages/help-menu)
import './help-menu/help-menu';

import {list_of_elements_en} from './help-menu/list_of_elements_en';
import {list_of_elements_da} from './help-menu/list_of_elements_da';

angular.module('viewCustom', ['angularLoad', 'helpMenuTopbar'])
    .run(['$rootScope', ($rootScope) => {
        let query = window.location.search.substring(1);
        query = query.substring(query.indexOf('vid')+4);
        let vid = query.substring(0, query.indexOf('&'));
        $rootScope.viewName = vid.replace(":", "-");
    }]);

angular.module('viewCustom')
.constant('helpMenuConfig',{ "list_of_elements": (function(){
        let query = window.location.search.substring(1);
        query = query.substring(query.indexOf('lang')+5);
        let lang;
        if (query.length >2){
            lang = query.substring(0, query.indexOf('&'));
        } else {
            lang = query;
        }
        return lang === 'en' ? list_of_elements_en : list_of_elements_da;

    })()
})

// Footer
.component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)
.component(KbFooterConfig.name, KbFooterConfig.config)

// Navigation header
.component(PrmTopBarBeforeConfig.name,  PrmTopBarBeforeConfig.config)

// Language switcher
.component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config);

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement
require('kb-primo-ve-announcement/dist/index.js');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Hide-New-User-If-Loggedin.git
require('kb-primo-ve-hide-new-user-if-loggedin/dist/index.js');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-libChat.git
require('kb-primo-ve-libchat/dist/index.js');