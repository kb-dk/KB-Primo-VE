export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        template: `<kb-primo-footer></kb-primo-footer>
                   <kb-help parent-ctrl='$ctrl.parentCtrl'></kb-help>`,
    }
};