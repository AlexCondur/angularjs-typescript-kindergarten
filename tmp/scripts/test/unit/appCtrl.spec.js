/// <reference path='../../node_modules/@types/angular/index.d.ts' />
/// <reference path='../../node_modules/@types/jasmine/index.d.ts' />
/// <reference path='../../node_modules/@types/angular-mocks/index.d.ts' />
var app;
(function (app) {
    var Tests;
    (function (Tests) {
        describe('AppController', function () {
            var appCtrl;
            beforeEach(function () {
                appCtrl = new app.AppController();
            });
            it('should be defined', function () {
                expect(appCtrl).toBeDefined();
            });
            describe('$onInit method', function () {
                beforeEach(function () {
                    appCtrl.$onInit();
                });
                it('should push the new item into gradi', function () {
                    expect(appCtrl.gradi.length).toEqual(1);
                });
            });
        });
    })(Tests = app.Tests || (app.Tests = {}));
})(app || (app = {}));
