function AppConfig($locationProvider, $stateProvider, $urlRouterProvider, $breadcrumbProvider) {
  'ngInject';

  //$locationProvider.html5Mode(true);
  $breadcrumbProvider.setOptions({
        prefixStateName: 'app.home',
        includeAbstract: true,
        template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
    });

  $stateProvider
    .state('app', {
      abstract: true,
      template: require('../views/common/layout-full/full.html'),
      // page title goes here
      ncyBreadcrumb: {
          label: 'Root',
          skip: true
      }
      // resolve: {
      //     // loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     //     // you can lazy load CSS files
      //     //     return $ocLazyLoad.load([{
      //     //         serie: true,
      //     //         name: 'Font Awesome',
      //     //         files: ['css/font-awesome.min.css']
      //     //     }, {
      //     //         serie: true,
      //     //         name: 'Simple Line Icons',
      //     //         files: ['css/simple-line-icons.css']
      //     //     }]);
      //     // }]
      //     // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     //     // you can lazy load files for an existing module
      //     //     return $ocLazyLoad.load([{
      //     //         serie: true,
      //     //         name: 'chart.js',
      //     //         files: [
      //     //             'bower_components/chart.js/dist/Chart.min.js',
      //     //             'bower_components/angular-chart.js/dist/angular-chart.min.js'
      //     //         ]
      //     //     }]);
      //     // }],
      // }
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
