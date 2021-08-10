export let KbFooterConfig = {
    name: 'kbFooter',
    config: {
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/footer/footer.html';
        }],
    }
};