/**
 * Service to get translations from API.
 */
export class GetTranslationsService {
    constructor($http) {
        this.$http = $http;
    }

    // Retrieves translations from the API
    _getTranslations(language){
        return this.$http.get(`/primaws/rest/pub/translations/45KBDK_KGL:SPEC?lang=${language}`);
    }


}

GetTranslationsService.$inject = ['$http'];