class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.html = "<h1 style='color: red'>Hello World</h1>";
  }
}

export default HomeCtrl;
