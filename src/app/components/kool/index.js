import angular from 'angular';
import uiRouter from 'angular-ui-router';

let koolModule = angular.module('kool', [
  uiRouter
]);

// Include our UI-Router config settings
import KoolConfig from './kool.config';
koolModule.config(KoolConfig);


export default koolModule;
