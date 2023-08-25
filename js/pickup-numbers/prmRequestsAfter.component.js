// https://sbprojects.statsbiblioteket.dk/jira/browse/BSV-437
class PrmRequestsAfterController {

    constructor($element, pickUpNumbersService, $interval) {
        this.$element = $element;
        this.pickUpNumbersService = pickUpNumbersService;
        this.$interval = $interval;
    }

    $onInit() {
        let _this = this;
        this.$intervalId = this.$interval(function(){
            _this.createAndInsertPickupNumbers(_this);
        }, 500);
    }

    createAndInsertPickupNumbers(_this) {
        let reservations = _this.$element.parent()[0].querySelectorAll('md-list-item');
        for (let requestNumber = 0; requestNumber < reservations.length; requestNumber++) {
            _this.createAndInsertPickupNumber(requestNumber, reservations);
        }
    }

    createAndInsertPickupNumber(requestNumber, reservations) {
        let message = this.getFirstLine(this.parentCtrl, requestNumber);
        let day = this.getDay(message);
        if (this.isDay(day)) {
            let shelf_nr = this.getPickupNumber(requestNumber, day);
            this.pickUpNumbersService.insertPickUpNumber(shelf_nr, requestNumber);
        }
    }

    getPickupNumber(requestNumber, day) {
        let requestId = this.getRequestId(requestNumber);
        let fourDigits = this.getFourDigits(requestId);
        return this.getShelfNr(day, fourDigits);
    }

    // Shelf number is a combination of day from the first line and the 4 digits from the the
    // '13', '3573' => '13/3573'
    getShelfNr(day, fourDigits) {
        return `${day}/${fourDigits} `;
    }

    // Returns 7. to 11. characters from the end
    // '42730335730005763' => '3573'
    getFourDigits(requestId) {
        return requestId.substring(requestId.length - 11, requestId.length - 7);
    }

// Example:
    // => '42730335730005763'
    getRequestId (requestNumber) {
        return this.parentCtrl.requestsDisplay[requestNumber].requestId;
    }

    // Take out the characters nr. 9 and 10 from the end of the message
    // Examples for the message:
    // 1: REQUEST. On Hold Shelf until 13/06/2023 => '13'
    // 2: REQUEST. Not Started. Your place in queue is: 1 => 'n '
    getDay (message) {
        return message.substring(message.length - 8, message.length - 10);
    }

    // Examples for the results:
    // 1: => 'REQUEST. On Hold Shelf until 13/06/2023'
    // 2: => 'REQUEST. Not Started. Your place in queue is: 1'
    getFirstLine(parent, requestNumber) {
        return parent.requestsDisplay[requestNumber].firstLineRight;
    }

    isDay(day) {
        return parseInt(day) >= 1 && parseInt(day) <= 31;
    }

    $onDestroy(){
    this.$interval.cancel(this.$intervalId);
    }
}

PrmRequestsAfterController.$inject = ['$element', 'pickUpNumbersService', '$interval'];

export let PrmRequestsAfterConfig = {
    name: 'prmRequestsAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmRequestsAfterController,
    }
}