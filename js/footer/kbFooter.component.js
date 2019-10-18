export let KbFooterConfig = {
    name: 'kbFooter',
    config: {
        templateUrl: ["$rootScope", function($rootScope){
            return 'custom/' + $rootScope.viewName + '/html/footer/footer.html';
        }],

    }
};