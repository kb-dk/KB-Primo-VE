/**
 * Service to get translations from API.
 */
export class GetTranslationsService {
    constructor($http) {
        this.$http = $http;
    }

    // Retrieves translations from the API
    _getTranslations(language, view){
        console.log('language, view:', language, view);
        return this.$http.get(`/primaws/rest/pub/translations/${view}?lang=${language}`);
    }


}

GetTranslationsService.$inject = ['$http'];