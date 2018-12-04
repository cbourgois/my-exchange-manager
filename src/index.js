import angular from 'angular';

import _ from 'lodash';

import 'ng-ckeditor';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-route';
import 'angular-translate';
import 'ovh-angular-apiv7';
import 'ovh-api-services';
import '@ovh-ux/ovh-utils-angular';
import 'ovh-module-exchange/src/exchange/exchange.module';
import 'ovh-module-exchange/src/exchange/exchangeComponents.module';
import 'ovh-module-exchange/src/exchange/exchangeControllers.module';
import 'ovh-module-exchange/src/exchange/exchangeDirectives.module';
import 'ovh-module-exchange/src/exchange/exchangeServices.module';
import 'ovh-module-exchange/src/exchange/filter/filter.module';

angular.module('myExchangeManager', [
    'Module.exchange',
    'ovh-utils-angular',
    'pascalprecht.translate',
    'ngRoute',
    'ui.bootstrap',
    'ngSanitize',
    'ng.ckeditor',
]);

export default 'myExchangeManager';
