export let PrmUserAreaExpandableAfterConfig=  {
    name: 'prmUserAreaExpandableAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        template: `<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language>`,
    }
};