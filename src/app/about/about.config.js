function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.about', {
    url: '/about',
    controller: 'AboutCtrl as aboutvm',
    template: require('./about.html'),
    title: 'About',
    ncyBreadcrumb: {
        label: 'About'
    }
  });

};

export default AboutConfig;
