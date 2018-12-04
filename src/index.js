import angular from 'angular';

import _ from 'lodash';

import 'angular-route';
import 'angular-translate';
import 'ovh-angular-apiv7';
import 'ovh-api-services';
import '@ovh-ux/ovh-utils-angular';
import 'ovh-module-exchange/src/exchange/exchange.module';

angular.module('myExchangeManager', [
    'Module.exchange',
    'ovh-utils-angular',
    'pascalprecht.translate',
    'ngRoute',
]);

export default 'myExchangeManager';
