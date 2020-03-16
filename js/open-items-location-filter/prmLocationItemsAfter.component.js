class PrmLocationItemsAfterController {
    constructor($interval) {
        this.$interval = $interval;
    }

    activateFilter(intervalId) {
        let filterBtn = angular.element(document.querySelectorAll("prm-locations > div > button"));
        let filterDiv = angular.element(document.querySelectorAll("prm-locations-filter"));

        if (filterBtn.length && !filterDiv.length) {
            this.$interval.cancel(intervalId);
            filterBtn.triggerHandler('click');
        }
    }

    $postLink() {
        let _this = this;
        this.$intervalId = this.$interval(function(){
            _this.activateFilter(_this.$intervalId);
        }, 500, 10);
    }
}

PrmLocationItemsAfterController.$inject = ['$interval'];

export let PrmLocationItemsAfterConfig = {
    name: 'prmLocationItemsAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmLocationItemsAfterController
    }
};