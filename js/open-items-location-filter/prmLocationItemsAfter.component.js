class PrmLocationItemsAfterController {
    constructor($interval) {
        this.$interval = $interval;
    }

    activateFilter(intervalId) {
        // Two different filter buttons in different pages. Hopefully there is not more
        let filterBtn1 = angular.element(document.querySelectorAll("prm-locations > div > button.md-icon-button.md-ink-ripple"));
        let filterBtn2 = angular.element(document.querySelectorAll("prm-location-items  div  button.md-icon-button.md-ink-ripple"));
        // If the filter div exists it means it is already open
        let filterDiv = angular.element(document.querySelectorAll("prm-locations-filter md-input-container"));

        if (((filterBtn1 && filterBtn1.length) || (filterBtn2 && filterBtn2.length)) && !filterDiv.length) {
            this.$interval.cancel(intervalId);
            if (filterBtn1 && filterBtn1.length){
                filterBtn1.triggerHandler('click');
            }
            if (filterBtn2 && filterBtn2.length){
                filterBtn2.triggerHandler('click');
            }
        }else{
            if (filterDiv && filterDiv.length){
                this.$interval.cancel(intervalId);
            }
        }
    }

    $onInit() {
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