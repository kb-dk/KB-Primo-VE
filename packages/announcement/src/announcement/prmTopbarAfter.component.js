class PrmTopbarAfterController {
  constructor(announcementService, $scope, $element, $translate) {
    this.announcementService = announcementService;
    this.$scope = $scope;
    this.$element = $element;
    this.$translate = $translate;
  }

  $onInit() {
    // Announcement displayed.
    this.announcementService.display()
      .catch((e) => {
        if (e) console.log(e);
      });
  };
}

PrmTopbarAfterController.$inject = ['announcementService', '$scope', '$element', '$translate'];

export let PrmTopbarAfterConfig = {
  name: 'prmTopbarAfter',
  config: {
    controller: PrmTopbarAfterController,
    require: {
      primoExploreCtrl: '^primoExplore'
    }
  }
};