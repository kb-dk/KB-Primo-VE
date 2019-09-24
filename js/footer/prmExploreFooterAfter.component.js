export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        templateUrl: ["$rootScope", function($rootScope){
            return 'custom/' + $rootScope.viewName + '/html/footer/footer.html';
        }],

    }
};