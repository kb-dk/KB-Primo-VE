// // Shared
import { viewName } from './shared/viewName';
// import { LocaleService } from './shared/locale.service';
import { NavigationService } from './shared/navigation.service';

// Footer
import { PrmExploreFooterAfterConfig } from './footer/prmExploreFooterAfter.component';

// Logo
import { PrmLogoAfterConfig } from './logo/prmLogoAfter.component';

// Top container (design element)
import { PrmSearchBarAfterConfig } from './topcontainer/prmSearchBarAfter.component';

angular.module('viewCustom', ['angularLoad'])
    .run(['$rootScope', ($rootScope) => {
      $rootScope.viewName = viewName;
    }]);

angular.module('viewCustom')

// Shared
//     .service('localeService', LocaleService)
    .service('navigationService', NavigationService)

// Footer
    .component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)
//Logo
    .component(PrmLogoAfterConfig.name, PrmLogoAfterConfig.config)

// Top container (design element)
    .component(PrmSearchBarAfterConfig.name, PrmSearchBarAfterConfig.config)