export let PrmTopBarBeforeConfig = {
    name: 'prmTopBarBefore',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        template:`<kb-navigation-header parent-ctrl='$ctrl.parentCtrl'></kb-navigation-header>`,
    }
};