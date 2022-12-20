class KbMoveBecomeUserController {

    constructor($interval, $element) {
        this.$interval = $interval;
        this.$element = $element;
    };

    $onInit() {
        let _this = this;
        this.$intervalId = this.$interval(function(){
            _this.findBecomeUserDiv(_this.$intervalId);
        }, 500, 10);
    }

    findBecomeUserDiv(intervalId){
        const becomeUserDiv = angular.element(document.querySelectorAll('div[data-main-menu-item="new_user"]'));
        if (becomeUserDiv.length){
            this.$interval.cancel(intervalId);
            this.moveBecomeUserDiv(becomeUserDiv);
        }
    }

    moveBecomeUserDiv(becomeUserDiv) {
        let container = this.$element.parent();
        container.append(becomeUserDiv);
    }
}

KbMoveBecomeUserController.$inject = ['$interval', '$element'];

export let KbMoveBecomeUserConfig=  {
    name: 'kbMoveBecomeUser',
    config: {
        controller: KbMoveBecomeUserController,
    }
};