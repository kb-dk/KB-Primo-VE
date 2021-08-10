export let PrmExploreFooterAfterConfig = {
    name: 'prmExploreFooterAfter',
    config: {
        bindings: {parentCtrl: '<'},
        template: `<kb-footer></kb-footer>
                   <kb-help parent-ctrl='$ctrl.parentCtrl'></kb-help>`,
    }
};