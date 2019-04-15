// Shared
import { viewName } from './shared/viewName';
import { NavigationService } from './shared/navigation.service';
import { ScriptLoaderService } from './shared/scriptLoader.service';
import { LocaleService } from './shared/locale.service';

// Googleanalytics
// import { GoogleAnalyticsService } from './googleanalytics/googleAnalytics.service';

// Footer
import { PrmExploreFooterAfterConfig } from './footer/prmExploreFooterAfter.component';

// Logo
import { PrmLogoAfterConfig } from './logo/prmLogoAfter.component';

// Announcement
import { AnnouncementService } from './announcement/announcement.service';
import { PrmTopbarAfterConfig } from './announcement/prmTopbarAfter.component';

// Pickupnumbers
// import { PickUpNumbersService } from './pickupnumbers/pickUpNumbers.service';
// import { PrmRequestsAfterConfig } from './pickupnumbers/prmRequestsAfter.component';
// import { PrmRequestsOverviewAfterConfig } from './pickupnumbers/prmRequestsOverviewAfter.component';

// Linkedperson
// import { LinkedPersonsService } from './linkedperson/linkedPersons.service';
// import { LinkedPersonsConfig } from './linkedperson/linkedPersons.component';

// Openinghours
// import { OpeningHoursConfig } from './openinghours/openingHours.component';

// Searchtips
import { PrmSearchBarAfterConfig } from './searchtips/prmSearchBarAfter.component';
import { SearchTipsConfig } from './searchtips/searchTips.component';

// Add / remove elements
import { PrmFullViewAfterConfig } from './addremoveelements/prmFullViewAfter.component';
import { PrmRequestServicesAfterConfig } from './addremoveelements/prmRequestServicesAfter.component';

// Altmetrics
import { AltmetricsConfig } from './altmetrics/altmetrics.component';

// Chatbox
import { PrmExploreMainAfterConfig } from './chatbox/prmExploreMainAfter.component';
import { ChatBoxConfig } from './chatbox/chatBox.component';

// Fines
// import { PrmFinesAfterConfig } from './fines/prmFinesAfter.component';

// Personalinfo
// import { PrmPersonalInfoAfterConfig } from './personalinfo/prmPersonalInfoAfter.component';




angular.module('viewCustom', [
  'angularLoadMonkeyPatched',
  'ngMaterial'
])
    .run(['$rootScope', ($rootScope) => {
      $rootScope.viewName = viewName;
    }]);
// Googleanalytics
// .run(['googleAnalyticsService', (googleAnalyticsService) => {
//   let trackingId =  'UA-77177865-1';
//   googleAnalyticsService.initialize(trackingId)
//   .then(() => googleAnalyticsService.trackPageViews())
//   .catch((e) => {
//     console.log('Google anayltics could not be initialized.');
//     console.log(e);
//   });
// }]);


angular.module('viewCustom')

// Shared
    .service('navigationService', NavigationService)
    .service('scriptLoaderService', ScriptLoaderService)
    .service('localeService', LocaleService)

    // Googleanalytics
    //   .service('googleAnalyticsService', GoogleAnalyticsService)

    // Footer
    .component(PrmExploreFooterAfterConfig.name, PrmExploreFooterAfterConfig.config)

    //Logo
    .component(PrmLogoAfterConfig.name, PrmLogoAfterConfig.config)
    // Announcement
      .service('announcementService', AnnouncementService)
      .component(PrmTopbarAfterConfig.name, PrmTopbarAfterConfig.config)

    // Pickupnumbers
    //   .service('pickUpNumbersService', PickUpNumbersService)
    //   .component(PrmRequestsAfterConfig.name, PrmRequestsAfterConfig.config)
    //   .component(PrmRequestsOverviewAfterConfig.name, PrmRequestsOverviewAfterConfig.config)

    // Linkedperson
    //   .service('linkedPersonsService', LinkedPersonsService)
    //   .component(LinkedPersonsConfig.name, LinkedPersonsConfig.config)

    // Openinghours
    //   .component(OpeningHoursConfig.name, OpeningHoursConfig.config)

    // Searchtips
    .component(PrmSearchBarAfterConfig.name, PrmSearchBarAfterConfig.config)
    .component(SearchTipsConfig.name, SearchTipsConfig.config)

    // Add / remove elements
    .component(PrmFullViewAfterConfig.name, PrmFullViewAfterConfig.config)
    .component(PrmRequestServicesAfterConfig.name, PrmRequestServicesAfterConfig.config)

    // Altmetrics
    .component(AltmetricsConfig.name, AltmetricsConfig.config)

    // Chatbox
      .component(PrmExploreMainAfterConfig.name, PrmExploreMainAfterConfig.config)
      .component(ChatBoxConfig.name, ChatBoxConfig.config)

    // Fines
    //   .component(PrmFinesAfterConfig.name, PrmFinesAfterConfig.config)

    // Personalinfo
    // .component(PrmPersonalInfoAfterConfig.name, PrmPersonalInfoAfterConfig.config)




// Pre-ES2015 code.
require('./shared/angularLoadMonkeyPatched');
require('./footer');
