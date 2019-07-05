import {viewName} from '../shared/viewName';
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
        templateUrl: 'custom/' + viewName + '/html/footer/footer' + '.html',
    }
}
