import { viewName } from '../shared/viewName';

// Clickable logo.
class PrmLogoAfterController {

  constructor(navigationService) {
    this.navigationService = navigationService;
  }

  getIconLink() {
    return this.parentCtrl.iconLink;
  };

}

PrmLogoAfterController.$inject = ['navigationService'];

export let PrmLogoAfterConfig = {
  name: 'prmTopBarBefore',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: PrmLogoAfterController,
    templateUrl: 'custom/' + viewName + '/html/logo/prmLogoAfter.component.html'
  }
};