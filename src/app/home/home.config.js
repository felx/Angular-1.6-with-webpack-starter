function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl as homevm',
    template: require('./home.html'),
    title: 'Home',
    ncyBreadcrumb: {
        label: 'Home'
    }
  });

};

export default HomeConfig;
