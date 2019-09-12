export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        templateUrl: function(){
            let query = window.location.search.substring(1);
            let start = query.indexOf('vid')+4;
            query = query.substring(start);
            let end = query.indexOf('&');
            let vid = query.substring(0, end);
                vid = vid.replace(":", "-");
            let templateUrl = 'custom/' + vid + '/html/footer/footer.html';
            return templateUrl;
        },

    }
};