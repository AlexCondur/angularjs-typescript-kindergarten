var app;
(function (app) {
    var Tests;
    (function (Tests) {
        describe('The filter method', function () {
            var func = app.repeatUnique(), collection, keyname, i, i2;
            beforeEach(function () {
                i = new app.Item({ name: 'Nume' }, null);
                i2 = new app.Item({ name: 'Prenume' }, null);
                collection = [i, i2, i, i2, i2];
                keyname = 'nume';
                func(collection, keyname);
            });
            it('should', function () {
                expect(func(collection, keyname)).toContain(i);
                expect(func(collection, keyname)).not.toContain(i2);
            });
        });
    })(Tests = app.Tests || (app.Tests = {}));
})(app || (app = {}));
