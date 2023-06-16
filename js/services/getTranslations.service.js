/**
 * Service to get translations from API.
 */
export class GetTranslationsService {
    constructor($http) {
        this.$http = $http;
    }

    // Retrieves translations from the API
    _getTranslations(language, view){
        return this.$http.get(`/primaws/rest/pub/translations/${view}?lang=${language}`);
    }

    // Retrieves a translation from the API
    async _getTranslation(language, view, key){
        let translations = await this._getTranslations(language, view);
        return translations.data[key];
    }
}

GetTranslationsService.$inject = ['$http'];