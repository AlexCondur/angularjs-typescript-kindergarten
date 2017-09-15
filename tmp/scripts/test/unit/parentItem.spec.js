var app;
(function (app) {
    var Tests;
    (function (Tests) {
        var i;
        var p;
        var p2;
        describe('parentItem class', function () {
            beforeEach(function () {
                i = new app.Item({ name: 'Fiu' }, null);
                p = new app.ParentItem({ name: 'Tata' });
                p2 = new app.ParentItem({ name: 'Tata2', items: [{ name: 'Fiu1' }, { name: 'fiu2' }] }, p);
                spyOn(p2.parent, 'onSubItemToggle');
            });
            describe('the initDefaults method', function () {
                it('should set partiallySelected to false', function () {
                    expect(p.partiallySelected).toBeFalsy();
                });
                it('should set expanded to false', function () {
                    expect(p.expanded).toBeFalsy();
                });
            });
            describe('method toggle', function () {
                beforeEach(function () {
                    p.toggle(false);
                });
                it('should set selected to be the opposite', function () {
                    expect(p.selected).toBeTruthy();
                });
                it('should have same selected status as his children', function () {
                    p2.toggle(false);
                    expect(p2.subItems[0].selected).toBeTruthy();
                    expect(p2.subItems[1].selected).toBeTruthy();
                });
                it('should call onSubItemToggle method if has a parent', function () {
                    p2.toggle(false);
                    expect(p2.parent.onSubItemToggle).toHaveBeenCalled();
                });
            });
        });
    })(Tests = app.Tests || (app.Tests = {}));
})(app || (app = {}));
