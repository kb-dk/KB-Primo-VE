class PrmReportProblemAfterController {
    constructor() {
    }
    $onInit() {
        let closeReportBrokenLink = document.getElementById('closeReportBrokenLink');
        let header = angular.element(document.querySelectorAll('prm-report-problem .report-header'));
        header.append(closeReportBrokenLink);
        console.log(header, closeReportBrokenLink);
    }
}

export let PrmReportProblemAfterConfig = {
    name: 'prmReportProblemAfter',
    config: {
        controller: PrmReportProblemAfterController,
        template:`<div id="closeReportBrokenLink">X</div>`,
    }
};