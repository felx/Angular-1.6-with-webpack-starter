import angular from 'angular';

// Create the home module where our functionality can attach to
let layoutModule = angular.module('app.layout', []);


// Components
import AppHeader from './common/layout-full/header.component';
layoutModule.component('appHeader', AppHeader);

import AppSidebar from './common/layout-full/sidebar.component';
layoutModule.component('appSidebar', AppSidebar);

import AppFooter from './common/layout-full/footer.component';
layoutModule.component('appFooter', AppFooter);


export default layoutModule;
