class PrmResourceRecommenderAfterController {

    constructor($element) {
        this.$element = $element;
    }

    $onInit() {
        setTimeout(this.addCloseButtonAndOpenRecommenderIfNeeded, 1000, this.$element);
    }

    addCloseButtonAndOpenRecommenderIfNeeded(element) {
        let parentElement = element.parent()[0].childNodes[element.parent()[0].childNodes.length - 3];
        const elem = document.getElementById('closeRecommender');
        if (elem && parentElement){
            parentElement.prepend(elem);
            if (!sessionStorage.closeRecommender){
                angular.element(elem).parent().addClass('visible');
            }
        }
    }

    closeRecommender(){
        const elem = document.getElementById('closeRecommender');
        angular.element(elem).parent().removeClass('visible');
        sessionStorage.closeRecommender = true;
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