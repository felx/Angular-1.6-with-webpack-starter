import angular from 'angular';

function UsersConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('app.users', {
            url: '/users',
            template: '<users></users>',
            title: "Users",
            resolve: {
                lazyLoad($q, $ocLazyLoad) {
                    "ngInject";

                    let deferred = $q.defer();

                    //
                    // Async require => Split point
                    require.ensure([], function() {

                        //
                        // All the code here, plus the required modules
                        // will be bundled in a separate file.

                        let module = require('./users.module');
                        //
                        // OCLazyLoad's 'load' function loads the Angular module.
                        $ocLazyLoad.load({
                            name: module.default.name
                        });

                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }
            }
        });

};

export default UsersConfig;
