/**
 * Service to insert the pickup numbers for the requested items.
 */
export class PickUpNumbersService {
    constructor($location) {
        this.location = $location;
    }

    getPickupLabel(){
        let lang = this.location.search().lang;
        let pickUpLabel;
        if (lang === 'en') {
            pickUpLabel = 'Pickup number: ';
        } else {
            pickUpLabel = 'Ventehyldenummer: ';
        }
        return pickUpLabel;
    }

    insertPickUpNumber(pickUpNumber, container) {
        if (container.innerHTML.indexOf('<span class="pickup_number">') === -1) {
            let newElement = "<br/><span class='pickup_number'>" + this.getPickupLabel() + "</span>" + pickUpNumber + "<br/>";
            angular.element(container.querySelectorAll('p.request-location')).append(newElement);
        }
    }
}

PickUpNumbersService.$inject = ['$location'];