/**
 * Annoncement service.
 * Displays a md-toast on top of the view, containing an announcement retrieved from the code tables.
 */
export class AnnouncementService {
  constructor($translate, $mdToast, $rootScope, $cookies) {
    this.$translate = $translate;
    this.$mdToast = $mdToast;
    this.$rootScope = $rootScope;
    this.$cookies = $cookies;

    this._dismissed = false;

    // Forget the dismissal if the language is changed.
    this.$rootScope.$on('$translateChangeSuccess', () => {
      this._dismissed = false;
    });
  };

  // The announcement has been dismissed.
  _dismiss() {
    this._dismissed = true;
    this._toastPromise = null;
  };

  /** 
   *  Displays the announcement if it has not been dismissed.
   *  @param {function} [hideCallback] - A function to be called 
   *    when the announcement is hidden.
   *  @return {Promise} A Promise to be fulfilled 
   *    if the announcement is displayed, and to be 
   *    rejected when the announcement cannot be displayed.
   */
  display(hideCallback) {
    let ctrl = this;

    return new Promise((resolve, reject) => {

      if (ctrl._dismissed === true) {
        reject('The announcement has been dismissed.');
        return;
      }

      ctrl.$translate('nui.message.announcement').then((translation) => {
        // Check if there is a cookie with this message
        let cookie = ctrl.$cookies.get('announcement');
        if (cookie === translation){
          reject('The announcement has been dismissed before.');
          return;
        }
        // If there is no announcement to be displayed.
        if ((!translation) || ['announcement', '&nbsp;', ''].includes(translation)) {
          // translation is assigned 'announcement' in the absence of a matching entry.

          // If there is already a toast, and no 
          // announcement, hide the toast.
          // This happens when the language is changed.
          if (ctrl._toastPromise && !ctrl._dismissed) {
            ctrl.$mdToast.hide();
          }
          reject('No announcement found.');
          return;
        }

        // If there is already a toast promise,
        // avoid creating a new one.
        ctrl._toastPromise = ctrl._toastPromise || ctrl.$mdToast.show({
          // Timeout duration in msecs. false implies no timeout.
          hideDelay: false,
          position: 'top',
          controller: () => {
            return {
              close: () => {
                ctrl.$mdToast.hide();
                // Save as cookie
                ctrl.$translate('nui.message.announcement').then((response) => {
                  return ctrl.$cookies.put('announcement', response);
                });
              }
            }
          },
          controllerAs: '$ctrl',
          template: `<md-toast class="page-notification" style="top: 0px; position: sticky !important;">
    <div class="md-toast-content" style="box-shadow:none; width: 100%;">
        <span class='md-toast-text' flex translate='nui.message.announcement'>
  </span>
    </div>
    <a class="close" ng-click='$ctrl.close()' aria-label="{{'nui.message.dismiss' | translate}}" style="position: absolute; right: 1.5rem; top: 1.5rem;">
<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close"><!----><md-icon ng-if="!$ctrl.isCustom" md-svg-icon="primo-ui:close" alt="" class="md-primoExplore-theme" aria-hidden="true"><svg id="close" width="100%" height="100%" viewBox="0 0 24 24" y="240" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
    </svg></md-icon><!----><!----><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon></a>
</md-toast>`,
        });

        ctrl._toastPromise.then(hideCallback).catch(hideCallback).then(() => ctrl._dismiss());

        resolve();

      });

    });
  };

};

AnnouncementService.$inject = ['$translate', '$mdToast', '$rootScope', '$cookies'];
