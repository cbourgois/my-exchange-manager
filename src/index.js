import angular from 'angular';

import _ from 'lodash';

import '@ovh-ux/translate-async-loader';
import '@uirouter/angularjs';
import 'ng-ckeditor';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-route';
import 'angular-translate';
import 'ovh-angular-apiv7';
import 'ovh-api-services';
import '@ovh-ux/ovh-utils-angular';
// import 'ovh-module-exchange/src/exchange/exchange.module';

angular
  .module('myExchangeManager', [
    'ui.router',
    'Module.exchange',
    'translate-async-loader',
  ])
  .config(($translateProvider, $urlRouterProvider, $stateProvider) => {
    $translateProvider.useLoader('asyncLoader');

    $stateProvider.state('app', {
      url: '/app',
      template: `<div><a ui-sref="app.microsoft.exchange.dedicated({organization: 'org', productId: 'pId'})">go to exchange</a></div><div data-ui-view></div>`,
    });
    $stateProvider.state('app.microsoft', {
      url: '/microsoft',
    });

    $urlRouterProvider.otherwise('/app');
  })


export default 'myExchangeManager';
