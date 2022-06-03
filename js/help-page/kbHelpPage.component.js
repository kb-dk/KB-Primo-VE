class KbHelpPageController {



    constructor() {
    };

    static OnFixedButtonsHolderClick(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    showScrollButton(){
        if(window.pageYOffset !== 0){
            document.getElementById('fixedButtonsHolder').style.visibility = "visible";
        } else{
            document.getElementById('fixedButtonsHolder').style.visibility = "hidden";
        }
    }

    $postLink() {
        let url = window.location.search;
        let index = url.indexOf('SPEC');
        this.view = index > 0 ? 'special' : 'general';

        document.getElementById('fixedButtonsHolder').onclick = KbHelpPageController.OnFixedButtonsHolderClick;
        window.addEventListener("scroll", this.showScrollButton);
    };


}

export let KbHelpPageConfig = {
    name: 'kbHelpPage',
    config: {
        controller: KbHelpPageController,
        templateUrl: ["viewName", function(viewName){
            return 'custom/' + viewName + '/html/help/kb-help-page.html';
        }],
    }
};