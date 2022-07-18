export let PrmUserAreaExpandableAfterConfig=  {
    name: 'prmUserAreaExpandableAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        template: `<kb-language parent-ctrl='$ctrl.parentCtrl'></kb-language><kb-edit-pincode></kb-edit-pincode>`,
    }
};