function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/Contact',
    controller: 'ContactCtrl as contactvm',
    template: require('./contact.html'),
    title: 'Contact',
    ncyBreadcrumb: {
        label: 'Contact',
    }
  });

};

export default ContactConfig;
