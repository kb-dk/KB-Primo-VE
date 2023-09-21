export let KbPrimoFooterConfig = {
    name: 'kbPrimoFooter',
    config: {
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/footer/footer.html';
        }],
    }
};