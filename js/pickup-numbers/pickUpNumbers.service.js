/**
 * Service to insert the pick up numbers for the requested items.
 */
export class PickUpNumbersService {
    constructor($http, $location) {
        this.$http = $http;
        this._serviceBaseUrl = 'https://developer.statsbiblioteket.dk/alma-pickupnumbers/services/public/pickupnumber/';
        this._pickUpNumbersForIds = {};
        this._ongoingInsertions = 0;
        this._runningPromise;
        this.location = $location;
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
                    this.insertPickUpNumbers(ctrl.parentElement, ctrl.parentCtrl.requestsService.requestsDisplay, ctrl.selector);
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
    insertPickUpNumbers(targetContainer, requests, selector) {
        if (this._runningPromise) {
            // If there is an ongoing insertion,
            // perform the new insertion when the former is done.
            return this._runningPromise.then(() => {
                return this._insert(targetContainer, requests, selector);
            });
        } else {
            // Else, perform the insertion.
            return this._insert(targetContainer, requests, selector);
        }
    }

    _insert(targetContainer, requests, selector) {
        let ctrl = this;
        ctrl._runningPromise = new Promise((resolve, reject) => {

            let targetElements = selector(targetContainer);
            let requestObjects = ctrl._composeRequestObjects(targetElements, requests);

            ctrl._ongoingInsertions = requestObjects.length;

            requestObjects.forEach((request) => {

                ctrl._insertForRequest(request).then(() => {
                    ctrl._ongoingInsertions = ctrl._ongoingInsertions - 1;
                    if (ctrl._ongoingInsertions === 0) {
                        resolve();
                        return;
                    }
                });
            });

        });

        // TODO: This looks weird, but seems to work OK.
        this._runningPromise.then(() => {
            this._runningPromise = null;
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
    _insertForRequest(request) {
        let ctrl = this;

        return new Promise((resolve, reject) => {
            // If there is no DOM element to be altered,
            // do nothing.
            if (!request.element) {
                resolve();
                return;
            }
            if (ctrl._pickUpNumbersForIds[request.id]) {
                // If the pick-up number for the request is already known, use it.
                ctrl._replaceIdText(request, ctrl._pickUpNumbersForIds[request.id]);
                resolve();
            } else if (request.expandedDisplay.find((field) => field.label === "request.holds.request_date")) {
                // Else, if it has a hold deadline, retrieve and insert the pick-up number.
                // The requested item can only have a pick up number if it has a hold deadline.
                ctrl._retrievePickUpNumber(request.id).then((response) => {
                    // Insert the pick-up number text.
                    let pickUpNumber = response.data.number;
                    ctrl._pickUpNumbersForIds[request.id] = pickUpNumber;
                    let lang = this.location.search().lang;
                    let pickUpLabel;
                    if (lang === 'en'){
                       pickUpLabel = 'Pickup number:';
                    }else{
                        pickUpLabel = 'Ventehyde nummer::';
                    }
                    let newElement = "<br/><span>"+ pickUpLabel +"</span>"+ pickUpNumber +"<br/>";
                    angular.element(request.element).append(newElement);
                    resolve();
                }).catch(() => {
                    ctrl._removeIdText(request);
                    console.log('KB: Could not retrieve the pick up number.');
                    resolve();
                });

            } else {
                // Else, remove the request ID from the view.
                ctrl._removeIdText(request);
                resolve();
            }

        });

    }

    // Removes the request ID.
    _removeIdText(request) {
        this._replaceIdText(request, "");
    };

    // Retrieves the pick up numbers from the associated service.
    // Request URL may look like the following.
    _retrievePickUpNumber(requestId) {
        let serviceURL = this._serviceBaseUrl;
        serviceURL = serviceURL + requestId;
        return this.$http.get(serviceURL);
    }


    // Replaces the request ID text with the given string.
    _replaceIdText(request, text) {
        request.element.textContent = request.element.textContent.replace("-" + request.id, text);
    };

}

PickUpNumbersService.$inject = ['$http', '$location'];