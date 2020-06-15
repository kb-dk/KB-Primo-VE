class PrmRequestsAfterController {

    constructor($scope, $element, pickUpNumbersService) {
        this.$scope = $scope;
        this.$element = $element;
        this.pickUpNumbersService = pickUpNumbersService;
    }

    $onInit() {
        this.parentElement = this.$element.parent()[0];
        this.pickUpNumbersService.waitForIdsAndInsertPickUpNumbers(this);
    }

    selector(element) {
        return element.querySelectorAll('md-list-item');
    }

}

PrmRequestsAfterController.$inject = ['$scope', '$element', 'pickUpNumbersService'];

export let PrmRequestsAfterConfig = {
    name: 'prmRequestsAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmRequestsAfterController,
    }
}