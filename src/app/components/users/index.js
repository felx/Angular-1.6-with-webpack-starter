import angular from 'angular';
import uiRouter from 'angular-ui-router';

let usersModule = angular.module('users', [
  uiRouter
]);

// Include our UI-Router config settings
import UsersConfig from './users.config';
usersModule.config(UsersConfig);


export default usersModule;
