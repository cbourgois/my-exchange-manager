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

# STEP 2

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ovh-utils-angular due to:
Error: [$injector:nomod] Module 'ovh-utils-angular' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ovh-utils-angular%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'ovh-utils-angular'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ovh-utils-angular%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'ovh-utils-angular'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253Dovh-utils-angular%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'ovh-utils-angular'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253Dovh-utils-angular%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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
```

# STEP 3

## In webpack

```
Failed to compile.

./node_modules/@ovh-ux/ovh-utils-angular/dist/ovh-utils-angular.js
Module not found: Error: Can't resolve 'angular-translate' in '/Users/xxx/workspace/github/cbourgois/my-exchange-manager/node_modules/@ovh-ux/ovh-utils-angular/dist'
```


# STEP 4

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ngRoute due to:
Error: [$injector:nomod] Module 'ngRoute' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ngRoute%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'ngRoute'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ngRoute%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'ngRoute'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253DngRoute%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'ngRoute'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253DngRoute%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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
```

# STEP 5

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ui.bootstrap due to:
Error: [$injector:nomod] Module 'ui.bootstrap' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ui.bootstrap%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'ui.bootstrap'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ui.bootstrap%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'ui.bootstrap'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253Dui.bootstrap%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'ui.bootstrap'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253Dui.bootstrap%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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
```

# STEP 6

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ngSanitize due to:
Error: [$injector:nomod] Module 'ngSanitize' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ngSanitize%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'ngSanitize'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ngSanitize%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'ngSanitize'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253DngSanitize%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'ngSanitize'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253DngSanitize%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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
```


# STEP 7

## In browser

```
angular.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ng.ckeditor due to:
Error: [$injector:nomod] Module 'ng.ckeditor' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ng.ckeditor%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'ng.ckeditor'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ng.ckeditor%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'ng.ckeditor'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253Dng.ckeditor%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'ng.ckeditor'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253Dng.ckeditor%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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
```

# STEP 8

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange.controllers due to:
Error: [$injector:nomod] Module 'Module.exchange.controllers' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.



https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange.controllers%20due%20to%3A%0AError%3A%20%5B%24injector%3Anomod%5D%20Module%20'Module.exchange.controllers'%20is%20not%20available!%20You%20either%20misspelled%20the%20module%20name%20or%20forgot%20to%20load%20it.%20If%20registering%20a%20module%20ensure%20that%20you%20specify%20the%20dependencies%20as%20the%20second%20argument.%0A%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520Module.exchange.controllers%2520due%2520to%253A%250AError%253A%2520%255B%2524injector%253Anomod%255D%2520Module%2520'Module.exchange.controllers'%2520is%2520not%2520available!%2520You%2520either%2520misspelled%2520the%2520module%2520name%2520or%2520forgot%2520to%2520load%2520it.%2520If%2520registering%2520a%2520module%2520ensure%2520that%2520you%2520specify%2520the%2520dependencies%2520as%2520the%2520second%2520argument.%250A%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Fmodulerr%253Fp0%253DModule.exchange.controllers%2526p1%253DError%25253A%252520%25255B%252524injector%25253Anomod%25255D%252520Module%252520'Module.exchange.controllers'%252520is%252520not%252520available!%252520You%252520either%252520misspelled%252520the%252520module%252520name%252520or%252520forgot%252520to%252520load%252520it.%252520If%252520registering%252520a%252520module%252520ensure%252520that%252520you%252520specify%252520the%252520dependencies%252520as%252520the%252520second%252520argument.%25250Ahttps%25253A%25252F%25252Ferrors.angularjs.org%25252F1.7.5%25252F%252524injector%25252Fnomod%25253Fp0%25253DModule.exchange.controllers%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A138%25253A12)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2290%25253A17)%25250A%252520%252520%252520%252520at%252520ensure%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2211%25253A38)%25250A%252520%252520%252520%252520at%252520module%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A2288%25253A14)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5017%25253A22)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%25250A%252520%252520%252520%252520at%252520eval%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5019%25253A40)%25250A%252520%252520%252520%252520at%252520forEach%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A387%25253A20)%25250A%252520%252520%252520%252520at%252520loadModules%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular%25252Fangular.js%25253F%25253A5001%25253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5041%253A15)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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


# STEP 11

## In browser

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:unpr] Unknown provider: $stateProvider


