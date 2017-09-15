/// <reference path='../../node_modules/@types/angular/index.d.ts' />
/// <reference path='../../node_modules/@types/jasmine/index.d.ts' />
/// <reference path='../../node_modules/@types/angular-mocks/index.d.ts' />

module app.Tests {
    describe('AppController', () => {
        let appCtrl: app.AppController;

        beforeEach(() => {

            appCtrl = new app.AppController();

        });

        it('should be defined', () => {

            expect(appCtrl).toBeDefined();

        });

        describe('$onInit method', () => {

            beforeEach(() => {
                appCtrl.$onInit();
            })

            it('should push the new item into gradi', () => {

                expect(appCtrl.gradi.length).toEqual(1);

            })

        });

    })
}