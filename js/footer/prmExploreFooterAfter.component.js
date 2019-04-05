import {viewName} from '../shared/viewName';
import {LocaleService} from "../shared/locale.service";

class PrmExploreFooterAfterController {
    constructor(localeService) {
        this.localeService = localeService;
    }

     locale(){
        return this.LocaleService.current();
     }
}

PrmExploreFooterAfterController.$inject = ['localeService'];

export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        controller: PrmExploreFooterAfterController,
        templateUrl: 'custom/' + viewName + '/html/footer/footer' + '.html',
    }
}
