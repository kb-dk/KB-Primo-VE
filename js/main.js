// Footer
import {PrmExploreFooterAfterConfig} from './footer/prmExploreFooterAfter.component';

// Navigation header
import {PrmTopBarBeforeConfig} from './navigation-header/navigation-header';

// Language switcher
import {PrmUserAreaExpandableAfterConfig} from './language/prmUserAreaExpandableAfter.component';

angular.module('viewCustom', ['angularLoad']);

angular.module('viewCustom')

// Footer
.component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)

// Navigation header
.component(PrmTopBarBeforeConfig.name, PrmTopBarBeforeConfig.config)

// Language switcher
.component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config);

// Get more info at https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement
require('primo-ve-announcement/dist/index.js');