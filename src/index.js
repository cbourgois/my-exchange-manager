import angular from 'angular';

import _ from 'lodash';

import 'ovh-angular-apiv7';
import 'ovh-api-services';
import 'ovh-module-exchange/src/exchange/exchange.module';

angular.module('myExchangeManager', ['Module.exchange']);

export default 'myExchangeManager';
