import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Module from './index';

import <%= upCaseName %>Service from './<%= name %>.service';
<%= name %>Module.service('<%= upCaseName %>Service', <%= upCaseName %>Service)
			.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;