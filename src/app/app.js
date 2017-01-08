import '../scss/main.scss';
// import '../style/app.css';

import $ from 'jquery';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import 'angular-breadcrumb';
import 'angular-loading-bar';
// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

// Import our app functionaity
import layoutModule from './views';
// import './filters';
import './services';
import directivesModule from './directives';

// routes
// lazy loaded modules
import usersModule from './components/users';
import koolModule from './components/kool';

// eager loaded modules
import homeModule from './home';
import aboutModule from './about';
import contactModule from './contact';

// Create and bootstrap application
const requires = [
  uirouter,
  oclazyload,
  'angular-loading-bar',
  'ncy-angular-breadcrumb',
  directivesModule.name,
  layoutModule.name,
  homeModule.name,
  aboutModule.name,
  contactModule.name,
  usersModule.name,
  koolModule.name,

  // 'templates',
  // 'app.layout',
  // 'app.components',
  // 'app.filters',
  // 'app.services',
  // 'app.home',
  // 'app.about',

];


const MODULE_NAME = 'MyApp';

angular.module(MODULE_NAME, requires)
  .constant('AppConstants', constants)
  .config(appConfig)
  .run(appRun);

angular.bootstrap(document, [MODULE_NAME], {
  //strictDi: true
});