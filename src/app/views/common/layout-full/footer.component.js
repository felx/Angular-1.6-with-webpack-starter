class AppFooterCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  template: require('./footer.html')
};

export default AppFooter;
