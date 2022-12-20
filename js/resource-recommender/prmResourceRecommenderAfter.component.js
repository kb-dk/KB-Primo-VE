class PrmResourceRecommenderAfterController {

    constructor($element) {
        this.$element = $element;
    }

    $onInit() {
        setTimeout(this.addCloseButtonAndOpenRecommenderIfNeeded, 1000, this.$element);
    }

    addCloseButtonAndOpenRecommenderIfNeeded(element) {
        let parentElement = document.querySelectorAll('prm-resource-recommender > div:not(.main-banner-content)')[0];
        const elem = document.getElementById('closeRecommender');
        if (elem && parentElement){
            angular.element(elem).addClass('visible');
            parentElement.prepend(elem);
            if (!sessionStorage.hideRecommender){
                angular.element(elem).parent().addClass('visible');
            }
        }
    }

    closeRecommender(){
        const elem = document.getElementById('closeRecommender');
        angular.element(elem).parent().removeClass('visible');
        sessionStorage.hideRecommender = true;
    }
}

PrmResourceRecommenderAfterController.$inject = ['$element'];

export let PrmResourceRecommenderAfterConfig = {
    name: 'prmResourceRecommenderAfter',
    config: {
        controller: PrmResourceRecommenderAfterController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/resource-recommender/close-button.html';
        }],
    }
}