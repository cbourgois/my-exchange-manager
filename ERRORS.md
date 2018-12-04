# STEP 1

## In Webpack

```
Failed to compile.

./src/index.js
Module not found: Error: Can't resolve 'ovh-module-exchange' in '/Users/xxx/workspace/github/cbourgois/my-exchange-manager/src'
```

## In browser

```
Uncaught ReferenceError: _ is not defined
    at eval (ovh-api-services.min.js:5)
    at Object../node_modules/ovh-api-services/dist/ovh-api-services.min.js (vendor.a8c8ae497ec80e99b819.bundle.js:133)
    at __webpack_require__ (main.ba12e0e50b324ee63e6a.bundle.js:79)
    at eval (index.js:6)
    at Module../src/index.js (main.ba12e0e50b324ee63e6a.bundle.js:176)
    at __webpack_require__ (main.ba12e0e50b324ee63e6a.bundle.js:79)
    at eval (webpack:///multi_(:9000/webpack)-dev-server/client?:2:18)
    at Object.0 (main.ba12e0e50b324ee63e6a.bundle.js:187)
    at __webpack_require__ (main.ba12e0e50b324ee63e6a.bundle.js:79)
    at checkDeferredModules (main.ba12e0e50b324ee63e6a.bundle.js:46)
(anonymous) @ ovh-api-services.min.js:5
./node_modules/ovh-api-services/dist/ovh-api-services.min.js @ vendor.a8c8ae497ec80e99b819.bundle.js:133
__webpack_require__ @ main.ba12e0e50b324ee63e6a.bundle.js:79
(anonymous) @ index.js:6
./src/index.js @ main.ba12e0e50b324ee63e6a.bundle.js:176
__webpack_require__ @ main.ba12e0e50b324ee63e6a.bundle.js:79
(anonymous) @ client:2
0 @ main.ba12e0e50b324ee63e6a.bundle.js:187
__webpack_require__ @ main.ba12e0e50b324ee63e6a.bundle.js:79
checkDeferredModules @ main.ba12e0e50b324ee63e6a.bundle.js:46
(anonymous) @ main.ba12e0e50b324ee63e6a.bundle.js:152
(anonymous) @ main.ba12e0e50b324ee63e6a.bundle.js:155
angular.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:nomod] Module 'myExchangeManager' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.

https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Anomod%5D%20Module%20'myExchangeManager'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fnomod%3Fp0%3DmyExchangeManager%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A2290%3A17)%0A%20%20%20%20at%20ensure%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A2211%3A38)%0A%20%20%20%20at%20module%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A2288%3A14)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5017%3A22)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
    at eval (angular.js:138)
    at eval (angular.js:5041)
    at forEach (angular.js:387)
    at loadModules (angular.js:5001)
    at createInjector (angular.js:4918)
    at doBootstrap (angular.js:1942)
    at bootstrap (angular.js:1963)
    at angularInit (angular.js:1848)
    at eval (angular.js:36216)
    at HTMLDocument.trigger (angular.js:3501)
(anonymous) @ angular.js:138
(anonymous) @ angular.js:5041
forEach @ angular.js:387
loadModules @ angular.js:5001
createInjector @ angular.js:4918
doBootstrap @ angular.js:1942
bootstrap @ angular.js:1963
angularInit @ angular.js:1848
(anonymous) @ angular.js:36216
trigger @ angular.js:3501
```