https://errors.angularjs.org/1.7.5/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Aunpr%5D%20Unknown%20provider%3A%20%24stateProvider%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.5%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Aunpr%255D%2520Unknown%2520provider%253A%2520%2524stateProvider%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.5%252F%2524injector%252Funpr%253Fp0%253D%252524stateProvider%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A138%253A12)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A4905%253A19)%250A%2520%2520%2520%2520at%2520getService%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5065%253A32)%250A%2520%2520%2520%2520at%2520injectionArgs%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5090%253A58)%250A%2520%2520%2520%2520at%2520Object.invoke%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5114%253A18)%250A%2520%2520%2520%2520at%2520runInvokeQueue%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5011%253A35)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5021%253A11)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A387%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5001%253A5)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5019%253A40)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A138%3A12)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5041%3A15)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5019%3A40)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A387%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5001%3A5)%0A%20%20%20%20at%20createInjector%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4918%3A19)%0A%20%20%20%20at%20doBootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1942%3A20)%0A%20%20%20%20at%20bootstrap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A1963%3A12)
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

# STEP 13

## In browser

```
Transition Rejection($id: 0 type: 6, message: The transition errored, detail: Error: [$injector:unpr] Unknown provider: asyncLoaderProvider <- asyncLoader
https://errors.angularjs.org/1.7.5/$injector/unpr?p0=asyncLoaderProvider%20%3C-%20asyncLoader)
$defaultErrorHandler @ stateService.js:51
(anonymous) @ stateService.js:379
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
(anonymous) @ angular.js:21564
completeTask @ angular.js:21194
(anonymous) @ angular.js:6790
setTimeout (async)
Browser.self.defer @ angular.js:6788
timeout @ angular.js:21554
(anonymous) @ stateDirectives.js:55
defaultHandlerWrapper @ angular.js:3805
eventHandler @ angular.js:3793
stateService.js:53 Error: [$injector:unpr] Unknown provider: asyncLoaderProvider <- asyncLoader
https://errors.angularjs.org/1.7.5/$injector/unpr?p0=asyncLoaderProvider%20%3C-%20asyncLoader
    at eval (angular.js:138)
    at eval (angular.js:4905)
    at Object.getService [as get] (angular.js:5065)
    at eval (angular.js:4910)
    at Object.getService [as get] (angular.js:5065)
    at UIInjectorImpl.getNative (resolveContext.js:211)
    at getDependency (resolveContext.js:174)
    at Array.map (<anonymous>)
    at ResolveContext.getDependencies (resolveContext.js:180)
    at getResolvableDependencies (resolvable.js:78)
```

# STEP 14

## In browser

```
angular.js:13531 GET http://localhost:9000/exchange/exchange.html 404 (Not Found)
(anonymous) @ angular.js:13531
sendReq @ angular.js:13257
serverRequest @ angular.js:12998
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
(anonymous) @ angular.js:21564
completeTask @ angular.js:21194
(anonymous) @ angular.js:6790
setTimeout (async)
Browser.self.defer @ angular.js:6788
timeout @ angular.js:21554
(anonymous) @ stateDirectives.js:55
defaultHandlerWrapper @ angular.js:3805
eventHandler @ angular.js:3793
angular.js:15536 Error: [$templateRequest:tpload] Failed to load template: exchange/exchange.html (HTTP status: 404 Not Found)
https://errors.angularjs.org/1.7.5/$templateRequest/tpload?p0=exchange%2Fexchange.html&p1=404&p2=Not%20Found
    at eval (angular.js:138)
    at handleError (angular.js:21360)
    at processQueue (angular.js:17914)
    at eval (angular.js:17962)
    at Scope.$digest (angular.js:19075)
    at Scope.$apply (angular.js:19463)
    at done (angular.js:13312)
    at completeRequest (angular.js:13569)
    at XMLHttpRequest.requestLoaded (angular.js:13474)
(anonymous) @ angular.js:15536
(anonymous) @ angular.js:11815
handleError @ angular.js:21364
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
done @ angular.js:13312
completeRequest @ angular.js:13569
requestLoaded @ angular.js:13474
load (async)
(anonymous) @ angular.js:13457
sendReq @ angular.js:13257
serverRequest @ angular.js:12998
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
(anonymous) @ angular.js:21564
completeTask @ angular.js:21194
(anonymous) @ angular.js:6790
setTimeout (async)
Browser.self.defer @ angular.js:6788
timeout @ angular.js:21554
(anonymous) @ stateDirectives.js:55
defaultHandlerWrapper @ angular.js:3805
eventHandler @ angular.js:3793
stateService.js:51 Transition Rejection($id: 0 type: 6, message: The transition errored, detail: Error: [$templateRequest:tpload] Failed to load template: exchange/exchange.html (HTTP status: 404 Not Found)
https://errors.angularjs.org/1.7.5/$templateRequest/tpload?p0=exchange%2Fexchange.html&p1=404&p2=Not%20Found)
$defaultErrorHandler @ stateService.js:51
(anonymous) @ stateService.js:379
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
done @ angular.js:13312
completeRequest @ angular.js:13569
requestLoaded @ angular.js:13474
load (async)
(anonymous) @ angular.js:13457
sendReq @ angular.js:13257
serverRequest @ angular.js:12998
processQueue @ angular.js:17914
(anonymous) @ angular.js:17962
$digest @ angular.js:19075
$apply @ angular.js:19463
(anonymous) @ angular.js:21564
completeTask @ angular.js:21194
(anonymous) @ angular.js:6790
setTimeout (async)
Browser.self.defer @ angular.js:6788
timeout @ angular.js:21554
(anonymous) @ stateDirectives.js:55
defaultHandlerWrapper @ angular.js:3805
eventHandler @ angular.js:3793
stateService.js:53 Error: [$templateRequest:tpload] Failed to load template: exchange/exchange.html (HTTP status: 404 Not Found)
https://errors.angularjs.org/1.7.5/$templateRequest/tpload?p0=exchange%2Fexchange.html&p1=404&p2=Not%20Found
    at eval (angular.js:138)
    at handleError (angular.js:21360)
    at processQueue (angular.js:17914)
    at eval (angular.js:17962)
    at Scope.$digest (angular.js:19075)
    at Scope.$apply (angular.js:19463)
    at done (angular.js:13312)
    at completeRequest (angular.js:13569)
    at XMLHttpRequest.requestLoaded (angular.js:13474)
```


