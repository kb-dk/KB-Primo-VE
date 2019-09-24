// Footer
import {PrmExploreFooterAfterConfig} from './footer/prmExploreFooterAfter.component';

// Navigation header
import {PrmTopBarBeforeConfig} from './navigation-header/navigation-header';

// Language switcher
import {PrmUserAreaExpandableAfterConfig} from './language/prmUserAreaExpandableAfter.component';

angular.module('viewCustom', ['angularLoad'])
    .run(['$rootScope', ($rootScope) => {
        let query = window.location.search.substring(1);
        query = query.substring(query.indexOf('vid')+4);
        let vid = query.substring(0, query.indexOf('&'));
        $rootScope.viewName = vid.replace(":", "-");
    }]);

angular.module('viewCustom')

// Footer
.component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)

// Navigation header
.component(PrmTopBarBeforeConfig.name,  PrmTopBarBeforeConfig.config)

// Language switcher
.component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config);

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement
require('kb-primo-ve-announcement/dist/index.js');

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Hide-New-User-If-Loggedin.git
require('kb-primo-ve-hide-new-user-if-loggedin/dist/index.js');