import angular from 'angular';

// Create the home module where our functionality can attach to
let directivesModule = angular.module('app.directives', []);

// Directives
import * as commonDirective from './directives';
directivesModule.directive('a', commonDirective.navigationDirective);
directivesModule.directive('a', commonDirective.layoutToggleDirective);
directivesModule.directive('button', commonDirective.layoutToggleDirective);

import colorMe from './colorme.directive';
directivesModule.directive('colorMe', colorMe);

export default directivesModule;
