function <%= upCaseName %>Config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.<%= name %>', {
    url: '/<%= name %>',
    controller: '<%= upCaseName %>Ctrl as <%= name %>vm',
    template: require('./<%= name %>.html'),
    title: '<%= upCaseName %>'
  });

};

export default <%= upCaseName %>Config;
