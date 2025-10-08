/**
 * Service to get translations from API.
 */
export class GetTranslationsService {
    constructor($http) {
        this.$http = $http;
    }

    // Retrieves translations from the API
    _getTranslations(language, view){
        if (!language) {language = 'da'}
        if (!view) {
            view = this.location.search().vid;
            if (!view) {
                view = '45KBDK_KGL-KGL';
            }
        }
        view = view.replace("-", ":");
        return this.$http.get(`/primaws/rest/pub/translations/${view}?lang=${language}`);
    }

    // Retrieves a translation from the API
    async _getTranslation(language, view, key){
        if (view === undefined) {
            view = '45KBDK_KGL-KGL';
        }

        if (language === undefined) {
            language = 'da';
        }
        let translations = await this._getTranslations(language, view);
        return translations.data[key];
    }
}

GetTranslationsService.$inject = ['$http'];