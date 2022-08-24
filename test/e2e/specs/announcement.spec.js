describe('Announcement', function() {
  let EC = protractor.ExpectedConditions;
  let topbar = $('prm-topbar');
  let languageButton = element(by.model('$ctrl.selectedLanguage'));
  let englishOption = $('md-option[value="en"]');
  let announcement = $('md-toast.rex-announcement');
  let announcementDismissButton = $('md-toast.rex-announcement button[ng-click="$ctrl.close()"]');
  let userArea = $('prm-user-area');

  beforeEach(function() {
    browser.get(browser.params.targetUrl);
  });

  it('should be displayed when the language-and-pincode changes and should be dismissable. (Assuming that the BackOffice provides an announcement in English.)', function() {

    browser.wait(EC.elementToBeClickable(userArea), 2000);
    userArea.click();

    browser.wait(EC.elementToBeClickable(languageButton), 2000);
    languageButton.click();


    browser.wait(EC.elementToBeClickable(englishOption), 1000);
    englishOption.click();
    
    browser.wait(EC.elementToBeClickable(announcementDismissButton), 2000);
    expect(announcement.isDisplayed()).toBeTruthy();
    
    // Expecting the topbar to be shifted down,
    // when the announcement is displayed. 
    topbar.getCssValue('margin-top').then((value) => {
      expect(parseInt(value) > 0).toBeTruthy();
    });

    announcementDismissButton.click();

    expect(announcement.isPresent()).toBeFalsy();

    // Expecting the topbar to be shifted back up,
    // when the announcement is dismissed.
    topbar.getCssValue('margin-top').then((value) => {
      expect(parseInt(value) == 0).toBeTruthy();
    });

  });

});