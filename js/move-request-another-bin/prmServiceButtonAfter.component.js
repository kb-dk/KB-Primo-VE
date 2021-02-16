class PrmServiceButtonAfterController {
    constructor($element, $interval) {
        this.$element = $element;
        this.$interval = $interval;
    };
    $postLink() {
        let _this = this;
        this.intervalId = this.$interval(function(){
            let AlmaRequestOther = angular.element(document.querySelector("span[translate='AlmaRequestOther']"));
            if(AlmaRequestOther.length){
                _this.$interval.cancel(_this.intervalId);
                AlmaRequestOther = AlmaRequestOther.parent().parent();
                if(AlmaRequestOther[0].textContent === angular.element(_this.$element.parent())[0].textContent){
                    let container = AlmaRequestOther.parent();
                    while ((!container.hasClass("section-body"))&&(container[0].tagName !== "BODY")){
                        container = container.parent();
                    }
                    container.append(AlmaRequestOther.parent());
                    AlmaRequestOther.parent().addClass('orderAtTheBottom');
                    AlmaRequestOther.parent().css('float','right');
                    let requestButtons = angular.element(document.querySelectorAll("span[translate='AlmaItemRequest']"));
                    for (let i = 0; i < requestButtons.length; i++) {
                        requestButtons[i].addEventListener("click", function(){
                            if(document.getElementsByClassName("orderAtTheBottom") && document.getElementsByClassName("orderAtTheBottom").length){
                                console.log('hej');
                                AlmaRequestOther.css('display', 'none');
                            }

                        });
                    }
                    let backButtons = angular.element(document.querySelectorAll("prm-opac-back-button button"));
                    for (let i = 0; i < backButtons.length; i++) {
                        backButtons[i].addEventListener("click", function(){
                            if(document.getElementsByClassName("orderAtTheBottom") && document.getElementsByClassName("orderAtTheBottom").length){
                                AlmaRequestOther.css('display', 'inline-block');
                            }

                        });
                    }
                }
            }
        }, 500, 5);
    };
}

PrmServiceButtonAfterController.$inject = ['$element', '$interval'];

export let PrmServiceButtonAfterConfig = {
    name: 'prmServiceButtonAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmServiceButtonAfterController,
    },
}