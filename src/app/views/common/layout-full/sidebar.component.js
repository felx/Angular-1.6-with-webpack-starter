class AppSidebarCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let AppSidebar = {
  controller: AppSidebarCtrl,
  template: require('./sidebar.html')
};

export default AppSidebar;
