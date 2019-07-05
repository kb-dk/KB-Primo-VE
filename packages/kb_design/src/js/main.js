// Footer
import { PrmExploreFooterAfterConfig } from './footer/prmExploreFooterAfter.component';

// Language switcher
import { PrmUserAreaExpandableAfterConfig } from './language/prmUserAreaExpandableAfter.component';

angular.module('viewCustom', ['angularLoad']);

angular.module('viewCustom')

// Footer
    .component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)

// Language switcher
    .component(PrmUserAreaExpandableAfterConfig.name, PrmUserAreaExpandableAfterConfig.config);

