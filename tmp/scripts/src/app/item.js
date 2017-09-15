var app;
(function (app) {
    var Item = (function () {
        function Item(item, parent) {
            this.initDefaults(item, parent);
        }
        Item.prototype.initDefaults = function (item, parent) {
            this.id = _.toLower(item.name);
            this.name = item.name;
            this.selected = false;
            this.parent = parent;
        };
        Item.prototype.toggle = function (selection) {
            var itemsWithId = this.getItemsById(app.allChildren);
            this.selected = !selection;
            _.forEach(itemsWithId, function (itm) {
                itm.selected = !selection;
                itm.parent.onSubItemToggle();
            });
            if (this.parent) {
                this.parent.onSubItemToggle();
            }
        };
        Item.prototype.getItemsById = function (obj) {
            var idToFind = this.id;
            var parentToFind = this.parent;
            return _.filter(obj, function (itm) {
                return itm.id === idToFind && itm.parent !== parentToFind;
            });
        };
        return Item;
    }());
    app.Item = Item;
    /* istanbul ignore next */
})(app || (app = {}));
