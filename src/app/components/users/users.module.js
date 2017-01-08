import angular from 'angular';
import usersComponent from './users.component';
import usersModule from './index';

import UsersService from './users.service';
usersModule.service('UsersService', UsersService)
			.component('users', usersComponent);

export default usersModule;