/**
 * Service to insert the pickup numbers for the requested items.
 */
export class PickUpNumbersService {
    constructor($location, getTranslationsService) {
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
    }

    getPickupLabel(){
        let lang = this.location.search().lang;
        lang = lang ? lang : 'da';
        let viewName = this.location.search().vid;
        return this.getTranslationsService._getTranslation(lang , viewName, 'fulldisplay.pickupnumber');
    }

    insertPickUpNumber(pickUpNumber, requestNumber) {
            this.getPickupLabel()
                .then(pickupLabel => {
                        if(!document.getElementById('pickup_number_'+requestNumber)){
                            this.addPickupLineToReservation(pickupLabel, pickUpNumber, requestNumber);
                        }

                });
    }

    addPickupLineToReservation(pickupLabel, pickUpNumber, requestNumber) {
        let pickup_id = 'pickup_number_' + requestNumber;
        let newElement = "<br/><span id='" + pickup_id + "' class='pickup_number'>" + pickupLabel + ": </span>" + pickUpNumber + "<br/>";
        let container = document.querySelectorAll('prm-requests md-list md-list-item')[requestNumber];
        if (container){
            let parentLocation = container.querySelectorAll('p.request-location');
            if(angular.element(parentLocation)){
                angular.element(parentLocation).append(newElement);
            }
            for(let i=0; i<10; i++){
                if(!document.getElementById(pickup_id)){
                    let parentLocation = container.querySelectorAll('p.request-location');
                    if(angular.element(parentLocation)){
                        angular.element(parentLocation[0]).prepend(newElement);
                    }
                }
            }
        }
    }
}

PickUpNumbersService.$inject = ['$location', 'getTranslationsService'];