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

    insertPickUpNumber(pickUpNumber, container) {
        if (container.innerHTML.indexOf('<span class="pickup_number">') === -1) {
            this.getPickupLabel()
                .then(pickupLabel => {
                    this.addPickupLineToReservation(pickupLabel, pickUpNumber, container);
                });
        }
    }

    addPickupLineToReservation(pickupLabel, pickUpNumber, container) {
        let newElement = "<br/><span class='pickup_number'>" + pickupLabel + ": </span>" + pickUpNumber + "<br/>";
        angular.element(container.querySelectorAll('p.request-location')).append(newElement);
    }
}

PickUpNumbersService.$inject = ['$location', 'getTranslationsService'];