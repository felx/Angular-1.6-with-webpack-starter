import angular from 'angular';

// Create the about module where our functionality can attach to
let aboutModule = angular.module('app.about', []);

// Include our UI-Router config settings
import AboutConfig from './About.config';
aboutModule.config(AboutConfig);


// Controllers
import AboutCtrl from './about.controller';
aboutModule.controller('AboutCtrl', AboutCtrl);


export default aboutModule;
