class PrmReportProblemAfterController {

    constructor($element, $location,getTranslationsService) {
        this.$element = $element;
        this.getTranslationsService = getTranslationsService;
        this.location = $location;
        this.viewName = this.location.search().vid;
        this.lang = this.location.search().lang;
        this.lang = this.lang ? this.lang : 'da';
    }

    $onInit() {
        this.changeHoverLabel();
        let openReportBrokenLink = angular.element(document.querySelectorAll('prm-report-problem .report-problem-btn'))[0];
        openReportBrokenLink.addEventListener('click', function () {
            let closeReportBrokenLink = angular.element('<prm-icon svg-icon-set="navigation" icon-definition="ic_close_24px" id="closeReportBrokenLink" onclick="document.querySelectorAll(\'prm-report-problem .report-problem-btn\')[0].click();" id="closeReportBrokenLink"><svg width="100%" height="100%" viewBox="0 0 24 24" id="ic_close_24px_cache28" y="240" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></prm-icon>');
            let header = angular.element(document.querySelectorAll('prm-report-problem .report-header'));
            if(header && closeReportBrokenLink){
                header.append(closeReportBrokenLink);
            }
        });
    }

    changeHoverLabel(){
        this.getTranslationsService._getTranslations(this.lang, this.viewName)
            .then(response => {
                let label = response.data['fulldisplay.reportproblem'];
                this.addLabelAsStylingToButton(label);
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }

    addLabelAsStylingToButton(text) {
        let css =  `prm-report-problem .report-container .report-problem-btn:hover::before {
                        content: "${text}";
                     }` ;
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

PrmReportProblemAfterController.$inject = ['$element', '$location', 'getTranslationsService'];

export let PrmReportProblemAfterConfig = {
    name: 'prmReportProblemAfter',
    config: {
        controller: PrmReportProblemAfterController,
    }
};