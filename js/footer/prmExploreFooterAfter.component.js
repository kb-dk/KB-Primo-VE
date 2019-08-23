// import {viewName} from '../shared/viewName';
// import {PrmExploreFooterAfterController} from './prmExploreFooterAfter.component';

// class PrmExploreFooterAfterController {
//     constructor() {
//         // this.iconLink = 'hi';
//     }
//
//     iconLink () {
//         return 'Hi';
//     };
//
// }

export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        // controller: PrmExploreFooterAfterController,
        templateUrl: function(){
            let query = window.location.search.substring(1);
            let start = query.indexOf('vid')+4;
            query = query.substring(start);
            let end = query.indexOf('&');
            let vid = query.substring(0, end);
            if (!window.location.port) {
                vid = vid.replace(":", "-");
            }
            return 'custom/' + vid + '/html/footer/footer.html';
        },
    }
}
