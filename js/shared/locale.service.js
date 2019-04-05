export class LocaleService {
  constructor($location) {
    this.$location = $location;
  }

  current() {
    console.log(this.$location.search().lang);
    return this.$location.search().lang;
  }
}

LocaleService.$inject = ['$location'];