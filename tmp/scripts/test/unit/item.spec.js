var app;
(function (app) {
    var Tests;
    (function (Tests) {
        var name;
        var i;
        var p;
        describe('Item class', function () {
            beforeEach(function () {
                name = 'Ho';
                p = new app.ParentItem({ name: 'Tata' }, null);
                i = new app.Item({ name: name }, p);
                spyOn(i.parent, 'onSubItemToggle');
            });
            describe('initDefaults method', function () {
                it('should set id to name to lowercase', function () {
                    expect(i.id).toBe('ho');
                });
                it('should set selected to false', function () {
                    expect(i.selected).toBeFalsy();
                });
                it('should set the name', function () {
                    expect(i.name).toBe('Ho');
                });
                it('should set the parent', function () {
                    expect(i.parent).toBe(p);
                });
            });
            describe('toggle method', function () {
                beforeEach(function () {
                    i.toggle(false);
                });
                it('should set selected to be the opposite', function () {
                    expect(i.selected).toBeTruthy();
                });
                it('should call onSubItemToggle method if the parent is defined', function () {
                    expect(i.parent.onSubItemToggle).toHaveBeenCalled();
                });
                it('should do nothing when the item has no parent', function () {
                    i = new app.Item({ name: 'Nume' }, null);
                    i.toggle(false);
                    expect(i.parent).toBeNull();
                });
            });
            describe('getItemsById method', function () {
                it('should return an array that contains only the dupes of the given item, but not the item itself', function () {
                    var i2 = new app.Item({ name: 'Ho' }, null);
                    var arr = [i, i2];
                    var res = i.getItemsById(arr);
                    expect(res).toContain(i2);
                    expect(res).not.toContain(i);
                });
            });
        });
    })(Tests = app.Tests || (app.Tests = {}));
})(app || (app = {}));
