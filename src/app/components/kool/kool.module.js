import angular from 'angular';
import koolComponent from './kool.component';
import koolModule from './index';

import KoolService from './kool.service';
koolModule.service('KoolService', KoolService)
			.component('kool', koolComponent);

export default koolModule;