# STEP 15

## In browser

```
angular.js:15536 Error: [$injector:unpr] Unknown provider: WucApiProvider <- WucApi <- APIExchange <- Exchange
https://errors.angularjs.org/1.7.5/$injector/unpr?p0=WucApiProvider%20%3C-%20WucApi%20%3C-%20APIExchange%20%3C-%20Exchange
    at eval (angular.js:138)
    at eval (angular.js:4905)
    at Object.getService [as get] (angular.js:5065)
    at eval (angular.js:4910)
    at getService (angular.js:5065)
    at injectionArgs (angular.js:5090)
    at Object.instantiate (angular.js:5134)
    at Object.eval (angular.js:4973)
    at Object.invoke (angular.js:5122)
    at Object.enforcedReturnValue [as $get] (angular.js:4957) "<div data-ui-view="" class="ng-scope">"
```

# STEP 15

## In webpack

```
 ERROR  Failed to compile with 3 errors                                                             09:10:48

These dependencies were not found:

* script-loader!@ovh-ux/ovh-utils-angular/bin/ovh-utils-angular.min.js in ./node_modules/@ovh-ux/web-univers
e-components/dist/umd/web-universe-components.js
* script-loader!@ovh-ux/ovh-utils-angular/lib/core.js in ./node_modules/@ovh-ux/web-universe-components/dist
/umd/web-universe-components.js
* script-loader!df-tab-menu/build/df-tab-menu.min.js in ./node_modules/@ovh-ux/web-universe-components/dist/
umd/web-universe-components.js

To install them, you can run: npm install --save script-loader!@ovh-ux/ovh-utils-angular/bin/ovh-utils-angul
ar.min.js script-loader!@ovh-ux/ovh-utils-angular/lib/core.js script-loader!df-tab-menu/build/df-tab-menu.mi
n.js
```

# STEP 16

## In browser

