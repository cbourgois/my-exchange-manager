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
