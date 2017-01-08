import angular from 'angular';
import uiRouter from 'angular-ui-router';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
]);

// Include our UI-Router config settings
import <%= upCaseName %>Config from './<%= name %>.config';
<%= name %>Module.config(<%= upCaseName %>Config);


export default <%= name %>Module;