```
[Script Loader] ReferenceError: $ is not defined
    at a (eval at module.exports (webpack:///./node_modules/script-loader/addScript.js?), <anonymous>:1:17388)
    at eval (eval at module.exports (webpack:///./node_modules/script-loader/addScript.js?), <anonymous>:1:18052)
    at eval (eval at module.exports (webpack:///./node_modules/script-loader/addScript.js?), <anonymous>:1:18060)
    at eval (<anonymous>)
    at module.exports (webpack:///./node_modules/script-loader/addScript.js?:20)
    at eval (webpack:///./node_modules/@ovh-ux/ovh-utils-angular/bin/ovh-utils-angular.min.js?./node_modules/script-loader:1)
    at Object../node_modules/script-loader/index.js!./node_modules/@ovh-ux/ovh-utils-angular/bin/ovh-utils-angular.min.js (vendor.50d55a722233c94bc9bc.bundle.js:4283)
    at __webpack_require__ (main.c5326b0c8251180736d7.bundle.js:79)
    at eval (webpack:///./node_modules/@ovh-ux/web-universe-components/dist/umd/web-universe-components.js?:2)
    at eval (webpack:///./node_modules/@ovh-ux/web-universe-components/dist/umd/web-universe-components.js?:4)
log @ webpack:///./node_modules/script-loader/addScript.js?:8
angular-locale_fr-fr.js:1 Failed to load resource: the server responded with a status of 404 (Not Found)
localhost/:1 Refused to execute script from 'http://localhost:9000/resources/angular/i18n/angular-locale_fr-fr.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
angular-locale_fr-fr.js:1 Failed to load resource: the server responded with a status of 404 (Not Found)
localhost/:1 Refused to execute script from 'http://localhost:9000/resources/angular/i18n/angular-locale_fr-fr.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
webpack:///./node_modules/angular/angular.js?:5034 Uncaught Error: [$injector:modulerr] Failed to instantiate module myExchangeManager due to:
Error: [$injector:modulerr] Failed to instantiate module Module.exchange due to:
Error: [$injector:modulerr] Failed to instantiate module ngSanitize due to:
TypeError: lowercase is not a function
    at arrayToMap (webpack:///./node_modules/angular-sanitize/angular-sanitize.js?:417:27)
    at stringToMap (webpack:///./node_modules/angular-sanitize/angular-sanitize.js?:411:12)
    at new $SanitizeProvider (webpack:///./node_modules/angular-sanitize/angular-sanitize.js?:389:18)
    at Object.instantiate (webpack:///./node_modules/angular/angular.js?:5132:14)
    at provider (webpack:///./node_modules/angular/angular.js?:4940:36)
    at Object.eval [as provider] (webpack:///./node_modules/angular/angular.js?:4932:16)
    at runInvokeQueue (webpack:///./node_modules/angular/angular.js?:5004:35)
    at eval (webpack:///./node_modules/angular/angular.js?:5013:11)
    at forEach (webpack:///./node_modules/angular/angular.js?:418:20)
    at loadModules (webpack:///./node_modules/angular/angular.js?:4994:5)


https://errors.angularjs.org/1.6.10/$injector/modulerr?p0=myExchangeManager&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20Module.exchange%20due%20to%3A%0AError%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20ngSanitize%20due%20to%3A%0ATypeError%3A%20lowercase%20is%20not%20a%20function%0A%20%20%20%20at%20arrayToMap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular-sanitize%2Fangular-sanitize.js%3F%3A417%3A27)%0A%20%20%20%20at%20stringToMap%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular-sanitize%2Fangular-sanitize.js%3F%3A411%3A12)%0A%20%20%20%20at%20new%20%24SanitizeProvider%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular-sanitize%2Fangular-sanitize.js%3F%3A389%3A18)%0A%20%20%20%20at%20Object.instantiate%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5132%3A14)%0A%20%20%20%20at%20provider%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4940%3A36)%0A%20%20%20%20at%20Object.eval%20%5Bas%20provider%5D%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4932%3A16)%0A%20%20%20%20at%20runInvokeQueue%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5004%3A35)%0A%20%20%20%20at%20eval%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A5013%3A11)%0A%20%20%20%20at%20forEach%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A418%3A20)%0A%20%20%20%20at%20loadModules%20(webpack%3A%2F%2F%2F.%2Fnode_modules%2Fangular%2Fangular.js%3F%3A4994%3A5)%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.6.10%2F%24injector%2Fmodulerr%3Fp0%3DModule.exchange%26p1%3DError%253A%2520%255B%2524injector%253Amodulerr%255D%2520Failed%2520to%2520instantiate%2520module%2520ngSanitize%2520due%2520to%253A%250ATypeError%253A%2520lowercase%2520is%2520not%2520a%2520function%250A%2520%2520%2520%2520at%2520arrayToMap%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular-sanitize%252Fangular-sanitize.js%253F%253A417%253A27)%250A%2520%2520%2520%2520at%2520stringToMap%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular-sanitize%252Fangular-sanitize.js%253F%253A411%253A12)%250A%2520%2520%2520%2520at%2520new%2520%2524SanitizeProvider%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular-sanitize%252Fangular-sanitize.js%253F%253A389%253A18)%250A%2520%2520%2520%2520at%2520Object.instantiate%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5132%253A14)%250A%2520%2520%2520%2520at%2520provider%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A4940%253A36)%250A%2520%2520%2520%2520at%2520Object.eval%2520%255Bas%2520provider%255D%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A4932%253A16)%250A%2520%2520%2520%2520at%2520runInvokeQueue%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5004%253A35)%250A%2520%2520%2520%2520at%2520eval%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A5013%253A11)%250A%2520%2520%2520%2520at%2520forEach%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A418%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(webpack%253A%252F%252F%252F.%252Fnode_modules%252Fangular%252Fangular.js%253F%253A4994%253A5)%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.6.10%252F%2524injector%252Fmodulerr%253Fp0%253DngSanitize%2526p1%253DTypeError%25253A%252520lowercase%252520is%252520not%252520a%252520function%25250A%252520%252520%252520%252520at%252520arrayToMap%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular-sanitize%25252Fangular-sanitize.js%25253F%25253A417%25253A27)%25250A%252520%252520%252520%252520at%252520stringToMap%252520(webpack%25253A%25252F%25252F%25252F.%25252Fnode_modules%25252Fangular-sanitize%25252Fangular-sanitize.js%2525
:9000/favicon.ico:1 Failed to load resource: the server responded with a status of 404 (Not Found)
```
