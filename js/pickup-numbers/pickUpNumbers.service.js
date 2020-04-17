/**
 * Service to insert the pick up numbers for the requested items.
 */
export class PickUpNumbersService {
    constructor($http, $location) {
        this.$http = $http;
        this.location = $location;
        this._serviceBaseUrl = 'https://developer.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/';
        this._pickUpNumbersForIds = {};
        this._runningPromise;
        this._ongoingInsertions = 0;
    }

    /**
     * Binds a watcher to the given controller.
     * The watcher watches for the elements
     * containing the request IDs, and when the
     * elements become available, inserts the pickup
     * numbers if they exist.
     */
    waitForIdsAndInsertPickUpNumbers(ctrl) {
        ctrl.$scope.$watch(() => ctrl.selector(ctrl.parentElement).length,
            (newVal, oldVal) => {
                if (newVal && newVal !== oldVal) {
                    this.retrieveAndInsertPickUpNumbers(ctrl.parentCtrl, ctrl.parentElement, ctrl.parentCtrl.requestsService.requestsDisplay, ctrl.selector);
                }
            }
        );
    }

    /**
     *  Method to retrieve and insert the pick-up numbers
     *  into the given DOM element.
     *  If the method is called when a previous run
     *  has not finished, it chains the new insertion
     *  into the promise of the previous call.
     *  @param {Object} targetContainer - A DOM element
     *    containing the elements the pick-up
     *    numbers are to be inserted.
     *  @param {Array} requests - An array of request items,
     *    pick-up numbers of which are to be retrieved.
     *  @param {function} selector - A selector function to return
     *    the target DOM elements when called with a
     *    ancestor DOM element.
     *  @return {Promise} A Promise to be resolved
     *    when the pick-up numbers are inserted.
     */
    retrieveAndInsertPickUpNumbers(parentCtrl, targetContainer, requests, selector) {
        if (this._runningPromise) {

            // If there is an ongoing insertion,
            // perform the new insertion when the former is done.
            return this._runningPromise.then(() => {
                return this._insert(parentCtrl, targetContainer, requests, selector);
            });
        } else {
            // Else, perform the insertion.
            return this._insert(parentCtrl, targetContainer, requests, selector);
        }
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

    insertPickUpNumber(pickUpNumber, container){
        if (container.innerHTML.indexOf('<span class="pickupnumber">') === -1){
            let newElement = "<br/><span class='pickupnumber'>" + this.getPickupLabel() + "</span>" + pickUpNumber + "<br/>";
            angular.element(container).append(newElement);
        }
    }

    insertPickupnumbersToOverview(requests){
        let element = document.querySelectorAll('prm-requests-overview');
        if (element.length>0){
            this.addPickupnumbersToOverview(element, requests);
        }else{
            ctrl.$scope.$watch(() => element.length,
                (newVal, oldVal) => {
                    if (element.length) {
                        this.addPickupnumbersToOverview(element, requests);
                    }
                }
            );
        }

    };

    addPickupnumbersToOverview(element, requests){
        let overview_requests = angular.element(document.querySelectorAll('prm-requests-overview div[class="md-list-item-text layout-fill"]'));
        for (let index = 0; index < Object.keys(overview_requests).length-1; index++) {
            if((this._pickUpNumbersForIds[requests[index].requestId])&&(overview_requests[index].innerHTML.indexOf('<span class="pickupnumber">') === -1)){
                let newElement = '<p class="weak-text"><span class="pickupnumber">'+ this.getPickupLabel() +'</span><span>'+this._pickUpNumbersForIds[requests[index].requestId]+'</span></p>';
                angular.element(overview_requests[index]).append(newElement);
            }
        }
}

    _insert(parentCtrl, targetContainer, requests, selector) {
        let ctrl = this;
        ctrl._runningPromise = new Promise((resolve, reject) => {
            let targetElements = selector(targetContainer);
            let requestObjects = ctrl._composeRequestObjects(targetElements, requests);
            ctrl._ongoingInsertions = requestObjects.length;

            // Making one promise per request
            let inserts = [];
            requestObjects.forEach((request, key) => {
                inserts[key] = ctrl._insertForRequest(parentCtrl.requestsDisplay[key], request);
                inserts[key]
                // Instead of using both then and catch methods and counting down to see when all the promises settled
                // one can use Promise.allSettled
                // But it is not supported in ie and some other browsers yet
                    .then(()=>{
                    ctrl._ongoingInsertions = ctrl._ongoingInsertions - 1;
                        if (ctrl._ongoingInsertions === 0) {
                            this.insertPickupnumbersToOverview(requests);
                            resolve();
                        }
                    })
                    .catch(()=>{
                        ctrl._ongoingInsertions = ctrl._ongoingInsertions - 1;
                        if (ctrl._ongoingInsertions === 0) {
                            this.insertPickupnumbersToOverview(requests);
                            resolve();
                        }
                    })
            });
        });

        return this._runningPromise;
    }

    // Returns an array of objects with request related data.
    _composeRequestObjects(targetElements, requests) {
        return requests.map((request, index) => {
            return {
                element: targetElements[index],
                id: request.requestId,
                expandedDisplay: request.expandedDisplay
            }
        });
    };

    // Inserts the pickup number for given request.
    _insertForRequest(requestsDisplay, request) {
        let ctrl = this;
        return new Promise((resolve, reject) => {
            // If there is no DOM element to be altered,
            // do nothing.
            if (!request.element) {
                reject();
                return;
            }
            if (ctrl._pickUpNumbersForIds[request.id]) {
                // If the pick-up number for the request is already known, use it.
                // ctrl._replaceIdText(request, ctrl._pickUpNumbersForIds[request.id]);
                this.insertPickUpNumber(ctrl._pickUpNumbersForIds[request.id], request.element);
                resolve();
            } else if (request.expandedDisplay.find((field) => field.label === "request.holds.request_date")) {
                // Else, if it has a hold deadline, retrieve and insert the pick-up number.
                // The requested item can only have a pick up number if it has a hold deadline.
                ctrl._retrievePickUpNumber(request.id)
                    .then(response => {
                        // Insert the pick-up number text.
                        let pickUpNumber = response.data.number;
                        ctrl._pickUpNumbersForIds[request.id] = pickUpNumber;
                        this.insertPickUpNumber(pickUpNumber, request.element);
                        resolve();
                    })
                    .catch(err => {
                        // ctrl._removeIdText(request);
                        console.log('Could not retrieve the pick up number.');
                        reject(err);
                        return err;
                    });

            } else {
                resolve();
            }

        });

    }

    // Retrieves the pick up numbers from the associated service.
    // Request URL may look like the following.
    _retrievePickUpNumber(requestId) {
        return this.$http.get(this._serviceBaseUrl + requestId);
    }


}

PickUpNumbersService.$inject = ['$http', '$location'];