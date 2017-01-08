import angular from 'angular';

function KoolConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('app.kool', {
            url: '/kool',
            template: '<kool></kool>',
            title: "Kool Page",
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

                        let module = require('./kool.module');
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

export default KoolConfig;
