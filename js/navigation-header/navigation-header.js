class PrmTopBarBeforeController {
    constructor($element) {
        this.$element = $element;
    };

    $postLink() {

        let parentElement = this.$element.parent().parent().parent();
        // Move the header.
        let container = angular.element(parentElement.children()[0]);
        container.append(this.$element.children()[0]);
    };
}

PrmTopBarBeforeController.$inject = ['$element'];

export let PrmTopBarBeforeConfig = {
    name: 'prmTopBarBefore',
    config: {
        bindings: {parentCtrl: '<'},
        controller: PrmTopBarBeforeController,
        templateUrl: function(){
            let query = window.location.search.substring(1);
            let start = query.indexOf('vid')+4;
            query = query.substring(start);
            let end = query.indexOf('&');
            let vid = query.substring(0, end);
            if (!window.location.port) {
                vid = vid.replace(":", "-");
            }
            return 'custom/' + vid + '/html/navigation-header/navigation-header.html';
        },
    },
}